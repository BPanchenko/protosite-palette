import { accentKeys, toneKeys } from './settings.js'
import { cubehelix, lab, rgb } from 'd3-color'

import camelCase from 'lodash/camelCase'
import { differenceEuclideanLab } from 'd3-color-difference'
import { initScaleWithMagneticRange } from './utils.js'
import kebabCase from 'lodash/kebabCase'
import minBy from 'lodash/minBy'
import { scaleLinear } from 'd3-scale'

/**
 * @param {ColorKey} key
 * @param {ColorValue} value
 * @param {AccentCorFn} accentFn
 * @param {ToneCorFn} toneFn
 * @returns {Config}
 */
export default function getColorData(key, value, accentFn, toneFn) {
	const color = rgb(value)

	const name = key
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

	const cssVarName = `--clr-${kebabCase(name)}`

	const data = {
		name,
		'hex': color.formatHex(),
		'hsl': color.formatHsl(),
		'rgb': color.formatRgb(),
		'css-var': cssVarName,
		'js-const': camelCase(cssVarName)
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

		data.accents = new Map(
			accentKeys.map((accentKey, index) => {
				const localKey = `${key}-a${accentKey}`
				const t = step * index
				const [f1, f2] = accentFn(t)

				let accent = accentColor.copy()
				accent.l = accentScaleLightness(f2)

				if (data.meta.isRed || data.meta.isGreen) {
					accent.a = accentScaleA(f1)
				} else {
					accent.b = accentScaleB(f1)
				}

				return [localKey, getColorData(localKey, accent)]
			})
		)
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

		data.tones = new Map(
			toneKeys.map((toneKey, index) => {
				const localKey = `${key}-${toneKey}`
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

				return [localKey, getColorData(`${key}-${toneKey}`, tone)]
			})
		)
	}

	return Object.freeze(data)
}
