/**
 * @typedef ColorDTO
 * @type {Object}
 * @prop {string} ident
 * @prop {string} name
 * @prop {string} hex
 * @prop {Uint8Array} rgb
 * @prop {string} space
 * @prop {() => string} toString
 * @prop {() => number} valueOf
 */

/**
 * @constant clrBlack
 * @type {ColorDTO}
 */
export const clrBlack = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'black'
	},
	'name': {
		enumerable: true,
		value: 'Black'
	},
	'hex': {
		enumerable: true,
		value: '#191919'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([25,25,25])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.8851rad 8.84% 89.75% / 1)'
	},
	valueOf() {
		return 0x191919
	}
});

/**
 * @constant clrWhite
 * @type {ColorDTO}
 */
export const clrWhite = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'white'
	},
	'name': {
		enumerable: true,
		value: 'White'
	},
	'hex': {
		enumerable: true,
		value: '#ffffff'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([255,255,255])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.0944rad 100% none / 1)'
	},
	valueOf() {
		return 0xffffff
	}
});

/**
 * @constant clrRed
 * @type {ColorDTO}
 */
export const clrRed = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red'
	},
	'name': {
		enumerable: true,
		value: 'Red'
	},
	'hex': {
		enumerable: true,
		value: '#534848'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([83,72,72])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.03948rad 13.33% 31.06% / 1)'
	},
	valueOf() {
		return 0x534848
	}
});

/**
 * @constant clrRed50
 * @type {ColorDTO}
 */
export const clrRed50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-50'
	},
	'name': {
		enumerable: true,
		value: 'Red 50'
	},
	'hex': {
		enumerable: true,
		value: '#cccccc'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([204,204,204])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.25277rad 132.89% 32.48% / 1)'
	},
	valueOf() {
		return 0xcccccc
	}
});

/**
 * @constant clrRed100
 * @type {ColorDTO}
 */
export const clrRed100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-100'
	},
	'name': {
		enumerable: true,
		value: 'Red 100'
	},
	'hex': {
		enumerable: true,
		value: '#c3c3c3'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([195,195,195])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.13078rad 76.51% none / 1)'
	},
	valueOf() {
		return 0xc3c3c3
	}
});

/**
 * @constant clrRed200
 * @type {ColorDTO}
 */
export const clrRed200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-200'
	},
	'name': {
		enumerable: true,
		value: 'Red 200'
	},
	'hex': {
		enumerable: true,
		value: '#8b8b8b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([139,139,139])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.1138rad 54.73% none / 1)'
	},
	valueOf() {
		return 0x8b8b8b
	}
});

/**
 * @constant clrRed300
 * @type {ColorDTO}
 */
export const clrRed300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-300'
	},
	'name': {
		enumerable: true,
		value: 'Red 300'
	},
	'hex': {
		enumerable: true,
		value: '#646161'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([100,97,97])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.09173rad 37.15% 2.94% / 1)'
	},
	valueOf() {
		return 0x646161
	}
});

/**
 * @constant clrRed400
 * @type {ColorDTO}
 */
export const clrRed400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-400'
	},
	'name': {
		enumerable: true,
		value: 'Red 400'
	},
	'hex': {
		enumerable: true,
		value: '#605453'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([96,84,83])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.07521rad 25.5% 16.9% / 1)'
	},
	valueOf() {
		return 0x605453
	}
});

/**
 * @constant clrRed500
 * @type {ColorDTO}
 */
export const clrRed500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-500'
	},
	'name': {
		enumerable: true,
		value: 'Red 500'
	},
	'hex': {
		enumerable: true,
		value: '#544848'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([84,72,72])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.04121rad 13.72% 30.64% / 1)'
	},
	valueOf() {
		return 0x544848
	}
});

/**
 * @constant clrRed600
 * @type {ColorDTO}
 */
export const clrRed600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-600'
	},
	'name': {
		enumerable: true,
		value: 'Red 600'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.1954rad none 44.18% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrRed700
 * @type {ColorDTO}
 */
export const clrRed700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-700'
	},
	'name': {
		enumerable: true,
		value: 'Red 700'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.19121rad none 61.4% / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrRed800
 * @type {ColorDTO}
 */
export const clrRed800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-800'
	},
	'name': {
		enumerable: true,
		value: 'Red 800'
	},
	'hex': {
		enumerable: true,
		value: '#2b2b2b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([43,43,43])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.20709rad none 78.31% / 1)'
	},
	valueOf() {
		return 0x2b2b2b
	}
});

/**
 * @constant clrRed900
 * @type {ColorDTO}
 */
export const clrRed900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-900'
	},
	'name': {
		enumerable: true,
		value: 'Red 900'
	},
	'hex': {
		enumerable: true,
		value: '#101010'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([16,16,16])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.21826rad none 93.27% / 1)'
	},
	valueOf() {
		return 0x101010
	}
});

/**
 * @constant clrRedA100
 * @type {ColorDTO}
 */
export const clrRedA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-a100'
	},
	'name': {
		enumerable: true,
		value: 'Red A100'
	},
	'hex': {
		enumerable: true,
		value: '#858585'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([133,133,133])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.038rad 52.46% none / 1)'
	},
	valueOf() {
		return 0x858585
	}
});

/**
 * @constant clrRedA200
 * @type {ColorDTO}
 */
export const clrRedA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-a200'
	},
	'name': {
		enumerable: true,
		value: 'Red A200'
	},
	'hex': {
		enumerable: true,
		value: '#6e6e6e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([110,110,110])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.2769rad 43.5% none / 1)'
	},
	valueOf() {
		return 0x6e6e6e
	}
});

/**
 * @constant clrRedA400
 * @type {ColorDTO}
 */
export const clrRedA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-a400'
	},
	'name': {
		enumerable: true,
		value: 'Red A400'
	},
	'hex': {
		enumerable: true,
		value: '#000000'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([0,0,0])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.97688rad none none / 1)'
	},
	valueOf() {
		return 0x000000
	}
});

/**
 * @constant clrRedA700
 * @type {ColorDTO}
 */
export const clrRedA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'red-a700'
	},
	'name': {
		enumerable: true,
		value: 'Red A700'
	},
	'hex': {
		enumerable: true,
		value: '#2a2a2a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([42,42,42])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.93028rad none 21.39% / 1)'
	},
	valueOf() {
		return 0x2a2a2a
	}
});

/**
 * @constant clrPink
 * @type {ColorDTO}
 */
export const clrPink = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink'
	},
	'name': {
		enumerable: true,
		value: 'Pink'
	},
	'hex': {
		enumerable: true,
		value: '#a39d9f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([163,157,159])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.88717rad 60.87% 5.71% / 1)'
	},
	valueOf() {
		return 0xa39d9f
	}
});

/**
 * @constant clrPink50
 * @type {ColorDTO}
 */
export const clrPink50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-50'
	},
	'name': {
		enumerable: true,
		value: 'Pink 50'
	},
	'hex': {
		enumerable: true,
		value: '#e1e1e1'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([225,225,225])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.92627rad 88.27% none / 1)'
	},
	valueOf() {
		return 0xe1e1e1
	}
});

/**
 * @constant clrPink100
 * @type {ColorDTO}
 */
export const clrPink100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-100'
	},
	'name': {
		enumerable: true,
		value: 'Pink 100'
	},
	'hex': {
		enumerable: true,
		value: '#c7c7c7'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([199,199,199])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.90899rad 78.43% none / 1)'
	},
	valueOf() {
		return 0xc7c7c7
	}
});

/**
 * @constant clrPink200
 * @type {ColorDTO}
 */
export const clrPink200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-200'
	},
	'name': {
		enumerable: true,
		value: 'Pink 200'
	},
	'hex': {
		enumerable: true,
		value: '#a5a1a2'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([165,161,162])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.88839rad 62.78% 3.62% / 1)'
	},
	valueOf() {
		return 0xa5a1a2
	}
});

/**
 * @constant clrPink300
 * @type {ColorDTO}
 */
export const clrPink300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-300'
	},
	'name': {
		enumerable: true,
		value: 'Pink 300'
	},
	'hex': {
		enumerable: true,
		value: '#96888d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([150,136,141])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.87949rad 50.64% 16.95% / 1)'
	},
	valueOf() {
		return 0x96888d
	}
});

/**
 * @constant clrPink400
 * @type {ColorDTO}
 */
export const clrPink400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-400'
	},
	'name': {
		enumerable: true,
		value: 'Pink 400'
	},
	'hex': {
		enumerable: true,
		value: '#847179'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([132,113,121])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.8671rad 38.88% 29.98% / 1)'
	},
	valueOf() {
		return 0x847179
	}
});

/**
 * @constant clrPink500
 * @type {ColorDTO}
 */
export const clrPink500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-500'
	},
	'name': {
		enumerable: true,
		value: 'Pink 500'
	},
	'hex': {
		enumerable: true,
		value: '#6f5d65'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([111,93,101])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.8493rad 27.49% 42.69% / 1)'
	},
	valueOf() {
		return 0x6f5d65
	}
});

/**
 * @constant clrPink600
 * @type {ColorDTO}
 */
export const clrPink600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-600'
	},
	'name': {
		enumerable: true,
		value: 'Pink 600'
	},
	'hex': {
		enumerable: true,
		value: '#574c51'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([87,76,81])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.8198rad 16.34% 55.08% / 1)'
	},
	valueOf() {
		return 0x574c51
	}
});

/**
 * @constant clrPink700
 * @type {ColorDTO}
 */
export const clrPink700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-700'
	},
	'name': {
		enumerable: true,
		value: 'Pink 700'
	},
	'hex': {
		enumerable: true,
		value: '#3c3a3b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,58,59])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.75365rad 4.36% 67.14% / 1)'
	},
	valueOf() {
		return 0x3c3a3b
	}
});

/**
 * @constant clrPink800
 * @type {ColorDTO}
 */
export const clrPink800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-800'
	},
	'name': {
		enumerable: true,
		value: 'Pink 800'
	},
	'hex': {
		enumerable: true,
		value: '#292929'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([41,41,41])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.73777rad none 79.46% / 1)'
	},
	valueOf() {
		return 0x292929
	}
});

/**
 * @constant clrPink900
 * @type {ColorDTO}
 */
export const clrPink900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-900'
	},
	'name': {
		enumerable: true,
		value: 'Pink 900'
	},
	'hex': {
		enumerable: true,
		value: '#0e0e0e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([14,14,14])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.95rad none 93.76% / 1)'
	},
	valueOf() {
		return 0x0e0e0e
	}
});

/**
 * @constant clrPinkA100
 * @type {ColorDTO}
 */
export const clrPinkA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-a100'
	},
	'name': {
		enumerable: true,
		value: 'Pink A100'
	},
	'hex': {
		enumerable: true,
		value: '#8d8d8d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([141,141,141])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.85837rad 55.58% none / 1)'
	},
	valueOf() {
		return 0x8d8d8d
	}
});

/**
 * @constant clrPinkA200
 * @type {ColorDTO}
 */
export const clrPinkA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-a200'
	},
	'name': {
		enumerable: true,
		value: 'Pink A200'
	},
	'hex': {
		enumerable: true,
		value: '#707070'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([112,112,112])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.82678rad 44.31% none / 1)'
	},
	valueOf() {
		return 0x707070
	}
});

/**
 * @constant clrPinkA400
 * @type {ColorDTO}
 */
export const clrPinkA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-a400'
	},
	'name': {
		enumerable: true,
		value: 'Pink A400'
	},
	'hex': {
		enumerable: true,
		value: '#000000'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([0,0,0])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.6334rad none none / 1)'
	},
	valueOf() {
		return 0x000000
	}
});

/**
 * @constant clrPinkA700
 * @type {ColorDTO}
 */
