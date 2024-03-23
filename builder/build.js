import curry from "lodash/curry.js"
import forOwn from "lodash/forOwn.js"
import path from "path"
import { writeFile } from "node:fs"

import getPelette from "../lib/fn.getPalette.js"
import { logError, logSuccess, logger } from "./logger.js"
import { distPath, sources } from "./settings.js"
import { getPrimaryColors } from "../lib/utils.js"
import {
	makeAcoContent,
	makeCssContent,
	makeDtsContent,
	makeEsmContent,
} from "../lib/makeFileContent.js"

const getDestinationPath = curry((hasMultipleSources, root, paletteFolder) =>
	path.resolve(root, hasMultipleSources ? paletteFolder : "."),
)(Object.keys(sources).length > 1)(distPath)

forOwn(sources, (source, file) => {
	const { name } = path.parse(file)
	const data = JSON.parse(source)
	const outDir = getDestinationPath(name)

	logger.debug(`Saving the ${name} palette to "${outDir}"`);

	[
		["colors", getPrimaryColors(data)],
		["palette", getPelette(data)],
	].forEach(([name, data]) => {
		const entries = Object.entries(data);

		// Write all colors to files

		[
			[".css", makeCssContent],
			[".d.ts", makeDtsContent],
			[".js", makeEsmContent],
		].forEach(([ext, fn]) =>
			writeFile(
				path.join(outDir, name + ext),
				Buffer.from(fn(entries)),
				"utf8",
				err => (err ? logError(err) : logSuccess(name + ext)),
			),
		)

		// Exclude colors with alpha channel for ACO files

		writeFile(
			path.join(outDir, name + ".aco"),
			Buffer.from(
				makeAcoContent(
					entries.filter(entry => entry[0].includes("TP") === false),
				),
			),
			"utf8",
			err => (err ? logError(err) : logSuccess(name + ".aco")),
		)
	})
})
