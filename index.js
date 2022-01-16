import _ from "lodash"
import chroma from "chroma-js"
import fs from "fs"
import { getVariables } from "get-css-variables"

const PREFIX = '--clr-'

const text = fs.readFileSync("./palette.css", "utf8")
const variables = getVariables(text)
const colors = new Map()

_.toPairs(variables).forEach(p => {
    let name = p[0]
    let value = p[1]
    if (name.includes(PREFIX)) {
        name = _.camelCase(name.replace(PREFIX, ''))
        value = chroma(value).hex()
        colors.set(name, value)
    }
})

export {
    colors
}