export const clrPinkA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'pink-a700'
	},
	'name': {
		enumerable: true,
		value: 'Pink A700'
	},
	'hex': {
		enumerable: true,
		value: '#292929'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([41,41,41])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.62973rad none 20.52% / 1)'
	},
	valueOf() {
		return 0x292929
	}
});

/**
 * @constant clrPurple
 * @type {ColorDTO}
 */
export const clrPurple = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple'
	},
	'name': {
		enumerable: true,
		value: 'Purple'
	},
	'hex': {
		enumerable: true,
		value: '#584b55'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([88,75,85])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.42832rad 17.8% 24.84% / 1)'
	},
	valueOf() {
		return 0x584b55
	}
});

/**
 * @constant clrPurple50
 * @type {ColorDTO}
 */
export const clrPurple50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-50'
	},
	'name': {
		enumerable: true,
		value: 'Purple 50'
	},
	'hex': {
		enumerable: true,
		value: '#dfdfdf'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([223,223,223])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.54439rad 87.73% none / 1)'
	},
	valueOf() {
		return 0xdfdfdf
	}
});

/**
 * @constant clrPurple100
 * @type {ColorDTO}
 */
export const clrPurple100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-100'
	},
	'name': {
		enumerable: true,
		value: 'Purple 100'
	},
	'hex': {
		enumerable: true,
		value: '#c4c4c4'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([196,196,196])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.52519rad 77.18% none / 1)'
	},
	valueOf() {
		return 0xc4c4c4
	}
});

/**
 * @constant clrPurple200
 * @type {ColorDTO}
 */
export const clrPurple200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-200'
	},
	'name': {
		enumerable: true,
		value: 'Purple 200'
	},
	'hex': {
		enumerable: true,
		value: '#878787'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([135,135,135])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.47894rad 53.04% none / 1)'
	},
	valueOf() {
		return 0x878787
	}
});

/**
 * @constant clrPurple300
 * @type {ColorDTO}
 */
export const clrPurple300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-300'
	},
	'name': {
		enumerable: true,
		value: 'Purple 300'
	},
	'hex': {
		enumerable: true,
		value: '#6a6268'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([106,98,104])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.45538rad 36.24% 6.93% / 1)'
	},
	valueOf() {
		return 0x6a6268
	}
});

/**
 * @constant clrPurple400
 * @type {ColorDTO}
 */
export const clrPurple400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-400'
	},
	'name': {
		enumerable: true,
		value: 'Purple 400'
	},
	'hex': {
		enumerable: true,
		value: '#5e505b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([94,80,91])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.43635rad 22.49% 20.66% / 1)'
	},
	valueOf() {
		return 0x5e505b
	}
});

/**
 * @constant clrPurple500
 * @type {ColorDTO}
 */
export const clrPurple500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-500'
	},
	'name': {
		enumerable: true,
		value: 'Purple 500'
	},
	'hex': {
		enumerable: true,
		value: '#3e3c3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,60,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.39621rad 2.37% 34.17% / 1)'
	},
	valueOf() {
		return 0x3e3c3e
	}
});

/**
 * @constant clrPurple600
 * @type {ColorDTO}
 */
export const clrPurple600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-600'
	},
	'name': {
		enumerable: true,
		value: 'Purple 600'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.37509rad none 49.28% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrPurple700
 * @type {ColorDTO}
 */
export const clrPurple700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-700'
	},
	'name': {
		enumerable: true,
		value: 'Purple 700'
	},
	'hex': {
		enumerable: true,
		value: '#393939'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([57,57,57])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.38329rad none 65.79% / 1)'
	},
	valueOf() {
		return 0x393939
	}
});

/**
 * @constant clrPurple800
 * @type {ColorDTO}
 */
export const clrPurple800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-800'
	},
	'name': {
		enumerable: true,
		value: 'Purple 800'
	},
	'hex': {
		enumerable: true,
		value: '#272727'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([39,39,39])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.40616rad none 81.02% / 1)'
	},
	valueOf() {
		return 0x272727
	}
});

/**
 * @constant clrPurple900
 * @type {ColorDTO}
 */
export const clrPurple900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-900'
	},
	'name': {
		enumerable: true,
		value: 'Purple 900'
	},
	'hex': {
		enumerable: true,
		value: '#0d0d0d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([13,13,13])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.5135rad none 94.53% / 1)'
	},
	valueOf() {
		return 0x0d0d0d
	}
});

/**
 * @constant clrPurpleA100
 * @type {ColorDTO}
 */
export const clrPurpleA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-a100'
	},
	'name': {
		enumerable: true,
		value: 'Purple A100'
	},
	'hex': {
		enumerable: true,
		value: '#898989'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([137,137,137])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.48121rad 53.76% none / 1)'
	},
	valueOf() {
		return 0x898989
	}
});

/**
 * @constant clrPurpleA200
 * @type {ColorDTO}
 */
export const clrPurpleA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-a200'
	},
	'name': {
		enumerable: true,
		value: 'Purple A200'
	},
	'hex': {
		enumerable: true,
		value: '#676767'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([103,103,103])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.45625rad 40.74% none / 1)'
	},
	valueOf() {
		return 0x676767
	}
});

/**
 * @constant clrPurpleA400
 * @type {ColorDTO}
 */
export const clrPurpleA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-a400'
	},
	'name': {
		enumerable: true,
		value: 'Purple A400'
	},
	'hex': {
		enumerable: true,
		value: '#000000'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([0,0,0])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.36828rad none none / 1)'
	},
	valueOf() {
		return 0x000000
	}
});

/**
 * @constant clrPurpleA700
 * @type {ColorDTO}
 */
export const clrPurpleA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'purple-a700'
	},
	'name': {
		enumerable: true,
		value: 'Purple A700'
	},
	'hex': {
		enumerable: true,
		value: '#2c2c2c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([44,44,44])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.37108rad none 22.79% / 1)'
	},
	valueOf() {
		return 0x2c2c2c
	}
});

/**
 * @constant clrViolet
 * @type {ColorDTO}
 */
export const clrViolet = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet'
	},
	'name': {
		enumerable: true,
		value: 'Violet'
	},
	'hex': {
		enumerable: true,
		value: '#322f34'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([50,47,52])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.85079rad 10.86% 11.01% / 1)'
	},
	valueOf() {
		return 0x322f34
	}
});

/**
 * @constant clrViolet50
 * @type {ColorDTO}
 */
export const clrViolet50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-50'
	},
	'name': {
		enumerable: true,
		value: 'Violet 50'
	},
	'hex': {
		enumerable: true,
		value: '#d4d4d4'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([212,212,212])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.61939rad 146.53% 29.07% / 1)'
	},
	valueOf() {
		return 0xd4d4d4
	}
});

/**
 * @constant clrViolet100
 * @type {ColorDTO}
 */
export const clrViolet100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-100'
	},
	'name': {
		enumerable: true,
		value: 'Violet 100'
	},
	'hex': {
		enumerable: true,
		value: '#cacaca'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([202,202,202])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.62398rad 139.23% 35.81% / 1)'
	},
	valueOf() {
		return 0xcacaca
	}
});

/**
 * @constant clrViolet200
 * @type {ColorDTO}
 */
export const clrViolet200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-200'
	},
	'name': {
		enumerable: true,
		value: 'Violet 200'
	},
	'hex': {
		enumerable: true,
		value: '#a0a0a0'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([160,160,160])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.73752rad 63.13% none / 1)'
	},
	valueOf() {
		return 0xa0a0a0
	}
});

/**
 * @constant clrViolet300
 * @type {ColorDTO}
 */
export const clrViolet300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-300'
	},
	'name': {
		enumerable: true,
		value: 'Violet 300'
	},
	'hex': {
		enumerable: true,
		value: '#6b6b6b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([107,107,107])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.77644rad 42.26% none / 1)'
	},
	valueOf() {
		return 0x6b6b6b
	}
});

/**
 * @constant clrViolet400
 * @type {ColorDTO}
 */
export const clrViolet400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-400'
	},
	'name': {
		enumerable: true,
		value: 'Violet 400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3c3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,60,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.82077rad 21.89% 3.37% / 1)'
	},
	valueOf() {
		return 0x3e3c3f
	}
});

/**
 * @constant clrViolet500
 * @type {ColorDTO}
 */
export const clrViolet500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-500'
	},
	'name': {
		enumerable: true,
		value: 'Violet 500'
	},
	'hex': {
		enumerable: true,
		value: '#242424'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([36,36,36])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.90752rad none 17.08% / 1)'
	},
	valueOf() {
		return 0x242424
	}
});

/**
 * @constant clrViolet600
 * @type {ColorDTO}
 */
export const clrViolet600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-600'
	},
	'name': {
		enumerable: true,
		value: 'Violet 600'
	},
	'hex': {
		enumerable: true,
		value: '#3b3b3b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([59,59,59])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.90734rad none 37.31% / 1)'
	},
	valueOf() {
		return 0x3b3b3b
	}
});

/**
 * @constant clrViolet700
 * @type {ColorDTO}
 */
export const clrViolet700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-700'
	},
	'name': {
		enumerable: true,
		value: 'Violet 700'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.89163rad none 57.04% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrViolet800
 * @type {ColorDTO}
 */
export const clrViolet800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-800'
	},
	'name': {
		enumerable: true,
		value: 'Violet 800'
	},
	'hex': {
		enumerable: true,
		value: '#2f2f2f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([47,47,47])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.84835rad none 75.24% / 1)'
	},
	valueOf() {
		return 0x2f2f2f
	}
});

/**
 * @constant clrViolet900
 * @type {ColorDTO}
 */
export const clrViolet900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-900'
	},
	'name': {
		enumerable: true,
		value: 'Violet 900'
	},
	'hex': {
		enumerable: true,
		value: '#131313'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([19,19,19])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.66788rad none 91.52% / 1)'
	},
	valueOf() {
		return 0x131313
	}
});

/**
 * @constant clrVioletA100
 * @type {ColorDTO}
 */
export const clrVioletA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-a100'
	},
	'name': {
		enumerable: true,
		value: 'Violet A100'
	},
	'hex': {
		enumerable: true,
		value: '#a2a2a2'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([162,162,162])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.73805rad 63.87% none / 1)'
	},
	valueOf() {
		return 0xa2a2a2
	}
});

/**
 * @constant clrVioletA200
 * @type {ColorDTO}
 */
export const clrVioletA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-a200'
	},
	'name': {
		enumerable: true,
		value: 'Violet A200'
	},
	'hex': {
		enumerable: true,
		value: '#8e8e8e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([142,142,142])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.73874rad 55.94% none / 1)'
	},
	valueOf() {
		return 0x8e8e8e
	}
});

/**
 * @constant clrVioletA400
 * @type {ColorDTO}
 */
export const clrVioletA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-a400'
	},
	'name': {
		enumerable: true,
		value: 'Violet A400'
	},
	'hex': {
		enumerable: true,
		value: '#626262'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([98,98,98])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.74642rad 38.57% none / 1)'
	},
	valueOf() {
		return 0x626262
	}
});

/**
 * @constant clrVioletA700
 * @type {ColorDTO}
 */
export const clrVioletA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'violet-a700'
	},
	'name': {
		enumerable: true,
		value: 'Violet A700'
	},
	'hex': {
		enumerable: true,
		value: '#000000'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([0,0,0])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.84783rad none none / 1)'
	},
	valueOf() {
		return 0x000000
	}
});

/**
 * @constant clrIndigo
 * @type {ColorDTO}
 */
export const clrIndigo = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo'
	},
	'name': {
		enumerable: true,
		value: 'Indigo'
	},
	'hex': {
		enumerable: true,
		value: '#46444b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([70,68,75])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.46141rad 7.98% 55.91% / 1)'
	},
	valueOf() {
		return 0x46444b
	}
});

