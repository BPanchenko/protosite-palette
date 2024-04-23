import BezierEasing from 'bezier-easing'
import bezier from 'bezier'
import camelCase from 'lodash/camelCase.js'
import isFunction from 'lodash/isFunction.js'
import { scaleLinear } from 'd3-scale'
import toPairs from 'lodash/toPairs.js'
import toString from 'lodash/toString.js'
import validateColor from 'validate-color'

/**
 * @param {import("../").Config} c
 * @returns {Array<[import("../").ColorName, import("../").ColorValue]>}
 */
export const getPrimaryColors = c => Object.fromEntries(toPairs(c.colors).map(([key, value]) => [camelCase(key), value]))

/**
 * @param {string} value
 * @returns {boolean}
 */
export const isColor = value => validateColor(value)

export function initCorrelationFunction(data, mode = 1) {
	let fn

	if (typeof data === 'string' && data.includes('t')) {
		fn = new Function('x', `return ${data}`)
	}

	if (Array.isArray(data) && data.length === 4) {
		if (mode === 2) {
			fn = (function (points) {
				const xCoords = [0, points[0], points[2], 1]
				const yCoords = [0, points[1], points[3], 1]
				return t => [bezier(xCoords, t), bezier(yCoords, t)]
			})(data)
		} else {
			fn = (function (points) {
				const y = BezierEasing(...points)
				return x => y(x)
			})(data)
		}
	}

	console.assert(isFunction(fn), `Function initialization failed for parameter value equal to "${toString(data)}"`)

	return fn
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
