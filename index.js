import {
	accentCorrelationByDefault,
	toneCorrelationByDefault
} from "./src/constants.js"

import { getColorData } from "./src/utils.js"
import toPairs from "lodash/toPairs.js"

export default function getPalette(
	colors,
	correlations = {
		accent: accentCorrelationByDefault,
		tone: toneCorrelationByDefault,
	}
) {
	const palette = new Map()
	
	toPairs(colors).forEach(p => {
		let name = p[0]
		let value = p[1]
		palette.set(
			name,
			getColorData(
				value,
				correlations.tone ? correlations.tone : undefined,
				correlations.accent ? correlations.accent : undefined
			)
		)
	})

	return palette
}
