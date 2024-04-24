import { logError, logSuccess, logger } from './logger.js'
import {
	makeAcoContent,
	makeCssContent,
	makeDtsContent,
	makeEsmContent
} from '../lib/makeFileContent.js'

import { capitalize } from 'lodash/camelCase'
import getPelette from '../lib/class.Palette.js'
import { getPrimaryColors } from '../lib/utils.js'
import path from 'path'
import { writeFile } from 'node:fs'

const { name } = path.parse(file)
const outDir = getDestinationPath(name)
const palette = getPelette()

logger.debug(`Saving the ${name} palette to "${outDir}"`)
;[
	['colors', palette.primaryColors],
	['palette', palette]
].forEach(([dataName, data]) => {
	const entries = Object.entries(data)

	;[
		[`${capitalize([palette.name, dataName].join('-'))}.aco`, makeAcoContent],
		[`${dataName}.css`, makeCssContent],
		[`${dataName}.d.ts`, makeDtsContent],
		[`${dataName}.js`, makeEsmContent]
	].forEach(([file, makeContent]) =>
		writeFile(
			path.join(outDir, file),
			Buffer.from(makeContent(entries)),
			'utf8',
			(err) => (err ? logError(err) : logSuccess(file))
		)
	)
})
