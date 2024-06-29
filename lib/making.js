// @ts-check

import { createAcoFile } from 'adobe-aco'

/**
 * @callback MakeFileContent
 * @param {Array<ColorData>} data
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
	const str = `:root {
	${list.map((item) => `${item['css-var']}: ${item.hex};`).join('\n	')}
}`

	return str2ab(str)
}

/** @type {MakeFileContent} */
export const makeDtsContent = (list) => {
	const str = list
		.map((item) => `export const ${item['js-const']}: string;`)
		.join('\n')

	return str2ab(str)
}

/** @type {MakeFileContent} */
export const makeEsmContent = (list) => {
	const str = list
		.map((item) => `export const ${item['js-const']} = '${item.hex}';`)
		.join('\n')

	return str2ab(str)
}
