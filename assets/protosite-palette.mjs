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
  ident: {
    enumerable: true,
    value: "black",
  },
  name: {
    enumerable: true,
    value: "Black",
  },
  hex: {
    enumerable: true,
    value: "#1a1a1aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([25, 25, 25]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.8851rad 8.8365% 89.748% / 100%)";
  },
  valueOf() {
    return 0x1a1a1aff;
  },
});

/**
 * @constant clrWhite
 * @type {ColorDTO}
 */
export const clrWhite = Object.create(null, {
  ident: {
    enumerable: true,
    value: "white",
  },
  name: {
    enumerable: true,
    value: "White",
  },
  hex: {
    enumerable: true,
    value: "#ffffffff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([255, 255, 255]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.0944rad 100% none / 100%)";
  },
  valueOf() {
    return 0xffffffff;
  },
});

/**
 * @constant clrRed
 * @type {ColorDTO}
 */
export const clrRed = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red",
  },
  name: {
    enumerable: true,
    value: "Red",
  },
  hex: {
    enumerable: true,
    value: "#544948ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([83, 72, 72]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.0394811rad 13.335% 31.062% / 100%)";
  },
  valueOf() {
    return 0x544948ff;
  },
});

/**
 * @constant clrRed50
 * @type {ColorDTO}
 */
export const clrRed50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-50",
  },
  name: {
    enumerable: true,
    value: "Red 50",
  },
  hex: {
    enumerable: true,
    value: "#67787aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([103, 119, 121]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.25277rad 32.89% 32.484% / 100%)";
  },
  valueOf() {
    return 0x67787aff;
  },
});

/**
 * @constant clrRed100
 * @type {ColorDTO}
 */
export const clrRed100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-100",
  },
  name: {
    enumerable: true,
    value: "Red 100",
  },
  hex: {
    enumerable: true,
    value: "#c3c3c3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([195, 195, 195]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.130783rad 76.514% none / 100%)";
  },
  valueOf() {
    return 0xc3c3c3ff;
  },
});

/**
 * @constant clrRed200
 * @type {ColorDTO}
 */
export const clrRed200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-200",
  },
  name: {
    enumerable: true,
    value: "Red 200",
  },
  hex: {
    enumerable: true,
    value: "#8c8c8cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([139, 139, 139]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.113801rad 54.73% none / 100%)";
  },
  valueOf() {
    return 0x8c8c8cff;
  },
});

/**
 * @constant clrRed300
 * @type {ColorDTO}
 */
export const clrRed300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-300",
  },
  name: {
    enumerable: true,
    value: "Red 300",
  },
  hex: {
    enumerable: true,
    value: "#656262ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([100, 97, 97]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.091731rad 37.148% 2.9442% / 100%)";
  },
  valueOf() {
    return 0x656262ff;
  },
});

/**
 * @constant clrRed400
 * @type {ColorDTO}
 */
export const clrRed400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-400",
  },
  name: {
    enumerable: true,
    value: "Red 400",
  },
  hex: {
    enumerable: true,
    value: "#605454ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([96, 84, 83]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.075215rad 25.502% 16.897% / 100%)";
  },
  valueOf() {
    return 0x605454ff;
  },
});

/**
 * @constant clrRed500
 * @type {ColorDTO}
 */
export const clrRed500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-500",
  },
  name: {
    enumerable: true,
    value: "Red 500",
  },
  hex: {
    enumerable: true,
    value: "#544948ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([84, 72, 72]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.041216rad 13.718% 30.638% / 100%)";
  },
  valueOf() {
    return 0x544948ff;
  },
});

/**
 * @constant clrRed600
 * @type {ColorDTO}
 */
export const clrRed600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-600",
  },
  name: {
    enumerable: true,
    value: "Red 600",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.1954rad none 44.178% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrRed700
 * @type {ColorDTO}
 */
export const clrRed700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-700",
  },
  name: {
    enumerable: true,
    value: "Red 700",
  },
  hex: {
    enumerable: true,
    value: "#3c3c3cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.19121rad none 61.402% / 100%)";
  },
  valueOf() {
    return 0x3c3c3cff;
  },
});

/**
 * @constant clrRed800
 * @type {ColorDTO}
 */
export const clrRed800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-800",
  },
  name: {
    enumerable: true,
    value: "Red 800",
  },
  hex: {
    enumerable: true,
    value: "#2b2b2bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([43, 43, 43]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.20709rad none 78.312% / 100%)";
  },
  valueOf() {
    return 0x2b2b2bff;
  },
});

/**
 * @constant clrRed900
 * @type {ColorDTO}
 */
export const clrRed900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-900",
  },
  name: {
    enumerable: true,
    value: "Red 900",
  },
  hex: {
    enumerable: true,
    value: "#101010ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([16, 16, 16]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.21826rad none 93.271% / 100%)";
  },
  valueOf() {
    return 0x101010ff;
  },
});

/**
 * @constant clrRedA100
 * @type {ColorDTO}
 */
export const clrRedA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-a100",
  },
  name: {
    enumerable: true,
    value: "Red A100",
  },
  hex: {
    enumerable: true,
    value: "#868686ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([133, 133, 133]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.0379993rad 52.463% none / 100%)";
  },
  valueOf() {
    return 0x868686ff;
  },
});

/**
 * @constant clrRedA200
 * @type {ColorDTO}
 */
export const clrRedA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-a200",
  },
  name: {
    enumerable: true,
    value: "Red A200",
  },
  hex: {
    enumerable: true,
    value: "#6f6f6fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([110, 110, 110]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.2769rad 43.503% none / 100%)";
  },
  valueOf() {
    return 0x6f6f6fff;
  },
});

/**
 * @constant clrRedA400
 * @type {ColorDTO}
 */
export const clrRedA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-a400",
  },
  name: {
    enumerable: true,
    value: "Red A400",
  },
  hex: {
    enumerable: true,
    value: "#000000ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([0, 0, 0]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.97688rad none none / 100%)";
  },
  valueOf() {
    return 0x000000ff;
  },
});

/**
 * @constant clrRedA700
 * @type {ColorDTO}
 */
export const clrRedA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "red-a700",
  },
  name: {
    enumerable: true,
    value: "Red A700",
  },
  hex: {
    enumerable: true,
    value: "#2b2b2bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([42, 42, 42]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.93028rad none 21.393% / 100%)";
  },
  valueOf() {
    return 0x2b2b2bff;
  },
});

/**
 * @constant clrPink
 * @type {ColorDTO}
 */
export const clrPink = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink",
  },
  name: {
    enumerable: true,
    value: "Pink",
  },
  hex: {
    enumerable: true,
    value: "#a39d9fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([163, 157, 159]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.88717rad 60.871% 5.7094% / 100%)";
  },
  valueOf() {
    return 0xa39d9fff;
  },
});

/**
 * @constant clrPink50
 * @type {ColorDTO}
 */
export const clrPink50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-50",
  },
  name: {
    enumerable: true,
    value: "Pink 50",
  },
  hex: {
    enumerable: true,
    value: "#e1e1e1ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([225, 225, 225]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.92627rad 88.272% none / 100%)";
  },
  valueOf() {
    return 0xe1e1e1ff;
  },
});

/**
 * @constant clrPink100
 * @type {ColorDTO}
 */
export const clrPink100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-100",
  },
  name: {
    enumerable: true,
    value: "Pink 100",
  },
  hex: {
    enumerable: true,
    value: "#c8c8c8ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([199, 199, 199]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.90899rad 78.431% none / 100%)";
  },
  valueOf() {
    return 0xc8c8c8ff;
  },
});

/**
 * @constant clrPink200
 * @type {ColorDTO}
 */
export const clrPink200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-200",
  },
  name: {
    enumerable: true,
    value: "Pink 200",
  },
  hex: {
    enumerable: true,
    value: "#a5a1a3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([165, 161, 162]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.88839rad 62.783% 3.6194% / 100%)";
  },
  valueOf() {
    return 0xa5a1a3ff;
  },
});

/**
 * @constant clrPink300
 * @type {ColorDTO}
 */
export const clrPink300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-300",
  },
  name: {
    enumerable: true,
    value: "Pink 300",
  },
  hex: {
    enumerable: true,
    value: "#96888eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([150, 136, 141]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.87949rad 50.638% 16.947% / 100%)";
  },
  valueOf() {
    return 0x96888eff;
  },
});

/**
 * @constant clrPink400
 * @type {ColorDTO}
 */
export const clrPink400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-400",
  },
  name: {
    enumerable: true,
    value: "Pink 400",
  },
  hex: {
    enumerable: true,
    value: "#847279ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([132, 113, 121]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.8671rad 38.877% 29.975% / 100%)";
  },
  valueOf() {
    return 0x847279ff;
  },
});

/**
 * @constant clrPink500
 * @type {ColorDTO}
 */
export const clrPink500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-500",
  },
  name: {
    enumerable: true,
    value: "Pink 500",
  },
  hex: {
    enumerable: true,
    value: "#6f5e65ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([111, 93, 101]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.8493rad 27.488% 42.688% / 100%)";
  },
  valueOf() {
    return 0x6f5e65ff;
  },
});

/**
 * @constant clrPink600
 * @type {ColorDTO}
 */
export const clrPink600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-600",
  },
  name: {
    enumerable: true,
    value: "Pink 600",
  },
  hex: {
    enumerable: true,
    value: "#574c51ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([87, 76, 81]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.8198rad 16.342% 55.076% / 100%)";
  },
  valueOf() {
    return 0x574c51ff;
  },
});

/**
 * @constant clrPink700
 * @type {ColorDTO}
 */
export const clrPink700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-700",
  },
  name: {
    enumerable: true,
    value: "Pink 700",
  },
  hex: {
    enumerable: true,
    value: "#3d3b3cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 58, 59]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.75365rad 4.364% 67.136% / 100%)";
  },
  valueOf() {
    return 0x3d3b3cff;
  },
});

/**
 * @constant clrPink800
 * @type {ColorDTO}
 */
export const clrPink800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-800",
  },
  name: {
    enumerable: true,
    value: "Pink 800",
  },
  hex: {
    enumerable: true,
    value: "#2a2a2aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([41, 41, 41]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.73777rad none 79.46% / 100%)";
  },
  valueOf() {
    return 0x2a2a2aff;
  },
});

/**
 * @constant clrPink900
 * @type {ColorDTO}
 */
export const clrPink900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-900",
  },
  name: {
    enumerable: true,
    value: "Pink 900",
  },
  hex: {
    enumerable: true,
    value: "#0f0f0fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([14, 14, 14]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.95rad none 93.76% / 100%)";
  },
  valueOf() {
    return 0x0f0f0fff;
  },
});

/**
 * @constant clrPinkA100
 * @type {ColorDTO}
 */
export const clrPinkA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-a100",
  },
  name: {
    enumerable: true,
    value: "Pink A100",
  },
  hex: {
    enumerable: true,
    value: "#8e8e8eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([141, 141, 141]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.85837rad 55.58% none / 100%)";
  },
  valueOf() {
    return 0x8e8e8eff;
  },
});

/**
 * @constant clrPinkA200
 * @type {ColorDTO}
 */
export const clrPinkA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-a200",
  },
  name: {
    enumerable: true,
    value: "Pink A200",
  },
  hex: {
    enumerable: true,
    value: "#717171ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([112, 112, 112]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.82678rad 44.306% none / 100%)";
  },
  valueOf() {
    return 0x717171ff;
  },
});

/**
 * @constant clrPinkA400
 * @type {ColorDTO}
 */
export const clrPinkA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-a400",
  },
  name: {
    enumerable: true,
    value: "Pink A400",
  },
  hex: {
    enumerable: true,
    value: "#000000ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([0, 0, 0]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.6334rad none none / 100%)";
  },
  valueOf() {
    return 0x000000ff;
  },
});

/**
 * @constant clrPinkA700
 * @type {ColorDTO}
 */
export const clrPinkA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "pink-a700",
  },
  name: {
    enumerable: true,
    value: "Pink A700",
  },
  hex: {
    enumerable: true,
    value: "#2a2a2aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([41, 41, 41]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.62973rad none 20.517% / 100%)";
  },
  valueOf() {
    return 0x2a2a2aff;
  },
});

/**
 * @constant clrPurple
 * @type {ColorDTO}
 */
export const clrPurple = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple",
  },
  name: {
    enumerable: true,
    value: "Purple",
  },
  hex: {
    enumerable: true,
    value: "#584b56ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([88, 75, 85]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.42832rad 17.795% 24.837% / 100%)";
  },
  valueOf() {
    return 0x584b56ff;
  },
});

