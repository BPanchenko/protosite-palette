import chroma from "chroma-js"
import fs from "fs"
import toPairs from "lodash/toPairs.js"

const rawdata = fs.readFileSync("./colors.json")
const colors = JSON.parse(rawdata)
const palette = new Map()

toPairs(colors).forEach(p => {
	let name = p[0]
	let value = p[1]
	palette.set(
		name,
		chroma(value)
	)
})

export default palette
