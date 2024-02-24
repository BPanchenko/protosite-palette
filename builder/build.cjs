const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const readDir = require("read-directory");
const { getFlattenPalette, getPalette } = require("../index.cjs");
const { forOwn, isEmpty } = require("lodash");
const { hideBin } = require("yargs/helpers");
const { logError, logSuccess, logSummary } = require("./logger.cjs");
const { inspect } = require("util");

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

console.log(process.env.npm_config_source_dir);

const sourcePath = path.resolve(
  process.cwd(),
  process.env.npm_config_source_dir ?? "source"
);

const sourceFiles = (function ({ sourceName, sourcePath }) {
  try {
    return readDir.sync(sourcePath, {
      filter: `${sourceName ?? "*"}.json`,
    });
  } catch (err) {
    logError(err);
  }
})({
  ...argv,
  sourcePath,
});

if (isEmpty(sourceFiles)) {
  logError("Source files not found");
}

// Build assets

const createACO = require("./.aco.cjs");

forOwn(sourceFiles, (data, file, sources) => {
  const { colors, correlations } = JSON.parse(data);
  const paletteName = path.parse(file).name;
  const distFolder = Object.keys(sources).length > 1 ? paletteName : ".";
  const distPath = path.resolve(process.cwd(), argv.outDir, distFolder);
  const palette = getPalette(colors, correlations.tone, correlations.accent);
  const flattenPalette = getFlattenPalette(palette);

  // console.log(colors, flattenPalette, palette);

  createACO(palette, flattenPalette, distPath);
});
