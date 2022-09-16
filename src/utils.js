import {
	accentKeys,
	scale,
	toneKeys
} from "./constants.js"

import BezierEasing from "bezier-easing"
import bezier from "bezier"
import chroma from "chroma-js"
import isFunction from "lodash/isFunction.js"
import toString from "lodash/toString.js"

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
		const step = 1 / accentKeys.length
		data.accents = accentKeys.map((_, index) => {
			const t = step * ++index
			const [f1, f2] = accentFn(t)
			
			let tint = chroma(color)
			tint = tint.luminance(scale.copy().range([0.5, 0.06])(f2))
			tint = tint.set('hsi.i', scale.copy().range([0.7, 0.4])(f1))
			
			return getColorData(tint)
		})
	}

	if (isFunction(toneFn)) {
		const step = 1 / toneKeys.length
		data.tones = toneKeys.map((_, index) => {
			const t = step * ++index
			const f = toneFn(t)

			let tint = chroma(color)
			tint = tint.set('hsl.l', scale.copy().range([1.45, 0.25])(f))
			tint = tint.set('hsl.s', `*${scale.copy().range([0.1, 1])(f)}`)
			
			return getColorData(tint)
		})
	}
	
	Object.freeze(data)
	return data
}

function initFunction(data, mode = 1) {
	let fn

	if (typeof data === 'string' && data.includes('t')) {
		fn = new Function('x', `return ${data}`)
	}
	
	if (Array.isArray(data) && data.length === 4) {
		switch(mode) {
			case 2:
				fn = function (points) {
					const xCoords = [ 0, points[0], points[2], 1]
					const yCoords = [ 0, points[1], points[3], 1]
					return t => ([bezier(xCoords, t), bezier(yCoords, t)])
				}(data)
				break
			default:
				fn = function (points) {
					const y = BezierEasing(...points)
					return x => y(x)
				}(data)
		}
	}
	
	console.assert(
		isFunction(fn),
		`Function initialization failed for parameter value equal to "${toString(data)}"`
	)

	return fn
}

export {
	getColorData,
	initFunction
}
