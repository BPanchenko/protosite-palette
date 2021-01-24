import {
  circle,
  square,
  parseColors
} from '../library.js'

const COLORS = ['indigo', 'violet', 'amber']

export default function ({ colors = COLORS }) {
  colors = parseColors(colors)
  console.assert(colors.length === 3, `Wrong amount of colors: ${JSON.stringify(colors)}`)

  return function (scene) {
    scene.add(square(colors[0]))
    scene.add(circle(colors[2], -1, -1, 2))
    scene.add(circle(colors[1], -1, -1, 1))
  }
}