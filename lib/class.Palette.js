// @ts-check

/** @typedef {import('../@types').Palette.Color} Color */
/** @typedef {import('../@types').Palette.Config} Configuration */
/** @typedef {import('../@types').Palette.IFace} IPalette */
/** @typedef {import('../@types').Palette.Key} Key */
/** @typedef {import('../@types').Palette.Theme} Theme */

/** @typedef {import('../@types').PrimaryColor} PrimaryColor */
/** @typedef {import('../@types').PrimaryKey} PrimaryKey */
/** @typedef {import('../@types').ThemeColor} ThemeColor */
/** @typedef {import('../@types').UserConfig} UserConfig */

import startCase from 'lodash/startCase.js'

import {
	initConfig,
	initPrimaryColor,
	initThemeColor
} from './initialization.js'
import { colorKeys } from './settings.js'
import { getColorData, mapToArray } from './utils.js'

/** @implements {IPalette} */
class Palette {
	/** @type {Configuration} */
	#config

	/** @type {Map<PrimaryKey, PrimaryColor>} */
	#draft
	/** @type {Map<Key, Color>} */
	#flatCache

	/** @type {Theme} */
	#theme

	/** @type {ThemeColor} */
	#background

	/** @type {ThemeColor} */
	#black

	/** @type {ThemeColor} */
	#foreground

	/** @type {ThemeColor} */
	#white

	/** @param {UserConfig} [c] */
	constructor(c) {
		this.#config = initConfig(c)

		const {
			colors,
			correlations: { accent: accentFn, shade: shadeFn },
			space: { input: space }
		} = this.#config

		this.#draft = new Map(
			colorKeys.map((key) => [
				key,
				initPrimaryColor(colors[key], {
					key,
					space,
					theme: this.theme,
					accentFn,
					shadeFn,
					$ref: this
				})
			])
		)
	}

	/** @type {IPalette['entries']} */
	entries() {
		return Array.from(this.#draft.entries())
	}

	/** @type {IPalette['keys']} */
	keys() {
		return Array.from(this.#draft.keys())
	}

	/** @type {IPalette['values']} */
	values() {
		return mapToArray(this.#draft).map((color) =>
			getColorData(color, color.key, this.#config.space.output)
		)
	}

	/** Flat hash table of all palette colors */
	get flatten() {
		return (
			this.#flatCache ??
			(() => {
				/**
				 * @param {PrimaryColor} prClr
				 * @returns {void}
				 */
				const flatten = (prClr) => {
					const { key: prKey, accents, shades } = prClr
					// const primary = omit(color, 'accents', 'shades')

					entries.push([prKey, prClr])
					shades.forEach((shade) => entries.push([shade.key, shade]))
					accents.forEach((accent) => entries.push([accent.key, accent]))
				}

				/** @type {Array<[Key, Color]>} */
				const entries = []

				this.#draft.forEach(flatten)
				this.#flatCache = new Map(entries)
				return this.#flatCache
			})()
		)
	}

	/** Properties pass configuration parameters */

	get name() {
		return startCase(this.#config.name)
	}

	get background() {
		return this.#background
	}

	get black() {
		return this.#black
	}

	get foreground() {
		return this.#foreground
	}

	get white() {
		return this.#white
	}

	get outSpace() {
		return this.#config.space.output
	}

	get theme() {
		return (
			this.#theme ??
			(this.#theme = (() => {
				const {
					space: { input: space },
					theme: { background, black, foreground, white }
				} = this.#config

				const options = {
					type: 'theme',
					space,
					$ref: this
				}

				this.#background = initThemeColor(background, {
					key: 'background',
					...options
				})

				this.#black = initThemeColor(black, {
					key: 'black',
					...options
				})

				this.#foreground = initThemeColor(foreground, {
					key: 'foreground',
					...options
				})

				this.#white = initThemeColor(white, {
					key: 'white',
					...options
				})

				return {
					background: this.#background,
					black: this.#black,
					foreground: this.#foreground,
					white: this.#white
				}
			})())
		)
	}

	/** Slices of color sets grouped by type */

	get primaryColors() {
		return new Map(
			Array.from(this.flatten.entries()).filter(
				([_, color]) => color.type === 'primary'
			)
		)
	}

	get accents() {
		return new Map(
			Array.from(this.flatten.entries()).filter(
				([_, color]) => color.type === 'accent'
			)
		)
	}

	get shades() {
		return new Map(
			Array.from(this.flatten.entries()).filter(
				([_, color]) => color.type === 'shade'
			)
		)
	}

	get tones() {
		return new Map(
			Array.from(this.flatten.entries()).filter(([_, color]) =>
				['accent', 'shade'].includes(color.type)
			)
		)
	}
}

export default Palette
