import { camelCase, isEmpty, omit, startCase } from 'lodash'

import getColorData from './fn.getColorData.js'
import { initConfig } from './utils.js'
import toPairs from 'lodash/toPairs.js'

export default class Palette {
	/** @type {Map<ColorKey, ColorData>} */
	#data

	/** @type {Config} */
	#config

	/** @type {Map<string, ColorValue>} */
	#flatCache

	/**
	 * @param {SourceConfig | undefined} c
	 */
	constructor(c) {
		const {
			colors,
			correlations: { accent: accentFn, tone: toneFn }
		} = (this.#config = initConfig(c))

		this.#data = new Map(
			toPairs(colors).map(([key, value]) => [
				key,
				getColorData(key, value, accentFn, toneFn)
			])
		)
	}

	entries() {
		return Array.from(this.#data.entries())
	}

	keys() {
		return Array.from(this.#data.keys())
	}

	values() {
		return Array.from(this.#data.values())
	}

	*[Symbol.iterator]() {
		yield* this.#data[Symbol.iterator]()
	}

	get flatten() {
		if (isEmpty(this.#flatCache)) {
			this.#flatCache = new Map()
			this.#data.forEach((color, colorKey) => {
				this.#flatCache.set(
					camelCase(colorKey),
					omit(color, 'accents', 'meta', 'tones')
				)

				color.accents.forEach((acc, accKey) =>
					this.#flatCache.set(camelCase(accKey), omit(acc, 'meta'))
				)
				color.tones.forEach((tone, toneKey) =>
					this.#flatCache.set(camelCase(toneKey), omit(tone, 'meta'))
				)
			})
		}
		return this.#flatCache
	}

	get name() {
		return startCase(`${this.#config.name} palette`)
	}
}
