import getPalette, {
	accentKeys,
	getFlattenPalette,
	toneKeys
} from './index.js'

import camelCase from 'lodash/camelCase.js'
import fs from 'fs'
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
	correlations.tone,
	correlations.accent
)

const flattenPalette = getFlattenPalette(palette)

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

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	flattenPalette.forEach(
		(color, name) => fs.appendFileSync(
			FILE,
			`export const ${camelCase(name)} = '${color}';\n`
		)
	)
	
	console.log(`${FILE} was updated`)
}

{
	const FILE = path.resolve('./assets/colors.js')

	if (fs.existsSync(FILE)) {
		fs.truncateSync(FILE, 0)
	}
	
	palette.forEach(
		(color, name) => fs.appendFileSync(
			FILE,
			`export const ${camelCase(name)} = '${color.hex}';\n`
		)
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
