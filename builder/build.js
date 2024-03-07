import forOwn from "lodash/forOwn.js"
import path from "path"

import { getFlattenPalette, getPalette } from "../index.js"
import { distPath, sourceFiles } from "./settings.js"

import createACO from "./.aco.js"

// Build assets

forOwn(sourceFiles, (data, file, sources) => {
	const { colors, correlations } = JSON.parse(data)
	const paletteName = path.parse(file).name
	const dist = path.resolve(
		distPath,
		Object.keys(sources).length > 1 ? paletteName : ".",
	)
	const palette = getPalette(colors, correlations.tone, correlations.accent)
	const flattenPalette = getFlattenPalette(palette)

	createACO(palette, flattenPalette, dist)
})
