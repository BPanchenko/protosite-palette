import getColorData from './fn.getColorData.js'
import { initConfig } from './utils.js'
import toPairs from 'lodash/toPairs.js'

/**
 * @param {import("../").SourceConfig | undefined} c
 * @returns {import("../").Palette}
 */
export default function getPalette(c) {
	const {
		name,
		colors,
		correlations: { accent: accentFn, tone: toneFn }
	} = initConfig(c)

	const data = new Map(
		toPairs(colors).map(([key, value]) => [
			key,
			getColorData(key, value, accentFn, toneFn)
		])
	)

	const palette = Object.freeze(
		Object.create(data, {
			name: {
				value: name
			}
		})
	)

	return palette
}
