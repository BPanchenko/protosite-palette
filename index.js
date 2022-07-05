import camelCase from "lodash/camelCase.js"
import chroma from "chroma-js"
import fs from "fs"
import { getVariables } from "get-css-variables"
import toPairs from "lodash/toPairs.js"

const PREFIX = '--clr-'

const text = fs.readFileSync("./colors.css", "utf8")
const colors = getVariables(text)
const palette = new Map()

toPairs(colors).forEach(p => {
	let name = p[0]
	let value = p[1]
	if (name.includes(PREFIX)) {
		palette.set(
			camelCase(name.replace(PREFIX, '')),
			chroma(value).hex()
		)
	}
})

export default palette
