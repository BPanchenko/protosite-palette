import {
	accentCorrelationByDefault,
	toneCorrelationByDefault
} from './constants.js'

import chroma from "chroma-js"

function getColorData(
	value,
	toneFn = toneCorrelationByDefault,
	accentFn = accentCorrelationByDefault
) {
	const color = chroma(value)
	const data = {
		rgb: color.rgb(),
		hex: color.hex(),
		hsl: color.hsl()
	}

	if (withTones) {
		const step = 2.8 / countTones
		const getFactor = correlationFunctions[tonesCorrelation]
		data.tones = (new Array(countTones)).fill(1).map((_, index) => {
			const factor = getFactor(step * ++index)
			const tone = color.saturate(factor).brighten(factor)
			return getColorData(tone)
		})
	}
	
	Object.freeze(data)
	return data
}

export {
	getColorData
}
