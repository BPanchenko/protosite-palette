import { scaleLinear } from 'd3-scale'
import bezier from 'bezier'
import BezierEasing from 'bezier-easing'
import camelCase from 'lodash/camelCase.js'
import configByDefault from '../.config/palette.config.json' assert { type: 'json' }
import isFunction from 'lodash/isFunction.js'
import merge from 'lodash/merge'
import toPairs from 'lodash/toPairs.js'
import toString from 'lodash/toString.js'
import validateColor from 'validate-color'

/**
 * @template {Record<string | symbol, any>} T
 * @param {T} object
 * @returns {Readonly<T>}
 */
export const deepFreeze = (object) => {
	// Retrieve the property names defined on object
	const propNames = Reflect.ownKeys(object)

	// Freeze properties before freezing self
	for (const name of propNames) {
		const value = object[name]

		if ((value && typeof value === 'object') || typeof value === 'function') {
			deepFreeze(value)
		}
	}

	return Object.freeze(object)
}

export const extendColorData = (color, draftKey) => {
	const key = draftKey ?? color.key

	const name = key
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

	const cssVarName = `--clr-${key}`

	return Object.assign(color, {
		key,
		name,
		'css-var': cssVarName,
		'js-const': camelCase(cssVarName)
	})
}

/**
 * @param {Config} c
 * @returns {Array<[ColorName, ColorValue]>}
 */
export const getPrimaryColors = (c) =>
	Object.fromEntries(
		toPairs(c.colors).map(([key, value]) => [camelCase(key), value])
	)

/**
 * @param {string} value
 * @returns {boolean}
 */
export const isColor = (value) => validateColor(value)

/**
 * @param {SourceConfig} c
 * @returns {Config}
 */
export const initConfig = (c = configByDefault) => {
	const config = merge(Object.create(null), c, configByDefault)
	const accentCorrelation = config.correlations.accent
	const toneCorrelation = config.correlations.tone

	if (!isFunction(accentCorrelation)) {
		config.correlations.accent = initCorrelationFunction(accentCorrelation, 2)
	}

	if (!isFunction(toneCorrelation)) {
		config.correlations.tone = initCorrelationFunction(toneCorrelation)
	}

	return deepFreeze(config)
}

export function initScaleWithMagneticRange(value, inverted = false) {
	const half = 20
	let delta = (value / 100) * half

	if (inverted) delta = -delta

	let left = value - half + delta
	let right = value + half + delta

	if (left < -100) {
		left = -100
		right = -100 + 2 * half
	}
	if (right > 100) {
		left = 100 - 2 * half
		right = 100
	}

	return scaleLinear().domain([0, 1]).range([left, right])
}

export const mapToArray = (map) =>
	Array.from(map.entries()).map(([key, item]) => ({
		...item,
		key
	}))

function initCorrelationFunction(data, mode = 1) {
	let fn

	if (typeof data === 'string' && data.includes('t')) {
		fn = new Function('x', `return ${data}`)
	}

	if (Array.isArray(data) && data.length === 4) {
		if (mode === 2) {
			fn = (function (points) {
				const xCoords = [0, points[0], points[2], 1]
				const yCoords = [0, points[1], points[3], 1]
				return (t) => [bezier(xCoords, t), bezier(yCoords, t)]
			})(data)
		} else {
			fn = (function (points) {
				const y = BezierEasing(...points)
				return (x) => y(x)
			})(data)
		}
	}

	console.assert(
		isFunction(fn),
		`Function initialization failed for parameter value equal to "${toString(
			data
		)}"`
	)

	return fn
}
