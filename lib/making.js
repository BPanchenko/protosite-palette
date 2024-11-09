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
	const str = `:root {\n${list
		.map((item) =>
			[
				`\t${item['css-variable']}: ${item['css-value']};`,
				`\t${item['css-variable']}-rgb: ${item.rgb};`
			].join('\n')
		)
		.join('\n')}
}`

	return str2ab(str)
}

/** @type {MakeFileContent} */
export const makeDtsContent = (list) => {
	const str = list
		.map((item) =>
			[
				`export const ${item['js-variable']}: string;`,
				`export const ${item['js-variable']}Rgb: Array<number>;`
			].join('\n')
		)
		.join('\n')

	return str2ab(str)
}

/** @type {MakeFileContent} */
export const makeEsmContent = (list) => {
	const str = list
		.map((item) =>
			[
				`export const ${item['js-variable']} = '${item['js-value']}';`,
				`export const ${item['js-variable']}Rgb = [${item.rgb}];`
			].join('\n')
		)
		.join('\n')

	return str2ab(str)
}
