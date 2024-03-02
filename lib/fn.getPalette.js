import * as _ from "lodash"
import { getColorData } from "./fn.getColorData.js"
import { initCorrelationFunction } from "./utils.js"
import {
	accentCorrelationByDefault,
	toneCorrelationByDefault,
} from "./settings.js"

/**
 * @param {Record<import('../').ColorKey, import('../').ColorValue>}  colors - A data object that defines the primary colors as key-value pairs.
 * @param {number[] | import('../').ToneCorrelationFunction} toneCorrelation - A function or the number array that determines the correlation factor between the primary color and its tones.
 * @param {number[] | import('../').AccentCorrelationFunction} accentCorrelation - A function or the number array that determines the correlation factor between the primary color and its accent colors.
 * @returns {Map<import('../').ColorName, import('../').PaletteColorData>} The Map object of palette colors derived from incoming parameters.
 */
export function getPalette(
	colors,
	toneCorrelation = toneCorrelationByDefault,
	accentCorrelation = accentCorrelationByDefault,
) {
	const palette = new Map()

	if (!_.isFunction(toneCorrelation)) {
		toneCorrelation = initCorrelationFunction(toneCorrelation)
	}

	if (!_.isFunction(accentCorrelation)) {
		accentCorrelation = initCorrelationFunction(accentCorrelation, 2)
	}

	_.toPairs(colors).forEach((p) => {
		let name = _.camelCase(p[0])
		let value = p[1]
		palette.set(name, getColorData(value, toneCorrelation, accentCorrelation))
	})

	return palette
}
