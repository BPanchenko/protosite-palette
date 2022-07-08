import build from '../index.js'
import fs from 'fs'
import kebabCase from 'lodash/kebabCase.js'
import path from 'path'
import startCase from 'lodash/startCase.js'

// import { createAcoFile } from 'adobe-aco'
// import { saveAs } from 'file-saver'

const rawdata = fs.readFileSync('./src/colors.json')
const colors = JSON.parse(rawdata)
const palette = build(colors)


{
	const FILE = path.resolve('./assets/colors.css')
	const PREFIX = '--clr-'

	fs.truncateSync(FILE, 0)
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

	fs.truncateSync(FILE, 0)
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
						`\n\t${PREFIX}${kebabCase(name)}-${100 * ++index}: ${color.hex};`
					)
				}
			)
		}
	)
	fs.appendFileSync(FILE, '\n}')

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
