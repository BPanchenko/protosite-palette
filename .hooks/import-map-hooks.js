/// <reference path="types.d.ts" />
/// <reference types="node" />

import _ from "lodash";
import child_process from "node:child_process";
import Module from "node:module";
import path from "node:path";
import util from "node:util";
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { globSync } from "glob";
import { readPackageUpSync } from "read-package-up";

import { BaseURL, Extensions, Format, deps } from "./settings.js";
import {
  defModuleDescription,
  getModuleDescription,
  getPackageDir,
  getPackageNameFromModuleID,
  isValidESM,
} from "./utils.js";

/**
 * @type {Module.InitializeHook}
 */
export async function initialize() {
  const exec = util.promisify(child_process.exec);
  const { dependencies } = await exec("npm ls --json").then(({ stdout }) =>
    JSON.parse(stdout)
  );
  Object.keys(dependencies).forEach((dep) => {
    deps.add(dep);
    defModuleDescription(dep, {
      path: getPackageDir(dep),
    });
  });
}

/**
 * @type {Module.ResolveHook}
 */
export async function resolve(specifier, context, nextResolve) {
  const {
    isBuiltin,
    isDependency,
    path: dependencyDir,
  } = getModuleDescription(specifier);

  const { parentURL = BaseURL } = context;
  const { dir: parentDir } = path.parse(fileURLToPath(parentURL));

  let modulePath = isBuiltin
    ? undefined
    : isDependency
    ? path.resolve(
        dependencyDir,
        specifier.replace(getPackageNameFromModuleID(specifier), ".")
      )
    : URL.canParse(specifier)
    ? fileURLToPath(specifier)
    : path.resolve(parentDir, specifier);

  let { isDirectory, isFile } = defModuleDescription(specifier, {
    path: modulePath,
  });

  if (isBuiltin === false && isFile === false) {
    const {
      base: fileName,
      dir: fileDir,
      ext: fileExt,
    } = isDirectory
      ? {
          base: "index",
          dir: modulePath,
          ext: "",
        }
      : path.parse(modulePath);

    const pattern = `${fileDir}/${fileName}${
      fileExt ? "." + fileExt : ""
    }.{${Extensions.join(",")}}`;

    modulePath = globSync(pattern, {
      absolute: true,
    }).find((filePath) => existsSync(filePath));
  }

  const { type: format = Format.Node } = readPackageUpSync({
    cwd: modulePath,
  }).packageJson;

  const description = defModuleDescription(specifier, {
    format,
    path: modulePath,
  });

  const resolution =
    description.isFile === true
      ? {
          format,
          shortCircuit: true,
          specifier,
          url: pathToFileURL(description.path).href,
        }
      : nextResolve(specifier, context);

  return resolution;
}

/**
 * @type {Module.LoadHook}
 */
export async function load(url, context, nextLoad) {
  if (context.format === Format.Node && isValidESM(url)) {
    context.format = Format.ESM;
  }
  return nextLoad(url, context);
}