/**
 * @constant clrIndigo50
 * @type {ColorDTO}
 */
export const clrIndigo50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-50'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 50'
	},
	'hex': {
		enumerable: true,
		value: '#e9e9e9'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([233,233,233])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.09764rad 130.13% 12.13% / 1)'
	},
	valueOf() {
		return 0xe9e9e9
	}
});

/**
 * @constant clrIndigo100
 * @type {ColorDTO}
 */
export const clrIndigo100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-100'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 100'
	},
	'hex': {
		enumerable: true,
		value: '#dddddd'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([221,221,221])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.10209rad 123.1% 18.63% / 1)'
	},
	valueOf() {
		return 0xdddddd
	}
});

/**
 * @constant clrIndigo200
 * @type {ColorDTO}
 */
export const clrIndigo200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-200'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 200'
	},
	'hex': {
		enumerable: true,
		value: '#b1b1b1'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([177,177,177])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.24324rad 69.51% none / 1)'
	},
	valueOf() {
		return 0xb1b1b1
	}
});

/**
 * @constant clrIndigo300
 * @type {ColorDTO}
 */
export const clrIndigo300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-300'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 300'
	},
	'hex': {
		enumerable: true,
		value: '#919196'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([145,145,150])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.26873rad 56.17% 4.37% / 1)'
	},
	valueOf() {
		return 0x919196
	}
});

/**
 * @constant clrIndigo400
 * @type {ColorDTO}
 */
export const clrIndigo400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-400'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 400'
	},
	'hex': {
		enumerable: true,
		value: '#7b7a89'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([123,122,137])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.28845rad 44.07% 17.67% / 1)'
	},
	valueOf() {
		return 0x7b7a89
	}
});

/**
 * @constant clrIndigo500
 * @type {ColorDTO}
 */
export const clrIndigo500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-500'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 500'
	},
	'hex': {
		enumerable: true,
		value: '#686578'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([104,101,120])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.31742rad 32.28% 30.67% / 1)'
	},
	valueOf() {
		return 0x686578
	}
});

/**
 * @constant clrIndigo600
 * @type {ColorDTO}
 */
export const clrIndigo600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-600'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 600'
	},
	'hex': {
		enumerable: true,
		value: '#565464'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([86,84,100])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.36472rad 20.64% 43.35% / 1)'
	},
	valueOf() {
		return 0x565464
	}
});

/**
 * @constant clrIndigo700
 * @type {ColorDTO}
 */
export const clrIndigo700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-700'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 700'
	},
	'hex': {
		enumerable: true,
		value: '#46444b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([70,68,75])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.45879rad 8.23% 55.69% / 1)'
	},
	valueOf() {
		return 0x46444b
	}
});

/**
 * @constant clrIndigo800
 * @type {ColorDTO}
 */
export const clrIndigo800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-800'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 800'
	},
	'hex': {
		enumerable: true,
		value: '#353535'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([53,53,53])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.57433rad none 69.59% / 1)'
	},
	valueOf() {
		return 0x353535
	}
});

/**
 * @constant clrIndigo900
 * @type {ColorDTO}
 */
export const clrIndigo900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-900'
	},
	'name': {
		enumerable: true,
		value: 'Indigo 900'
	},
	'hex': {
		enumerable: true,
		value: '#191919'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([25,25,25])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.41446rad none 88.91% / 1)'
	},
	valueOf() {
		return 0x191919
	}
});

/**
 * @constant clrIndigoA100
 * @type {ColorDTO}
 */
export const clrIndigoA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-a100'
	},
	'name': {
		enumerable: true,
		value: 'Indigo A100'
	},
	'hex': {
		enumerable: true,
		value: '#bcbcbc'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([188,188,188])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.32851rad 160.32% 56.7% / 1)'
	},
	valueOf() {
		return 0xbcbcbc
	}
});

/**
 * @constant clrIndigoA200
 * @type {ColorDTO}
 */
export const clrIndigoA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-a200'
	},
	'name': {
		enumerable: true,
		value: 'Indigo A200'
	},
	'hex': {
		enumerable: true,
		value: '#a0a0a0'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([160,160,160])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.26419rad 62.94% none / 1)'
	},
	valueOf() {
		return 0xa0a0a0
	}
});

/**
 * @constant clrIndigoA400
 * @type {ColorDTO}
 */
export const clrIndigoA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-a400'
	},
	'name': {
		enumerable: true,
		value: 'Indigo A400'
	},
	'hex': {
		enumerable: true,
		value: '#808080'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([128,128,128])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.23574rad 50.21% none / 1)'
	},
	valueOf() {
		return 0x808080
	}
});

/**
 * @constant clrIndigoA700
 * @type {ColorDTO}
 */
export const clrIndigoA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'indigo-a700'
	},
	'name': {
		enumerable: true,
		value: 'Indigo A700'
	},
	'hex': {
		enumerable: true,
		value: '#474747'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([71,71,71])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.16889rad 27.97% none / 1)'
	},
	valueOf() {
		return 0x474747
	}
});

/**
 * @constant clrBlue
 * @type {ColorDTO}
 */
export const clrBlue = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue'
	},
	'name': {
		enumerable: true,
		value: 'Blue'
	},
	'hex': {
		enumerable: true,
		value: '#5f6070'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([95,96,112])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.1565rad 29.4% 25.25% / 1)'
	},
	valueOf() {
		return 0x5f6070
	}
});

/**
 * @constant clrBlue50
 * @type {ColorDTO}
 */
export const clrBlue50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-50'
	},
	'name': {
		enumerable: true,
		value: 'Blue 50'
	},
	'hex': {
		enumerable: true,
		value: '#e1e1e1'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([225,225,225])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.91906rad 138.38% 18.07% / 1)'
	},
	valueOf() {
		return 0xe1e1e1
	}
});

/**
 * @constant clrBlue100
 * @type {ColorDTO}
 */
export const clrBlue100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-100'
	},
	'name': {
		enumerable: true,
		value: 'Blue 100'
	},
	'hex': {
		enumerable: true,
		value: '#d7d7d7'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([215,215,215])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.92342rad 131.22% 24.3% / 1)'
	},
	valueOf() {
		return 0xd7d7d7
	}
});

/**
 * @constant clrBlue200
 * @type {ColorDTO}
 */
export const clrBlue200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-200'
	},
	'name': {
		enumerable: true,
		value: 'Blue 200'
	},
	'hex': {
		enumerable: true,
		value: '#a8a8a8'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([168,168,168])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.05004rad 66.21% none / 1)'
	},
	valueOf() {
		return 0xa8a8a8
	}
});

/**
 * @constant clrBlue300
 * @type {ColorDTO}
 */
export const clrBlue300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-300'
	},
	'name': {
		enumerable: true,
		value: 'Blue 300'
	},
	'hex': {
		enumerable: true,
		value: '#848484'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([132,132,132])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.09123rad 51.93% none / 1)'
	},
	valueOf() {
		return 0x848484
	}
});

/**
 * @constant clrBlue400
 * @type {ColorDTO}
 */
export const clrBlue400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-400'
	},
	'name': {
		enumerable: true,
		value: 'Blue 400'
	},
	'hex': {
		enumerable: true,
		value: '#6f707a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([111,112,122])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.11392rad 40.86% 10.42% / 1)'
	},
	valueOf() {
		return 0x6f707a
	}
});

/**
 * @constant clrBlue500
 * @type {ColorDTO}
 */
export const clrBlue500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-500'
	},
	'name': {
		enumerable: true,
		value: 'Blue 500'
	},
	'hex': {
		enumerable: true,
		value: '#616171'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([97,97,113])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.15074rad 30.51% 23.76% / 1)'
	},
	valueOf() {
		return 0x616171
	}
});

/**
 * @constant clrBlue600
 * @type {ColorDTO}
 */
export const clrBlue600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-600'
	},
	'name': {
		enumerable: true,
		value: 'Blue 600'
	},
	'hex': {
		enumerable: true,
		value: '#535363'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([83,83,99])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.22021rad 19.84% 36.81% / 1)'
	},
	valueOf() {
		return 0x535363
	}
});

/**
 * @constant clrBlue700
 * @type {ColorDTO}
 */
export const clrBlue700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-700'
	},
	'name': {
		enumerable: true,
		value: 'Blue 700'
	},
	'hex': {
		enumerable: true,
		value: '#444348'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([68,67,72])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.3806rad 4.96% 49.56% / 1)'
	},
	valueOf() {
		return 0x444348
	}
});

/**
 * @constant clrBlue800
 * @type {ColorDTO}
 */
export const clrBlue800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-800'
	},
	'name': {
		enumerable: true,
		value: 'Blue 800'
	},
	'hex': {
		enumerable: true,
		value: '#373737'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([55,55,55])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.46403rad none 67.61% / 1)'
	},
	valueOf() {
		return 0x373737
	}
});

/**
 * @constant clrBlue900
 * @type {ColorDTO}
 */
export const clrBlue900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-900'
	},
	'name': {
		enumerable: true,
		value: 'Blue 900'
	},
	'hex': {
		enumerable: true,
		value: '#1a1a1a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([26,26,26])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(4.34273rad none 88.21% / 1)'
	},
	valueOf() {
		return 0x1a1a1a
	}
});

/**
 * @constant clrBlueA100
 * @type {ColorDTO}
 */
export const clrBlueA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-a100'
	},
	'name': {
		enumerable: true,
		value: 'Blue A100'
	},
	'hex': {
		enumerable: true,
		value: '#949494'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([148,148,148])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.86782rad 58.37% none / 1)'
	},
	valueOf() {
		return 0x949494
	}
});

/**
 * @constant clrBlueA200
 * @type {ColorDTO}
 */
export const clrBlueA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-a200'
	},
	'name': {
		enumerable: true,
		value: 'Blue A200'
	},
	'hex': {
		enumerable: true,
		value: '#7b7b7b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([123,123,123])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.83658rad 48.36% none / 1)'
	},
	valueOf() {
		return 0x7b7b7b
	}
});

/**
 * @constant clrBlueA400
 * @type {ColorDTO}
 */
export const clrBlueA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-a400'
	},
	'name': {
		enumerable: true,
		value: 'Blue A400'
	},
	'hex': {
		enumerable: true,
		value: '#313131'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([49,49,49])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.72453rad 19.31% none / 1)'
	},
	valueOf() {
		return 0x313131
	}
});

/**
 * @constant clrBlueA700
 * @type {ColorDTO}
 */
export const clrBlueA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'blue-a700'
	},
	'name': {
		enumerable: true,
		value: 'Blue A700'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.45907rad none 30.62% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrLightBlue
 * @type {ColorDTO}
 */
export const clrLightBlue = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue'
	},
	'hex': {
		enumerable: true,
		value: '#4b4b4b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([75,75,75])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.52225rad 29.42% none / 1)'
	},
	valueOf() {
		return 0x4b4b4b
	}
});

/**
 * @constant clrLightBlue50
 * @type {ColorDTO}
 */
export const clrLightBlue50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-50'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 50'
	},
	'hex': {
		enumerable: true,
		value: '#d2d2d2'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([210,210,210])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.56571rad 82.57% none / 1)'
	},
	valueOf() {
		return 0xd2d2d2
	}
});

/**
 * @constant clrLightBlue100
 * @type {ColorDTO}
 */
export const clrLightBlue100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-100'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 100'
	},
	'hex': {
		enumerable: true,
		value: '#afafaf'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([175,175,175])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.5596rad 68.92% none / 1)'
	},
	valueOf() {
		return 0xafafaf
	}
});

