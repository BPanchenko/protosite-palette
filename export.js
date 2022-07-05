import fs from 'fs'
import kebabCase from "lodash/kebabCase.js"
import { palette } from './index.js'
import path from 'path'

const PREFIX = '--clr-'

let distFile = path.resolve('./assets/colors.css')

fs.truncateSync(distFile, 0)
fs.appendFileSync(distFile, ':root {')
palette.forEach(
	(color, name) => fs.appendFileSync(
		distFile,
		`\n\t${PREFIX}${kebabCase(name)}: ${color.hex()};`
	)
)
fs.appendFileSync(distFile, '\n}')
console.log(`${distFile} was updated`)
