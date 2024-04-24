import getColorData from './fn.getColorData.js'
import { initConfig } from './utils.js'
import toPairs from 'lodash/toPairs.js'

export default class Palette {
	/** @type {Map<string, import("../").ColorData>} */
	#data

	/** @type {import("../").Config} */
	#config

	/**
	 * @param {import("../").SourceConfig | undefined} c
	 */
	constructor(c) {
		this.#config = initConfig(c)
		this.#data = new Map(
			toPairs(colors).map(([key, value]) => [
				key,
				getColorData(key, value, accentFn, toneFn)
			])
		)
	}

	get name() {
		return this.#config.name
	}
}
