import camelCase from 'lodash/camelCase.js'
import toHex from 'to-hex'
import { getMetadataOfColor } from './initialization.js'

/**
 * @param {Color.Data} data
 * @param {'accents' | 'shades'} propName
 * @param {{ color: PrimaryColor; space: ColorSpace }} options
 * @returns {Color.Data}
 */
const defineColorSecondaryDatum = (data, propName, { color, space }) =>
	defineProperty(
		data,
		propName,
		Array.from(color[propName].entries()).map(([weight, color]) => ({
			...getColorData(
				color,
				`${data.key}-${propName === 'accents' ? 'a' : ''}${weight}`,
				space
			),
			weight
		}))
	)

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

export const defineProperties = (target, hash, isReadonly = true) =>
	Object.entries(hash).forEach(([key, value]) =>
		Boolean(value)
			? defineProperty(target, key, value, isReadonly)
			: delete target[key]
	)

/**
 * @param {PaletteColor} color
 * @param {PrimaryColorKey} draftKey
 * @param {ColorSpace} space
 * @returns {Color.Data}
 */
export const getColorData = (color, draftKey, space = 'oklch') => {
	const key = draftKey ?? color.key
	const name = key
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

	const cssVarName = `--clr-${key}`
	const cssValue = color.to(space).toString()

	const hex = color.to('srgb').toString({ format: 'hex' })
	const hexAsNumber = toHex(parseInt(hex.replace('#', ''), 16), {
		addPrefix: true
	})
	const rgb = hexToRgb(hexAsNumber)

	const data = {
		key,
		name,
		[space]: cssValue,
		hex,
		rgb,
		'meta': color.meta ?? getMetadataOfColor(color),
		'css-variable': cssVarName,
		'css-value': cssValue,
		'js-variable': camelCase(cssVarName),
		'js-value': hexAsNumber
	}

	if (color.accents) {
		defineColorSecondaryDatum(data, 'accents', { color, space })
	}

	if (color.shades) {
		defineColorSecondaryDatum(data, 'shades', { color, space })
	}

	return Object.freeze(data)
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export const isColor = (value) => validateColor(value)

export const mapToArray = (list) =>
	Array.from(list.entries()).map(([_, item]) => item)

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
