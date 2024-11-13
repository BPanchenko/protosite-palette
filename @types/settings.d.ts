// @ts-check

import type { Color } from './color'
import type ProtoColor from 'colorjs.io'

/**
 * Initialization parameters of color tones
 */

declare type AccentCorFn = (index: number) => [number, number]
declare type ShadeCorFn = (index: number) => number

declare type AccentWeight =
    | 100
    | 200
    | 400
    | 700

declare type ShadeWeight =
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900

/**
 * Unique key associated with any color
 */

declare type AccentKey = {
    [K in AccentWeight]: `a${K}`
}[AccentWeight]

declare type ShadeKey = {
    [K in ShadeWeight]: `${K}`
}[ShadeWeight]

declare type PrimaryKey =
    | 'red'
    | 'pink'
    | 'purple'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'light-blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'light-green'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'deep-orange'
    | 'brown'
    | 'gray'

declare type ThemeKey = 'background' | 'foreground'

/**
 * Types of palette colors
 */

declare interface AccentColor extends ProtoColor {
    type: 'accent'
    key: AccentKey
    $ref: PrimaryColor
}

declare interface ShadeColor extends ProtoColor {
    type: 'shade'
    key: ShadeKey
    $ref: PrimaryColor
}

declare interface PrimaryColor extends ProtoColor {
    type: 'primary'
    key: PrimaryKey
    meta: Color.MetaData
    shades: Map<ShadeWeight, ShadeColor>
    accents: Map<AccentWeight, AccentColor>
    $ref: Object
}

declare interface ThemeColor extends ProtoColor {
    type: 'theme'
    key: ThemeKey
    $ref: Object
}

declare type UserConfig = {
    colors: {
        [K in PrimaryKey]: Color.Value
    }
    correlations?: {
        accent: [number, number, number, number]
        shade: [number, number, number, number]
    }
    mixtures?: Array<[PrimaryKey, PrimaryKey]>
    name?: string
    space?: {
        input: Color.Space
        output: Color.Space
    }
    theme?: {
        background: Color.Value
        foreground: Color.Value
    }
}