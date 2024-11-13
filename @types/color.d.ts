// @ts-check

import type {
    AccentKey,
    PrimaryColor,
    PrimaryKey,
    ShadeKey,
} from './settings'

import type {
    Palette
} from './palette'

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}`
    ? `${Lowercase<P1>}${Capitalize<P2>}`
    : Lowercase<S>

/**
 * Array of red, green, and blue components in the sRGB color space
 * 
 * @see https://developer.mozilla.org/en-US/docs/Glossary/RGB
 */
type RGBNotation = [number, number, number]

/**
 * The location sector of a color on the color wheel
 * 
 * @see https://en.wikipedia.org/wiki/Color_wheel
 */
type SectorOfColorWheel = 'Rd' | 'Pr' | 'Bl' | 'Cy' | 'Gr' | 'Yl' | 'Mono'

declare namespace Color {
    type Type = 'theme' | 'primary' | 'shade' | 'accent'
    type Value = string | RGBNotation

    /**
     * Color name is derived by transforming the color key
     */
    type Name = {
        [K in PrimaryKey]: K extends 'gray'
        ? CamelCase<K>
        : CamelCase<K> | CamelCase<`${K}-gray`>
    }[PrimaryKey]

    /**
     * Reference to parent instance
     */
    type Reference = Palette.IFace | Object | PrimaryColor

    /**
     * Supported Color Spaces
     *
     * @see https://colorjs.io/docs/spaces
     */
    type Space =
        | 'a98rgb-linear'
        | 'a98rgb'
        | 'acescc'
        | 'acescg'
        | 'cam16-jmh'
        | 'gl'
        | 'hcl'
        | 'hct'
        | 'hpluv'
        | 'hsl'
        | 'hsluv'
        | 'hsv'
        | 'hwb'
        | 'ictcp'
        | 'jzazbz'
        | 'jzczhz'
        | 'lab-d65'
        | 'lab'
        | 'lch'
        | 'lchuv'
        | 'luv'
        | 'okhsl'
        | 'okhsv'
        | 'oklab'
        | 'oklch'
        | 'oklrab'
        | 'oklrch'
        | 'p3-linear'
        | 'p3'
        | 'prophoto-linear'
        | 'prophoto'
        | 'rec2020-linear'
        | 'rec2020'
        | 'rec2100-linear'
        | 'rec2100hlg'
        | 'rec2100pq'
        | 'srgb-linear'
        | 'srgb'
        | 'xyz-abs-d65'
        | 'xyz-d50'
        | 'xyz-d65'
        | 'xyz'

    /**
     * Hash Table of color properties
     */
    type PrimaryColorData = Readonly<Definition & Representation & Tones>
    type ColorToneData = Readonly<Definition & Representation>
    type Data = PrimaryColorData | ColorToneData

    /**
     * Basic definition of the color
     */
    type Definition = {
        type: Type
        key: string
        name: Name
        hex: string
        rgb: RGBNotation
        meta: MetaData
    }

    /**
     * Additional information about a color on the color wheel
     */
    type MetaData = {
        coord: {
            [K in SectorOfColorWheel]: number
        }
        sect: SectorOfColorWheel
        wgth: number
    }

    /**
     * Color representation in exported modules
     */
    type Representation = {
        'css-variable': string
        'css-value': string
        'js-variable': string
        'js-value': number
    }

    /**
     * Grouped color tones
     */
    type Tones = {
        accents: Map<AccentKey, ColorToneData>,
        shades: Map<ShadeKey, ColorToneData>,
    }
}