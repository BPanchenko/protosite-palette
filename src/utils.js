import chroma from "chroma-js"

const correlationFunctions = {
	linear: t => t,
	// accelerating from zero velocity
	inQuad: t => t*t,
	// decelerating to zero velocity
	OutQuad: t => t*(2-t),
	// acceleration until halfway, then deceleration
	inOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
	// accelerating from zero velocity 
	inCubic: t => t*t*t,
	// decelerating to zero velocity 
	outCubic: t => (--t)*t*t+1,
	// acceleration until halfway, then deceleration 
	inOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
	// accelerating from zero velocity 
	inQuart: t => t*t*t*t,
	// decelerating to zero velocity 
	outQuart: t => 1-(--t)*t*t*t,
	// acceleration until halfway, then deceleration
	inOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
	// accelerating from zero velocity
	inQuint: t => t*t*t*t*t,
	// decelerating to zero velocity
	outQuint: t => 1+(--t)*t*t*t*t,
	// acceleration until halfway, then deceleration 
	inOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
}

function getColorData(
	value,
	withTones = false,
	tonesCorrelation = 'inOutQuad',
	countTones = 10
) {
	const color = chroma(value)
	const data = {
		rgb: color.rgb(),
		hex: color.hex(),
		hsl: color.hsl()
	}

	if (withTones) {
		const step = 2.8 / countTones
		const getFactor = correlationFunctions[tonesCorrelation]
		data.tones = (new Array(countTones)).fill(1).map((_, index) => {
			const factor = getFactor(step * ++index)
			const tone = color.saturate(factor).brighten(factor)
			return getColorData(tone)
		})
	}
	
	Object.freeze(data)
	return data
}

export {
	getColorData
}
