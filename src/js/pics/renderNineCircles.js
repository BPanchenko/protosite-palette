import {
    circle,
    square,
    parseColors
} from '../library.js'

const COLORS = ['teal', 'light-green', 'light-green']
const RADIUS = 0.13

export default function ({ colors = COLORS }) {
    colors = parseColors(colors)
    console.assert(colors.length === 3, `Wrong amount of colors: ${JSON.stringify(colors)}`)

    return function (scene) {
        scene.add(square(colors[0]))
        scene.add(circle(colors[1], -0.618 + RADIUS, 0.618 - RADIUS, RADIUS))
        scene.add(circle(colors[1], 0, 0.618 - RADIUS, RADIUS))
        scene.add(circle(colors[2], 0.618 - RADIUS, 0.618 - RADIUS, RADIUS))
        scene.add(circle(colors[1], -0.618 + RADIUS, 0, RADIUS))
        scene.add(circle(colors[2], 0, 0, RADIUS))
        scene.add(circle(colors[1], 0.618 - RADIUS, 0, RADIUS))
        scene.add(circle(colors[2], -0.618 + RADIUS, -0.618 + RADIUS, RADIUS))
        scene.add(circle(colors[1], 0, -0.618 + RADIUS, RADIUS))
        scene.add(circle(colors[1], 0.618 - RADIUS, -0.618 + RADIUS, RADIUS))
    }
}