/**
 * @constant clrLightBlue200
 * @type {ColorDTO}
 */
export const clrLightBlue200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-200'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 200'
	},
	'hex': {
		enumerable: true,
		value: '#5e5e5e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([94,94,94])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.5315rad 36.89% none / 1)'
	},
	valueOf() {
		return 0x5e5e5e
	}
});

/**
 * @constant clrLightBlue300
 * @type {ColorDTO}
 */
export const clrLightBlue300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-300'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 300'
	},
	'hex': {
		enumerable: true,
		value: '#3d4143'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,65,67])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.50724rad 19.34% 8.34% / 1)'
	},
	valueOf() {
		return 0x3d4143
	}
});

/**
 * @constant clrLightBlue400
 * @type {ColorDTO}
 */
export const clrLightBlue400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-400'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 400'
	},
	'hex': {
		enumerable: true,
		value: '#2b2b2b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([43,43,43])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.43481rad none 21.48% / 1)'
	},
	valueOf() {
		return 0x2b2b2b
	}
});

/**
 * @constant clrLightBlue500
 * @type {ColorDTO}
 */
export const clrLightBlue500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-500'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 500'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.44004rad none 38.12% / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrLightBlue600
 * @type {ColorDTO}
 */
export const clrLightBlue600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-600'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 600'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.45121rad none 53.86% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrLightBlue700
 * @type {ColorDTO}
 */
export const clrLightBlue700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-700'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 700'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.47757rad none 68.54% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrLightBlue800
 * @type {ColorDTO}
 */
export const clrLightBlue800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-800'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 800'
	},
	'hex': {
		enumerable: true,
		value: '#252525'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([37,37,37])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.55541rad none 81.89% / 1)'
	},
	valueOf() {
		return 0x252525
	}
});

/**
 * @constant clrLightBlue900
 * @type {ColorDTO}
 */
export const clrLightBlue900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-900'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue 900'
	},
	'hex': {
		enumerable: true,
		value: '#0e0e0e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([14,14,14])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.82524rad none 94.04% / 1)'
	},
	valueOf() {
		return 0x0e0e0e
	}
});

/**
 * @constant clrLightBlueA100
 * @type {ColorDTO}
 */
export const clrLightBlueA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-a100'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue A100'
	},
	'hex': {
		enumerable: true,
		value: '#222222'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([34,34,34])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.24527rad none 16.03% / 1)'
	},
	valueOf() {
		return 0x222222
	}
});

/**
 * @constant clrLightBlueA200
 * @type {ColorDTO}
 */
export const clrLightBlueA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-a200'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue A200'
	},
	'hex': {
		enumerable: true,
		value: '#313131'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([49,49,49])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.21769rad none 26.45% / 1)'
	},
	valueOf() {
		return 0x313131
	}
});

/**
 * @constant clrLightBlueA400
 * @type {ColorDTO}
 */
export const clrLightBlueA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-a400'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue A400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.13025rad none 56.24% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrLightBlueA700
 * @type {ColorDTO}
 */
export const clrLightBlueA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-blue-a700'
	},
	'name': {
		enumerable: true,
		value: 'Light Blue A700'
	},
	'hex': {
		enumerable: true,
		value: '#353535'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([53,53,53])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.1313rad none 69.85% / 1)'
	},
	valueOf() {
		return 0x353535
	}
});

/**
 * @constant clrCyan
 * @type {ColorDTO}
 */
export const clrCyan = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan'
	},
	'name': {
		enumerable: true,
		value: 'Cyan'
	},
	'hex': {
		enumerable: true,
		value: '#4c5858'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([76,88,88])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.11838rad 20.79% 19.14% / 1)'
	},
	valueOf() {
		return 0x4c5858
	}
});

/**
 * @constant clrCyan50
 * @type {ColorDTO}
 */
export const clrCyan50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-50'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 50'
	},
	'hex': {
		enumerable: true,
		value: '#8a8a8a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([138,138,138])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.10773rad 54.47% none / 1)'
	},
	valueOf() {
		return 0x8a8a8a
	}
});

/**
 * @constant clrCyan100
 * @type {ColorDTO}
 */
export const clrCyan100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-100'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 100'
	},
	'hex': {
		enumerable: true,
		value: '#6c6f6f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([108,111,111])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.11245rad 41.58% 2.89% / 1)'
	},
	valueOf() {
		return 0x6c6f6f
	}
});

/**
 * @constant clrCyan200
 * @type {ColorDTO}
 */
export const clrCyan200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-200'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 200'
	},
	'hex': {
		enumerable: true,
		value: '#525e5e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([82,94,94])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.11698rad 25.48% 15.98% / 1)'
	},
	valueOf() {
		return 0x525e5e
	}
});

/**
 * @constant clrCyan300
 * @type {ColorDTO}
 */
export const clrCyan300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-300'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 300'
	},
	'hex': {
		enumerable: true,
		value: '#343434'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([52,52,52])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.12588rad none 28.73% / 1)'
	},
	valueOf() {
		return 0x343434
	}
});

/**
 * @constant clrCyan400
 * @type {ColorDTO}
 */
export const clrCyan400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-400'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 400'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.1292rad none 41.13% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrCyan500
 * @type {ColorDTO}
 */
export const clrCyan500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-500'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.12938rad none 54.06% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrCyan600
 * @type {ColorDTO}
 */
export const clrCyan600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-600'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 600'
	},
	'hex': {
		enumerable: true,
		value: '#383838'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([56,56,56])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.12938rad none 66.38% / 1)'
	},
	valueOf() {
		return 0x383838
	}
});

/**
 * @constant clrCyan700
 * @type {ColorDTO}
 */
export const clrCyan700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-700'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 700'
	},
	'hex': {
		enumerable: true,
		value: '#2b2b2b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([43,43,43])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.12955rad none 77.96% / 1)'
	},
	valueOf() {
		return 0x2b2b2b
	}
});

/**
 * @constant clrCyan800
 * @type {ColorDTO}
 */
export const clrCyan800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-800'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 800'
	},
	'hex': {
		enumerable: true,
		value: '#191919'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([25,25,25])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.1299rad none 88.63% / 1)'
	},
	valueOf() {
		return 0x191919
	}
});

/**
 * @constant clrCyan900
 * @type {ColorDTO}
 */
export const clrCyan900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-900'
	},
	'name': {
		enumerable: true,
		value: 'Cyan 900'
	},
	'hex': {
		enumerable: true,
		value: '#050505'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([5,5,5])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.14002rad none 97.8% / 1)'
	},
	valueOf() {
		return 0x050505
	}
});

/**
 * @constant clrCyanA100
 * @type {ColorDTO}
 */
export const clrCyanA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-a100'
	},
	'name': {
		enumerable: true,
		value: 'Cyan A100'
	},
	'hex': {
		enumerable: true,
		value: '#323232'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([50,50,50])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.13671rad none 27.32% / 1)'
	},
	valueOf() {
		return 0x323232
	}
});

/**
 * @constant clrCyanA200
 * @type {ColorDTO}
 */
export const clrCyanA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-a200'
	},
	'name': {
		enumerable: true,
		value: 'Cyan A200'
	},
	'hex': {
		enumerable: true,
		value: '#383838'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([56,56,56])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.13723rad none 33.16% / 1)'
	},
	valueOf() {
		return 0x383838
	}
});

/**
 * @constant clrCyanA400
 * @type {ColorDTO}
 */
export const clrCyanA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-a400'
	},
	'name': {
		enumerable: true,
		value: 'Cyan A400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.13845rad none 44.56% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrCyanA700
 * @type {ColorDTO}
 */
export const clrCyanA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'cyan-a700'
	},
	'name': {
		enumerable: true,
		value: 'Cyan A700'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.1402rad none 60.88% / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrTeal
 * @type {ColorDTO}
 */
export const clrTeal = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal'
	},
	'name': {
		enumerable: true,
		value: 'Teal'
	},
	'hex': {
		enumerable: true,
		value: '#4b5856'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([75,88,86])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.95327rad 13.71% 41.02% / 1)'
	},
	valueOf() {
		return 0x4b5856
	}
});

/**
 * @constant clrTeal50
 * @type {ColorDTO}
 */
export const clrTeal50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-50'
	},
	'name': {
		enumerable: true,
		value: 'Teal 50'
	},
	'hex': {
		enumerable: true,
		value: '#9d9d9d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([157,157,157])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.89794rad 61.85% none / 1)'
	},
	valueOf() {
		return 0x9d9d9d
	}
});

/**
 * @constant clrTeal100
 * @type {ColorDTO}
 */
export const clrTeal100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-100'
	},
	'name': {
		enumerable: true,
		value: 'Teal 100'
	},
	'hex': {
		enumerable: true,
		value: '#8e9392'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([142,147,146])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.90213rad 55.26% 3.96% / 1)'
	},
	valueOf() {
		return 0x8e9392
	}
});

/**
 * @constant clrTeal200
 * @type {ColorDTO}
 */
export const clrTeal200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-200'
	},
	'name': {
		enumerable: true,
		value: 'Teal 200'
	},
	'hex': {
		enumerable: true,
		value: '#758481'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([117,132,129])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.91243rad 42.06% 16.98% / 1)'
	},
	valueOf() {
		return 0x758481
	}
});

/**
 * @constant clrTeal300
 * @type {ColorDTO}
 */
export const clrTeal300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-300'
	},
	'name': {
		enumerable: true,
		value: 'Teal 300'
	},
	'hex': {
		enumerable: true,
		value: '#5f716d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([95,113,109])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.92779rad 28.43% 29.64% / 1)'
	},
	valueOf() {
		return 0x5f716d
	}
});

/**
 * @constant clrTeal400
 * @type {ColorDTO}
 */
export const clrTeal400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-400'
	},
	'name': {
		enumerable: true,
		value: 'Teal 400'
	},
	'hex': {
		enumerable: true,
		value: '#4a5654'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([74,86,84])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.95659rad 12.19% 41.93% / 1)'
	},
	valueOf() {
		return 0x4a5654
	}
});

/**
 * @constant clrTeal500
 * @type {ColorDTO}
 */
export const clrTeal500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-500'
	},
	'name': {
		enumerable: true,
		value: 'Teal 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.00598rad none 53.81% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrTeal600
 * @type {ColorDTO}
 */
export const clrTeal600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-600'
	},
	'name': {
		enumerable: true,
		value: 'Teal 600'
	},
	'hex': {
		enumerable: true,
		value: '#393939'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([57,57,57])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.00092rad none 65.87% / 1)'
	},
	valueOf() {
		return 0x393939
	}
});

/**
 * @constant clrTeal700
 * @type {ColorDTO}
 */
export const clrTeal700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-700'
	},
	'name': {
		enumerable: true,
		value: 'Teal 700'
	},
	'hex': {
		enumerable: true,
		value: '#2c2c2c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([44,44,44])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.98591rad none 77.58% / 1)'
	},
	valueOf() {
		return 0x2c2c2c
	}
});

/**
 * @constant clrTeal800
 * @type {ColorDTO}
 */
export const clrTeal800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-800'
	},
	'name': {
		enumerable: true,
		value: 'Teal 800'
	},
	'hex': {
		enumerable: true,
		value: '#1a1a1a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([26,26,26])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.94297rad none 88.37% / 1)'
	},
	valueOf() {
		return 0x1a1a1a
	}
});

/**
 * @constant clrTeal900
 * @type {ColorDTO}
 */
export const clrTeal900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-900'
	},
	'name': {
		enumerable: true,
		value: 'Teal 900'
	},
	'hex': {
		enumerable: true,
		value: '#080808'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([8,8,8])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.95227rad 3.72% 104.31% / 1)'
	},
	valueOf() {
		return 0x080808
	}
});

