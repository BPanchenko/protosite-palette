/*
import fs from "fs";
import { inspect } from "util";
*/

import * as _ from "lodash"
import path from "path"
import yargs from "yargs"
import * as readDir from "read-directory"

// import { hideBin } from "yargs/helpers";
import * as yargsHelpers from "yargs/helpers"
console.log(yargsHelpers)

import createACO from "./.aco.js"
import { getFlattenPalette, getPalette } from "../index.js"
import { logError } from "./logger.js"

const argv = yargs(hideBin(process.argv))
	.option("source-name", {
		alias: "name",
		describe: "Source file name or palette name",
		type: "string",
	})
	.option("out-dir", {
		alias: "dist",
		default: process.env.npm_config_out_dir,
		describe: "Destination directory for the build files",
		type: "string",
	}).argv

const sourcePath = path.resolve(
	process.cwd(),
	process.env.npm_config_source_dir || "source",
)

const sourceFiles = (function ({ sourceName, sourcePath }) {
	try {
		return readDir.sync(sourcePath, {
			filter: `${sourceName || "*"}.json`,
		})
	} catch (err) {
		logError(err)
	}
})({
	...argv,
	sourcePath,
})

if (_.isEmpty(sourceFiles)) {
	logError("Source files not found")
}

// Build assets

_.forOwn(sourceFiles, (data, file, sources) => {
	const { colors, correlations } = JSON.parse(data)
	const paletteName = path.parse(file).name
	const distFolder = Object.keys(sources).length > 1 ? paletteName : "."
	const distPath = path.resolve(process.cwd(), argv.outDir, distFolder)
	const palette = getPalette(colors, correlations.tone, correlations.accent)
	const flattenPalette = getFlattenPalette(palette)

	createACO(palette, flattenPalette, distPath)
})
