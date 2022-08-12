import {
	accentCorrelationByDefault,
	accentKeys,
	toneCorrelationByDefault,
	toneKeys
} from "./src/constants.js"

import { getColorData } from "./src/utils.js"
import toPairs from "lodash/toPairs.js"

export default function getPalette(
	colors,
	toneCorrelation = toneCorrelationByDefault,
	accentCorrelation = accentCorrelationByDefault
) {
	const palette = new Map()
	
	toPairs(colors).forEach(p => {
		let name = p[0]
		let value = p[1]
		palette.set(
			name,
			getColorData(
				value,
				accentCorrelation,
				toneCorrelation
			)
		)
	})

	return palette
}

export {
	accentKeys,
	toneKeys
}
