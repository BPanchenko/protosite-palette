import fs from 'fs'
import kebabCase from "lodash/kebabCase.js"
import path from 'path'
import chroma from "chroma-js"
import fs from "fs"
import toPairs from "lodash/toPairs.js"

// import { createAcoFile } from "adobe-aco"
// import { saveAs } from "file-saver"
// import startCase from "lodash/startCase.js"

const rawdata = fs.readFileSync("./colors.json")
const sourceColors = JSON.parse(rawdata)
const colors = new Map()
const palette = new Map()

toPairs(sourceColors).forEach(p => {
	let name = p[0]
	let value = p[1]
	colors.set(
		name,
		chroma(value)
	)
	palette.set(
		name,
		{
			color: chroma(value)
		}
	)
})

{
	const distFile = path.resolve('./assets/colors.css')
	const PREFIX = '--clr-'

	fs.truncateSync(distFile, 0)
	fs.appendFileSync(distFile, ':root {')
	colors.forEach(
		(color, name) => fs.appendFileSync(
			distFile,
			`\n\t${PREFIX}${kebabCase(name)}: ${color.hex()};`
		)
	)
	fs.appendFileSync(distFile, '\n}')

	console.log(`${distFile} was updated`)
}

{
	/*
	// there are problems from using package `adobe-aco`
	const distFile = path.resolve('./assets/colors.aco')
	const acoSwatches = Array.from(colors).map(
		([name, color]) => [color.rgb(), 'rgb', startCase(name)]
	)
	const acoFile = createAcoFile(acoSwatches)
	saveAs(new Blob([acoFile]), distFile)
	*/
}
