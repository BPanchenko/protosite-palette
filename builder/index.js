import { readFileSync, writeFileSync } from 'node:fs';

import { makeColorDTO } from 'chromatic-chandelier/toolkit.js';
import Handlebars from "handlebars";

import dataset from "../dataset.json" with { type: 'json' };
import packageJSON from "../package.json" with { type: 'json' };
import { logError, logSavedFile, totalSavedFiles } from "./logger.cjs";

const { version } = packageJSON

const length = dataset.data.length
const colorset = Array.from({ length })
for (let idx = 0; idx < length; idx++) {
	const { ident, value } = dataset.data[idx]
	colorset[idx] = await makeColorDTO(value, ident)
	colorset[idx]['digihex'] = colorset[idx]['hex'].replace('#', '0x')
}

const tpl = {
	'css-stylesheet': readFileSync('template/css.stylesheet.hbs', 'utf-8'),
	'esmodule': readFileSync('template/js.esmodule.hbs', 'utf-8'),
	'setup-css-props': readFileSync('template/js.setup-css-props.hbs', 'utf-8'),
}

const entryPoints = [
	['css.stylesheet', {
		template: Handlebars.compile(tpl['css-stylesheet']),
		outfile: '.bundle/lib.protosite-palette.css'
	}],
	['js.setup-css-props', {
		template:Handlebars.compile(tpl['setup-css-props']),
		outfile: '.bundle/setup.protosite-palette.js'
	}],
	['js.esmodule', {
		template: Handlebars.compile(tpl['esmodule']),
		outfile: '.bundle/lib.protosite-palette.mjs'
	}],
];

const assets = entryPoints.map(([specifier, { template, outfile }]) => {
	try {
		const result = template({
			colorset,
			meta: dataset.meta,
			version,
		})
		writeFileSync(outfile, result)
		logSavedFile(specifier)
		return [specifier, 'success']
	} catch (error) {
		logError(error)
		return [specifier, 'fail']
	}
})

totalSavedFiles(assets)

