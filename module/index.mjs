import {
  accentCorrelationByDefault,
  accentKeys,
  toneCorrelationByDefault,
  toneKeys,
} from "./settings.mjs";
import {
  getColorData,
  getFlattenPalette,
  initFunction,
  isColor,
} from "./helpers.mjs";

import camelCase from "lodash/camelCase.js";
import isFunction from "lodash/isFunction.js";
import toPairs from "lodash/toPairs.js";

/**
 * @param {Record<import('./').ColorKey, import('./').ColorValue>}  colors - A data object that defines the primary colors as key-value pairs.
 * @param {number[] | import('./').ToneCorrelationFunction} toneCorrelation - A function or the number array that determines the correlation factor between the primary color and its tones.
 * @param {number[] | import('./').AccentCorrelationFunction} accentCorrelation - A function or the number array that determines the correlation factor between the primary color and its accent colors.
 * @returns {Map<import('./').ColorName, import('./').PaletteColorData>} The Map object of palette colors derived from incoming parameters.
 */
export default function getPalette(
  colors,
  toneCorrelation = toneCorrelationByDefault,
  accentCorrelation = accentCorrelationByDefault
) {
  const palette = new Map();

  if (!isFunction(toneCorrelation)) {
    toneCorrelation = initFunction(toneCorrelation);
  }

  if (!isFunction(accentCorrelation)) {
    accentCorrelation = initFunction(accentCorrelation, 2);
  }

  toPairs(colors).forEach((p) => {
    let name = camelCase(p[0]);
    let value = p[1];
    palette.set(name, getColorData(value, toneCorrelation, accentCorrelation));
  });

  return palette;
}

export { accentKeys, getFlattenPalette, isColor, toneKeys };
