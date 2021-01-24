import {
  circle,
  parseColors,
  square
} from '../library.js'

const COLORS = ['orange', 'pink', 'blue-grey']
const RADIUS = 1

export default function ({ colors = COLORS }) {
  colors = parseColors(colors)
  console.assert(colors.length === 3, `Wrong amount of colors: ${JSON.stringify(colors)}`)

  return function (scene) {
    scene.add(square(colors[0]))
    scene.add(circle(colors[1], -1, 0, RADIUS))
    scene.add(circle(colors[2], 1, 0, RADIUS))
  }
}