import getPalette, {
	accentKeys,
	getFlattenPalette,
	toneKeys
} from './index.js'

import camelCase from 'lodash/camelCase.js'
import fs from 'fs'
import { hideBin } from 'yargs/helpers'
import kebabCase from 'lodash/kebabCase.js'
import path from 'path'
import startCase from 'lodash/startCase.js'
import yargs from 'yargs'

// Settings

const from = 'source'
const to = 'assets'
const argv = yargs(hideBin(process.argv))
	.option('source-name', {
		alias: 'name',
		default: process.env.npm_config_source_name,
		type: 'string',
		describe: 'Source file name or palette name'
	})
	.argv

const SOURCE = path.resolve(process.cwd(), from)
const SOURCE_FILENAME = argv.sourceName + '.json'
const SOURCE_FILE = path.join(SOURCE, SOURCE_FILENAME)

const DIST = path.resolve(process.cwd(), to, argv.sourceName)

// Checking Source File and Destination Folder

{
	if (!fs.existsSync(SOURCE_FILE)){
		throw new Error(`File "${SOURCE_FILENAME}" not found at path "${SOURCE}"`)
	}
	if (!fs.existsSync(DIST)){
		fs.mkdirSync(DIST)
	}
}

// Creating assets

const {
	colors,
	correlations
} = JSON.parse(fs.readFileSync(SOURCE_FILE))

const palette = getPalette(
	colors,
	correlations.tone,
	correlations.accent
)

const flattenPalette = getFlattenPalette(palette)

{
	const FILE = path.resolve(DIST, 'colors.css')
	const PREFIX = '--clr-'

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	fs.appendFileSync(FILE, ':root {')
	palette.forEach(
		(color, name) => fs.appendFileSync(
			FILE,
			`\n\t${PREFIX}${kebabCase(name)}: ${color.hex};`
		)
	)
	fs.appendFileSync(FILE, '\n}')

	console.log(`${FILE} is created`)
}

{
	const FILE = path.resolve(DIST, 'palette.css')
	const PREFIX = '--clr-'

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	fs.appendFileSync(FILE, ':root {')
	palette.forEach(
		(color, name) => {
			fs.appendFileSync(
				FILE,
				`\n\n\t/* ${startCase(name)} */\n`
			)
			fs.appendFileSync(
				FILE,
				`\n\t${PREFIX}${kebabCase(name)}: ${color.hex};`
			)
			color.tones.forEach(
				(color, index) => {
					fs.appendFileSync(
						FILE,
						`\n\t${PREFIX}${kebabCase(name)}-${toneKeys[index]}: ${color.hex};`
					)
					if (color.hasOwnProperty('rgba')) {
						fs.appendFileSync(
							FILE,
							`\n\t${PREFIX}${kebabCase(name)}-${toneKeys[index]}-tp: ${color.rgba};`
						)
					}
				}
			)
			color.accents.forEach(
				(color, index) => {
					fs.appendFileSync(
						FILE,
						`\n\t${PREFIX}${kebabCase(name)}-${accentKeys[index]}: ${color.hex};`
					)
				}
			)
		}
	)
	fs.appendFileSync(FILE, '\n}')

	console.log(`${FILE} is created`)
}

{
	const FILE = path.resolve(DIST, 'palette.js')

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	flattenPalette.forEach(
		(color, name) => fs.appendFileSync(
			FILE,
			`export const ${name} = '${color}';\n`
		)
	)
	
	console.log(`${FILE} is created`)
}

{
	const FILE = path.resolve(DIST, 'colors.js')

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	palette.forEach(
		(color, name) => fs.appendFileSync(
			FILE,
			`export const ${camelCase(name)} = '${color.hex}';\n`
		)
	)
	
	console.log(`${FILE} is created`)
}

{
	const FILE = path.resolve(DIST, 'colors.aco')
	/*
	// there are problems from using package `adobe-aco`
	const acoSwatches = Array.from(colors).map(
		([name, color]) => [color.rgb(), 'rgb', startCase(name)]
	)
	const acoFile = createAcoFile(acoSwatches)
	saveAs(new Blob([acoFile]), FILE)
	*/
}