/**
 * @constant clrPurple50
 * @type {ColorDTO}
 */
export const clrPurple50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-50",
  },
  name: {
    enumerable: true,
    value: "Purple 50",
  },
  hex: {
    enumerable: true,
    value: "#e0e0e0ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([223, 223, 223]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.54439rad 87.726% none / 100%)";
  },
  valueOf() {
    return 0xe0e0e0ff;
  },
});

/**
 * @constant clrPurple100
 * @type {ColorDTO}
 */
export const clrPurple100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-100",
  },
  name: {
    enumerable: true,
    value: "Purple 100",
  },
  hex: {
    enumerable: true,
    value: "#c5c5c5ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([196, 196, 196]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.52519rad 77.179% none / 100%)";
  },
  valueOf() {
    return 0xc5c5c5ff;
  },
});

/**
 * @constant clrPurple200
 * @type {ColorDTO}
 */
export const clrPurple200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-200",
  },
  name: {
    enumerable: true,
    value: "Purple 200",
  },
  hex: {
    enumerable: true,
    value: "#878787ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([135, 135, 135]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.47894rad 53.042% none / 100%)";
  },
  valueOf() {
    return 0x878787ff;
  },
});

/**
 * @constant clrPurple300
 * @type {ColorDTO}
 */
export const clrPurple300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-300",
  },
  name: {
    enumerable: true,
    value: "Purple 300",
  },
  hex: {
    enumerable: true,
    value: "#6a6369ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([106, 98, 104]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.45538rad 36.237% 6.9276% / 100%)";
  },
  valueOf() {
    return 0x6a6369ff;
  },
});

/**
 * @constant clrPurple400
 * @type {ColorDTO}
 */
export const clrPurple400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-400",
  },
  name: {
    enumerable: true,
    value: "Purple 400",
  },
  hex: {
    enumerable: true,
    value: "#5e515bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([94, 80, 91]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.43635rad 22.492% 20.663% / 100%)";
  },
  valueOf() {
    return 0x5e515bff;
  },
});

/**
 * @constant clrPurple500
 * @type {ColorDTO}
 */
export const clrPurple500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-500",
  },
  name: {
    enumerable: true,
    value: "Purple 500",
  },
  hex: {
    enumerable: true,
    value: "#3f3c3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 60, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.39621rad 2.3711% 34.165% / 100%)";
  },
  valueOf() {
    return 0x3f3c3eff;
  },
});

/**
 * @constant clrPurple600
 * @type {ColorDTO}
 */
export const clrPurple600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-600",
  },
  name: {
    enumerable: true,
    value: "Purple 600",
  },
  hex: {
    enumerable: true,
    value: "#404040ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.37509rad none 49.279% / 100%)";
  },
  valueOf() {
    return 0x404040ff;
  },
});

/**
 * @constant clrPurple700
 * @type {ColorDTO}
 */
export const clrPurple700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-700",
  },
  name: {
    enumerable: true,
    value: "Purple 700",
  },
  hex: {
    enumerable: true,
    value: "#393939ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([57, 57, 57]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.38329rad none 65.788% / 100%)";
  },
  valueOf() {
    return 0x393939ff;
  },
});

/**
 * @constant clrPurple800
 * @type {ColorDTO}
 */
export const clrPurple800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-800",
  },
  name: {
    enumerable: true,
    value: "Purple 800",
  },
  hex: {
    enumerable: true,
    value: "#272727ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([39, 39, 39]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.40616rad none 81.024% / 100%)";
  },
  valueOf() {
    return 0x272727ff;
  },
});

/**
 * @constant clrPurple900
 * @type {ColorDTO}
 */
export const clrPurple900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-900",
  },
  name: {
    enumerable: true,
    value: "Purple 900",
  },
  hex: {
    enumerable: true,
    value: "#0d0d0dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([13, 13, 13]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.5135rad none 94.532% / 100%)";
  },
  valueOf() {
    return 0x0d0d0dff;
  },
});

/**
 * @constant clrPurpleA100
 * @type {ColorDTO}
 */
export const clrPurpleA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-a100",
  },
  name: {
    enumerable: true,
    value: "Purple A100",
  },
  hex: {
    enumerable: true,
    value: "#898989ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([137, 137, 137]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.48121rad 53.762% none / 100%)";
  },
  valueOf() {
    return 0x898989ff;
  },
});

/**
 * @constant clrPurpleA200
 * @type {ColorDTO}
 */
export const clrPurpleA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-a200",
  },
  name: {
    enumerable: true,
    value: "Purple A200",
  },
  hex: {
    enumerable: true,
    value: "#686868ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([103, 103, 103]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.45625rad 40.738% none / 100%)";
  },
  valueOf() {
    return 0x686868ff;
  },
});

/**
 * @constant clrPurpleA400
 * @type {ColorDTO}
 */
export const clrPurpleA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-a400",
  },
  name: {
    enumerable: true,
    value: "Purple A400",
  },
  hex: {
    enumerable: true,
    value: "#000000ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([0, 0, 0]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.36828rad none none / 100%)";
  },
  valueOf() {
    return 0x000000ff;
  },
});

/**
 * @constant clrPurpleA700
 * @type {ColorDTO}
 */
export const clrPurpleA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "purple-a700",
  },
  name: {
    enumerable: true,
    value: "Purple A700",
  },
  hex: {
    enumerable: true,
    value: "#2d2d2dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([44, 44, 44]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.37108rad none 22.787% / 100%)";
  },
  valueOf() {
    return 0x2d2d2dff;
  },
});

/**
 * @constant clrViolet
 * @type {ColorDTO}
 */
export const clrViolet = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet",
  },
  name: {
    enumerable: true,
    value: "Violet",
  },
  hex: {
    enumerable: true,
    value: "#322f34ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([50, 47, 52]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.85079rad 10.859% 11.012% / 100%)";
  },
  valueOf() {
    return 0x322f34ff;
  },
});

/**
 * @constant clrViolet50
 * @type {ColorDTO}
 */
export const clrViolet50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-50",
  },
  name: {
    enumerable: true,
    value: "Violet 50",
  },
  hex: {
    enumerable: true,
    value: "#889180ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([135, 145, 128]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.61939rad 46.53% 29.071% / 100%)";
  },
  valueOf() {
    return 0x889180ff;
  },
});

/**
 * @constant clrViolet100
 * @type {ColorDTO}
 */
export const clrViolet100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-100",
  },
  name: {
    enumerable: true,
    value: "Violet 100",
  },
  hex: {
    enumerable: true,
    value: "#7a8472ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([121, 131, 113]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.62398rad 39.23% 35.808% / 100%)";
  },
  valueOf() {
    return 0x7a8472ff;
  },
});

/**
 * @constant clrViolet200
 * @type {ColorDTO}
 */
export const clrViolet200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-200",
  },
  name: {
    enumerable: true,
    value: "Violet 200",
  },
  hex: {
    enumerable: true,
    value: "#a1a1a1ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([160, 160, 160]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.73752rad 63.134% none / 100%)";
  },
  valueOf() {
    return 0xa1a1a1ff;
  },
});

/**
 * @constant clrViolet300
 * @type {ColorDTO}
 */
export const clrViolet300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-300",
  },
  name: {
    enumerable: true,
    value: "Violet 300",
  },
  hex: {
    enumerable: true,
    value: "#6c6c6cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([107, 107, 107]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.77644rad 42.255% none / 100%)";
  },
  valueOf() {
    return 0x6c6c6cff;
  },
});

/**
 * @constant clrViolet400
 * @type {ColorDTO}
 */
export const clrViolet400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-400",
  },
  name: {
    enumerable: true,
    value: "Violet 400",
  },
  hex: {
    enumerable: true,
    value: "#3f3d40ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 60, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.82077rad 21.89% 3.3675% / 100%)";
  },
  valueOf() {
    return 0x3f3d40ff;
  },
});

/**
 * @constant clrViolet500
 * @type {ColorDTO}
 */
export const clrViolet500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-500",
  },
  name: {
    enumerable: true,
    value: "Violet 500",
  },
  hex: {
    enumerable: true,
    value: "#242424ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([36, 36, 36]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.90752rad none 17.079% / 100%)";
  },
  valueOf() {
    return 0x242424ff;
  },
});

/**
 * @constant clrViolet600
 * @type {ColorDTO}
 */
export const clrViolet600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-600",
  },
  name: {
    enumerable: true,
    value: "Violet 600",
  },
  hex: {
    enumerable: true,
    value: "#3c3c3cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([59, 59, 59]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.90734rad none 37.31% / 100%)";
  },
  valueOf() {
    return 0x3c3c3cff;
  },
});

/**
 * @constant clrViolet700
 * @type {ColorDTO}
 */
export const clrViolet700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-700",
  },
  name: {
    enumerable: true,
    value: "Violet 700",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.89163rad none 57.037% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrViolet800
 * @type {ColorDTO}
 */
export const clrViolet800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-800",
  },
  name: {
    enumerable: true,
    value: "Violet 800",
  },
  hex: {
    enumerable: true,
    value: "#303030ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([47, 47, 47]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.84835rad none 75.24% / 100%)";
  },
  valueOf() {
    return 0x303030ff;
  },
});

/**
 * @constant clrViolet900
 * @type {ColorDTO}
 */
export const clrViolet900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-900",
  },
  name: {
    enumerable: true,
    value: "Violet 900",
  },
  hex: {
    enumerable: true,
    value: "#141414ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([19, 19, 19]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.66788rad none 91.521% / 100%)";
  },
  valueOf() {
    return 0x141414ff;
  },
});

/**
 * @constant clrVioletA100
 * @type {ColorDTO}
 */
export const clrVioletA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-a100",
  },
  name: {
    enumerable: true,
    value: "Violet A100",
  },
  hex: {
    enumerable: true,
    value: "#a3a3a3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([162, 162, 162]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.73805rad 63.872% none / 100%)";
  },
  valueOf() {
    return 0xa3a3a3ff;
  },
});

/**
 * @constant clrVioletA200
 * @type {ColorDTO}
 */
export const clrVioletA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-a200",
  },
  name: {
    enumerable: true,
    value: "Violet A200",
  },
  hex: {
    enumerable: true,
    value: "#8f8f8fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([142, 142, 142]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.73874rad 55.943% none / 100%)";
  },
  valueOf() {
    return 0x8f8f8fff;
  },
});

/**
 * @constant clrVioletA400
 * @type {ColorDTO}
 */
export const clrVioletA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-a400",
  },
  name: {
    enumerable: true,
    value: "Violet A400",
  },
  hex: {
    enumerable: true,
    value: "#626262ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([98, 98, 98]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.74642rad 38.568% none / 100%)";
  },
  valueOf() {
    return 0x626262ff;
  },
});

/**
 * @constant clrVioletA700
 * @type {ColorDTO}
 */
export const clrVioletA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "violet-a700",
  },
  name: {
    enumerable: true,
    value: "Violet A700",
  },
  hex: {
    enumerable: true,
    value: "#000000ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([0, 0, 0]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.84783rad none none / 100%)";
  },
  valueOf() {
    return 0x000000ff;
  },
});

/**
 * @constant clrIndigo
 * @type {ColorDTO}
 */
export const clrIndigo = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo",
  },
  name: {
    enumerable: true,
    value: "Indigo",
  },
  hex: {
    enumerable: true,
    value: "#46454bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([70, 68, 75]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.46141rad 7.9752% 55.905% / 100%)";
  },
  valueOf() {
    return 0x46454bff;
  },
});

/**
 * @constant clrIndigo50
 * @type {ColorDTO}
 */
export const clrIndigo50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-50",
  },
  name: {
    enumerable: true,
    value: "Indigo 50",
  },
  hex: {
    enumerable: true,
    value: "#646459ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([99, 100, 89]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.09764rad 30.13% 12.127% / 100%)";
  },
  valueOf() {
    return 0x646459ff;
  },
});

/**
 * @constant clrIndigo100
 * @type {ColorDTO}
 */
export const clrIndigo100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-100",
  },
  name: {
    enumerable: true,
    value: "Indigo 100",
  },
  hex: {
    enumerable: true,
    value: "#5c5d50ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([92, 92, 80]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.10209rad 23.1% 18.632% / 100%)";
  },
  valueOf() {
    return 0x5c5d50ff;
  },
});

/**
 * @constant clrIndigo200
 * @type {ColorDTO}
 */
