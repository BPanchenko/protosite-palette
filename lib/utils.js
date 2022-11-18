import {
	accentKeys,
	toneKeys
} from "./constants.js"
import { cubehelix, lab, rgb } from "d3-color"

import BezierEasing from "bezier-easing"
import bezier from "bezier"
import camelCase from 'lodash/camelCase.js'
import isFunction from "lodash/isFunction.js"
import { scaleLinear } from "d3-scale"
import toString from "lodash/toString.js"

const isColor = string => (
	validateColor.default(string)
	&& !validateHTMLColorSpecialName(string)
)

function getColorData(
	value,
	toneFn,
	accentFn
) {
	const color = rgb(value)
	const data = {
		hsl: color.formatHsl(),
		hex: color.formatHex(),
		rgb: color.formatRgb()
	}

	if (isFunction(accentFn)) {
		const accentColor = lab(color)

		const accentScaleA = initScaleWithMagneticRange(accentColor.a)

		const accentScaleLightnessInLAB = scaleLinear()
			.domain([0, 1])
			.range([
				accentColor.l + (150 - accentColor.l) / 2,
				accentColor.l - accentColor.l / 4
			])

		const step = 1 / accentKeys.length

		data.accents = accentKeys.map((_, index) => {
			const t = step * ++index
			const [f1, f2] = accentFn(t)
			
			let accent = accentColor.copy()
			accent.a = accentScaleA(f1)
			accent.l = accentScaleLightnessInLAB(f2)

			return getColorData(accent)
		})
	}

	if (isFunction(toneFn)) {
		const toneColor = cubehelix(color)
		
		const toneScaleLightness = scaleLinear()
			.domain([0, 0.4])
			.range([0.98, toneColor.l + (1 - toneColor.l) / 5])

		const toneScaleDarkening = scaleLinear()
			.domain([0.5, 1])
			.range([0.15, 4.5])

		const toneScaleSaturation = scaleLinear()
			.domain([0, 1])
			.range([toneColor.s / 3, toneColor.s])

		const step = 1 / toneKeys.length
		
		data.tones = toneKeys.map((_, index) => {
			const t = step * index
			const f = toneFn(t)
			
			let tone = toneColor.copy()
			if (f >= 0.5) {
				tone = tone.darker(toneScaleDarkening(f))
			} else {
				tone.l = toneScaleLightness(f)
				tone.s = toneScaleSaturation(f)
			}

			return getColorData(tone)
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

function initScaleWithMagneticRange(value, inverted = false) {
	const half = 20
	let delta = value/100 * half

	if (inverted) delta = -delta

	let left = value - half + delta
	let right = value + half + delta
	
	if (left < -100) {
		left = -100
		right = -100 + 2*half
	}
	if (right > 100) {
		left = 100 - 2*half
		right = 100
	}
	
	return scaleLinear()
		.domain([0, 1])
		.range([ left, right ])
}

function getFlattenPalette(palette, format = 'hex') {
	const data = new Map()
	palette.forEach(
		(color, name) => {
			data.set(name, color[format])
			color.tones.forEach(
				(color, index) =>
					data.set(camelCase(name) + toneKeys[index], color[format])
			)
			color.accents.forEach(
				(color, index) =>
					data.set(camelCase(name) + accentKeys[index], color[format])
			)
		}
	)
	return data
}

export {
	getColorData,
	getFlattenPalette,
	initFunction,
	isColor
}
