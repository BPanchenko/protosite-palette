
import BezierEasing from 'bezier-easing'
import Color from 'colorjs.io'
import isFunction from 'lodash/isFunction'
import merge from 'lodash/merge'
import minBy from 'lodash/minBy'
import toString from 'lodash/toString'
import { scaleLinear } from 'd3-scale'

import { deepFreeze, defineProperties } from './utils.js'
import { WT } from './settings.js'

import configByDefault from '@bpanchenko/palette/config' with { type: 'json' }

/** @typedef {import('../@types').AccentColor} AccentColor */
/** @typedef {import('../@types').ShadeColor} ShadeColor */
/** @typedef {import('../@types').ThemeColor} ThemeColor */
/** @typedef {import('../@types/lib/initialization').InitColor.GetAccentsFunc} GetAccentsFunc */
/** @typedef {import('../@types/lib/initialization').InitColor.GetShadesFunc} GetShadesFunc */
/** @typedef {import('../@types/lib/initialization').InitColor.PrimaryFunc} InitPrimaryColorFunc */
/** @typedef {import('../@types/lib/initialization').InitColor.ThemeFunc} InitThemeColorFunc */
/** @typedef {import('../@types/lib/initialization').InitColor.ToneFunc} InitColorToneFunc */

/** @type {GetAccentsFunc} */
function getAccentsOfColor(color, correlation) {
	const scale = (weigth) => correlation(scaleLinear(WT.domain, [0, 1])(weigth))
	const space = 'lch'
	const type = 'accent'

	const entries = WT.accents.map((weight) => {
		const tone = initToneOfColor(color, {
			type,
			key: weight,
			space
		})

		const FA = scale(weight)
		tone.lch.c = 150
		tone.lch.l = 75 - FA * 50

		return [weight, tone]
	})

	return new Map(entries)
}

/** @type {GetShadesFunc} */
function getShadesOfColor(color, correlation) {
	const scale = (weigth) => correlation(scaleLinear(WT.domain, [1, 0])(weigth))
	const space = 'oklch'
	const type = 'shade'

	const entries = WT.shades.map((weight) => {
		const tone = initToneOfColor(color, {
			type,
			key: weight,
			space
		})

		const FA = scale(weight)
		tone.oklch.l = FA

		return [weight, tone]
	})

	return new Map(entries)
}

export function getMetadataOfColor(color, props = null) {
	const space = 'lab-d65'

	const clone = new Color(color).to(space).set('lab.l', 50)
	
	const red = new Color('red').to(space)
	const purple = new Color('purple').to(space)
	const blue = new Color('blue').to(space)
	const cyan = new Color('cyan').to(space)
	const green = new Color('green').to(space)
	const yellow = new Color('yellow').to(space)
	const gray = new Color('gray').to(space)

	const meta = (diffs => {
			const entries = Object.entries(diffs)
			const max = Math.max(...Object.values(diffs))
			const [sect, wght] = minBy(entries, ([sect, wght], ) => {
				const { a, b } = color.lab
				const ab = Math.max(Math.abs(a), Math.abs(b))
				return sect === 'Mono' && ab > 5 ? max : wght
			})
			return {
				sect,
				sectWght: Math.round(wght * 1000) / 1000,
				...props,
				...diffs
			}
		})({
			Rd: clone.deltaECMC(red),
			Pr: clone.deltaECMC(purple),
			Bl: clone.deltaECMC(blue),
			Cy: clone.deltaECMC(cyan),
			Gr: clone.deltaECMC(green),
			Yl: clone.deltaECMC(yellow),
			Mono: clone.deltaECMC(gray),
		})
	
	return meta
}

/** @type {InitPrimaryColorFunc} */
export function initPrimaryColor(value, options) {
	const { key, space, accentFn, shadeFn, $ref } = options
	const color = new Color(space, value)

	const accents = getAccentsOfColor(color, accentFn)
	const shades = getShadesOfColor(color, shadeFn)

	const meta = getMetadataOfColor(color)

	defineProperties(color, {
		type: 'primary',
		key,
		meta,
		shades,
		accents,
		$ref
	})

	return color
}

/** @type {InitThemeColorFunc} */
export function initThemeColor(value, options) {
	const { key, space, $ref } = options
	const color = new Color(space, value)

	defineProperties(color, {
		type: 'theme',
		key,
		$ref
	})

	/** @satisfies {ThemeColor} */
	return color
}

/** @type {InitColorToneFunc} */
function initToneOfColor(color, options) {
	const { type, key, space } = options
	const tone = new Color(color).to(space)

	defineProperties(tone, {
		type,
		key,
		$ref: color
	})

	/** @satisfies {AccentColor | ShadeColor} */
	return tone
}

/**
 * @param {UserConfig} c
 * @returns {Palette.Config}
 */
export function initConfig(c = configByDefault) {
	const config = merge(Object.create(null), c, configByDefault)
	const accentCorrelation = config.correlations.accent
	const shadeCorrelation = config.correlations.shade

	if (!isFunction(accentCorrelation)) {
		config.correlations.accent = initCorrelationFunction(accentCorrelation)
	}

	if (!isFunction(shadeCorrelation)) {
		config.correlations.shade = initCorrelationFunction(shadeCorrelation)
	}

	return deepFreeze(config)
}

function initCorrelationFunction(data) {
	let fn

	if (Array.isArray(data) && data.length === 4) {
		fn = (function (points) {
			const y = BezierEasing(...points)
			return (x) => y(x)
		})(data)
	} else if (typeof data === 'string' && data.includes('x')) {
		fn = new Function('x', `return ${data}`)
	}

	console.assert(
		isFunction(fn),
		`Function initialization failed for parameter value equal to "${toString(
			data
		)}"`
	)

	return fn
}