export const clrIndigo200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-200",
  },
  name: {
    enumerable: true,
    value: "Indigo 200",
  },
  hex: {
    enumerable: true,
    value: "#b1b1b1ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([177, 177, 177]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.24324rad 69.506% none / 100%)";
  },
  valueOf() {
    return 0xb1b1b1ff;
  },
});

/**
 * @constant clrIndigo300
 * @type {ColorDTO}
 */
export const clrIndigo300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-300",
  },
  name: {
    enumerable: true,
    value: "Indigo 300",
  },
  hex: {
    enumerable: true,
    value: "#929196ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([145, 145, 150]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.26873rad 56.168% 4.3666% / 100%)";
  },
  valueOf() {
    return 0x929196ff;
  },
});

/**
 * @constant clrIndigo400
 * @type {ColorDTO}
 */
export const clrIndigo400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-400",
  },
  name: {
    enumerable: true,
    value: "Indigo 400",
  },
  hex: {
    enumerable: true,
    value: "#7b7a89ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([123, 122, 137]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.28845rad 44.071% 17.672% / 100%)";
  },
  valueOf() {
    return 0x7b7a89ff;
  },
});

/**
 * @constant clrIndigo500
 * @type {ColorDTO}
 */
export const clrIndigo500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-500",
  },
  name: {
    enumerable: true,
    value: "Indigo 500",
  },
  hex: {
    enumerable: true,
    value: "#686679ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([104, 101, 120]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.31742rad 32.28% 30.672% / 100%)";
  },
  valueOf() {
    return 0x686679ff;
  },
});

/**
 * @constant clrIndigo600
 * @type {ColorDTO}
 */
export const clrIndigo600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-600",
  },
  name: {
    enumerable: true,
    value: "Indigo 600",
  },
  hex: {
    enumerable: true,
    value: "#575465ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([86, 84, 100]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.36472rad 20.64% 43.35% / 100%)";
  },
  valueOf() {
    return 0x575465ff;
  },
});

/**
 * @constant clrIndigo700
 * @type {ColorDTO}
 */
export const clrIndigo700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-700",
  },
  name: {
    enumerable: true,
    value: "Indigo 700",
  },
  hex: {
    enumerable: true,
    value: "#47454cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([70, 68, 75]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.45879rad 8.2278% 55.688% / 100%)";
  },
  valueOf() {
    return 0x47454cff;
  },
});

/**
 * @constant clrIndigo800
 * @type {ColorDTO}
 */
export const clrIndigo800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-800",
  },
  name: {
    enumerable: true,
    value: "Indigo 800",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([53, 53, 53]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.57433rad none 69.586% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrIndigo900
 * @type {ColorDTO}
 */
export const clrIndigo900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-900",
  },
  name: {
    enumerable: true,
    value: "Indigo 900",
  },
  hex: {
    enumerable: true,
    value: "#191919ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([25, 25, 25]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.41446rad none 88.912% / 100%)";
  },
  valueOf() {
    return 0x191919ff;
  },
});

/**
 * @constant clrIndigoA100
 * @type {ColorDTO}
 */
export const clrIndigoA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-a100",
  },
  name: {
    enumerable: true,
    value: "Indigo A100",
  },
  hex: {
    enumerable: true,
    value: "#838383ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([131, 131, 131]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.32851rad 60.32% 56.696% / 100%)";
  },
  valueOf() {
    return 0x838383ff;
  },
});

/**
 * @constant clrIndigoA200
 * @type {ColorDTO}
 */
export const clrIndigoA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-a200",
  },
  name: {
    enumerable: true,
    value: "Indigo A200",
  },
  hex: {
    enumerable: true,
    value: "#a0a0a0ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([160, 160, 160]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.26419rad 62.94% none / 100%)";
  },
  valueOf() {
    return 0xa0a0a0ff;
  },
});

/**
 * @constant clrIndigoA400
 * @type {ColorDTO}
 */
export const clrIndigoA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-a400",
  },
  name: {
    enumerable: true,
    value: "Indigo A400",
  },
  hex: {
    enumerable: true,
    value: "#808080ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([128, 128, 128]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.23574rad 50.209% none / 100%)";
  },
  valueOf() {
    return 0x808080ff;
  },
});

/**
 * @constant clrIndigoA700
 * @type {ColorDTO}
 */
export const clrIndigoA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "indigo-a700",
  },
  name: {
    enumerable: true,
    value: "Indigo A700",
  },
  hex: {
    enumerable: true,
    value: "#474747ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([71, 71, 71]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.16889rad 27.971% none / 100%)";
  },
  valueOf() {
    return 0x474747ff;
  },
});

/**
 * @constant clrBlue
 * @type {ColorDTO}
 */
export const clrBlue = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue",
  },
  name: {
    enumerable: true,
    value: "Blue",
  },
  hex: {
    enumerable: true,
    value: "#606071ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([95, 96, 112]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.1565rad 29.397% 25.247% / 100%)";
  },
  valueOf() {
    return 0x606071ff;
  },
});

/**
 * @constant clrBlue50
 * @type {ColorDTO}
 */
export const clrBlue50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-50",
  },
  name: {
    enumerable: true,
    value: "Blue 50",
  },
  hex: {
    enumerable: true,
    value: "#7e7c6eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([125, 123, 110]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.919055rad 38.38% 18.074% / 100%)";
  },
  valueOf() {
    return 0x7e7c6eff;
  },
});

/**
 * @constant clrBlue100
 * @type {ColorDTO}
 */
export const clrBlue100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-100",
  },
  name: {
    enumerable: true,
    value: "Blue 100",
  },
  hex: {
    enumerable: true,
    value: "#747263ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([115, 113, 98]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.923419rad 31.22% 24.302% / 100%)";
  },
  valueOf() {
    return 0x747263ff;
  },
});

/**
 * @constant clrBlue200
 * @type {ColorDTO}
 */
export const clrBlue200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-200",
  },
  name: {
    enumerable: true,
    value: "Blue 200",
  },
  hex: {
    enumerable: true,
    value: "#a9a9a9ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([168, 168, 168]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.05004rad 66.211% none / 100%)";
  },
  valueOf() {
    return 0xa9a9a9ff;
  },
});

/**
 * @constant clrBlue300
 * @type {ColorDTO}
 */
export const clrBlue300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-300",
  },
  name: {
    enumerable: true,
    value: "Blue 300",
  },
  hex: {
    enumerable: true,
    value: "#848484ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([132, 132, 132]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.09123rad 51.926% none / 100%)";
  },
  valueOf() {
    return 0x848484ff;
  },
});

/**
 * @constant clrBlue400
 * @type {ColorDTO}
 */
export const clrBlue400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-400",
  },
  name: {
    enumerable: true,
    value: "Blue 400",
  },
  hex: {
    enumerable: true,
    value: "#70717aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([111, 112, 122]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.11392rad 40.858% 10.42% / 100%)";
  },
  valueOf() {
    return 0x70717aff;
  },
});

/**
 * @constant clrBlue500
 * @type {ColorDTO}
 */
export const clrBlue500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-500",
  },
  name: {
    enumerable: true,
    value: "Blue 500",
  },
  hex: {
    enumerable: true,
    value: "#616272ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([97, 97, 113]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.15074rad 30.509% 23.76% / 100%)";
  },
  valueOf() {
    return 0x616272ff;
  },
});

/**
 * @constant clrBlue600
 * @type {ColorDTO}
 */
export const clrBlue600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-600",
  },
  name: {
    enumerable: true,
    value: "Blue 600",
  },
  hex: {
    enumerable: true,
    value: "#545363ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([83, 83, 99]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.22021rad 19.842% 36.811% / 100%)";
  },
  valueOf() {
    return 0x545363ff;
  },
});

/**
 * @constant clrBlue700
 * @type {ColorDTO}
 */
export const clrBlue700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-700",
  },
  name: {
    enumerable: true,
    value: "Blue 700",
  },
  hex: {
    enumerable: true,
    value: "#444349ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([68, 67, 72]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.3806rad 4.9643% 49.559% / 100%)";
  },
  valueOf() {
    return 0x444349ff;
  },
});

/**
 * @constant clrBlue800
 * @type {ColorDTO}
 */
export const clrBlue800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-800",
  },
  name: {
    enumerable: true,
    value: "Blue 800",
  },
  hex: {
    enumerable: true,
    value: "#383838ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([55, 55, 55]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.46403rad none 67.614% / 100%)";
  },
  valueOf() {
    return 0x383838ff;
  },
});

/**
 * @constant clrBlue900
 * @type {ColorDTO}
 */
export const clrBlue900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-900",
  },
  name: {
    enumerable: true,
    value: "Blue 900",
  },
  hex: {
    enumerable: true,
    value: "#1b1b1bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([26, 26, 26]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(4.34273rad none 88.208% / 100%)";
  },
  valueOf() {
    return 0x1b1b1bff;
  },
});

/**
 * @constant clrBlueA100
 * @type {ColorDTO}
 */
export const clrBlueA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-a100",
  },
  name: {
    enumerable: true,
    value: "Blue A100",
  },
  hex: {
    enumerable: true,
    value: "#959595ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([148, 148, 148]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.86782rad 58.373% none / 100%)";
  },
  valueOf() {
    return 0x959595ff;
  },
});

/**
 * @constant clrBlueA200
 * @type {ColorDTO}
 */
export const clrBlueA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-a200",
  },
  name: {
    enumerable: true,
    value: "Blue A200",
  },
  hex: {
    enumerable: true,
    value: "#7b7b7bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([123, 123, 123]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.83658rad 48.362% none / 100%)";
  },
  valueOf() {
    return 0x7b7b7bff;
  },
});

/**
 * @constant clrBlueA400
 * @type {ColorDTO}
 */
export const clrBlueA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-a400",
  },
  name: {
    enumerable: true,
    value: "Blue A400",
  },
  hex: {
    enumerable: true,
    value: "#313131ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([49, 49, 49]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.72453rad 19.307% none / 100%)";
  },
  valueOf() {
    return 0x313131ff;
  },
});

/**
 * @constant clrBlueA700
 * @type {ColorDTO}
 */
export const clrBlueA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "blue-a700",
  },
  name: {
    enumerable: true,
    value: "Blue A700",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.45907rad none 30.618% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrLightBlue
 * @type {ColorDTO}
 */
export const clrLightBlue = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue",
  },
  name: {
    enumerable: true,
    value: "Light Blue",
  },
  hex: {
    enumerable: true,
    value: "#4b4b4bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([75, 75, 75]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.52225rad 29.416% none / 100%)";
  },
  valueOf() {
    return 0x4b4b4bff;
  },
});

/**
 * @constant clrLightBlue50
 * @type {ColorDTO}
 */
export const clrLightBlue50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-50",
  },
  name: {
    enumerable: true,
    value: "Light Blue 50",
  },
  hex: {
    enumerable: true,
    value: "#d3d3d3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([210, 210, 210]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.56571rad 82.571% none / 100%)";
  },
  valueOf() {
    return 0xd3d3d3ff;
  },
});

/**
 * @constant clrLightBlue100
 * @type {ColorDTO}
 */
export const clrLightBlue100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-100",
  },
  name: {
    enumerable: true,
    value: "Light Blue 100",
  },
  hex: {
    enumerable: true,
    value: "#b0b0b0ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([175, 175, 175]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.5596rad 68.916% none / 100%)";
  },
  valueOf() {
    return 0xb0b0b0ff;
  },
});

/**
 * @constant clrLightBlue200
 * @type {ColorDTO}
 */
export const clrLightBlue200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-200",
  },
  name: {
    enumerable: true,
    value: "Light Blue 200",
  },
  hex: {
    enumerable: true,
    value: "#5e5e5eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([94, 94, 94]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.5315rad 36.889% none / 100%)";
  },
  valueOf() {
    return 0x5e5e5eff;
  },
});

/**
 * @constant clrLightBlue300
 * @type {ColorDTO}
 */
export const clrLightBlue300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-300",
  },
  name: {
    enumerable: true,
    value: "Light Blue 300",
  },
  hex: {
    enumerable: true,
    value: "#3e4244ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 65, 67]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.50724rad 19.335% 8.3358% / 100%)";
  },
  valueOf() {
    return 0x3e4244ff;
  },
});

/**
 * @constant clrLightBlue400
 * @type {ColorDTO}
 */
export const clrLightBlue400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-400",
  },
  name: {
    enumerable: true,
    value: "Light Blue 400",
  },
  hex: {
    enumerable: true,
    value: "#2b2b2bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([43, 43, 43]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.43481rad none 21.479% / 100%)";
  },
  valueOf() {
    return 0x2b2b2bff;
  },
});

