const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const readDir = require("read-directory");
const { logError, logSuccess, logSummary } = require("./logger.cjs");
const { inspect } = require("util");

import("../module/index.mjs").then((res) => console.log(res));
// const getPalette = require("../module/index.mjs").default;

// Settings

const argv = yargs(hideBin(process.argv))
  .option("source-name", {
    alias: "name",
    type: "string",
    describe: "Source file name or palette name",
  })
  .option("out-dir", {
    alias: "dist",
    default: process.env.npm_config_out_dir,
    type: "string",
    describe: "Destination directory for the build files",
  }).argv;

const sourcePath = path.resolve(
  process.cwd(),
  process.env.npm_config_source_dir ?? "source"
);

const sourceFiles = (function ({ sourceName, sourcePath }) {
  try {
    return sourceName
      ? [sourceName + ".json"]
      : readDir.sync(sourcePath, {
          filter: "*.json",
        });
  } catch (err) {
    logError(err);
  }
})({
  ...argv,
  sourcePath,
});

console.log(sourceFiles);
/*
const distPath = path.resolve(process.cwd(), to, argv.outDir);

// Checking Source File(s) and Destination Folder

{
  sourceFiles.forEach((file) => {
    if (!fs.existsSync(sourcePath + file)) {
      throw new Error(
        `File "${SOURCE_FILENAME}" not found at path "${SOURCE}"`
      );
    }
  });

  if (!fs.existsSync(DIST)) {
    fs.mkdirSync(DIST);
  }
}

// Creating assets

const { colors, correlations } = JSON.parse(fs.readFileSync(SOURCE_FILE));

const palette = getPalette(colors, correlations.tone, correlations.accent);

const flattenPalette = getFlattenPalette(palette);
*/
