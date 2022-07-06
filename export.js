import { colors } from './index.js'
import { createAcoFile } from "adobe-aco"
import fs from 'fs'
import kebabCase from "lodash/kebabCase.js"
import path from 'path'
import { saveAs } from "file-saver"
import startCase from "lodash/startCase.js"

const PREFIX = '--clr-'
var distFile


distFile = path.resolve('./assets/colors.css')

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


distFile = path.resolve('./assets/colors.aco')

const acoSwatches = Array.from(colors).map(
	([name, color]) => [color.rgb(), 'rgb', startCase(name)]
)
const acoFile = createAcoFile(acoSwatches) // there are problems from using package `adobe-aco`

saveAs(new Blob([acoFile]), distFile)