/**
 * @constant clrLightBlue500
 * @type {ColorDTO}
 */
export const clrLightBlue500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-500",
  },
  name: {
    enumerable: true,
    value: "Light Blue 500",
  },
  hex: {
    enumerable: true,
    value: "#3c3c3cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.44004rad none 38.118% / 100%)";
  },
  valueOf() {
    return 0x3c3c3cff;
  },
});

/**
 * @constant clrLightBlue600
 * @type {ColorDTO}
 */
export const clrLightBlue600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-600",
  },
  name: {
    enumerable: true,
    value: "Light Blue 600",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.45121rad none 53.862% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrLightBlue700
 * @type {ColorDTO}
 */
export const clrLightBlue700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-700",
  },
  name: {
    enumerable: true,
    value: "Light Blue 700",
  },
  hex: {
    enumerable: true,
    value: "#373737ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.47757rad none 68.538% / 100%)";
  },
  valueOf() {
    return 0x373737ff;
  },
});

/**
 * @constant clrLightBlue800
 * @type {ColorDTO}
 */
export const clrLightBlue800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-800",
  },
  name: {
    enumerable: true,
    value: "Light Blue 800",
  },
  hex: {
    enumerable: true,
    value: "#262626ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([37, 37, 37]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.55541rad none 81.895% / 100%)";
  },
  valueOf() {
    return 0x262626ff;
  },
});

/**
 * @constant clrLightBlue900
 * @type {ColorDTO}
 */
export const clrLightBlue900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-900",
  },
  name: {
    enumerable: true,
    value: "Light Blue 900",
  },
  hex: {
    enumerable: true,
    value: "#0e0e0eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([14, 14, 14]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.82524rad none 94.043% / 100%)";
  },
  valueOf() {
    return 0x0e0e0eff;
  },
});

/**
 * @constant clrLightBlueA100
 * @type {ColorDTO}
 */
export const clrLightBlueA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-a100",
  },
  name: {
    enumerable: true,
    value: "Light Blue A100",
  },
  hex: {
    enumerable: true,
    value: "#222222ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([34, 34, 34]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.24527rad none 16.034% / 100%)";
  },
  valueOf() {
    return 0x222222ff;
  },
});

/**
 * @constant clrLightBlueA200
 * @type {ColorDTO}
 */
export const clrLightBlueA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-a200",
  },
  name: {
    enumerable: true,
    value: "Light Blue A200",
  },
  hex: {
    enumerable: true,
    value: "#323232ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([49, 49, 49]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.21769rad none 26.446% / 100%)";
  },
  valueOf() {
    return 0x323232ff;
  },
});

/**
 * @constant clrLightBlueA400
 * @type {ColorDTO}
 */
export const clrLightBlueA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-a400",
  },
  name: {
    enumerable: true,
    value: "Light Blue A400",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.13025rad none 56.235% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrLightBlueA700
 * @type {ColorDTO}
 */
export const clrLightBlueA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-blue-a700",
  },
  name: {
    enumerable: true,
    value: "Light Blue A700",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([53, 53, 53]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.1313rad none 69.845% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrCyan
 * @type {ColorDTO}
 */
export const clrCyan = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan",
  },
  name: {
    enumerable: true,
    value: "Cyan",
  },
  hex: {
    enumerable: true,
    value: "#4c5858ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([76, 88, 88]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.11838rad 20.79% 19.143% / 100%)";
  },
  valueOf() {
    return 0x4c5858ff;
  },
});

/**
 * @constant clrCyan50
 * @type {ColorDTO}
 */
export const clrCyan50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-50",
  },
  name: {
    enumerable: true,
    value: "Cyan 50",
  },
  hex: {
    enumerable: true,
    value: "#8b8b8bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([138, 138, 138]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.10773rad 54.473% none / 100%)";
  },
  valueOf() {
    return 0x8b8b8bff;
  },
});

/**
 * @constant clrCyan100
 * @type {ColorDTO}
 */
export const clrCyan100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-100",
  },
  name: {
    enumerable: true,
    value: "Cyan 100",
  },
  hex: {
    enumerable: true,
    value: "#6c7070ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([108, 111, 111]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.11245rad 41.579% 2.8876% / 100%)";
  },
  valueOf() {
    return 0x6c7070ff;
  },
});

/**
 * @constant clrCyan200
 * @type {ColorDTO}
 */
export const clrCyan200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-200",
  },
  name: {
    enumerable: true,
    value: "Cyan 200",
  },
  hex: {
    enumerable: true,
    value: "#535f5fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([82, 94, 94]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.11698rad 25.479% 15.978% / 100%)";
  },
  valueOf() {
    return 0x535f5fff;
  },
});

/**
 * @constant clrCyan300
 * @type {ColorDTO}
 */
export const clrCyan300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-300",
  },
  name: {
    enumerable: true,
    value: "Cyan 300",
  },
  hex: {
    enumerable: true,
    value: "#343434ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([52, 52, 52]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.12588rad none 28.73% / 100%)";
  },
  valueOf() {
    return 0x343434ff;
  },
});

/**
 * @constant clrCyan400
 * @type {ColorDTO}
 */
export const clrCyan400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-400",
  },
  name: {
    enumerable: true,
    value: "Cyan 400",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.1292rad none 41.128% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrCyan500
 * @type {ColorDTO}
 */
export const clrCyan500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-500",
  },
  name: {
    enumerable: true,
    value: "Cyan 500",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.12938rad none 54.064% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrCyan600
 * @type {ColorDTO}
 */
export const clrCyan600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-600",
  },
  name: {
    enumerable: true,
    value: "Cyan 600",
  },
  hex: {
    enumerable: true,
    value: "#393939ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([56, 56, 56]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.12938rad none 66.376% / 100%)";
  },
  valueOf() {
    return 0x393939ff;
  },
});

/**
 * @constant clrCyan700
 * @type {ColorDTO}
 */
export const clrCyan700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-700",
  },
  name: {
    enumerable: true,
    value: "Cyan 700",
  },
  hex: {
    enumerable: true,
    value: "#2c2c2cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([43, 43, 43]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.12955rad none 77.956% / 100%)";
  },
  valueOf() {
    return 0x2c2c2cff;
  },
});

/**
 * @constant clrCyan800
 * @type {ColorDTO}
 */
export const clrCyan800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-800",
  },
  name: {
    enumerable: true,
    value: "Cyan 800",
  },
  hex: {
    enumerable: true,
    value: "#1a1a1aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([25, 25, 25]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.1299rad none 88.631% / 100%)";
  },
  valueOf() {
    return 0x1a1a1aff;
  },
});

/**
 * @constant clrCyan900
 * @type {ColorDTO}
 */
export const clrCyan900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-900",
  },
  name: {
    enumerable: true,
    value: "Cyan 900",
  },
  hex: {
    enumerable: true,
    value: "#050505ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([5, 5, 5]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.14002rad none 97.797% / 100%)";
  },
  valueOf() {
    return 0x050505ff;
  },
});

/**
 * @constant clrCyanA100
 * @type {ColorDTO}
 */
export const clrCyanA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-a100",
  },
  name: {
    enumerable: true,
    value: "Cyan A100",
  },
  hex: {
    enumerable: true,
    value: "#333333ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([50, 50, 50]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.13671rad none 27.316% / 100%)";
  },
  valueOf() {
    return 0x333333ff;
  },
});

/**
 * @constant clrCyanA200
 * @type {ColorDTO}
 */
export const clrCyanA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-a200",
  },
  name: {
    enumerable: true,
    value: "Cyan A200",
  },
  hex: {
    enumerable: true,
    value: "#393939ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([56, 56, 56]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.13723rad none 33.162% / 100%)";
  },
  valueOf() {
    return 0x393939ff;
  },
});

/**
 * @constant clrCyanA400
 * @type {ColorDTO}
 */
export const clrCyanA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-a400",
  },
  name: {
    enumerable: true,
    value: "Cyan A400",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.13845rad none 44.562% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrCyanA700
 * @type {ColorDTO}
 */
export const clrCyanA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "cyan-a700",
  },
  name: {
    enumerable: true,
    value: "Cyan A700",
  },
  hex: {
    enumerable: true,
    value: "#3d3d3dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.1402rad none 60.882% / 100%)";
  },
  valueOf() {
    return 0x3d3d3dff;
  },
});

/**
 * @constant clrTeal
 * @type {ColorDTO}
 */
export const clrTeal = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal",
  },
  name: {
    enumerable: true,
    value: "Teal",
  },
  hex: {
    enumerable: true,
    value: "#4c5956ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([75, 88, 86]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.95327rad 13.714% 41.016% / 100%)";
  },
  valueOf() {
    return 0x4c5956ff;
  },
});

/**
 * @constant clrTeal50
 * @type {ColorDTO}
 */
export const clrTeal50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-50",
  },
  name: {
    enumerable: true,
    value: "Teal 50",
  },
  hex: {
    enumerable: true,
    value: "#9e9e9eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([157, 157, 157]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.89794rad 61.852% none / 100%)";
  },
  valueOf() {
    return 0x9e9e9eff;
  },
});

/**
 * @constant clrTeal100
 * @type {ColorDTO}
 */
export const clrTeal100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-100",
  },
  name: {
    enumerable: true,
    value: "Teal 100",
  },
  hex: {
    enumerable: true,
    value: "#8f9392ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([142, 147, 146]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.90213rad 55.263% 3.9612% / 100%)";
  },
  valueOf() {
    return 0x8f9392ff;
  },
});

/**
 * @constant clrTeal200
 * @type {ColorDTO}
 */
export const clrTeal200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-200",
  },
  name: {
    enumerable: true,
    value: "Teal 200",
  },
  hex: {
    enumerable: true,
    value: "#768481ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([117, 132, 129]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.91243rad 42.062% 16.977% / 100%)";
  },
  valueOf() {
    return 0x768481ff;
  },
});

/**
 * @constant clrTeal300
 * @type {ColorDTO}
 */
export const clrTeal300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-300",
  },
  name: {
    enumerable: true,
    value: "Teal 300",
  },
  hex: {
    enumerable: true,
    value: "#5f716eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([95, 113, 109]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.92779rad 28.427% 29.644% / 100%)";
  },
  valueOf() {
    return 0x5f716eff;
  },
});

/**
 * @constant clrTeal400
 * @type {ColorDTO}
 */
export const clrTeal400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-400",
  },
  name: {
    enumerable: true,
    value: "Teal 400",
  },
  hex: {
    enumerable: true,
    value: "#4a5654ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([74, 86, 84]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.95659rad 12.194% 41.933% / 100%)";
  },
  valueOf() {
    return 0x4a5654ff;
  },
});

/**
 * @constant clrTeal500
 * @type {ColorDTO}
 */
export const clrTeal500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-500",
  },
  name: {
    enumerable: true,
    value: "Teal 500",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.00598rad none 53.81% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrTeal600
 * @type {ColorDTO}
 */
export const clrTeal600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-600",
  },
  name: {
    enumerable: true,
    value: "Teal 600",
  },
  hex: {
    enumerable: true,
    value: "#393939ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([57, 57, 57]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.00092rad none 65.874% / 100%)";
  },
  valueOf() {
    return 0x393939ff;
  },
});

/**
 * @constant clrTeal700
 * @type {ColorDTO}
 */
export const clrTeal700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-700",
  },
  name: {
    enumerable: true,
    value: "Teal 700",
  },
  hex: {
    enumerable: true,
    value: "#2c2c2cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([44, 44, 44]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.98591rad none 77.58% / 100%)";
  },
  valueOf() {
    return 0x2c2c2cff;
  },
});

/**
 * @constant clrTeal800
 * @type {ColorDTO}
 */
export const clrTeal800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-800",
  },
  name: {
    enumerable: true,
    value: "Teal 800",
  },
  hex: {
    enumerable: true,
    value: "#1a1a1aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([26, 26, 26]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.94297rad none 88.367% / 100%)";
  },
  valueOf() {
    return 0x1a1a1aff;
  },
});

/**
 * @constant clrTeal900
 * @type {ColorDTO}
 */
export const clrTeal900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-900",
  },
  name: {
    enumerable: true,
    value: "Teal 900",
  },
  hex: {
    enumerable: true,
    value: "#141313ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([19, 19, 19]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.95227rad 3.7247% 4.31% / 100%)";
  },
  valueOf() {
    return 0x141313ff;
  },
});

/**
 * @constant clrTealA100
 * @type {ColorDTO}
 */
