import startCase from "lodash/startCase.js"
import hex2rgb from "hex2rgb"
import { createAcoFile } from "adobe-aco"

/**
 * @param {*} data
 * @returns {ArrayBuffer}
 */
export default function createAcoFileContent(data) {
	const swatches = Array.from(palette.entries()).map(
		([colorName, paletteColorData]) => {
			const rgb = hex2rgb(paletteColorData.hex).rgb
			return [rgb, "rgb", startCase(colorName)]
		},
	)
	return createAcoFile(swatches)
}
