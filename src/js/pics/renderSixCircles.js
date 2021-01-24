import {
  circle,
  square,
  parseColors
} from '../library.js'

const COLORS =  ['green-grey', 'green', 'violet']
const DX = 0.75
const RADIUS = 0.25

export default function ({ colors = COLORS }) {
colors = parseColors(colors)
console.assert(colors.length === 3, `Wrong amount of colors: ${JSON.stringify(colors)}`)

  return function (scene) {
    scene.add(square(colors[0]))

    scene.add(circle(colors[2], 1, 0.5, RADIUS))
    scene.add(circle(colors[1], 1 - DX, 0.5, RADIUS))
    scene.add(circle(colors[2], 1 - 2 * DX, 0.5, RADIUS))

    scene.add(circle(colors[1], -1, -0.5, RADIUS))
    scene.add(circle(colors[2], -1 + DX, -0.5, RADIUS))
    scene.add(circle(colors[1], -1 + 2 * DX, -0.5, RADIUS))
  }
}