export const clrTealA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-a100",
  },
  name: {
    enumerable: true,
    value: "Teal A100",
  },
  hex: {
    enumerable: true,
    value: "#323232ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([49, 49, 49]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.01279rad none 26.659% / 100%)";
  },
  valueOf() {
    return 0x323232ff;
  },
});

/**
 * @constant clrTealA200
 * @type {ColorDTO}
 */
export const clrTealA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-a200",
  },
  name: {
    enumerable: true,
    value: "Teal A200",
  },
  hex: {
    enumerable: true,
    value: "#383838ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([55, 55, 55]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.01174rad none 32.499% / 100%)";
  },
  valueOf() {
    return 0x383838ff;
  },
});

/**
 * @constant clrTealA400
 * @type {ColorDTO}
 */
export const clrTealA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-a400",
  },
  name: {
    enumerable: true,
    value: "Teal A400",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.0086rad none 43.855% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrTealA700
 * @type {ColorDTO}
 */
export const clrTealA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "teal-a700",
  },
  name: {
    enumerable: true,
    value: "Teal A700",
  },
  hex: {
    enumerable: true,
    value: "#3d3d3dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.9997rad none 59.947% / 100%)";
  },
  valueOf() {
    return 0x3d3d3dff;
  },
});

/**
 * @constant clrGreen
 * @type {ColorDTO}
 */
export const clrGreen = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green",
  },
  name: {
    enumerable: true,
    value: "Green",
  },
  hex: {
    enumerable: true,
    value: "#1f1f1fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([31, 31, 31]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.58152rad none 14.342% / 100%)";
  },
  valueOf() {
    return 0x1f1f1fff;
  },
});

/**
 * @constant clrGreen50
 * @type {ColorDTO}
 */
export const clrGreen50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-50",
  },
  name: {
    enumerable: true,
    value: "Green 50",
  },
  hex: {
    enumerable: true,
    value: "#b2b2b2ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([177, 177, 177]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.23926rad 69.783% none / 100%)";
  },
  valueOf() {
    return 0xb2b2b2ff;
  },
});

/**
 * @constant clrGreen100
 * @type {ColorDTO}
 */
export const clrGreen100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-100",
  },
  name: {
    enumerable: true,
    value: "Green 100",
  },
  hex: {
    enumerable: true,
    value: "#474747ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([71, 71, 71]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.37976rad 28.025% none / 100%)";
  },
  valueOf() {
    return 0x474747ff;
  },
});

/**
 * @constant clrGreen200
 * @type {ColorDTO}
 */
export const clrGreen200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-200",
  },
  name: {
    enumerable: true,
    value: "Green 200",
  },
  hex: {
    enumerable: true,
    value: "#181818ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([23, 23, 23]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.58256rad none 10.361% / 100%)";
  },
  valueOf() {
    return 0x181818ff;
  },
});

/**
 * @constant clrGreen300
 * @type {ColorDTO}
 */
export const clrGreen300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-300",
  },
  name: {
    enumerable: true,
    value: "Green 300",
  },
  hex: {
    enumerable: true,
    value: "#303030ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([47, 47, 47]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.57785rad none 24.861% / 100%)";
  },
  valueOf() {
    return 0x303030ff;
  },
});

/**
 * @constant clrGreen400
 * @type {ColorDTO}
 */
export const clrGreen400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-400",
  },
  name: {
    enumerable: true,
    value: "Green 400",
  },
  hex: {
    enumerable: true,
    value: "#3d3d3dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.56843rad none 38.84% / 100%)";
  },
  valueOf() {
    return 0x3d3d3dff;
  },
});

/**
 * @constant clrGreen500
 * @type {ColorDTO}
 */
export const clrGreen500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-500",
  },
  name: {
    enumerable: true,
    value: "Green 500",
  },
  hex: {
    enumerable: true,
    value: "#404040ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.54958rad none 52.231% / 100%)";
  },
  valueOf() {
    return 0x404040ff;
  },
});

/**
 * @constant clrGreen600
 * @type {ColorDTO}
 */
export const clrGreen600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-600",
  },
  name: {
    enumerable: true,
    value: "Green 600",
  },
  hex: {
    enumerable: true,
    value: "#3a3a3aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([58, 58, 58]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.50961rad none 64.945% / 100%)";
  },
  valueOf() {
    return 0x3a3a3aff;
  },
});

/**
 * @constant clrGreen700
 * @type {ColorDTO}
 */
export const clrGreen700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-700",
  },
  name: {
    enumerable: true,
    value: "Green 700",
  },
  hex: {
    enumerable: true,
    value: "#2d2d2dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([45, 45, 45]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.41588rad none 76.881% / 100%)";
  },
  valueOf() {
    return 0x2d2d2dff;
  },
});

/**
 * @constant clrGreen800
 * @type {ColorDTO}
 */
export const clrGreen800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-800",
  },
  name: {
    enumerable: true,
    value: "Green 800",
  },
  hex: {
    enumerable: true,
    value: "#1b1b1bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([26, 26, 26]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.32216rad none 88.051% / 100%)";
  },
  valueOf() {
    return 0x1b1b1bff;
  },
});

/**
 * @constant clrGreen900
 * @type {ColorDTO}
 */
export const clrGreen900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-900",
  },
  name: {
    enumerable: true,
    value: "Green 900",
  },
  hex: {
    enumerable: true,
    value: "#191819ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([25, 24, 24]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.6416rad 4.7493% 5.54% / 100%)";
  },
  valueOf() {
    return 0x191819ff;
  },
});

/**
 * @constant clrGreenA100
 * @type {ColorDTO}
 */
export const clrGreenA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-a100",
  },
  name: {
    enumerable: true,
    value: "Green A100",
  },
  hex: {
    enumerable: true,
    value: "#2f2f2fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([47, 47, 47]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.65883rad none 24.529% / 100%)";
  },
  valueOf() {
    return 0x2f2f2fff;
  },
});

/**
 * @constant clrGreenA200
 * @type {ColorDTO}
 */
export const clrGreenA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-a200",
  },
  name: {
    enumerable: true,
    value: "Green A200",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.66826rad none 30.556% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrGreenA400
 * @type {ColorDTO}
 */
export const clrGreenA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-a400",
  },
  name: {
    enumerable: true,
    value: "Green A400",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.68571rad none 42.269% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrGreenA700
 * @type {ColorDTO}
 */
export const clrGreenA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "green-a700",
  },
  name: {
    enumerable: true,
    value: "Green A700",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.63091rad none 58.722% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrLightGreen
 * @type {ColorDTO}
 */
export const clrLightGreen = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green",
  },
  name: {
    enumerable: true,
    value: "Light Green",
  },
  hex: {
    enumerable: true,
    value: "#747e74ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([116, 125, 116]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.08235rad 43.073% 9.2249% / 100%)";
  },
  valueOf() {
    return 0x747e74ff;
  },
});

/**
 * @constant clrLightGreen50
 * @type {ColorDTO}
 */
export const clrLightGreen50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-50",
  },
  name: {
    enumerable: true,
    value: "Light Green 50",
  },
  hex: {
    enumerable: true,
    value: "#b3b3b3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([178, 178, 178]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.04727rad 70.129% none / 100%)";
  },
  valueOf() {
    return 0xb3b3b3ff;
  },
});

/**
 * @constant clrLightGreen100
 * @type {ColorDTO}
 */
export const clrLightGreen100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-100",
  },
  name: {
    enumerable: true,
    value: "Light Green 100",
  },
  hex: {
    enumerable: true,
    value: "#848484ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([131, 132, 131]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.0738rad 51.65% 0.30123% / 100%)";
  },
  valueOf() {
    return 0x848484ff;
  },
});

/**
 * @constant clrLightGreen200
 * @type {ColorDTO}
 */
export const clrLightGreen200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-200",
  },
  name: {
    enumerable: true,
    value: "Light Green 200",
  },
  hex: {
    enumerable: true,
    value: "#6d7a6dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([109, 121, 109]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.08759rad 38.852% 13.559% / 100%)";
  },
  valueOf() {
    return 0x6d7a6dff;
  },
});

/**
 * @constant clrLightGreen300
 * @type {ColorDTO}
 */
export const clrLightGreen300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-300",
  },
  name: {
    enumerable: true,
    value: "Light Green 300",
  },
  hex: {
    enumerable: true,
    value: "#586958ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([88, 104, 88]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.11202rad 24.937% 26.497% / 100%)";
  },
  valueOf() {
    return 0x586958ff;
  },
});

/**
 * @constant clrLightGreen400
 * @type {ColorDTO}
 */
export const clrLightGreen400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-400",
  },
  name: {
    enumerable: true,
    value: "Light Green 400",
  },
  hex: {
    enumerable: true,
    value: "#414642ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([65, 70, 65]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.20487rad 4.4327% 39.095% / 100%)";
  },
  valueOf() {
    return 0x414642ff;
  },
});

/**
 * @constant clrLightGreen500
 * @type {ColorDTO}
 */
export const clrLightGreen500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-500",
  },
  name: {
    enumerable: true,
    value: "Light Green 500",
  },
  hex: {
    enumerable: true,
    value: "#404040ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.17835rad none 51.595% / 100%)";
  },
  valueOf() {
    return 0x404040ff;
  },
});

/**
 * @constant clrLightGreen600
 * @type {ColorDTO}
 */
export const clrLightGreen600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-600",
  },
  name: {
    enumerable: true,
    value: "Light Green 600",
  },
  hex: {
    enumerable: true,
    value: "#3a3a3aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([58, 58, 58]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.17869rad none 64.6% / 100%)";
  },
  valueOf() {
    return 0x3a3a3aff;
  },
});

/**
 * @constant clrLightGreen700
 * @type {ColorDTO}
 */
export const clrLightGreen700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-700",
  },
  name: {
    enumerable: true,
    value: "Light Green 700",
  },
  hex: {
    enumerable: true,
    value: "#2d2d2dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([45, 45, 45]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.18323rad none 76.83% / 100%)";
  },
  valueOf() {
    return 0x2d2d2dff;
  },
});

/**
 * @constant clrLightGreen800
 * @type {ColorDTO}
 */
export const clrLightGreen800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-800",
  },
  name: {
    enumerable: true,
    value: "Light Green 800",
  },
  hex: {
    enumerable: true,
    value: "#1b1b1bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([26, 26, 26]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.17032rad none 88.058% / 100%)";
  },
  valueOf() {
    return 0x1b1b1bff;
  },
});

/**
 * @constant clrLightGreen900
 * @type {ColorDTO}
 */
export const clrLightGreen900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-900",
  },
  name: {
    enumerable: true,
    value: "Light Green 900",
  },
  hex: {
    enumerable: true,
    value: "#141414ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([20, 19, 20]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(5.61141rad 3.987% 4.23% / 100%)";
  },
  valueOf() {
    return 0x141414ff;
  },
});

/**
 * @constant clrLightGreenA100
 * @type {ColorDTO}
 */
export const clrLightGreenA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-a100",
  },
  name: {
    enumerable: true,
    value: "Light Green A100",
  },
  hex: {
    enumerable: true,
    value: "#2f2f2fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([46, 46, 46]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.59705rad none 24.056% / 100%)";
  },
  valueOf() {
    return 0x2f2f2fff;
  },
});

/**
 * @constant clrLightGreenA200
 * @type {ColorDTO}
 */
export const clrLightGreenA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-a200",
  },
  name: {
    enumerable: true,
    value: "Light Green A200",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([53, 53, 53]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.61433rad none 30.141% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrLightGreenA400
 * @type {ColorDTO}
 */
export const clrLightGreenA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-a400",
  },
  name: {
    enumerable: true,
    value: "Light Green A400",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.633rad none 41.916% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrLightGreenA700
 * @type {ColorDTO}
 */
export const clrLightGreenA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "light-green-a700",
  },
  name: {
    enumerable: true,
    value: "Light Green A700",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.52985rad none 58.384% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrLime
 * @type {ColorDTO}
 */
export const clrLime = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime",
  },
  name: {
    enumerable: true,
    value: "Lime",
  },
  hex: {
    enumerable: true,
    value: "#4d5146ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([76, 81, 70]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.45927rad 17.663% 19.009% / 100%)";
  },
  valueOf() {
    return 0x4d5146ff;
  },
});

/**
 * @constant clrLime50
 * @type {ColorDTO}
 */
export const clrLime50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-50",
  },
  name: {
    enumerable: true,
    value: "Lime 50",
  },
  hex: {
    enumerable: true,
    value: "#797979ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([121, 121, 121]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.51933rad 47.542% none / 100%)";
  },
  valueOf() {
    return 0x797979ff;
  },
});

