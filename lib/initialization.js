import BezierEasing from 'bezier-easing'
import Color from 'colorjs.io'
import isFunction from 'lodash/isFunction'
import merge from 'lodash/merge'
import minBy from 'lodash/minBy'
import toString from 'lodash/toString'
import { scaleLinear } from 'd3-scale'

import { deepFreeze, defineProperty } from './utils.js'
import { WT } from './settings.js'

import configByDefault from '@bpanchenko/palette/config' with { type: 'json' }

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

export function defineMetadata(color, props = null) {
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
	
	return Object.assign({}, color.meta, meta)
}

/**
 * @param {SourceConfig} c
 * @returns {Config}
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

/**
 * @typedef {object} InitOptions
 * @property {Config['format']} format
 * @property {AccentCorFn=} accentFn
 * @property {ShadeCorFn=} shadeFn
 */

/**
 * @param {ColorValue} value
 * @param {InitOptions} options
 * @returns {PrimaryColor | Color}
 */
export function initColor(value, options = {}) {
	const { accentFn, shadeFn } = options
	const color = new Color(value)

	if (accentFn) {
		const scale = (weigth) => accentFn(scaleLinear(WT.domain, [0, 1])(weigth))
		defineProperty(
			color,
			'accents',
			new Map(
				WT.accents.map((weight) => {
					const FA = scale(weight)
					const tone = new Color(color).to('lch')
					tone.lch.c = 150
					tone.lch.l = 75 - FA * 50
					tone.meta = defineMetadata(tone, {
						toneWght: weight
					})
					return [weight, tone]
				})
			)
		)
	}

	if (shadeFn) {
		const scale = (weigth) => shadeFn(scaleLinear(WT.domain, [1, 0])(weigth))
		defineProperty(
			color,
			'shades',
			new Map(
				WT.shades.map((weight) => {
					const FA = scale(weight)
					const tone = new Color(color).to('oklch')
					tone.oklch.l = FA
					tone.meta = defineMetadata(tone, {
						toneWght: weight
					})
					return [weight, tone]
				})
			)
		)
	}

	return color
}
