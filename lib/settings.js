// @ts-check

export const accentKeys = Object.freeze([100, 200, 400, 700])

export const toneKeys = Object.freeze([
	50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
])

/** @type {import("../").AccentCorFn} */
export const accentCorrelationByDefault = t => [t, t]

/** @type {import("../").ToneCorFn} */
export const toneCorrelationByDefault = t => t