/**
 * @constant clrLime100
 * @type {ColorDTO}
 */
export const clrLime100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-100",
  },
  name: {
    enumerable: true,
    value: "Lime 100",
  },
  hex: {
    enumerable: true,
    value: "#636561ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([99, 100, 96]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.50091rad 36.737% 3.4407% / 100%)";
  },
  valueOf() {
    return 0x636561ff;
  },
});

/**
 * @constant clrLime200
 * @type {ColorDTO}
 */
export const clrLime200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-200",
  },
  name: {
    enumerable: true,
    value: "Lime 200",
  },
  hex: {
    enumerable: true,
    value: "#51564bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([81, 85, 74]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.46894rad 21.119% 16.602% / 100%)";
  },
  valueOf() {
    return 0x51564bff;
  },
});

/**
 * @constant clrLime300
 * @type {ColorDTO}
 */
export const clrLime300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-300",
  },
  name: {
    enumerable: true,
    value: "Lime 300",
  },
  hex: {
    enumerable: true,
    value: "#353535ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([52, 52, 52]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.36558rad none 29.436% / 100%)";
  },
  valueOf() {
    return 0x353535ff;
  },
});

/**
 * @constant clrLime400
 * @type {ColorDTO}
 */
export const clrLime400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-400",
  },
  name: {
    enumerable: true,
    value: "Lime 400",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.36181rad none 42.437% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrLime500
 * @type {ColorDTO}
 */
export const clrLime500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-500",
  },
  name: {
    enumerable: true,
    value: "Lime 500",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.37312rad none 55.172% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrLime600
 * @type {ColorDTO}
 */
export const clrLime600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-600",
  },
  name: {
    enumerable: true,
    value: "Lime 600",
  },
  hex: {
    enumerable: true,
    value: "#383838ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([56, 56, 56]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.39422rad none 67.292% / 100%)";
  },
  valueOf() {
    return 0x383838ff;
  },
});

/**
 * @constant clrLime700
 * @type {ColorDTO}
 */
export const clrLime700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-700",
  },
  name: {
    enumerable: true,
    value: "Lime 700",
  },
  hex: {
    enumerable: true,
    value: "#2b2b2bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([42, 42, 42]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.44014rad none 78.681% / 100%)";
  },
  valueOf() {
    return 0x2b2b2bff;
  },
});

/**
 * @constant clrLime800
 * @type {ColorDTO}
 */
export const clrLime800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-800",
  },
  name: {
    enumerable: true,
    value: "Lime 800",
  },
  hex: {
    enumerable: true,
    value: "#191919ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([24, 24, 24]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.57956rad none 89.169% / 100%)";
  },
  valueOf() {
    return 0x191919ff;
  },
});

/**
 * @constant clrLime900
 * @type {ColorDTO}
 */
export const clrLime900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-900",
  },
  name: {
    enumerable: true,
    value: "Lime 900",
  },
  hex: {
    enumerable: true,
    value: "#050505ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([4, 4, 4]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.72805rad none 98.057% / 100%)";
  },
  valueOf() {
    return 0x050505ff;
  },
});

/**
 * @constant clrLimeA100
 * @type {ColorDTO}
 */
export const clrLimeA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-a100",
  },
  name: {
    enumerable: true,
    value: "Lime A100",
  },
  hex: {
    enumerable: true,
    value: "#2e2e2eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([46, 46, 46]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.64494rad none 23.619% / 100%)";
  },
  valueOf() {
    return 0x2e2e2eff;
  },
});

/**
 * @constant clrLimeA200
 * @type {ColorDTO}
 */
export const clrLimeA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-a200",
  },
  name: {
    enumerable: true,
    value: "Lime A200",
  },
  hex: {
    enumerable: true,
    value: "#353535ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([52, 52, 52]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.68777rad none 29.353% / 100%)";
  },
  valueOf() {
    return 0x353535ff;
  },
});

/**
 * @constant clrLimeA400
 * @type {ColorDTO}
 */
export const clrLimeA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-a400",
  },
  name: {
    enumerable: true,
    value: "Lime A400",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.74952rad none 40.91% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrLimeA700
 * @type {ColorDTO}
 */
export const clrLimeA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "lime-a700",
  },
  name: {
    enumerable: true,
    value: "Lime A700",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.5103rad none 59.223% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrYellow
 * @type {ColorDTO}
 */
export const clrYellow = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow",
  },
  name: {
    enumerable: true,
    value: "Yellow",
  },
  hex: {
    enumerable: true,
    value: "#141414ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([19, 19, 19]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.988083rad none 8.5678% / 100%)";
  },
  valueOf() {
    return 0x141414ff;
  },
});

/**
 * @constant clrYellow50
 * @type {ColorDTO}
 */
export const clrYellow50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-50",
  },
  name: {
    enumerable: true,
    value: "Yellow 50",
  },
  hex: {
    enumerable: true,
    value: "#3d3d3dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.976966rad 23.78% none / 100%)";
  },
  valueOf() {
    return 0x3d3d3dff;
  },
});

/**
 * @constant clrYellow100
 * @type {ColorDTO}
 */
export const clrYellow100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-100",
  },
  name: {
    enumerable: true,
    value: "Yellow 100",
  },
  hex: {
    enumerable: true,
    value: "#292926ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([40, 40, 38]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.98105rad 10.908% 5.4713% / 100%)";
  },
  valueOf() {
    return 0x292926ff;
  },
});

/**
 * @constant clrYellow200
 * @type {ColorDTO}
 */
export const clrYellow200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-200",
  },
  name: {
    enumerable: true,
    value: "Yellow 200",
  },
  hex: {
    enumerable: true,
    value: "#262626ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([38, 38, 38]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.990893rad none 18.225% / 100%)";
  },
  valueOf() {
    return 0x262626ff;
  },
});

/**
 * @constant clrYellow300
 * @type {ColorDTO}
 */
export const clrYellow300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-300",
  },
  name: {
    enumerable: true,
    value: "Yellow 300",
  },
  hex: {
    enumerable: true,
    value: "#373737ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.988886rad none 31.41% / 100%)";
  },
  valueOf() {
    return 0x373737ff;
  },
});

/**
 * @constant clrYellow400
 * @type {ColorDTO}
 */
export const clrYellow400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-400",
  },
  name: {
    enumerable: true,
    value: "Yellow 400",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.986565rad none 44.269% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrYellow500
 * @type {ColorDTO}
 */
export const clrYellow500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-500",
  },
  name: {
    enumerable: true,
    value: "Yellow 500",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.982935rad none 56.607% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrYellow600
 * @type {ColorDTO}
 */
export const clrYellow600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-600",
  },
  name: {
    enumerable: true,
    value: "Yellow 600",
  },
  hex: {
    enumerable: true,
    value: "#373737ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([55, 55, 55]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.976704rad none 68.35% / 100%)";
  },
  valueOf() {
    return 0x373737ff;
  },
});

/**
 * @constant clrYellow700
 * @type {ColorDTO}
 */
export const clrYellow700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-700",
  },
  name: {
    enumerable: true,
    value: "Yellow 700",
  },
  hex: {
    enumerable: true,
    value: "#2a2a2aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([41, 41, 41]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.963893rad none 79.39% / 100%)";
  },
  valueOf() {
    return 0x2a2a2aff;
  },
});

/**
 * @constant clrYellow800
 * @type {ColorDTO}
 */
export const clrYellow800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-800",
  },
  name: {
    enumerable: true,
    value: "Yellow 800",
  },
  hex: {
    enumerable: true,
    value: "#181818ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([23, 23, 23]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.925635rad none 89.552% / 100%)";
  },
  valueOf() {
    return 0x181818ff;
  },
});

/**
 * @constant clrYellow900
 * @type {ColorDTO}
 */
export const clrYellow900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-900",
  },
  name: {
    enumerable: true,
    value: "Yellow 900",
  },
  hex: {
    enumerable: true,
    value: "#181819ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([23, 24, 25]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(3.78387rad 4.815% 5.31% / 100%)";
  },
  valueOf() {
    return 0x181819ff;
  },
});

/**
 * @constant clrYellowA100
 * @type {ColorDTO}
 */
export const clrYellowA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-a100",
  },
  name: {
    enumerable: true,
    value: "Yellow A100",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.05631rad none 30.788% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrYellowA200
 * @type {ColorDTO}
 */
export const clrYellowA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-a200",
  },
  name: {
    enumerable: true,
    value: "Yellow A200",
  },
  hex: {
    enumerable: true,
    value: "#3b3b3bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([58, 58, 58]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.0624rad none 36.08% / 100%)";
  },
  valueOf() {
    return 0x3b3b3bff;
  },
});

/**
 * @constant clrYellowA400
 * @type {ColorDTO}
 */
export const clrYellowA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-a400",
  },
  name: {
    enumerable: true,
    value: "Yellow A400",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.07556rad none 46.468% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrYellowA700
 * @type {ColorDTO}
 */
export const clrYellowA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "yellow-a700",
  },
  name: {
    enumerable: true,
    value: "Yellow A700",
  },
  hex: {
    enumerable: true,
    value: "#3d3d3dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.13576rad none 60.895% / 100%)";
  },
  valueOf() {
    return 0x3d3d3dff;
  },
});

/**
 * @constant clrAmber
 * @type {ColorDTO}
 */
export const clrAmber = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber",
  },
  name: {
    enumerable: true,
    value: "Amber",
  },
  hex: {
    enumerable: true,
    value: "#080808ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([8, 8, 8]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.827007rad none 3.2777% / 100%)";
  },
  valueOf() {
    return 0x080808ff;
  },
});

/**
 * @constant clrAmber50
 * @type {ColorDTO}
 */
export const clrAmber50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-50",
  },
  name: {
    enumerable: true,
    value: "Amber 50",
  },
  hex: {
    enumerable: true,
    value: "#a9a9a9ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([169, 169, 169]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.742079rad 66.429% none / 100%)";
  },
  valueOf() {
    return 0xa9a9a9ff;
  },
});

/**
 * @constant clrAmber100
 * @type {ColorDTO}
 */
export const clrAmber100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-100",
  },
  name: {
    enumerable: true,
    value: "Amber 100",
  },
  hex: {
    enumerable: true,
    value: "#5a5a5aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([89, 89, 89]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.761068rad 35.211% none / 100%)";
  },
  valueOf() {
    return 0x5a5a5aff;
  },
});

/**
 * @constant clrAmber200
 * @type {ColorDTO}
 */
export const clrAmber200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-200",
  },
  name: {
    enumerable: true,
    value: "Amber 200",
  },
  hex: {
    enumerable: true,
    value: "#121212ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([18, 18, 18]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.839294rad none 7.7332% / 100%)";
  },
  valueOf() {
    return 0x121212ff;
  },
});

/**
 * @constant clrAmber300
 * @type {ColorDTO}
 */
export const clrAmber300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-300",
  },
  name: {
    enumerable: true,
    value: "Amber 300",
  },
  hex: {
    enumerable: true,
    value: "#2c2c2cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([44, 44, 44]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.83788rad none 22.309% / 100%)";
  },
  valueOf() {
    return 0x2c2c2cff;
  },
});

/**
 * @constant clrAmber400
 * @type {ColorDTO}
 */
export const clrAmber400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-400",
  },
  name: {
    enumerable: true,
    value: "Amber 400",
  },
  hex: {
    enumerable: true,
    value: "#3b3b3bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([59, 59, 59]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.833203rad none 36.565% / 100%)";
  },
  valueOf() {
    return 0x3b3b3bff;
  },
});

/**
 * @constant clrAmber500
 * @type {ColorDTO}
 */
export const clrAmber500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-500",
  },
  name: {
    enumerable: true,
    value: "Amber 500",
  },
  hex: {
    enumerable: true,
    value: "#404040ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.82493rad none 50.253% / 100%)";
  },
  valueOf() {
    return 0x404040ff;
  },
});

/**
 * @constant clrAmber600
 * @type {ColorDTO}
 */
export const clrAmber600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-600",
  },
  name: {
    enumerable: true,
    value: "Amber 600",
  },
  hex: {
    enumerable: true,
    value: "#3b3b3bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([59, 59, 59]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.809658rad none 63.299% / 100%)";
  },
  valueOf() {
    return 0x3b3b3bff;
  },
});

/**
 * @constant clrAmber700
 * @type {ColorDTO}
 */
