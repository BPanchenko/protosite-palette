import chroma from "chroma-js"
import fs from "fs"
import toPairs from "lodash/toPairs.js"

const rawdata = fs.readFileSync("./colors.json")
const sourceColors = JSON.parse(rawdata)
const colors = new Map()
const palette = new Map()

toPairs(sourceColors).forEach(p => {
	let name = p[0]
	let value = p[1]
	colors.set(
		name,
		chroma(value)
	)
	palette.set(
		name,
		{
			color: chroma(value)
		}
	)
})

export {
	colors,
	palette
}
