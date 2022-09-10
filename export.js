import getPalette, {
	accentKeys,
	toneKeys
} from './index.js'

import camelCase from 'lodash/camelCase.js'
import fs from 'fs'
import { initFunction } from "./src/utils.js"
import kebabCase from 'lodash/kebabCase.js'
import path from 'path'
import startCase from 'lodash/startCase.js'

// import { createAcoFile } from 'adobe-aco'
// import { saveAs } from 'file-saver'

const {
	colors,
	correlations
} = JSON.parse(fs.readFileSync('./data.json'))

const palette = getPalette(
	colors,
	initFunction(correlations.tone),
	initFunction(correlations.accent)
)

{
	const DIR = './assets'
	if (!fs.existsSync(DIR)){
		fs.mkdirSync(DIR)
	}
}

{
	const FILE = path.resolve('./assets/colors.css')
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

	console.log(`${FILE} was updated`)
}

{
	const FILE = path.resolve('./assets/palette.css')
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

	console.log(`${FILE} was updated`)
}

{
	const FILE = path.resolve('./assets/palette.js')
	const SOURCE = './src/blank-map.js'

	const CONTENT = fs.readFileSync(SOURCE, { encoding:'utf8', flag:'r' })

	const ENTRIES = Array.from(palette).reduce(
		(entries, [name, color]) => {
			entries.push(`\n\t['${camelCase(name)}', '${color.hex}']`)
			return entries.concat(color.tones.reduce(
				(entries, color, index) => {
					entries.push(`\n\t['${camelCase(name)}${toneKeys[index]}', '${color.hex}']`)
					return entries
				},
				[]
			)).concat(color.accents.reduce(
				(entries, color, index) => {
					entries.push(`\n\t['${camelCase(name)}${accentKeys[index]}', '${color.hex}']`)
					return entries
				},
				[]
			))
		},
		[]
	)

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	fs.writeFileSync(
		FILE,
		CONTENT.replace('/*-entries-*/', ENTRIES.join(',') + '\n')
	)
	
	console.log(`${FILE} was updated`)
}

{
	const FILE = path.resolve('./assets/colors.js')
	const SOURCE = './src/blank-map.js'

	const CONTENT = fs.readFileSync(SOURCE, { encoding:'utf8', flag:'r' })

	const ENTRIES = Object.entries(colors).map(
		([name, color]) => `\n\t['${camelCase(name)}', '${color}']`
	)

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	fs.writeFileSync(
		FILE,
		CONTENT.replace('/*-entries-*/', ENTRIES.join(',') + '\n')
	)
	
	console.log(`${FILE} was updated`)
}

{
	const FILE = path.resolve('./assets/colors.aco')
	/*
	// there are problems from using package `adobe-aco`
	const acoSwatches = Array.from(colors).map(
		([name, color]) => [color.rgb(), 'rgb', startCase(name)]
	)
	const acoFile = createAcoFile(acoSwatches)
	saveAs(new Blob([acoFile]), FILE)
	*/
}
