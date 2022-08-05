import {
	accentKeys,
	toneKeys
} from "./constants.js"

import chroma from "chroma-js"
import isFunction from "lodash/isFunction.js"

function getColorData(
	value,
	toneFn,
	accentFn
) {
	const color = chroma(value)
	const data = {
		rgb: color.rgb(),
		hex: color.hex(),
		hsl: color.hsl()
	}

	if (isFunction(accentFn)) {
		const step = 2.8 / accentKeys.length
		data.accents = accentKeys.map((_, index) => {
			const factor = accentFn(step * ++index)
			// TODO: calc tint
			return getColorData(tint)
		})
	}

	if (isFunction(toneFn)) {
		const step = 2.8 / toneKeys.length
		data.tones = toneKeys.map((_, index) => {
			const factor = toneFn(step * ++index)
			const tint = color.saturate(factor).brighten(factor)
			return getColorData(tint)
		})
	}
	
	Object.freeze(data)
	return data
}

export {
	getColorData
}