/**
 * @constant clrTealA100
 * @type {ColorDTO}
 */
export const clrTealA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-a100'
	},
	'name': {
		enumerable: true,
		value: 'Teal A100'
	},
	'hex': {
		enumerable: true,
		value: '#313131'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([49,49,49])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.01279rad none 26.66% / 1)'
	},
	valueOf() {
		return 0x313131
	}
});

/**
 * @constant clrTealA200
 * @type {ColorDTO}
 */
export const clrTealA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-a200'
	},
	'name': {
		enumerable: true,
		value: 'Teal A200'
	},
	'hex': {
		enumerable: true,
		value: '#373737'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([55,55,55])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.01174rad none 32.5% / 1)'
	},
	valueOf() {
		return 0x373737
	}
});

/**
 * @constant clrTealA400
 * @type {ColorDTO}
 */
export const clrTealA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-a400'
	},
	'name': {
		enumerable: true,
		value: 'Teal A400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.0086rad none 43.85% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrTealA700
 * @type {ColorDTO}
 */
export const clrTealA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'teal-a700'
	},
	'name': {
		enumerable: true,
		value: 'Teal A700'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.9997rad none 59.95% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrGreen
 * @type {ColorDTO}
 */
export const clrGreen = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green'
	},
	'name': {
		enumerable: true,
		value: 'Green'
	},
	'hex': {
		enumerable: true,
		value: '#1f1f1f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([31,31,31])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.58152rad none 14.34% / 1)'
	},
	valueOf() {
		return 0x1f1f1f
	}
});

/**
 * @constant clrGreen50
 * @type {ColorDTO}
 */
export const clrGreen50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-50'
	},
	'name': {
		enumerable: true,
		value: 'Green 50'
	},
	'hex': {
		enumerable: true,
		value: '#b1b1b1'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([177,177,177])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.23926rad 69.78% none / 1)'
	},
	valueOf() {
		return 0xb1b1b1
	}
});

/**
 * @constant clrGreen100
 * @type {ColorDTO}
 */
export const clrGreen100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-100'
	},
	'name': {
		enumerable: true,
		value: 'Green 100'
	},
	'hex': {
		enumerable: true,
		value: '#474747'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([71,71,71])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.37976rad 28.02% none / 1)'
	},
	valueOf() {
		return 0x474747
	}
});

/**
 * @constant clrGreen200
 * @type {ColorDTO}
 */
export const clrGreen200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-200'
	},
	'name': {
		enumerable: true,
		value: 'Green 200'
	},
	'hex': {
		enumerable: true,
		value: '#171717'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([23,23,23])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.58256rad none 10.36% / 1)'
	},
	valueOf() {
		return 0x171717
	}
});

/**
 * @constant clrGreen300
 * @type {ColorDTO}
 */
export const clrGreen300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-300'
	},
	'name': {
		enumerable: true,
		value: 'Green 300'
	},
	'hex': {
		enumerable: true,
		value: '#2f2f2f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([47,47,47])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.57785rad none 24.86% / 1)'
	},
	valueOf() {
		return 0x2f2f2f
	}
});

/**
 * @constant clrGreen400
 * @type {ColorDTO}
 */
export const clrGreen400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-400'
	},
	'name': {
		enumerable: true,
		value: 'Green 400'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.56843rad none 38.84% / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrGreen500
 * @type {ColorDTO}
 */
export const clrGreen500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-500'
	},
	'name': {
		enumerable: true,
		value: 'Green 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.54958rad none 52.23% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrGreen600
 * @type {ColorDTO}
 */
export const clrGreen600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-600'
	},
	'name': {
		enumerable: true,
		value: 'Green 600'
	},
	'hex': {
		enumerable: true,
		value: '#3a3a3a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([58,58,58])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.50961rad none 64.94% / 1)'
	},
	valueOf() {
		return 0x3a3a3a
	}
});

/**
 * @constant clrGreen700
 * @type {ColorDTO}
 */
export const clrGreen700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-700'
	},
	'name': {
		enumerable: true,
		value: 'Green 700'
	},
	'hex': {
		enumerable: true,
		value: '#2d2d2d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([45,45,45])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.41588rad none 76.88% / 1)'
	},
	valueOf() {
		return 0x2d2d2d
	}
});

/**
 * @constant clrGreen800
 * @type {ColorDTO}
 */
export const clrGreen800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-800'
	},
	'name': {
		enumerable: true,
		value: 'Green 800'
	},
	'hex': {
		enumerable: true,
		value: '#1a1a1a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([26,26,26])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.32216rad none 88.05% / 1)'
	},
	valueOf() {
		return 0x1a1a1a
	}
});

/**
 * @constant clrGreen900
 * @type {ColorDTO}
 */
export const clrGreen900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-900'
	},
	'name': {
		enumerable: true,
		value: 'Green 900'
	},
	'hex': {
		enumerable: true,
		value: '#0a0a0a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([10,10,10])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.6416rad 4.75% 105.54% / 1)'
	},
	valueOf() {
		return 0x0a0a0a
	}
});

/**
 * @constant clrGreenA100
 * @type {ColorDTO}
 */
export const clrGreenA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-a100'
	},
	'name': {
		enumerable: true,
		value: 'Green A100'
	},
	'hex': {
		enumerable: true,
		value: '#2f2f2f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([47,47,47])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.65883rad none 24.53% / 1)'
	},
	valueOf() {
		return 0x2f2f2f
	}
});

/**
 * @constant clrGreenA200
 * @type {ColorDTO}
 */
export const clrGreenA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-a200'
	},
	'name': {
		enumerable: true,
		value: 'Green A200'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.66826rad none 30.56% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrGreenA400
 * @type {ColorDTO}
 */
export const clrGreenA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-a400'
	},
	'name': {
		enumerable: true,
		value: 'Green A400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.68571rad none 42.27% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrGreenA700
 * @type {ColorDTO}
 */
export const clrGreenA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'green-a700'
	},
	'name': {
		enumerable: true,
		value: 'Green A700'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.63091rad none 58.72% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrLightGreen
 * @type {ColorDTO}
 */
export const clrLightGreen = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green'
	},
	'name': {
		enumerable: true,
		value: 'Light Green'
	},
	'hex': {
		enumerable: true,
		value: '#747d74'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([116,125,116])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.08235rad 43.07% 9.22% / 1)'
	},
	valueOf() {
		return 0x747d74
	}
});

/**
 * @constant clrLightGreen50
 * @type {ColorDTO}
 */
export const clrLightGreen50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-50'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 50'
	},
	'hex': {
		enumerable: true,
		value: '#b2b2b2'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([178,178,178])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.04727rad 70.13% none / 1)'
	},
	valueOf() {
		return 0xb2b2b2
	}
});

/**
 * @constant clrLightGreen100
 * @type {ColorDTO}
 */
export const clrLightGreen100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-100'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 100'
	},
	'hex': {
		enumerable: true,
		value: '#838483'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([131,132,131])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.0738rad 51.65% 0.3% / 1)'
	},
	valueOf() {
		return 0x838483
	}
});

/**
 * @constant clrLightGreen200
 * @type {ColorDTO}
 */
export const clrLightGreen200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-200'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 200'
	},
	'hex': {
		enumerable: true,
		value: '#6d796d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([109,121,109])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.08759rad 38.85% 13.56% / 1)'
	},
	valueOf() {
		return 0x6d796d
	}
});

/**
 * @constant clrLightGreen300
 * @type {ColorDTO}
 */
export const clrLightGreen300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-300'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 300'
	},
	'hex': {
		enumerable: true,
		value: '#586858'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([88,104,88])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.11202rad 24.94% 26.5% / 1)'
	},
	valueOf() {
		return 0x586858
	}
});

/**
 * @constant clrLightGreen400
 * @type {ColorDTO}
 */
export const clrLightGreen400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-400'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 400'
	},
	'hex': {
		enumerable: true,
		value: '#414641'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([65,70,65])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.20487rad 4.43% 39.09% / 1)'
	},
	valueOf() {
		return 0x414641
	}
});

/**
 * @constant clrLightGreen500
 * @type {ColorDTO}
 */
export const clrLightGreen500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-500'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.17835rad none 51.6% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrLightGreen600
 * @type {ColorDTO}
 */
export const clrLightGreen600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-600'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 600'
	},
	'hex': {
		enumerable: true,
		value: '#3a3a3a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([58,58,58])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.17869rad none 64.6% / 1)'
	},
	valueOf() {
		return 0x3a3a3a
	}
});

/**
 * @constant clrLightGreen700
 * @type {ColorDTO}
 */
export const clrLightGreen700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-700'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 700'
	},
	'hex': {
		enumerable: true,
		value: '#2d2d2d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([45,45,45])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.18323rad none 76.83% / 1)'
	},
	valueOf() {
		return 0x2d2d2d
	}
});

/**
 * @constant clrLightGreen800
 * @type {ColorDTO}
 */
export const clrLightGreen800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-800'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 800'
	},
	'hex': {
		enumerable: true,
		value: '#1a1a1a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([26,26,26])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.17032rad none 88.06% / 1)'
	},
	valueOf() {
		return 0x1a1a1a
	}
});

/**
 * @constant clrLightGreen900
 * @type {ColorDTO}
 */
export const clrLightGreen900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-900'
	},
	'name': {
		enumerable: true,
		value: 'Light Green 900'
	},
	'hex': {
		enumerable: true,
		value: '#090909'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([9,9,9])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(5.61141rad 3.99% 104.23% / 1)'
	},
	valueOf() {
		return 0x090909
	}
});

/**
 * @constant clrLightGreenA100
 * @type {ColorDTO}
 */
export const clrLightGreenA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-a100'
	},
	'name': {
		enumerable: true,
		value: 'Light Green A100'
	},
	'hex': {
		enumerable: true,
		value: '#2e2e2e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([46,46,46])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.59705rad none 24.06% / 1)'
	},
	valueOf() {
		return 0x2e2e2e
	}
});

/**
 * @constant clrLightGreenA200
 * @type {ColorDTO}
 */
export const clrLightGreenA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-a200'
	},
	'name': {
		enumerable: true,
		value: 'Light Green A200'
	},
	'hex': {
		enumerable: true,
		value: '#353535'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([53,53,53])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.61433rad none 30.14% / 1)'
	},
	valueOf() {
		return 0x353535
	}
});

/**
 * @constant clrLightGreenA400
 * @type {ColorDTO}
 */
export const clrLightGreenA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-a400'
	},
	'name': {
		enumerable: true,
		value: 'Light Green A400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.633rad none 41.92% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrLightGreenA700
 * @type {ColorDTO}
 */
export const clrLightGreenA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'light-green-a700'
	},
	'name': {
		enumerable: true,
		value: 'Light Green A700'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.52985rad none 58.38% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrLime
 * @type {ColorDTO}
 */
export const clrLime = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime'
	},
	'name': {
		enumerable: true,
		value: 'Lime'
	},
	'hex': {
		enumerable: true,
		value: '#4c5146'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([76,81,70])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.45927rad 17.66% 19.01% / 1)'
	},
	valueOf() {
		return 0x4c5146
	}
});

/**
 * @constant clrLime50
 * @type {ColorDTO}
 */
export const clrLime50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-50'
	},
	'name': {
		enumerable: true,
		value: 'Lime 50'
	},
	'hex': {
		enumerable: true,
		value: '#797979'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([121,121,121])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.51933rad 47.54% none / 1)'
	},
	valueOf() {
		return 0x797979
	}
});

/**
 * @constant clrLime100
 * @type {ColorDTO}
 */