export const clrAmber700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-700",
  },
  name: {
    enumerable: true,
    value: "Amber 700",
  },
  hex: {
    enumerable: true,
    value: "#2f2f2fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([47, 47, 47]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.777614rad none 75.595% / 100%)";
  },
  valueOf() {
    return 0x2f2f2fff;
  },
});

/**
 * @constant clrAmber800
 * @type {ColorDTO}
 */
export const clrAmber800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-800",
  },
  name: {
    enumerable: true,
    value: "Amber 800",
  },
  hex: {
    enumerable: true,
    value: "#1d1d1dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([28, 28, 28]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.686595rad none 86.975% / 100%)";
  },
  valueOf() {
    return 0x1d1d1dff;
  },
});

/**
 * @constant clrAmber900
 * @type {ColorDTO}
 */
export const clrAmber900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-900",
  },
  name: {
    enumerable: true,
    value: "Amber 900",
  },
  hex: {
    enumerable: true,
    value: "#070707ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([7, 7, 7]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.450312rad none 97.053% / 100%)";
  },
  valueOf() {
    return 0x070707ff;
  },
});

/**
 * @constant clrAmberA100
 * @type {ColorDTO}
 */
export const clrAmberA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-a100",
  },
  name: {
    enumerable: true,
    value: "Amber A100",
  },
  hex: {
    enumerable: true,
    value: "#202020ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([32, 32, 32]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.814981rad none 14.806% / 100%)";
  },
  valueOf() {
    return 0x202020ff;
  },
});

/**
 * @constant clrAmberA200
 * @type {ColorDTO}
 */
export const clrAmberA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-a200",
  },
  name: {
    enumerable: true,
    value: "Amber A200",
  },
  hex: {
    enumerable: true,
    value: "#2b2b2bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([42, 42, 42]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.814109rad none 21.194% / 100%)";
  },
  valueOf() {
    return 0x2b2b2bff;
  },
});

/**
 * @constant clrAmberA400
 * @type {ColorDTO}
 */
export const clrAmberA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-a400",
  },
  name: {
    enumerable: true,
    value: "Amber A400",
  },
  hex: {
    enumerable: true,
    value: "#393939ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([57, 57, 57]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.82027rad none 34.164% / 100%)";
  },
  valueOf() {
    return 0x393939ff;
  },
});

/**
 * @constant clrAmberA700
 * @type {ColorDTO}
 */
export const clrAmberA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "amber-a700",
  },
  name: {
    enumerable: true,
    value: "Amber A700",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(1.0011rad none 59.219% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrOrange
 * @type {ColorDTO}
 */
export const clrOrange = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange",
  },
  name: {
    enumerable: true,
    value: "Orange",
  },
  hex: {
    enumerable: true,
    value: "#242423ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([36, 35, 34]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.649786rad 11.527% 2.7793% / 100%)";
  },
  valueOf() {
    return 0x242423ff;
  },
});

/**
 * @constant clrOrange50
 * @type {ColorDTO}
 */
export const clrOrange50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-50",
  },
  name: {
    enumerable: true,
    value: "Orange 50",
  },
  hex: {
    enumerable: true,
    value: "#c3c3c3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([194, 194, 194]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.568628rad 76.431% none / 100%)";
  },
  valueOf() {
    return 0xc3c3c3ff;
  },
});

/**
 * @constant clrOrange100
 * @type {ColorDTO}
 */
export const clrOrange100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-100",
  },
  name: {
    enumerable: true,
    value: "Orange 100",
  },
  hex: {
    enumerable: true,
    value: "#929292ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([146, 146, 146]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.578193rad 57.351% none / 100%)";
  },
  valueOf() {
    return 0x929292ff;
  },
});

/**
 * @constant clrOrange200
 * @type {ColorDTO}
 */
export const clrOrange200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-200",
  },
  name: {
    enumerable: true,
    value: "Orange 200",
  },
  hex: {
    enumerable: true,
    value: "#292828ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([40, 40, 40]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.640571rad 15.161% 0.7545% / 100%)";
  },
  valueOf() {
    return 0x292828ff;
  },
});

/**
 * @constant clrOrange300
 * @type {ColorDTO}
 */
export const clrOrange300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-300",
  },
  name: {
    enumerable: true,
    value: "Orange 300",
  },
  hex: {
    enumerable: true,
    value: "#202020ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([32, 32, 32]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.711134rad none 14.789% / 100%)";
  },
  valueOf() {
    return 0x202020ff;
  },
});

/**
 * @constant clrOrange400
 * @type {ColorDTO}
 */
export const clrOrange400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-400",
  },
  name: {
    enumerable: true,
    value: "Orange 400",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([53, 53, 53]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.706649rad none 30.333% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrOrange500
 * @type {ColorDTO}
 */
export const clrOrange500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-500",
  },
  name: {
    enumerable: true,
    value: "Orange 500",
  },
  hex: {
    enumerable: true,
    value: "#3f3f3fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.697521rad none 45.171% / 100%)";
  },
  valueOf() {
    return 0x3f3f3fff;
  },
});

/**
 * @constant clrOrange600
 * @type {ColorDTO}
 */
export const clrOrange600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-600",
  },
  name: {
    enumerable: true,
    value: "Orange 600",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.678113rad none 59.258% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrOrange700
 * @type {ColorDTO}
 */
export const clrOrange700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-700",
  },
  name: {
    enumerable: true,
    value: "Orange 700",
  },
  hex: {
    enumerable: true,
    value: "#333333ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([50, 50, 50]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.633973rad none 72.495% / 100%)";
  },
  valueOf() {
    return 0x333333ff;
  },
});

/**
 * @constant clrOrange800
 * @type {ColorDTO}
 */
export const clrOrange800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-800",
  },
  name: {
    enumerable: true,
    value: "Orange 800",
  },
  hex: {
    enumerable: true,
    value: "#212121ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([32, 32, 32]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.508589rad none 84.792% / 100%)";
  },
  valueOf() {
    return 0x212121ff;
  },
});

/**
 * @constant clrOrange900
 * @type {ColorDTO}
 */
export const clrOrange900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-900",
  },
  name: {
    enumerable: true,
    value: "Orange 900",
  },
  hex: {
    enumerable: true,
    value: "#0a0a0aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([9, 9, 9]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.251991rad none 95.985% / 100%)";
  },
  valueOf() {
    return 0x0a0a0aff;
  },
});

/**
 * @constant clrOrangeA100
 * @type {ColorDTO}
 */
export const clrOrangeA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-a100",
  },
  name: {
    enumerable: true,
    value: "Orange A100",
  },
  hex: {
    enumerable: true,
    value: "#020202ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([2, 2, 2]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.628057rad none 0.97311% / 100%)";
  },
  valueOf() {
    return 0x020202ff;
  },
});

/**
 * @constant clrOrangeA200
 * @type {ColorDTO}
 */
export const clrOrangeA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-a200",
  },
  name: {
    enumerable: true,
    value: "Orange A200",
  },
  hex: {
    enumerable: true,
    value: "#131313ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([18, 18, 18]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.621582rad none 7.9189% / 100%)";
  },
  valueOf() {
    return 0x131313ff;
  },
});

/**
 * @constant clrOrangeA400
 * @type {ColorDTO}
 */
export const clrOrangeA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-a400",
  },
  name: {
    enumerable: true,
    value: "Orange A400",
  },
  hex: {
    enumerable: true,
    value: "#2c2c2cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([44, 44, 44]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.620011rad none 22.283% / 100%)";
  },
  valueOf() {
    return 0x2c2c2cff;
  },
});

/**
 * @constant clrOrangeA700
 * @type {ColorDTO}
 */
export const clrOrangeA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "orange-a700",
  },
  name: {
    enumerable: true,
    value: "Orange A700",
  },
  hex: {
    enumerable: true,
    value: "#404040ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.729373rad none 47.51% / 100%)";
  },
  valueOf() {
    return 0x404040ff;
  },
});

/**
 * @constant clrDeepOrange
 * @type {ColorDTO}
 */
export const clrDeepOrange = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange",
  },
  name: {
    enumerable: true,
    value: "Deep Orange",
  },
  hex: {
    enumerable: true,
    value: "#1a1919ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([25, 25, 25]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.444413rad 7.9565% 2.2452% / 100%)";
  },
  valueOf() {
    return 0x1a1919ff;
  },
});

/**
 * @constant clrDeepOrange50
 * @type {ColorDTO}
 */
export const clrDeepOrange50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-50",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 50",
  },
  hex: {
    enumerable: true,
    value: "#d3d3d3ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([211, 211, 211]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.353621rad 82.813% none / 100%)";
  },
  valueOf() {
    return 0xd3d3d3ff;
  },
});

/**
 * @constant clrDeepOrange100
 * @type {ColorDTO}
 */
export const clrDeepOrange100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-100",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 100",
  },
  hex: {
    enumerable: true,
    value: "#b1b1b1ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([177, 177, 177]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.357286rad 69.416% none / 100%)";
  },
  valueOf() {
    return 0xb1b1b1ff;
  },
});

/**
 * @constant clrDeepOrange200
 * @type {ColorDTO}
 */
export const clrDeepOrange200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-200",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 200",
  },
  hex: {
    enumerable: true,
    value: "#636363ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([99, 99, 99]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.374303rad 38.906% none / 100%)";
  },
  valueOf() {
    return 0x636363ff;
  },
});

/**
 * @constant clrDeepOrange300
 * @type {ColorDTO}
 */
export const clrDeepOrange300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-300",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 300",
  },
  hex: {
    enumerable: true,
    value: "#151515ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([21, 20, 20]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.4567rad 5.0612% 3.4661% / 100%)";
  },
  valueOf() {
    return 0x151515ff;
  },
});

/**
 * @constant clrDeepOrange400
 * @type {ColorDTO}
 */
export const clrDeepOrange400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-400",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 400",
  },
  hex: {
    enumerable: true,
    value: "#282828ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([40, 40, 40]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.503981rad none 19.794% / 100%)";
  },
  valueOf() {
    return 0x282828ff;
  },
});

/**
 * @constant clrDeepOrange500
 * @type {ColorDTO}
 */
export const clrDeepOrange500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-500",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 500",
  },
  hex: {
    enumerable: true,
    value: "#3b3b3bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([59, 59, 59]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.492218rad none 36.691% / 100%)";
  },
  valueOf() {
    return 0x3b3b3bff;
  },
});

/**
 * @constant clrDeepOrange600
 * @type {ColorDTO}
 */
export const clrDeepOrange600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-600",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 600",
  },
  hex: {
    enumerable: true,
    value: "#404040ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([63, 63, 63]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.465497rad none 52.612% / 100%)";
  },
  valueOf() {
    return 0x404040ff;
  },
});

/**
 * @constant clrDeepOrange700
 * @type {ColorDTO}
 */
export const clrDeepOrange700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-700",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 700",
  },
  hex: {
    enumerable: true,
    value: "#383838ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([56, 56, 56]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.397621rad none 67.401% / 100%)";
  },
  valueOf() {
    return 0x383838ff;
  },
});

/**
 * @constant clrDeepOrange800
 * @type {ColorDTO}
 */
export const clrDeepOrange800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-800",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 800",
  },
  hex: {
    enumerable: true,
    value: "#272727ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([38, 38, 38]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.218306rad none 81.248% / 100%)";
  },
  valueOf() {
    return 0x272727ff;
  },
});

/**
 * @constant clrDeepOrange900
 * @type {ColorDTO}
 */
export const clrDeepOrange900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-900",
  },
  name: {
    enumerable: true,
    value: "Deep Orange 900",
  },
  hex: {
    enumerable: true,
    value: "#0e0e0eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([14, 14, 14]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.0480559rad none 94.154% / 100%)";
  },
  valueOf() {
    return 0x0e0e0eff;
  },
});

/**
 * @constant clrDeepOrangeA100
 * @type {ColorDTO}
 */
export const clrDeepOrangeA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-a100",
  },
  name: {
    enumerable: true,
    value: "Deep Orange A100",
  },
  hex: {
    enumerable: true,
    value: "#5e5e5eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([94, 94, 94]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.249931rad 36.99% none / 100%)";
  },
  valueOf() {
    return 0x5e5e5eff;
  },
});

/**
 * @constant clrDeepOrangeA200
 * @type {ColorDTO}
 */
export const clrDeepOrangeA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-a200",
  },
  name: {
    enumerable: true,
    value: "Deep Orange A200",
  },
  hex: {
    enumerable: true,
    value: "#3c3c3cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([60, 60, 60]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.240175rad 23.559% none / 100%)";
  },
  valueOf() {
    return 0x3c3c3cff;
  },
});

