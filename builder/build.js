import startCase from 'lodash/startCase.js'
import path from 'node:path'
import { writeFile } from 'node:fs'

import Palette from '../lib/class.Palette.js'
import { logError, logSuccess, logger } from './logger.js'
import {
	makeAcoContent,
	makeCssContent,
	makeDtsContent,
	makeEsmContent
} from '../lib/making.js'
import { getColorData, mapToArray } from '../lib/utils.js'

const outDir = path.resolve(process.cwd(), 'assets')
const palette = new Palette()

const primaryColors = mapToArray(palette.primaryColors).map((color) =>
	getColorData(color, color.key, palette.outSpace)
)
const paletteColors = mapToArray(palette.flatten).map((color) =>
	getColorData(color, color.key, palette.outSpace)
)

// console.log(primaryColors)
;[
	['colors', primaryColors],
	['palette', paletteColors]
].forEach(([listName, list]) => {
	const acoFileName = startCase([palette.name, listName].join(' '))
	logger.debug(`Saving ${acoFileName} to "${outDir}"`)
	;[
		[`${acoFileName}.aco`, makeAcoContent],
		[`${listName}.css`, makeCssContent],
		[`${listName}.d.ts`, makeDtsContent],
		[`${listName}.js`, makeEsmContent]
	].forEach(([file, makeContent]) =>
		writeFile(
			path.join(outDir, file),
			Buffer.from(makeContent(list, listName)),
			'utf8',
			(err) => (err ? logError(err) : logSuccess(file))
		)
	)
})