export const clrLime100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-100'
	},
	'name': {
		enumerable: true,
		value: 'Lime 100'
	},
	'hex': {
		enumerable: true,
		value: '#636461'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([99,100,97])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.50091rad 36.74% 3.44% / 1)'
	},
	valueOf() {
		return 0x636461
	}
});

/**
 * @constant clrLime200
 * @type {ColorDTO}
 */
export const clrLime200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-200'
	},
	'name': {
		enumerable: true,
		value: 'Lime 200'
	},
	'hex': {
		enumerable: true,
		value: '#51554a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([81,85,74])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.46894rad 21.12% 16.6% / 1)'
	},
	valueOf() {
		return 0x51554a
	}
});

/**
 * @constant clrLime300
 * @type {ColorDTO}
 */
export const clrLime300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-300'
	},
	'name': {
		enumerable: true,
		value: 'Lime 300'
	},
	'hex': {
		enumerable: true,
		value: '#343434'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([52,52,52])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.36558rad none 29.44% / 1)'
	},
	valueOf() {
		return 0x343434
	}
});

/**
 * @constant clrLime400
 * @type {ColorDTO}
 */
export const clrLime400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-400'
	},
	'name': {
		enumerable: true,
		value: 'Lime 400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.36181rad none 42.44% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrLime500
 * @type {ColorDTO}
 */
export const clrLime500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-500'
	},
	'name': {
		enumerable: true,
		value: 'Lime 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.37312rad none 55.17% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrLime600
 * @type {ColorDTO}
 */
export const clrLime600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-600'
	},
	'name': {
		enumerable: true,
		value: 'Lime 600'
	},
	'hex': {
		enumerable: true,
		value: '#383838'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([56,56,56])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.39422rad none 67.29% / 1)'
	},
	valueOf() {
		return 0x383838
	}
});

/**
 * @constant clrLime700
 * @type {ColorDTO}
 */
export const clrLime700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-700'
	},
	'name': {
		enumerable: true,
		value: 'Lime 700'
	},
	'hex': {
		enumerable: true,
		value: '#2a2a2a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([42,42,42])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.44014rad none 78.68% / 1)'
	},
	valueOf() {
		return 0x2a2a2a
	}
});

/**
 * @constant clrLime800
 * @type {ColorDTO}
 */
export const clrLime800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-800'
	},
	'name': {
		enumerable: true,
		value: 'Lime 800'
	},
	'hex': {
		enumerable: true,
		value: '#181818'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([24,24,24])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.57956rad none 89.17% / 1)'
	},
	valueOf() {
		return 0x181818
	}
});

/**
 * @constant clrLime900
 * @type {ColorDTO}
 */
export const clrLime900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-900'
	},
	'name': {
		enumerable: true,
		value: 'Lime 900'
	},
	'hex': {
		enumerable: true,
		value: '#040404'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([4,4,4])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.72805rad none 98.06% / 1)'
	},
	valueOf() {
		return 0x040404
	}
});

/**
 * @constant clrLimeA100
 * @type {ColorDTO}
 */
export const clrLimeA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-a100'
	},
	'name': {
		enumerable: true,
		value: 'Lime A100'
	},
	'hex': {
		enumerable: true,
		value: '#2e2e2e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([46,46,46])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.64494rad none 23.62% / 1)'
	},
	valueOf() {
		return 0x2e2e2e
	}
});

/**
 * @constant clrLimeA200
 * @type {ColorDTO}
 */
export const clrLimeA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-a200'
	},
	'name': {
		enumerable: true,
		value: 'Lime A200'
	},
	'hex': {
		enumerable: true,
		value: '#343434'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([52,52,52])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.68777rad none 29.35% / 1)'
	},
	valueOf() {
		return 0x343434
	}
});

/**
 * @constant clrLimeA400
 * @type {ColorDTO}
 */
export const clrLimeA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-a400'
	},
	'name': {
		enumerable: true,
		value: 'Lime A400'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.74952rad none 40.91% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrLimeA700
 * @type {ColorDTO}
 */
export const clrLimeA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'lime-a700'
	},
	'name': {
		enumerable: true,
		value: 'Lime A700'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.5103rad none 59.22% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrYellow
 * @type {ColorDTO}
 */
export const clrYellow = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow'
	},
	'name': {
		enumerable: true,
		value: 'Yellow'
	},
	'hex': {
		enumerable: true,
		value: '#131313'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([19,19,19])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.98808rad none 8.57% / 1)'
	},
	valueOf() {
		return 0x131313
	}
});

/**
 * @constant clrYellow50
 * @type {ColorDTO}
 */
export const clrYellow50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-50'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 50'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.97697rad 23.78% none / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrYellow100
 * @type {ColorDTO}
 */
export const clrYellow100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-100'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 100'
	},
	'hex': {
		enumerable: true,
		value: '#282826'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([40,40,38])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.98105rad 10.91% 5.47% / 1)'
	},
	valueOf() {
		return 0x282826
	}
});

/**
 * @constant clrYellow200
 * @type {ColorDTO}
 */
export const clrYellow200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-200'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 200'
	},
	'hex': {
		enumerable: true,
		value: '#262626'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([38,38,38])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.99089rad none 18.23% / 1)'
	},
	valueOf() {
		return 0x262626
	}
});

/**
 * @constant clrYellow300
 * @type {ColorDTO}
 */
export const clrYellow300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-300'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 300'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.98889rad none 31.41% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrYellow400
 * @type {ColorDTO}
 */
export const clrYellow400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-400'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.98656rad none 44.27% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrYellow500
 * @type {ColorDTO}
 */
export const clrYellow500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-500'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 500'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.98293rad none 56.61% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrYellow600
 * @type {ColorDTO}
 */
export const clrYellow600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-600'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 600'
	},
	'hex': {
		enumerable: true,
		value: '#373737'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([55,55,55])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.9767rad none 68.35% / 1)'
	},
	valueOf() {
		return 0x373737
	}
});

/**
 * @constant clrYellow700
 * @type {ColorDTO}
 */
export const clrYellow700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-700'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 700'
	},
	'hex': {
		enumerable: true,
		value: '#292929'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([41,41,41])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.96389rad none 79.39% / 1)'
	},
	valueOf() {
		return 0x292929
	}
});

/**
 * @constant clrYellow800
 * @type {ColorDTO}
 */
export const clrYellow800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-800'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 800'
	},
	'hex': {
		enumerable: true,
		value: '#171717'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([23,23,23])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.92564rad none 89.55% / 1)'
	},
	valueOf() {
		return 0x171717
	}
});

/**
 * @constant clrYellow900
 * @type {ColorDTO}
 */
export const clrYellow900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-900'
	},
	'name': {
		enumerable: true,
		value: 'Yellow 900'
	},
	'hex': {
		enumerable: true,
		value: '#0b0b0b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([11,11,11])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(3.78387rad 4.82% 105.31% / 1)'
	},
	valueOf() {
		return 0x0b0b0b
	}
});

/**
 * @constant clrYellowA100
 * @type {ColorDTO}
 */
export const clrYellowA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-a100'
	},
	'name': {
		enumerable: true,
		value: 'Yellow A100'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.05631rad none 30.79% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrYellowA200
 * @type {ColorDTO}
 */
export const clrYellowA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-a200'
	},
	'name': {
		enumerable: true,
		value: 'Yellow A200'
	},
	'hex': {
		enumerable: true,
		value: '#3a3a3a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([58,58,58])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.0624rad none 36.08% / 1)'
	},
	valueOf() {
		return 0x3a3a3a
	}
});

/**
 * @constant clrYellowA400
 * @type {ColorDTO}
 */
export const clrYellowA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-a400'
	},
	'name': {
		enumerable: true,
		value: 'Yellow A400'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.07556rad none 46.47% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrYellowA700
 * @type {ColorDTO}
 */
export const clrYellowA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'yellow-a700'
	},
	'name': {
		enumerable: true,
		value: 'Yellow A700'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.13576rad none 60.89% / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrAmber
 * @type {ColorDTO}
 */
export const clrAmber = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber'
	},
	'name': {
		enumerable: true,
		value: 'Amber'
	},
	'hex': {
		enumerable: true,
		value: '#080808'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([8,8,8])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.82701rad none 3.28% / 1)'
	},
	valueOf() {
		return 0x080808
	}
});

/**
 * @constant clrAmber50
 * @type {ColorDTO}
 */
export const clrAmber50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-50'
	},
	'name': {
		enumerable: true,
		value: 'Amber 50'
	},
	'hex': {
		enumerable: true,
		value: '#a9a9a9'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([169,169,169])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.74208rad 66.43% none / 1)'
	},
	valueOf() {
		return 0xa9a9a9
	}
});

/**
 * @constant clrAmber100
 * @type {ColorDTO}
 */
export const clrAmber100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-100'
	},
	'name': {
		enumerable: true,
		value: 'Amber 100'
	},
	'hex': {
		enumerable: true,
		value: '#595959'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([89,89,89])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.76107rad 35.21% none / 1)'
	},
	valueOf() {
		return 0x595959
	}
});

/**
 * @constant clrAmber200
 * @type {ColorDTO}
 */
export const clrAmber200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-200'
	},
	'name': {
		enumerable: true,
		value: 'Amber 200'
	},
	'hex': {
		enumerable: true,
		value: '#121212'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([18,18,18])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.83929rad none 7.73% / 1)'
	},
	valueOf() {
		return 0x121212
	}
});

/**
 * @constant clrAmber300
 * @type {ColorDTO}
 */
export const clrAmber300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-300'
	},
	'name': {
		enumerable: true,
		value: 'Amber 300'
	},
	'hex': {
		enumerable: true,
		value: '#2c2c2c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([44,44,44])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.83788rad none 22.31% / 1)'
	},
	valueOf() {
		return 0x2c2c2c
	}
});

/**
 * @constant clrAmber400
 * @type {ColorDTO}
 */
export const clrAmber400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-400'
	},
	'name': {
		enumerable: true,
		value: 'Amber 400'
	},
	'hex': {
		enumerable: true,
		value: '#3b3b3b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([59,59,59])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.8332rad none 36.56% / 1)'
	},
	valueOf() {
		return 0x3b3b3b
	}
});

/**
 * @constant clrAmber500
 * @type {ColorDTO}
 */
export const clrAmber500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-500'
	},
	'name': {
		enumerable: true,
		value: 'Amber 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.82493rad none 50.25% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrAmber600
 * @type {ColorDTO}
 */
export const clrAmber600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-600'
	},
	'name': {
		enumerable: true,
		value: 'Amber 600'
	},
	'hex': {
		enumerable: true,
		value: '#3b3b3b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([59,59,59])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.80966rad none 63.3% / 1)'
	},
	valueOf() {
		return 0x3b3b3b
	}
});

/**
 * @constant clrAmber700
 * @type {ColorDTO}
 */
export const clrAmber700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-700'
	},
	'name': {
		enumerable: true,
		value: 'Amber 700'
	},
	'hex': {
		enumerable: true,
		value: '#2f2f2f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([47,47,47])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.77761rad none 75.6% / 1)'
	},
	valueOf() {
		return 0x2f2f2f
	}
});

/**
 * @constant clrAmber800
 * @type {ColorDTO}
 */
export const clrAmber800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-800'
	},
	'name': {
		enumerable: true,
		value: 'Amber 800'
	},
	'hex': {
		enumerable: true,
		value: '#1c1c1c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([28,28,28])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.6866rad none 86.97% / 1)'
	},
	valueOf() {
		return 0x1c1c1c
	}
});

/**
 * @constant clrAmber900
 * @type {ColorDTO}
 */
export const clrAmber900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-900'
	},
	'name': {
		enumerable: true,
		value: 'Amber 900'
	},
	'hex': {
		enumerable: true,
		value: '#070707'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([7,7,7])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.45031rad none 97.05% / 1)'
	},
	valueOf() {
		return 0x070707
	}
});

