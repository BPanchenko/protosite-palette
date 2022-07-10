import { getColorData } from './src/utils.js'
import toPairs from 'lodash/toPairs.js'

export default function getPalette(colors, config) {
	const palette = new Map()
	
	toPairs(colors).forEach(p => {
		let name = p[0]
		let value = p[1]
		palette.set(
			name,
			getColorData(value, true)
		)
	})

	return palette
}
