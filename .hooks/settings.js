import _ from "lodash";
import { builtinModules } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

/**
 * @typedef {import('./types.d.ts').TDescription} TDescription
 * @typedef {import('./types.d.ts').TFormat} TFormat
 */

export const Format = Object.freeze({
  Builtin: "builtin",
  ESM: "module",
  Json: "json",
  Node: "commonjs",
  Wasm: "wasm",
});

export const BaseURL = pathToFileURL(process.cwd() + "/").href;
export const CacheFilePath = path.resolve(process.cwd(), "./.import-map.json");
export const ModuleType = process.env.npm_package_type || Format.Node;

/**
 * @type {TDescription}
 */
export const DefaultModuleDescription = Object.freeze({
  format: ModuleType,
  isBuiltin: false,
  isDependency: false,
  isDirectory: false,
  isFile: false,
  path: undefined,
});

export const Extensions = Object.freeze(
  ModuleType === Format.ESM
    ? ["js", "mjs", "cjs", "json"]
    : ["js", "cjs", "mjs", "json"]
);

export const cache = new Map(
  builtinModules.map((id) => [
    id,
    _.defaults(
      {
        format: Format.Builtin,
        isBuiltin: true,
      },
      DefaultModuleDescription
    ),
  ])
);

export const deps = new Set(builtinModules);
