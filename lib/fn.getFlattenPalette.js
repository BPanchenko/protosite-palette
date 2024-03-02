import * as _ from "lodash"
import { accentKeys, toneKeys } from "./settings.js"

export function getFlattenPalette(palette, format = "hex") {
	const data = new Map()
	palette.forEach((color, name) => {
		data.set(name, color[format])
		color.tones.forEach((tone, index) => {
			const toneName = _.camelCase(name) + toneKeys[index]
			data.set(toneName, tone[format])
			if (_.has(tone, "rgba")) {
				data.set(toneName + "TP", tone.rgba)
			}
		})
		color.accents.forEach((accent, index) =>
			data.set(_.camelCase(name) + accentKeys[index], accent[format]),
		)
	})
	return data
}