/**
 * @constant clrAmberA100
 * @type {ColorDTO}
 */
export const clrAmberA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-a100'
	},
	'name': {
		enumerable: true,
		value: 'Amber A100'
	},
	'hex': {
		enumerable: true,
		value: '#202020'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([32,32,32])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.81498rad none 14.81% / 1)'
	},
	valueOf() {
		return 0x202020
	}
});

/**
 * @constant clrAmberA200
 * @type {ColorDTO}
 */
export const clrAmberA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-a200'
	},
	'name': {
		enumerable: true,
		value: 'Amber A200'
	},
	'hex': {
		enumerable: true,
		value: '#2a2a2a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([42,42,42])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.81411rad none 21.19% / 1)'
	},
	valueOf() {
		return 0x2a2a2a
	}
});

/**
 * @constant clrAmberA400
 * @type {ColorDTO}
 */
export const clrAmberA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-a400'
	},
	'name': {
		enumerable: true,
		value: 'Amber A400'
	},
	'hex': {
		enumerable: true,
		value: '#393939'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([57,57,57])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.82027rad none 34.16% / 1)'
	},
	valueOf() {
		return 0x393939
	}
});

/**
 * @constant clrAmberA700
 * @type {ColorDTO}
 */
export const clrAmberA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'amber-a700'
	},
	'name': {
		enumerable: true,
		value: 'Amber A700'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(1.0011rad none 59.22% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrOrange
 * @type {ColorDTO}
 */
export const clrOrange = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange'
	},
	'name': {
		enumerable: true,
		value: 'Orange'
	},
	'hex': {
		enumerable: true,
		value: '#242322'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([36,35,34])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.64979rad 11.53% 2.78% / 1)'
	},
	valueOf() {
		return 0x242322
	}
});

/**
 * @constant clrOrange50
 * @type {ColorDTO}
 */
export const clrOrange50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-50'
	},
	'name': {
		enumerable: true,
		value: 'Orange 50'
	},
	'hex': {
		enumerable: true,
		value: '#c2c2c2'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([194,194,194])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.56863rad 76.43% none / 1)'
	},
	valueOf() {
		return 0xc2c2c2
	}
});

/**
 * @constant clrOrange100
 * @type {ColorDTO}
 */
export const clrOrange100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-100'
	},
	'name': {
		enumerable: true,
		value: 'Orange 100'
	},
	'hex': {
		enumerable: true,
		value: '#929292'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([146,146,146])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.57819rad 57.35% none / 1)'
	},
	valueOf() {
		return 0x929292
	}
});

/**
 * @constant clrOrange200
 * @type {ColorDTO}
 */
export const clrOrange200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-200'
	},
	'name': {
		enumerable: true,
		value: 'Orange 200'
	},
	'hex': {
		enumerable: true,
		value: '#282828'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([40,40,40])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.64057rad 15.16% 0.75% / 1)'
	},
	valueOf() {
		return 0x282828
	}
});

/**
 * @constant clrOrange300
 * @type {ColorDTO}
 */
export const clrOrange300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-300'
	},
	'name': {
		enumerable: true,
		value: 'Orange 300'
	},
	'hex': {
		enumerable: true,
		value: '#202020'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([32,32,32])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.71113rad none 14.79% / 1)'
	},
	valueOf() {
		return 0x202020
	}
});

/**
 * @constant clrOrange400
 * @type {ColorDTO}
 */
export const clrOrange400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-400'
	},
	'name': {
		enumerable: true,
		value: 'Orange 400'
	},
	'hex': {
		enumerable: true,
		value: '#353535'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([53,53,53])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.70665rad none 30.33% / 1)'
	},
	valueOf() {
		return 0x353535
	}
});

/**
 * @constant clrOrange500
 * @type {ColorDTO}
 */
export const clrOrange500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-500'
	},
	'name': {
		enumerable: true,
		value: 'Orange 500'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.69752rad none 45.17% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrOrange600
 * @type {ColorDTO}
 */
export const clrOrange600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-600'
	},
	'name': {
		enumerable: true,
		value: 'Orange 600'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.67811rad none 59.26% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

/**
 * @constant clrOrange700
 * @type {ColorDTO}
 */
export const clrOrange700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-700'
	},
	'name': {
		enumerable: true,
		value: 'Orange 700'
	},
	'hex': {
		enumerable: true,
		value: '#323232'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([50,50,50])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.63397rad none 72.5% / 1)'
	},
	valueOf() {
		return 0x323232
	}
});

/**
 * @constant clrOrange800
 * @type {ColorDTO}
 */
export const clrOrange800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-800'
	},
	'name': {
		enumerable: true,
		value: 'Orange 800'
	},
	'hex': {
		enumerable: true,
		value: '#202020'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([32,32,32])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.50859rad none 84.79% / 1)'
	},
	valueOf() {
		return 0x202020
	}
});

/**
 * @constant clrOrange900
 * @type {ColorDTO}
 */
export const clrOrange900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-900'
	},
	'name': {
		enumerable: true,
		value: 'Orange 900'
	},
	'hex': {
		enumerable: true,
		value: '#090909'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([9,9,9])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.25199rad none 95.98% / 1)'
	},
	valueOf() {
		return 0x090909
	}
});

/**
 * @constant clrOrangeA100
 * @type {ColorDTO}
 */
export const clrOrangeA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-a100'
	},
	'name': {
		enumerable: true,
		value: 'Orange A100'
	},
	'hex': {
		enumerable: true,
		value: '#020202'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([2,2,2])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.62806rad none 0.97% / 1)'
	},
	valueOf() {
		return 0x020202
	}
});

/**
 * @constant clrOrangeA200
 * @type {ColorDTO}
 */
export const clrOrangeA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-a200'
	},
	'name': {
		enumerable: true,
		value: 'Orange A200'
	},
	'hex': {
		enumerable: true,
		value: '#121212'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([18,18,18])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.62158rad none 7.92% / 1)'
	},
	valueOf() {
		return 0x121212
	}
});

/**
 * @constant clrOrangeA400
 * @type {ColorDTO}
 */
export const clrOrangeA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-a400'
	},
	'name': {
		enumerable: true,
		value: 'Orange A400'
	},
	'hex': {
		enumerable: true,
		value: '#2c2c2c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([44,44,44])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.62001rad none 22.28% / 1)'
	},
	valueOf() {
		return 0x2c2c2c
	}
});

/**
 * @constant clrOrangeA700
 * @type {ColorDTO}
 */
export const clrOrangeA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'orange-a700'
	},
	'name': {
		enumerable: true,
		value: 'Orange A700'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.72937rad none 47.51% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrDeepOrange
 * @type {ColorDTO}
 */
export const clrDeepOrange = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange'
	},
	'hex': {
		enumerable: true,
		value: '#191919'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([25,25,25])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.44441rad 7.96% 2.25% / 1)'
	},
	valueOf() {
		return 0x191919
	}
});

/**
 * @constant clrDeepOrange50
 * @type {ColorDTO}
 */
export const clrDeepOrange50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-50'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 50'
	},
	'hex': {
		enumerable: true,
		value: '#d3d3d3'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([211,211,211])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.35362rad 82.81% none / 1)'
	},
	valueOf() {
		return 0xd3d3d3
	}
});

/**
 * @constant clrDeepOrange100
 * @type {ColorDTO}
 */
export const clrDeepOrange100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-100'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 100'
	},
	'hex': {
		enumerable: true,
		value: '#b1b1b1'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([177,177,177])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.35729rad 69.42% none / 1)'
	},
	valueOf() {
		return 0xb1b1b1
	}
});

/**
 * @constant clrDeepOrange200
 * @type {ColorDTO}
 */
export const clrDeepOrange200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-200'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 200'
	},
	'hex': {
		enumerable: true,
		value: '#636363'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([99,99,99])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.3743rad 38.91% none / 1)'
	},
	valueOf() {
		return 0x636363
	}
});

/**
 * @constant clrDeepOrange300
 * @type {ColorDTO}
 */
export const clrDeepOrange300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-300'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 300'
	},
	'hex': {
		enumerable: true,
		value: '#151414'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([21,20,20])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.4567rad 5.06% 3.47% / 1)'
	},
	valueOf() {
		return 0x151414
	}
});

/**
 * @constant clrDeepOrange400
 * @type {ColorDTO}
 */
export const clrDeepOrange400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-400'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 400'
	},
	'hex': {
		enumerable: true,
		value: '#282828'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([40,40,40])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.50398rad none 19.79% / 1)'
	},
	valueOf() {
		return 0x282828
	}
});

/**
 * @constant clrDeepOrange500
 * @type {ColorDTO}
 */
export const clrDeepOrange500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-500'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 500'
	},
	'hex': {
		enumerable: true,
		value: '#3b3b3b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([59,59,59])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.49222rad none 36.69% / 1)'
	},
	valueOf() {
		return 0x3b3b3b
	}
});

/**
 * @constant clrDeepOrange600
 * @type {ColorDTO}
 */
export const clrDeepOrange600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-600'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 600'
	},
	'hex': {
		enumerable: true,
		value: '#3f3f3f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([63,63,63])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.4655rad none 52.61% / 1)'
	},
	valueOf() {
		return 0x3f3f3f
	}
});

/**
 * @constant clrDeepOrange700
 * @type {ColorDTO}
 */
export const clrDeepOrange700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-700'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 700'
	},
	'hex': {
		enumerable: true,
		value: '#383838'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([56,56,56])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.39762rad none 67.4% / 1)'
	},
	valueOf() {
		return 0x383838
	}
});

/**
 * @constant clrDeepOrange800
 * @type {ColorDTO}
 */
export const clrDeepOrange800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-800'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 800'
	},
	'hex': {
		enumerable: true,
		value: '#262626'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([38,38,38])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.21831rad none 81.25% / 1)'
	},
	valueOf() {
		return 0x262626
	}
});

/**
 * @constant clrDeepOrange900
 * @type {ColorDTO}
 */
export const clrDeepOrange900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-900'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange 900'
	},
	'hex': {
		enumerable: true,
		value: '#0e0e0e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([14,14,14])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.04805rad none 94.15% / 1)'
	},
	valueOf() {
		return 0x0e0e0e
	}
});

/**
 * @constant clrDeepOrangeA100
 * @type {ColorDTO}
 */
export const clrDeepOrangeA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-a100'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange A100'
	},
	'hex': {
		enumerable: true,
		value: '#5e5e5e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([94,94,94])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24993rad 36.99% none / 1)'
	},
	valueOf() {
		return 0x5e5e5e
	}
});

/**
 * @constant clrDeepOrangeA200
 * @type {ColorDTO}
 */
export const clrDeepOrangeA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-a200'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange A200'
	},
	'hex': {
		enumerable: true,
		value: '#3c3c3c'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([60,60,60])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24017rad 23.56% none / 1)'
	},
	valueOf() {
		return 0x3c3c3c
	}
});

/**
 * @constant clrDeepOrangeA400
 * @type {ColorDTO}
 */
export const clrDeepOrangeA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-a400'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange A400'
	},
	'hex': {
		enumerable: true,
		value: '#080808'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([8,8,8])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.30711rad none 3.25% / 1)'
	},
	valueOf() {
		return 0x080808
	}
});

/**
 * @constant clrDeepOrangeA700
 * @type {ColorDTO}
 */
export const clrDeepOrangeA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'deep-orange-a700'
	},
	'name': {
		enumerable: true,
		value: 'Deep Orange A700'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.37193rad none 30.77% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrBrown
 * @type {ColorDTO}
 */
export const clrBrown = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown'
	},
	'name': {
		enumerable: true,
		value: 'Brown'
	},
	'hex': {
		enumerable: true,
		value: '#837672'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([131,118,114])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24476rad 39.63% 23.31% / 1)'
	},
	valueOf() {
		return 0x837672
	}
});

