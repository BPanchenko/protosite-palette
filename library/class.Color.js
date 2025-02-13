/**
 * /[space](channels / alpha)/
 * rgb
 * hsl
 * hwb
 * lab
 * lch
 * oklab
 * oklch
 *
 * /device-[space](channels)/
 * cmyk
 *
 * /color([space] channels / alpha)/
 * srgb
 * srgb-linear
 * display-p3
 * a98-rgb
 * prophoto-rgb
 * rec2020
 * xyz
 * xyz-d50
 * xyz-d65
 */

class Color {
	/**
	 * @param {import("#type/class.Color").InitialValue} value
	 * @param {import("#type/class.Color").InitialSpace} [space]
	 */
	constructor(value, space = 'lab') {}
}

export default Color
