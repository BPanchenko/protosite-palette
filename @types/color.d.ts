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
     * Reference to parent instance
     */
    type Reference = Object | PrimaryColor



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