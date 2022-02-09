import _ from "lodash"
import chroma from "chroma-js"
import fs from "fs"
import { getVariables } from "get-css-variables"

const PREFIX = '--clr-'

const text = fs.readFileSync("./colors.css", "utf8")
const colors = getVariables(text)
const palette = new Map()

_.toPairs(colors).forEach(p => {
	let name = p[0]
	let value = p[1]
	if (name.includes(PREFIX)) {
		name = _.camelCase(name.replace(PREFIX, ''))
		value = chroma(value).hex()
		palette.set(name, value)
	}
})

export default palette
