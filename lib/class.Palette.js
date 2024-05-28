import { extendColorData, initConfig, mapToArray } from './utils.js'
import { isEmpty, omit, startCase } from 'lodash'

import getColorData from './fn.getColorData.js'
import toPairs from 'lodash/toPairs.js'

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
		const {
			colors,
			correlations: { accent: accentFn, tone: toneFn }
		} = (this.#config = initConfig(c))

		this.#draft = new Map(
			toPairs(colors).map(([key, value]) => [
				key,
				getColorData(value, accentFn, toneFn)
			])
		)
	}

	entries() {
		return Array.from(this.#draft.entries())
	}

	keys() {
		return Array.from(this.#draft.keys())
	}

	initExtendedProps() {
		if (this.#draft.extended !== true) {
			this.#draft.forEach((color, PK) => {
				extendColorData(color, PK)
				color.tones.forEach((tone, TK) => extendColorData(tone, `${PK}-${TK}`))
				color.accents.forEach((acc, AK) => extendColorData(acc, `${PK}-a${AK}`))
			})
			this.#draft.extended = true
		}
		return this
	}

	values() {
		return mapToArray(this.#draft).map((c) => {
			return {
				...c,
				accents: mapToArray(c.accents),
				tones: mapToArray(c.tones)
			}
		})
	}

	get flatten() {
		if (isEmpty(this.#flatCache)) {
			this.#flatCache = new Map()
			this.#draft.forEach((color, PK) => {
				const { accents, tones } = color
				const primary = omit(color, 'accents', 'tones')

				this.#flatCache.set(PK, primary)

				tones.forEach((tone, TK) =>
					this.#flatCache.set(`${PK}-${TK}`, {
						...tone,
						$primaryRef: primary
					})
				)
				accents.forEach((acc, AK) =>
					this.#flatCache.set(`${PK}-a${AK}`, {
						...acc,
						$primaryRef: primary
					})
				)
			})
		}
		return this.#flatCache
	}

	get name() {
		return startCase(`${this.#config.name} palette`)
	}
}