/**
 * @constant clrBrown50
 * @type {ColorDTO}
 */
export const clrBrown50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-50'
	},
	'name': {
		enumerable: true,
		value: 'Brown 50'
	},
	'hex': {
		enumerable: true,
		value: '#d8d8d8'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([216,216,216])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24564rad 85.01% none / 1)'
	},
	valueOf() {
		return 0xd8d8d8
	}
});

/**
 * @constant clrBrown100
 * @type {ColorDTO}
 */
export const clrBrown100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-100'
	},
	'name': {
		enumerable: true,
		value: 'Brown 100'
	},
	'hex': {
		enumerable: true,
		value: '#bababa'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([186,186,186])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24569rad 73.3% none / 1)'
	},
	valueOf() {
		return 0xbababa
	}
});

/**
 * @constant clrBrown200
 * @type {ColorDTO}
 */
export const clrBrown200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-200'
	},
	'name': {
		enumerable: true,
		value: 'Brown 200'
	},
	'hex': {
		enumerable: true,
		value: '#979392'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([151,147,146])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.2452rad 56.75% 4.13% / 1)'
	},
	valueOf() {
		return 0x979392
	}
});

/**
 * @constant clrBrown300
 * @type {ColorDTO}
 */
export const clrBrown300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-300'
	},
	'name': {
		enumerable: true,
		value: 'Brown 300'
	},
	'hex': {
		enumerable: true,
		value: '#8a7f7b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([138,127,123])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24492rad 44.88% 17.39% / 1)'
	},
	valueOf() {
		return 0x8a7f7b
	}
});

/**
 * @constant clrBrown400
 * @type {ColorDTO}
 */
export const clrBrown400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-400'
	},
	'name': {
		enumerable: true,
		value: 'Brown 400'
	},
	'hex': {
		enumerable: true,
		value: '#7a6c67'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([122,108,103])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24457rad 33.43% 30.34% / 1)'
	},
	valueOf() {
		return 0x7a6c67
	}
});

/**
 * @constant clrBrown500
 * @type {ColorDTO}
 */
export const clrBrown500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-500'
	},
	'name': {
		enumerable: true,
		value: 'Brown 500'
	},
	'hex': {
		enumerable: true,
		value: '#675a56'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([103,90,86])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24452rad 22.41% 42.97% / 1)'
	},
	valueOf() {
		return 0x675a56
	}
});

/**
 * @constant clrBrown600
 * @type {ColorDTO}
 */
export const clrBrown600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-600'
	},
	'name': {
		enumerable: true,
		value: 'Brown 600'
	},
	'hex': {
		enumerable: true,
		value: '#504a47'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([80,74,71])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.24714rad 11.64% 55.26% / 1)'
	},
	valueOf() {
		return 0x504a47
	}
});

/**
 * @constant clrBrown700
 * @type {ColorDTO}
 */
export const clrBrown700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-700'
	},
	'name': {
		enumerable: true,
		value: 'Brown 700'
	},
	'hex': {
		enumerable: true,
		value: '#383838'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([56,56,56])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.25667rad 0.5% 67.21% / 1)'
	},
	valueOf() {
		return 0x383838
	}
});

/**
 * @constant clrBrown800
 * @type {ColorDTO}
 */
export const clrBrown800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-800'
	},
	'name': {
		enumerable: true,
		value: 'Brown 800'
	},
	'hex': {
		enumerable: true,
		value: '#2a2a2a'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([42,42,42])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.04454rad none 79.02% / 1)'
	},
	valueOf() {
		return 0x2a2a2a
	}
});

/**
 * @constant clrBrown900
 * @type {ColorDTO}
 */
export const clrBrown900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-900'
	},
	'name': {
		enumerable: true,
		value: 'Brown 900'
	},
	'hex': {
		enumerable: true,
		value: '#0f0f0f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([15,15,15])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.26085rad none 93.44% / 1)'
	},
	valueOf() {
		return 0x0f0f0f
	}
});

/**
 * @constant clrBrownA100
 * @type {ColorDTO}
 */
export const clrBrownA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-a100'
	},
	'name': {
		enumerable: true,
		value: 'Brown A100'
	},
	'hex': {
		enumerable: true,
		value: '#7b7b7b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([123,123,123])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.09954rad 48.61% none / 1)'
	},
	valueOf() {
		return 0x7b7b7b
	}
});

/**
 * @constant clrBrownA200
 * @type {ColorDTO}
 */
export const clrBrownA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-a200'
	},
	'name': {
		enumerable: true,
		value: 'Brown A200'
	},
	'hex': {
		enumerable: true,
		value: '#646464'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([100,100,100])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(0.05751rad 39.44% none / 1)'
	},
	valueOf() {
		return 0x646464
	}
});

/**
 * @constant clrBrownA400
 * @type {ColorDTO}
 */
export const clrBrownA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-a400'
	},
	'name': {
		enumerable: true,
		value: 'Brown A400'
	},
	'hex': {
		enumerable: true,
		value: '#000000'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([0,0,0])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.035rad none none / 1)'
	},
	valueOf() {
		return 0x000000
	}
});

/**
 * @constant clrBrownA700
 * @type {ColorDTO}
 */
export const clrBrownA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'brown-a700'
	},
	'name': {
		enumerable: true,
		value: 'Brown A700'
	},
	'hex': {
		enumerable: true,
		value: '#2b2b2b'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([43,43,43])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(6.01632rad none 21.51% / 1)'
	},
	valueOf() {
		return 0x2b2b2b
	}
});

/**
 * @constant clrGray
 * @type {ColorDTO}
 */
export const clrGray = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray'
	},
	'name': {
		enumerable: true,
		value: 'Gray'
	},
	'hex': {
		enumerable: true,
		value: '#7d7e7d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([125,126,125])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14361rad 48.97% 50.18% / 1)'
	},
	valueOf() {
		return 0x7d7e7d
	}
});

/**
 * @constant clrGray50
 * @type {ColorDTO}
 */
export const clrGray50 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-50'
	},
	'name': {
		enumerable: true,
		value: 'Gray 50'
	},
	'hex': {
		enumerable: true,
		value: '#ecedec'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([236,237,236])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14274rad 92.83% 6.23% / 1)'
	},
	valueOf() {
		return 0xecedec
	}
});

/**
 * @constant clrGray100
 * @type {ColorDTO}
 */
export const clrGray100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-100'
	},
	'name': {
		enumerable: true,
		value: 'Gray 100'
	},
	'hex': {
		enumerable: true,
		value: '#dcdcdc'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([220,220,220])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14274rad 86.37% 12.7% / 1)'
	},
	valueOf() {
		return 0xdcdcdc
	}
});

/**
 * @constant clrGray200
 * @type {ColorDTO}
 */
export const clrGray200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-200'
	},
	'name': {
		enumerable: true,
		value: 'Gray 200'
	},
	'hex': {
		enumerable: true,
		value: '#bcbdbc'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([188,189,188])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14292rad 73.72% 25.37% / 1)'
	},
	valueOf() {
		return 0xbcbdbc
	}
});

/**
 * @constant clrGray300
 * @type {ColorDTO}
 */
export const clrGray300 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-300'
	},
	'name': {
		enumerable: true,
		value: 'Gray 300'
	},
	'hex': {
		enumerable: true,
		value: '#9d9e9d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([157,158,157])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14326rad 61.47% 37.65% / 1)'
	},
	valueOf() {
		return 0x9d9e9d
	}
});

/**
 * @constant clrGray400
 * @type {ColorDTO}
 */
export const clrGray400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-400'
	},
	'name': {
		enumerable: true,
		value: 'Gray 400'
	},
	'hex': {
		enumerable: true,
		value: '#7f807f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([127,128,127])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14344rad 49.65% 49.5% / 1)'
	},
	valueOf() {
		return 0x7f807f
	}
});

/**
 * @constant clrGray500
 * @type {ColorDTO}
 */
export const clrGray500 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-500'
	},
	'name': {
		enumerable: true,
		value: 'Gray 500'
	},
	'hex': {
		enumerable: true,
		value: '#626362'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([98,99,98])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14396rad 38.33% 60.87% / 1)'
	},
	valueOf() {
		return 0x626362
	}
});

/**
 * @constant clrGray600
 * @type {ColorDTO}
 */
export const clrGray600 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-600'
	},
	'name': {
		enumerable: true,
		value: 'Gray 600'
	},
	'hex': {
		enumerable: true,
		value: '#474747'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([71,71,71])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14466rad 27.56% 71.68% / 1)'
	},
	valueOf() {
		return 0x474747
	}
});

/**
 * @constant clrGray700
 * @type {ColorDTO}
 */
export const clrGray700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-700'
	},
	'name': {
		enumerable: true,
		value: 'Gray 700'
	},
	'hex': {
		enumerable: true,
		value: '#2d2e2d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([45,46,45])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14571rad 17.45% 81.83% / 1)'
	},
	valueOf() {
		return 0x2d2e2d
	}
});

/**
 * @constant clrGray800
 * @type {ColorDTO}
 */
export const clrGray800 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-800'
	},
	'name': {
		enumerable: true,
		value: 'Gray 800'
	},
	'hex': {
		enumerable: true,
		value: '#161616'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([22,22,22])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.14798rad 8.18% 91.17% / 1)'
	},
	valueOf() {
		return 0x161616
	}
});

/**
 * @constant clrGray900
 * @type {ColorDTO}
 */
export const clrGray900 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-900'
	},
	'name': {
		enumerable: true,
		value: 'Gray 900'
	},
	'hex': {
		enumerable: true,
		value: '#030303'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([3,3,3])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.15112rad 1.11% 98.61% / 1)'
	},
	valueOf() {
		return 0x030303
	}
});

/**
 * @constant clrGrayA100
 * @type {ColorDTO}
 */
export const clrGrayA100 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-a100'
	},
	'name': {
		enumerable: true,
		value: 'Gray A100'
	},
	'hex': {
		enumerable: true,
		value: '#2f2f2f'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([47,47,47])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.67175rad none 24.63% / 1)'
	},
	valueOf() {
		return 0x2f2f2f
	}
});

/**
 * @constant clrGrayA200
 * @type {ColorDTO}
 */
export const clrGrayA200 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-a200'
	},
	'name': {
		enumerable: true,
		value: 'Gray A200'
	},
	'hex': {
		enumerable: true,
		value: '#363636'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([54,54,54])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.6796rad none 30.64% / 1)'
	},
	valueOf() {
		return 0x363636
	}
});

/**
 * @constant clrGrayA400
 * @type {ColorDTO}
 */
export const clrGrayA400 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-a400'
	},
	'name': {
		enumerable: true,
		value: 'Gray A400'
	},
	'hex': {
		enumerable: true,
		value: '#3e3e3e'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([62,62,62])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.69566rad none 42.34% / 1)'
	},
	valueOf() {
		return 0x3e3e3e
	}
});

/**
 * @constant clrGrayA700
 * @type {ColorDTO}
 */
export const clrGrayA700 = Object.create(null, {
	'ident': {
		enumerable: true,
		value: 'gray-a700'
	},
	'name': {
		enumerable: true,
		value: 'Gray A700'
	},
	'hex': {
		enumerable: true,
		value: '#3d3d3d'
	},
	'rgb': {
		enumerable: true,
		value: new Uint8Array([61,61,61])
	},
	'space': {
		value: 'hwb'
	},
	toString() {
		return 'hwb(2.64836rad none 58.79% / 1)'
	},
	valueOf() {
		return 0x3d3d3d
	}
});

