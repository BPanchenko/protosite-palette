import camelCase from "lodash/camelCase.js"
import has from "lodash/has.js"
import { accentKeys, toneKeys } from "./settings.js"

export function getFlattenPalette(palette, format = "hex") {
	const data = new Map()
	palette.forEach((color, name) => {
		data.set(name, color[format])
		color.tones.forEach((tone, index) => {
			const toneName = camelCase(name) + toneKeys[index]
			data.set(toneName, tone[format])
			if (has(tone, "rgba")) {
				data.set(toneName + "TP", tone.rgba)
			}
		})
		color.accents.forEach((accent, index) =>
			data.set(camelCase(name) + accentKeys[index], accent[format]),
		)
	})
	return data
}
