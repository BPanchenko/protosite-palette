import {
	accentKeys,
	toneKeys
} from "./constants.js"
import { cubehelix, lab, rgb } from "d3-color"

import BezierEasing from "bezier-easing"
import bezier from "bezier"
import camelCase from 'lodash/camelCase.js'
import { differenceEuclideanLab } from "d3-color-difference"
import isFunction from "lodash/isFunction.js"
import isNull from "lodash/isNull.js"
import minBy from "lodash/minBy.js"
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
	const accentsIsNeeded = isFunction(accentFn)
	const tonesIsNeeded = isFunction(toneFn)

	const data = {
		hsl: color.formatHsl(),
		hex: color.formatHex(),
		rgb: color.formatRgb()
	}

	const meta = accentsIsNeeded ? (diffs => {
		const entries = Object.entries(diffs)
		const minEntry = minBy(entries, e => e[1])
		return {
			isRed: minEntry[0] === 'red',
			isYellow: minEntry[0] === 'yellow',
			isGreen: minEntry[0] === 'green',
			isBlue: minEntry[0] === 'blue'
		}
	})({
		red: differenceEuclideanLab(color, 'red'),
		yellow: differenceEuclideanLab(color, 'yellow'),
		green: differenceEuclideanLab(color, 'green'),
		blue: differenceEuclideanLab(color, 'blue')
	}) : null

	if (accentsIsNeeded) {
		const accentColor = lab(color)
		const accentScaleA = initScaleWithMagneticRange(accentColor.a)
		const accentScaleB = initScaleWithMagneticRange(accentColor.b)
		const accentScaleLightness = scaleLinear()
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
			accent.l = accentScaleLightness(f2)

			if (meta.isRed || meta.isGreen) {
				accent.a = accentScaleA(f1)
			} else {
				accent.b = accentScaleB(f1)
			}

			return getColorData(accent)
		})
	}

	if (tonesIsNeeded) {
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
	
	if (!isNull(meta)) {
		Object.assign(data, {
			meta
		})
	}
	
	return Object.freeze(data)
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
