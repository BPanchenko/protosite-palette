// @ts-check
/** @typedef {import('../@types').Color.Data} ColorData */

import { createAcoFile } from 'adobe-aco'

/**
 * @callback MakeFileContent
 * @param {Array<ColorData>} list
 * @param {'colors' | 'palette'} [listName]
 * A data array that defines colors as key-value pairs.
 * @returns {ArrayBuffer}
 */

/**
 * @param {string} str
 * @returns {ArrayBuffer}
 */
function str2ab(str) {
	var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
	var bufView = new Uint16Array(buf)
	for (var i = 0, strLen = str.length; i < strLen; i++) {
		bufView[i] = str.charCodeAt(i)
	}
	return buf
}

/** @type {MakeFileContent} */
export const makeAcoContent = (list) => {
	const swatches = list.map((item) => [item.rgb, 'rgb', item.name])
	return createAcoFile(swatches)
}

/** @type {MakeFileContent} */
export const makeCssContent = (list) => {
	const rows = [':root {'].concat(
		...list.map((item) => [
			`\t${item['css-variable']}: ${item['css-value']};`,
			`\t${item['css-variable']}-rgb: ${item.rgb};`
		]),
		['}']
	)
	return str2ab(rows.join('\n'))
}

/** @type {MakeFileContent} */
export const makeDtsContent = (list) => {
	const rows = list.map((item) =>
		[`export const ${item['js-variable']}: number;`].join('\n')
	)

	return str2ab(rows.join('\n'))
}

/** @type {MakeFileContent} */
export const makeEsmContent = (list, listName) => {
	const rows = [`/// <reference path="./${listName}.d.ts" />\n`].concat(
		list.map(
			(item) => `export const ${item['js-variable']} = ${item['js-value']};`
		)
	)
	return str2ab(rows.join('\n'))
}
