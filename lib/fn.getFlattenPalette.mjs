import camelCase from "lodash/camelCase.js"
import { accentKeys, toneKeys } from "./settings.mjs"

export function getFlattenPalette(palette, format = "hex") {
	const data = new Map()
	palette.forEach((color, name) => {
		data.set(name, color[format])
		color.tones.forEach((tone, index) => {
			const toneName = camelCase(name) + toneKeys[index]
			data.set(toneName, tone[format])
			if (tone.hasOwnProperty("rgba")) {
				data.set(toneName + "TP", tone.rgba)
			}
		})
		color.accents.forEach((accent, index) =>
			data.set(camelCase(name) + accentKeys[index], accent[format])
		)
	})
	return data
}