/**
 * @constant clrDeepOrangeA400
 * @type {ColorDTO}
 */
export const clrDeepOrangeA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-a400",
  },
  name: {
    enumerable: true,
    value: "Deep Orange A400",
  },
  hex: {
    enumerable: true,
    value: "#080808ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([8, 8, 8]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.307108rad none 3.2535% / 100%)";
  },
  valueOf() {
    return 0x080808ff;
  },
});

/**
 * @constant clrDeepOrangeA700
 * @type {ColorDTO}
 */
export const clrDeepOrangeA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "deep-orange-a700",
  },
  name: {
    enumerable: true,
    value: "Deep Orange A700",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.37193rad none 30.768% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrBrown
 * @type {ColorDTO}
 */
export const clrBrown = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown",
  },
  name: {
    enumerable: true,
    value: "Brown",
  },
  hex: {
    enumerable: true,
    value: "#847672ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([131, 118, 114]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.244765rad 39.629% 23.31% / 100%)";
  },
  valueOf() {
    return 0x847672ff;
  },
});

/**
 * @constant clrBrown50
 * @type {ColorDTO}
 */
export const clrBrown50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-50",
  },
  name: {
    enumerable: true,
    value: "Brown 50",
  },
  hex: {
    enumerable: true,
    value: "#d9d9d9ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([216, 216, 216]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.245638rad 85.011% none / 100%)";
  },
  valueOf() {
    return 0xd9d9d9ff;
  },
});

/**
 * @constant clrBrown100
 * @type {ColorDTO}
 */
export const clrBrown100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-100",
  },
  name: {
    enumerable: true,
    value: "Brown 100",
  },
  hex: {
    enumerable: true,
    value: "#bbbbbbff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([186, 186, 186]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.24569rad 73.301% none / 100%)";
  },
  valueOf() {
    return 0xbbbbbbff;
  },
});

/**
 * @constant clrBrown200
 * @type {ColorDTO}
 */
export const clrBrown200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-200",
  },
  name: {
    enumerable: true,
    value: "Brown 200",
  },
  hex: {
    enumerable: true,
    value: "#979492ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([151, 147, 146]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.245201rad 56.746% 4.1289% / 100%)";
  },
  valueOf() {
    return 0x979492ff;
  },
});

/**
 * @constant clrBrown300
 * @type {ColorDTO}
 */
export const clrBrown300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-300",
  },
  name: {
    enumerable: true,
    value: "Brown 300",
  },
  hex: {
    enumerable: true,
    value: "#8b7f7cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([138, 127, 123]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.244922rad 44.878% 17.391% / 100%)";
  },
  valueOf() {
    return 0x8b7f7cff;
  },
});

/**
 * @constant clrBrown400
 * @type {ColorDTO}
 */
export const clrBrown400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-400",
  },
  name: {
    enumerable: true,
    value: "Brown 400",
  },
  hex: {
    enumerable: true,
    value: "#7b6c68ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([122, 108, 103]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.244573rad 33.433% 30.344% / 100%)";
  },
  valueOf() {
    return 0x7b6c68ff;
  },
});

/**
 * @constant clrBrown500
 * @type {ColorDTO}
 */
export const clrBrown500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-500",
  },
  name: {
    enumerable: true,
    value: "Brown 500",
  },
  hex: {
    enumerable: true,
    value: "#685b57ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([103, 90, 86]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.244521rad 22.407% 42.972% / 100%)";
  },
  valueOf() {
    return 0x685b57ff;
  },
});

/**
 * @constant clrBrown600
 * @type {ColorDTO}
 */
export const clrBrown600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-600",
  },
  name: {
    enumerable: true,
    value: "Brown 600",
  },
  hex: {
    enumerable: true,
    value: "#514a48ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([80, 74, 71]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.247139rad 11.645% 55.262% / 100%)";
  },
  valueOf() {
    return 0x514a48ff;
  },
});

/**
 * @constant clrBrown700
 * @type {ColorDTO}
 */
export const clrBrown700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-700",
  },
  name: {
    enumerable: true,
    value: "Brown 700",
  },
  hex: {
    enumerable: true,
    value: "#393938ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([56, 56, 56]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.256668rad 0.50387% 67.206% / 100%)";
  },
  valueOf() {
    return 0x393938ff;
  },
});

/**
 * @constant clrBrown800
 * @type {ColorDTO}
 */
export const clrBrown800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-800",
  },
  name: {
    enumerable: true,
    value: "Brown 800",
  },
  hex: {
    enumerable: true,
    value: "#2a2a2aff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([42, 42, 42]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.0445443rad none 79.016% / 100%)";
  },
  valueOf() {
    return 0x2a2a2aff;
  },
});

/**
 * @constant clrBrown900
 * @type {ColorDTO}
 */
export const clrBrown900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-900",
  },
  name: {
    enumerable: true,
    value: "Brown 900",
  },
  hex: {
    enumerable: true,
    value: "#101010ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([15, 15, 15]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.26085rad none 93.438% / 100%)";
  },
  valueOf() {
    return 0x101010ff;
  },
});

/**
 * @constant clrBrownA100
 * @type {ColorDTO}
 */
export const clrBrownA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-a100",
  },
  name: {
    enumerable: true,
    value: "Brown A100",
  },
  hex: {
    enumerable: true,
    value: "#7c7c7cff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([123, 123, 123]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.0995326rad 48.611% none / 100%)";
  },
  valueOf() {
    return 0x7c7c7cff;
  },
});

/**
 * @constant clrBrownA200
 * @type {ColorDTO}
 */
export const clrBrownA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-a200",
  },
  name: {
    enumerable: true,
    value: "Brown A200",
  },
  hex: {
    enumerable: true,
    value: "#656565ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([100, 100, 100]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(0.0575138rad 39.44% none / 100%)";
  },
  valueOf() {
    return 0x656565ff;
  },
});

/**
 * @constant clrBrownA400
 * @type {ColorDTO}
 */
export const clrBrownA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-a400",
  },
  name: {
    enumerable: true,
    value: "Brown A400",
  },
  hex: {
    enumerable: true,
    value: "#000000ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([0, 0, 0]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.035rad none none / 100%)";
  },
  valueOf() {
    return 0x000000ff;
  },
});

/**
 * @constant clrBrownA700
 * @type {ColorDTO}
 */
export const clrBrownA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "brown-a700",
  },
  name: {
    enumerable: true,
    value: "Brown A700",
  },
  hex: {
    enumerable: true,
    value: "#2b2b2bff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([43, 43, 43]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(6.01632rad none 21.506% / 100%)";
  },
  valueOf() {
    return 0x2b2b2bff;
  },
});

/**
 * @constant clrGray
 * @type {ColorDTO}
 */
export const clrGray = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray",
  },
  name: {
    enumerable: true,
    value: "Gray",
  },
  hex: {
    enumerable: true,
    value: "#7d7e7dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([125, 126, 125]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14361rad 48.973% 50.184% / 100%)";
  },
  valueOf() {
    return 0x7d7e7dff;
  },
});

/**
 * @constant clrGray50
 * @type {ColorDTO}
 */
export const clrGray50 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-50",
  },
  name: {
    enumerable: true,
    value: "Gray 50",
  },
  hex: {
    enumerable: true,
    value: "#edededff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([236, 236, 236]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14274rad 92.825% 6.2277% / 100%)";
  },
  valueOf() {
    return 0xedededff;
  },
});

/**
 * @constant clrGray100
 * @type {ColorDTO}
 */
export const clrGray100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-100",
  },
  name: {
    enumerable: true,
    value: "Gray 100",
  },
  hex: {
    enumerable: true,
    value: "#dcdddcff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([220, 220, 220]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14274rad 86.367% 12.698% / 100%)";
  },
  valueOf() {
    return 0xdcdddcff;
  },
});

/**
 * @constant clrGray200
 * @type {ColorDTO}
 */
export const clrGray200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-200",
  },
  name: {
    enumerable: true,
    value: "Gray 200",
  },
  hex: {
    enumerable: true,
    value: "#bcbdbcff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([188, 189, 188]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14292rad 73.723% 25.369% / 100%)";
  },
  valueOf() {
    return 0xbcbdbcff;
  },
});

/**
 * @constant clrGray300
 * @type {ColorDTO}
 */
export const clrGray300 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-300",
  },
  name: {
    enumerable: true,
    value: "Gray 300",
  },
  hex: {
    enumerable: true,
    value: "#9d9e9dff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([157, 158, 157]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14326rad 61.472% 37.65% / 100%)";
  },
  valueOf() {
    return 0x9d9e9dff;
  },
});

/**
 * @constant clrGray400
 * @type {ColorDTO}
 */
export const clrGray400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-400",
  },
  name: {
    enumerable: true,
    value: "Gray 400",
  },
  hex: {
    enumerable: true,
    value: "#7f807fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([127, 128, 127]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14344rad 49.654% 49.5% / 100%)";
  },
  valueOf() {
    return 0x7f807fff;
  },
});

/**
 * @constant clrGray500
 * @type {ColorDTO}
 */
export const clrGray500 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-500",
  },
  name: {
    enumerable: true,
    value: "Gray 500",
  },
  hex: {
    enumerable: true,
    value: "#636363ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([98, 99, 98]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14396rad 38.325% 60.867% / 100%)";
  },
  valueOf() {
    return 0x636363ff;
  },
});

/**
 * @constant clrGray600
 * @type {ColorDTO}
 */
export const clrGray600 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-600",
  },
  name: {
    enumerable: true,
    value: "Gray 600",
  },
  hex: {
    enumerable: true,
    value: "#484848ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([71, 71, 71]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14466rad 27.556% 71.68% / 100%)";
  },
  valueOf() {
    return 0x484848ff;
  },
});

/**
 * @constant clrGray700
 * @type {ColorDTO}
 */
export const clrGray700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-700",
  },
  name: {
    enumerable: true,
    value: "Gray 700",
  },
  hex: {
    enumerable: true,
    value: "#2e2e2eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([45, 46, 45]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14571rad 17.453% 81.835% / 100%)";
  },
  valueOf() {
    return 0x2e2e2eff;
  },
});

/**
 * @constant clrGray800
 * @type {ColorDTO}
 */
export const clrGray800 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-800",
  },
  name: {
    enumerable: true,
    value: "Gray 800",
  },
  hex: {
    enumerable: true,
    value: "#161616ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([22, 22, 22]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.14798rad 8.1825% 91.173% / 100%)";
  },
  valueOf() {
    return 0x161616ff;
  },
});

/**
 * @constant clrGray900
 * @type {ColorDTO}
 */
export const clrGray900 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-900",
  },
  name: {
    enumerable: true,
    value: "Gray 900",
  },
  hex: {
    enumerable: true,
    value: "#040404ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([3, 3, 3]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.15112rad 1.1087% 98.612% / 100%)";
  },
  valueOf() {
    return 0x040404ff;
  },
});

/**
 * @constant clrGrayA100
 * @type {ColorDTO}
 */
export const clrGrayA100 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-a100",
  },
  name: {
    enumerable: true,
    value: "Gray A100",
  },
  hex: {
    enumerable: true,
    value: "#2f2f2fff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([47, 47, 47]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.67175rad none 24.627% / 100%)";
  },
  valueOf() {
    return 0x2f2f2fff;
  },
});

/**
 * @constant clrGrayA200
 * @type {ColorDTO}
 */
export const clrGrayA200 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-a200",
  },
  name: {
    enumerable: true,
    value: "Gray A200",
  },
  hex: {
    enumerable: true,
    value: "#363636ff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([54, 54, 54]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.6796rad none 30.644% / 100%)";
  },
  valueOf() {
    return 0x363636ff;
  },
});

/**
 * @constant clrGrayA400
 * @type {ColorDTO}
 */
export const clrGrayA400 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-a400",
  },
  name: {
    enumerable: true,
    value: "Gray A400",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([62, 62, 62]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.69566rad none 42.34% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});

/**
 * @constant clrGrayA700
 * @type {ColorDTO}
 */
export const clrGrayA700 = Object.create(null, {
  ident: {
    enumerable: true,
    value: "gray-a700",
  },
  name: {
    enumerable: true,
    value: "Gray A700",
  },
  hex: {
    enumerable: true,
    value: "#3e3e3eff",
  },
  rgb: {
    enumerable: true,
    value: new Uint8Array([61, 61, 61]),
  },
  space: {
    value: "hwb",
  },
  toString() {
    return "hwb(2.64836rad none 58.786% / 100%)";
  },
  valueOf() {
    return 0x3e3e3eff;
  },
});
