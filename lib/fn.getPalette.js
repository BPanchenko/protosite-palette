import camelCase from "lodash/camelCase.js"
import has from "lodash/has.js"
import { accentKeys, toneKeys } from "./settings.js"
import { createProtoPalette } from "./fn.createProtoPalette.js"

/**
 * @param {import("../").Source} source
 * @param {string} format
 * @returns {Record<string, string>}
 */
export default function getPalette(source, format = "hex") {
	const palette = createProtoPalette(
		source.colors,
		source.correlations.tone,
		source.correlations.accent,
	)
	const data = Object.create(null)
	palette.forEach((color, name) => {
		data[name] = color[format]
		color.tones.forEach((tone, index) => {
			const toneName = camelCase(name) + toneKeys[index]
			data[toneName] = tone[format]
			if (has(tone, "rgba")) {
				data[toneName + "TP"] = tone.rgba
			}
		})
		color.accents.forEach(
			(accent, index) =>
				(data[camelCase(name) + accentKeys[index]] = accent[format]),
		)
	})
	return data
}
