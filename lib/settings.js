// @ts-check

/** @typedef {import('../@types').PrimaryKey} PrimaryKey */
/** @typedef {import('../@types').Color.Space} ColorSpace */

/** @type {Readonly<PrimaryKey[]>} */
export const colorKeys = Object.freeze([
	'red',
	'pink',
	'purple',
	'violet',
	'indigo',
	'blue',
	'light-blue',
	'cyan',
	'teal',
	'green',
	'light-green',
	'lime',
	'yellow',
	'amber',
	'orange',
	'deep-orange',
	'brown',
	'gray'
])

/** @type {Readonly<{[K in ColorSpace]: string }>} */
export const colorSpaces = Object.freeze({
	'a98rgb-linear': 'Linear Adobe® 98 RGB compatible',
	'a98rgb': 'Adobe® 98 RGB compatible',
	'acescc': 'ACEScc',
	'acescg': 'ACEScg',
	'cam16-jmh': 'CAM16-JMh',
	'gl': 'OpenGL',
	'hcl': 'HCL',
	'hct': 'HCT',
	'hpluv': 'HPLuv',
	'hsl': 'HSL',
	'hsluv': 'HSLuv',
	'hsv': 'HSV',
	'hwb': 'HWB',
	'ictcp': 'ICTCP',
	'jzazbz': 'Jzazbz',
	'jzczhz': 'JzCzHz',
	'lab-d65': 'Lab D65',
	'lab': 'Lab',
	'lch': 'LCH',
	'lchuv': 'LChuv',
	'luv': 'Luv',
	'okhsl': 'Okhsl',
	'okhsv': 'Okhsv',
	'oklab': 'Oklab',
	'oklch': 'Oklch',
	'oklrab': 'Oklrab',
	'oklrch': 'Oklrch',
	'p3-linear': 'Linear P3',
	'p3': 'P3',
	'prophoto-linear': 'Linear ProPhoto',
	'prophoto': 'ProPhoto',
	'rec2020-linear': 'Linear REC.2020',
	'rec2020': 'REC.2020',
	'rec2100-linear': 'Linear REC.2100',
	'rec2100hlg': 'REC.2100-HLG',
	'rec2100pq': 'REC.2100-PQ',
	'srgb-linear': 'Linear sRGB',
	'srgb': 'sRGB',
	'xyz-abs-d65': 'Absolute XYZ D65',
	'xyz-d50': 'XYZ D50',
	'xyz-d65': 'XYZ D65',
	'xyz': 'XYZ D65'
})

export const WT = Object.freeze({
	accents: [100, 200, 400, 700],
	domain: [0, 1000],
	shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
})
