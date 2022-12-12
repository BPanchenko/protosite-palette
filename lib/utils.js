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
import isObject from "lodash/isObject.js"
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
	const altColor = isObject(value) && value.__altViaOpacity || null;
	const color = rgb(value)
	const accentsIsNeeded = isFunction(accentFn)
	const tonesIsNeeded = isFunction(toneFn)

	const data = {
		hsl: color.formatHsl(),
		hex: color.formatHex(),
		rgb: color.formatRgb()
	}

	if (!isNull(altColor) && altColor.opacity < 1) {
		data.rgba = altColor.formatRgb()
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

		const step = 1 / (accentKeys.length - 1)

		data.accents = accentKeys.map((_, index) => {
			const t = step * index
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

		const cntTints = Math.ceil(toneKeys.length / 2)
		const step = 1 / (toneKeys.length - 1)
		const tintFactorMax = toneFn(step * (cntTints - 1))
		const shadeFactorMin = toneFn(step * cntTints)
		
		const tintScaleLightness = scaleLinear()
			.domain([0, tintFactorMax])
			.range([0.98, toneColor.l + 0.2 * (1 - toneColor.l)])
		
		const tintScaleOpacity = scaleLinear()
			.domain([0, tintFactorMax])
			.range([0.1, 0.9])

		const tintScaleSaturation = scaleLinear()
			.domain([0, tintFactorMax])
			.range([0.3 * toneColor.s, toneColor.s])
		
		const shadeScaleDarkening = scaleLinear()
			.domain([shadeFactorMin, 1])
			.range([0.2, 3.5])
		
		data.tones = toneKeys.map((_, index) => {
			const t = step * index
			const f = toneFn(t)
			
			let tone
			if (index < cntTints) {
				let tint = toneColor.copy()
				let opacity = tintScaleOpacity(f)

				tint.l = tintScaleLightness(f)
				tint.s = tintScaleSaturation(f)

				if (opacity < 1) {
					tint.__altViaOpacity = tint.copy()
					tint.__altViaOpacity.l = toneColor.l
					tint.__altViaOpacity.opacity = opacity
				}

				tone = tint
			} else {
				let shade = toneColor.copy()
				shade = shade.darker(shadeScaleDarkening(f))
				tone = shade
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
			color.tones.forEach((tone, index) => {
				const toneName = camelCase(name) + toneKeys[index]
				data.set(toneName, tone[format])
				if (tone.hasOwnProperty('rgba')) {
					data.set(toneName + 'TP', tone.rgba)
				}
			})
			color.accents.forEach(
				(accent, index) =>
					data.set(
						camelCase(name) + accentKeys[index],
						accent[format]
					)
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
