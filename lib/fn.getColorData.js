import { accentKeys, toneKeys } from './settings.js'
import { cubehelix, lab, rgb } from 'd3-color'

import { differenceEuclideanLab } from 'd3-color-difference'
import { initScaleWithMagneticRange } from './utils.js'
import kebabCase from 'lodash/kebabCase'
import minBy from 'lodash/minBy'
import { scaleLinear } from 'd3-scale'

export default function getColorData(key, value, accentFn, toneFn) {
	const color = rgb(value)

	const data = {
		name: kebabCase(key),
		hex: color.formatHex(),
		hsl: color.formatHsl(),
		rgb: color.formatRgb()
	}

	// META

	data.meta = ((diffs) => {
		const entries = Object.entries(diffs)
		const minEntry = minBy(entries, (e) => e[1])
		return {
			isBlue: minEntry[0] === 'blue',
			isGreen: minEntry[0] === 'green',
			isRed: minEntry[0] === 'red',
			isYellow: minEntry[0] === 'yellow'
		}
	})({
		blue: differenceEuclideanLab(color, 'blue'),
		green: differenceEuclideanLab(color, 'green'),
		red: differenceEuclideanLab(color, 'red'),
		yellow: differenceEuclideanLab(color, 'yellow')
	})

	// ACCENTS

	if (accentFn) {
		const accentColor = lab(color)
		const accentScaleA = initScaleWithMagneticRange(accentColor.a)
		const accentScaleB = initScaleWithMagneticRange(accentColor.b)
		const accentScaleLightness = scaleLinear()
			.domain([0, 1])
			.range([
				accentColor.l + (150 - accentColor.l) / 2,
				accentColor.l - accentColor.l / 4
			])

		const step = 1 / (accentKeys.length - 1)

		data.accents = accentKeys.map((_, index) => {
			const t = step * index
			const [f1, f2] = accentFn(t)

			let accent = accentColor.copy()
			accent.l = accentScaleLightness(f2)

			if (data.meta.isRed || data.meta.isGreen) {
				accent.a = accentScaleA(f1)
			} else {
				accent.b = accentScaleB(f1)
			}

			return getColorData(accent)
		})
	}

	// TONES

	if (toneFn) {
		const toneColor = cubehelix(color)

		const cntTints = Math.ceil(toneKeys.length / 2)
		const step = 1 / (toneKeys.length - 1)
		const tintFactorMax = toneFn(step * (cntTints - 1))
		const shadeFactorMin = toneFn(step * cntTints)

		const tintScaleLightness = scaleLinear()
			.domain([0, tintFactorMax])
			.range([0.98, toneColor.l + 0.2 * (1 - toneColor.l)])

		const tintScaleSaturation = scaleLinear()
			.domain([0, tintFactorMax])
			.range([0.3 * toneColor.s, toneColor.s])

		const shadeScaleDarkening = scaleLinear()
			.domain([shadeFactorMin, 1])
			.range([0.2, 3.5])

		data.tones = toneKeys.map((_, index) => {
			const t = step * index
			const f = toneFn(t)

			let tone
			if (index < cntTints) {
				let tint = toneColor.copy()
				tint.l = tintScaleLightness(f)
				tint.s = tintScaleSaturation(f)
				tone = tint
			} else {
				let shade = toneColor.copy()
				shade = shade.darker(shadeScaleDarkening(f))
				tone = shade
			}

			return getColorData(tone)
		})
	}

	return Object.freeze(data)
}
