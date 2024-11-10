import isEmpty from 'lodash/isEmpty.js'
import omit from 'lodash/omit.js'
import startCase from 'lodash/startCase.js'
import toPairs from 'lodash/toPairs.js'

import { initConfig, initColor } from './initialization.js'
import { getColorData, mapToArray } from './utils.js'

export default class Palette {
	/** @type {Map<ColorKey, ColorData>} */
	#draft

	/** @type {Config} */
	#config

	/** @type {Map<string, ColorValue>} */
	#flatCache

	/**
	 * @param {SourceConfig | undefined} c
	 */
	constructor(c) {
		this.#config = initConfig(c)
		const {
			colors,
			correlations: { accent: accentFn, shade: shadeFn },
			space,
			theme
		} = this.#config

		this.#draft = new Map(
			toPairs(colors).map(([key, value]) => [
				key,
				initColor(value, { accentFn, shadeFn, space: space.input, theme })
			])
		)
	}

	entries() {
		return Array.from(this.#draft.entries())
	}

	keys() {
		return Array.from(this.#draft.keys())
	}

	values() {
		return mapToArray(this.#draft).map((color) =>
			getColorData(color, color.key, this.#config.space.output)
		)
	}

	get flatten() {
		if (isEmpty(this.#flatCache)) {
			this.#flatCache = new Map()
			this.#draft.forEach((color, PK) => {
				const { accents, shades } = color
				const primary = omit(color, 'accents', 'shades')
				primary.type = 'primary'

				this.#flatCache.set(PK, primary)

				shades.forEach((shade, TK) =>
					this.#flatCache.set(
						`${PK}-${TK}`,
						Object.assign(shade, {
							$primaryRef: primary,
							type: 'shade'
						})
					)
				)
				accents.forEach((accent, AK) =>
					this.#flatCache.set(
						`${PK}-a${AK}`,
						Object.assign(accent, {
							$primaryRef: primary,
							type: 'accent'
						})
					)
				)
			})
		}
		return this.#flatCache
	}

	get accents() {
		return new Map(
			Array.from(this.flatten.entries()).filter(
				([_, color]) => color.type === 'accent'
			)
		)
	}

	get name() {
		return startCase(this.#config.name)
	}

	get background() {
		return initColor(this.#config.theme.background, {
			space: this.#config.space.input
		})
	}

	get foreground() {
		return initColor(this.#config.theme.foreground, {
			space: this.#config.space.input
		})
	}

	get outSpace() {
		return this.#config.space.output
	}

	get primaryColors() {
		return new Map(
			Array.from(this.flatten.entries()).filter(
				([_, color]) => color.type === 'primary'
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
