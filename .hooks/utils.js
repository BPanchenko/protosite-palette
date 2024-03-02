import _ from "lodash";
import path from "node:path";
import { createRequire, isBuiltin as isNodeModule } from "node:module";
import {
  existsSync,
  fstatSync,
  openSync,
  statSync,
  writeFileSync,
} from "node:fs";

import {
  CacheFilePath,
  DefaultModuleDescription,
  cache,
  deps,
} from "./settings.js";

/**
 * @typedef {import('./types.d.ts').TDescription} TDescription
 */

/**
 * @param {string} path
 * @returns {Pick<TDescription, 'isDirectory' | 'isFile'>}
 */
export const parsePath = (path) => {
  const stats =
    existsSync(path) &&
    (statSync(path, { throwIfNoEntry: false }) ||
      fstatSync(openSync(path), { throwIfNoEntry: false }));
  return {
    isDirectory: stats ? stats.isDirectory() : false,
    isFile: stats ? stats.isFile() : false,
  };
};

/**
 * @param {string} id
 * @param {Partial<{ path: string; }>=} config
 * @returns {TDescription}
 */
export const defModuleDescription = (id, config = {}) => {
  const isBuiltin = isNodeModule(id);
  const isDependency = isDependencyPackage(id);

  const { format = cache.has(id) ? cache.get(id).format : undefined } = config;
  const path = isBuiltin
    ? undefined
    : config.path
    ? config.path
    : isDependency
    ? getPackageDir(id)
    : undefined;

  const { isDirectory, isFile } = _.defaults(path && parsePath(path), {
    isDirectory: false,
    isFile: false,
  });

  const description = _.defaults(
    {
      isBuiltin,
      isDependency,
      isDirectory,
      isFile,
      path,
    },
    format ? { format } : null,
    DefaultModuleDescription
  );

  cache.set(id, description);

  writeFileSync(
    CacheFilePath,
    JSON.stringify({ modules: Array.from(cache.entries()) }, null, "\t")
  );

  return cache.get(id);
};

/**
 * @param {string} id
 * @returns {string}
 */
export const getPackageDir = (id) => {
  const packageName = getPackageNameFromModuleID(id);
  const require = createRequire(import.meta.url);
  const lookupPaths = (require.resolve.paths(id) || []).map((p) =>
    path.join(p, packageName)
  );
  return lookupPaths.find((p) => existsSync(p));
};

/**
 * @param {string} id
 * @returns {string}
 */
export const getPackageNameFromModuleID = (id) => {
  const name = id.includes("/")
    ? id.startsWith("@")
      ? id.split("/").slice(0, 2).join("/")
      : id.split("/")[0]
    : id;
  return name;
};

/**
 * @type {typeof defModuleDescription}
 */
export const getModuleDescription = (id, config) =>
  cache.has(id) ? cache.get(id) : defModuleDescription(id, config);

/**
 * @param {string} id
 * @returns {boolean}
 */
export const isDependencyPackage = (id) =>
  deps.has(getPackageNameFromModuleID(id));
