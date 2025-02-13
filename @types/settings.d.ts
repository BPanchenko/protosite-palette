import type { Color } from './color'

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

declare type ColorAccentKey = {
    [K in AccentWeight]: `${PrimaryColorKey}-a${K}`
}[AccentWeight]

declare type ColorShadeKey = {
    [K in ShadeWeight]: `${PrimaryColorKey}-${K}`
}[ShadeWeight]

declare type PrimaryColorKey =
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

declare type GeneralColorKey = 'black' | 'white'

/**
 * Types of palette colors
 */

declare interface AccentColor {
    type: 'accent'
    key: ColorAccentKey
    $ref: PrimaryColor
}

declare interface ShadeColor {
    type: 'shade'
    key: ColorShadeKey
    $ref: PrimaryColor
}

declare interface PrimaryColor {
    type: 'primary'
    key: PrimaryColorKey
    meta: Color.MetaData
    shades: Map<ShadeWeight, ShadeColor>
    accents: Map<AccentWeight, AccentColor>
    $ref: Object
}

declare interface GeneralColor {
    type: 'theme'
    key: GeneralColorKey
    $ref: Object
}
