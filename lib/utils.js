import camelCase from 'lodash/camelCase.js'
import { defineMetadata } from './initialization'

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

export const defineProperty = (
	object,
	propName,
	propValue,
	isReadonly = true
) =>
	Object.defineProperty(object, propName, {
		value: propValue,
		enumerable: true,
		writable: isReadonly !== true
	})

const defineColorSecondaryDatum = (colorData, color, propName) =>
	defineProperty(
		colorData,
		propName,
		Array.from(color[propName].entries()).map(([weight, color]) => ({
			...getColorData(
				color,
				`${colorData.key}-${propName === 'accents' ? 'a' : ''}${weight}`
			),
			weight
		}))
	)

export const getColorData = (color, draftKey) => {
	const srgb = color.to('srgb')

	const key = draftKey ?? color.key
	const name = key
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
	const cssVarName = `--clr-${key}`

	const hex = srgb.toString({ format: 'hex' })
	const rgb = hexToRgb(hex)

	const data = {
		'css-var': cssVarName,
		'js-const': camelCase(cssVarName),
		'meta': color.meta ?? defineMetadata(color),
		hex,
		key,
		name,
		rgb
	}

	if (color.accents) {
		defineColorSecondaryDatum(data, color, 'accents')
	}

	if (color.shades) {
		defineColorSecondaryDatum(data, color, 'shades')
	}

	return Object.freeze(data)
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export const isColor = (value) => validateColor(value)

export const mapToArray = (list) =>
	Array.from(list.entries()).map(([key, item]) =>
		Object.assign(item, {
			key
		})
	)

function hexToRgb(str) {
	let hex = str.charAt(0) === '#' ? str.substring(1) : str

	if (hex.length === 3) {
		hex = hex
			.split('')
			.reduce((accum, value) => accum.concat([value, value]), [])
			.join('')
	}

	const bigint = parseInt(hex, 16)
	const r = (bigint >> 16) & 255
	const g = (bigint >> 8) & 255
	const b = bigint & 255

	return [r, g, b]
}
