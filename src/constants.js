export const toneKeys = [
	'50', '100', '200', '300', '400', '500', '600', '700', '800', '900'
]

export const accentKeys = [
	'A100', 'A200', 'A400','A700'
]

export const toneCorrelationByDefault = t => t<.5 ? 2*t*t : -1+(4-2*t)*t

export const accentCorrelationByDefault = t => t
