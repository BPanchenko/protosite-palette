import type {
    ColorAccentKey,
    PrimaryColor,
    PrimaryColorKey,
    ColorShadeKey,
} from './settings'

/**
 * Convert string literal type to camelCase.
 */
type CamelCase<T extends string> = T extends `${infer P1}-${infer P2}`
    ? `${Lowercase<P1>}${Capitalize<P2>}`
    : Lowercase<T>

declare namespace Color {

    /**
     * The location sector of a color on the color wheel
     * 
     * @see https://en.wikipedia.org/wiki/Color_wheel
     */
    type Sector = 'Rd' | 'Pr' | 'Bl' | 'Cy' | 'Gr' | 'Yl' | 'Mono'

    type Type = 'general' | 'primary' | 'shade' | 'accent'

    /**
     * Defining the color name based on the color key by converting
     */
    type Name = {
        [K in PrimaryColorKey]: K extends 'gray'
        ? CamelCase<K>
        : CamelCase<K> | CamelCase<`${K}-gray`>
    }[PrimaryColorKey]

    /**
     * Reference to parent instance
     */
    type Reference = Object | PrimaryColor

    /**
     * Supported Color Spaces
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
        rgb: Vector
        meta: MetaData
    }

    /**
     * Additional information about a color on the color wheel
     */
    type MetaData = {
        coord: {
            [K in Sector]: number
        }
        sect: Sector
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
        accents: Map<ColorAccentKey, ColorToneData>,
        shades: Map<ColorShadeKey, ColorToneData>,
    }

    type Vector = [number, number, number]
}