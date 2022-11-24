import {
	accentCorrelationByDefault,
	accentKeys,
	toneCorrelationByDefault,
	toneKeys
} from "./lib/constants.js"
import {
	getColorData,
	getFlattenPalette,
	initFunction,
	isColor
} from "./lib/utils.js"

import camelCase from "lodash/camelCase.js"
import isFunction from "lodash/isFunction.js"
import toPairs from "lodash/toPairs.js"

export default function getPalette(
	colors,
	toneCorrelation = toneCorrelationByDefault,
	accentCorrelation = accentCorrelationByDefault
) {
	const palette = new Map()

	if (!isFunction(toneCorrelation)) {
		toneCorrelation = initFunction(toneCorrelation)
	}

	if (!isFunction(accentCorrelation)) {
		accentCorrelation = initFunction(accentCorrelation, 2)
	}
	
	toPairs(colors).forEach(p => {
		let name = camelCase(p[0])
		let value = p[1]
		palette.set(
			name,
			getColorData(
				value,
				toneCorrelation,
				accentCorrelation
			)
		)
	})

	return palette
}

export {
	accentKeys,
	getFlattenPalette,
	isColor,
	toneKeys
}
