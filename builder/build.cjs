import("../module/index.mjs").then(
  ({ default: getPalette, getFlattenPalette }) => {
    const fs = require("fs");
    const path = require("path");
    const yargs = require("yargs");
    const { forOwn, isEmpty } = require("lodash");
    const { hideBin } = require("yargs/helpers");
    const readDir = require("read-directory");
    const { logError, logSuccess, logSummary } = require("./logger.cjs");
    const { inspect } = require("util");

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

    forOwn(sourceFiles, (data, file, sources) => {
      const { colors, correlations } = JSON.parse(data);
      const paletteName = path.parse(file).name;
      const distFolder = sources.length > 1 ? paletteName : ".";
      const distPath = path.resolve(process.cwd(), distFolder, argv.outDir);
      const palette = getPalette(
        colors,
        correlations.tone,
        correlations.accent
      );
      const flattenPalette = getFlattenPalette(palette);

      console.log(paletteName, palette);
    });
  }
);
