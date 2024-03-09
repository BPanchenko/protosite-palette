import camelCase from "lodash/camelCase.js";
import curry from "lodash/curry.js";
import forOwn from "lodash/forOwn.js";
import toPairs from "lodash/toPairs";

import path from "path";
import saveAs from "file-saver";

import { distPath, sources } from "./settings.js";
import { getFlattenPalette, getPalette } from "../index.js";
import createAcoFileContent from "../lib/fn.createAcoFileContent.js";

const getDestinationPath = curry((hasMultipleSources, root, paletteFolder) =>
  path.resolve(root, hasMultipleSources ? paletteFolder : ".")
)(Object.keys(sources).length > 1)(distPath);

/**
 *
 * @param {string} row
 * @returns Array<[string,string]>
 */
const getPrimaryColorsFromSourceJSON = (row) =>
  toPairs(JSON.parse(row).colors).map(([key, hex]) => [camelCase(key), hex]);

// Primary Colors

forOwn(sources, (source, file, sources) => {
  const data = getPrimaryColorsFromSourceJSON(source);
  const paletteName = path.parse(file).name;
  console.log(paletteName, data);
});

/*
forOwn(sourceFiles, (data, file, sources) => {
	const { colors, correlations } = JSON.parse(data);
	const paletteName = path.parse(file).name;
	const dist = path.resolve(
	  distPath,
	  Object.keys(sources).length > 1 ? paletteName : "."
	);
	const palette = getPalette(colors, correlations.tone, correlations.accent);
  
	// const flattenPalette = getFlattenPalette(palette)
  });

  */
