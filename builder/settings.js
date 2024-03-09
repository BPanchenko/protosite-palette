import { logError } from "./logger.js";
import isEmpty from "lodash/isEmpty.js";
import path from "path";
import readDir from "read-directory";
import yargs from "yargs";
import yargsHelpers from "yargs/helpers";

const { outDir, sourceName } = yargs(yargsHelpers.hideBin(process.argv))
  .option("source-name", {
    alias: "name",
    describe: "Source file name or palette name",
    type: "string",
  })
  .option("out-dir", {
    alias: "dist",
    default: process.env.npm_config_out_dir,
    describe: "Destination directory for the build files",
    type: "string",
  }).argv;

const distPath = path.resolve(process.cwd(), outDir);

const sourcePath = path.resolve(
  process.cwd(),
  process.env.npm_config_source_dir || "source"
);

/**
 *
 */
const sources = (function ({ sourceName, sourcePath }) {
  try {
    const files = readDir.sync(sourcePath, {
      filter: `${sourceName || "*"}.json`,
    });
    if (isEmpty(files)) {
      throw new Error("Source files not found");
    }
    return files;
  } catch (err) {
    logError(err);
  }
})({
  sourceName,
  sourcePath,
});

export { distPath, sourceFiles };
