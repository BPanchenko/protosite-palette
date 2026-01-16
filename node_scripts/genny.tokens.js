import { hwb_into_rgb, HWBSpace, initPointInSpace, rgb_to_hex } from 'chromatic-chandelier/manual';
import { parseCSSColor } from 'chromatic-chandelier/toolkit';
import source from '../dataset.json' with { type: 'json' };

const tokenmap = new Map()

source.data.map(({ident, value}) => {
	const [pid, key] = ident.split('-')

	if(false === Boolean(pid)) throw new Error()
	
	const primary = tokenmap.has(pid) ? tokenmap.get(pid) : makeToken(value)

	if (true === Boolean(key))
		Object.assign(primary, {
			[key]: makeToken(value)
		})

	tokenmap.set(pid, primary)
})

function makeToken(cssvalue) {
	let [colorSpace, components, alpha] = parseCSSColor(cssvalue)
	components = components.toArray()

	let [hue, white, black] = components
	let [red,green,blue] = hwb_into_rgb(initPointInSpace(HWBSpace, [hue, white * 100, black * 100]))
	
	return {
		$type: 'color',
		$value: {
			colorSpace,
			components,
			alpha,
			hex: rgb_to_hex(Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)) + 'ff'
		}
	}
}