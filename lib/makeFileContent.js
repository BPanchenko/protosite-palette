// @ts-check

import kebabCase from "lodash/kebabCase.js"
import startCase from "lodash/startCase.js"
import hex2rgb from "hex2rgb"
import { createAcoFile } from "adobe-aco"

/**
 * @callback MakeFileContent
 * @param {Array<import("../").ColorName, import("../").ColorValue>} data - A data object that defines colors as key-value pairs.
 * @returns {ArrayBuffer}
 */

/**
 * @param {string} str
 * @returns {ArrayBuffer}
 */
function str2ab(str) {
	var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
	var bufView = new Uint16Array(buf)
	for (var i = 0, strLen = str.length;i < strLen;i++) {
		bufView[i] = str.charCodeAt(i)
	}
	return buf
}

/** @type {MakeFileContent} */
export const makeAcoContent = (data) => {
	const swatches = data.map(([name, value]) => {
		const rgb = hex2rgb(value).rgb
		return [rgb, "rgb", startCase(name)]
	})
	return createAcoFile(swatches)
}

/** @type {MakeFileContent} */
export const makeCssContent = (data) => {
	const str = `:root {${data
		.map(
			([name, value]) =>
				`--clr-${kebabCase(name).replace("a-", "a")}: ${value};`,
		)
		.join("")}}`
	return str2ab(str)
}

/** @type {MakeFileContent} */
export const makeDtsContent = (data) => {
	const str = data.map(([name]) => `export const ${name}: string;`).join("")
	return str2ab(str)
}

/** @type {MakeFileContent} */
export const makeEsmContent = (data) => {
	const str = data
		.map(([name, value]) => `export const ${name} = '${value}';`)
		.join("")
	return str2ab(str)
}
