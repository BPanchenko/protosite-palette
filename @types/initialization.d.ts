import type { Color } from './color'
import type ProtoColor from 'colorjs.io'
import type {
    AccentColor,
    AccentCorFn,
    ColorAccentKey,
    PrimaryColor,
    ShadeColor,
    ShadeCorFn,
    ColorShadeKey,
    GeneralColor
} from './settings'

export type GetAccentsFunc = (color: ProtoColor, correlation: AccentCorFn) => Map<ColorAccentKey, AccentColor>
export type GetShadesFunc = (color: ProtoColor, correlation: ShadeCorFn) => Map<ColorShadeKey, ShadeColor>

export type InitPrimaryColorFunc = (color: Color.Vector, options: PrimaryColorOptions) => PrimaryColor
export type InitGeneralColorFunc = (color: Color.Vector, options: GeneralColorOptions) => GeneralColor

type ToneFunc<
    O = ColorToneOptions,
    R = O extends ColorAccentOptions ? AccentColor : ShadeColor
> = (color: PrimaryColor, options: O) => R

type ColorAccentOptions = {
    correlation: AccentCorFn
} & Pick<AccentColor, 'type' | 'key'>

type ColorShadeOptions = {
    correlation: ShadeCorFn
} & Pick<ShadeColor, 'type' | 'key'>

type ColorToneOptions = {
    space: Color.Space
} & (ColorAccentOptions | ColorShadeOptions)

type PrimaryColorOptions = {
    space: Color.Space
    accentFn: AccentCorFn
    shadeFn: ShadeCorFn
} & Pick<PrimaryColor, 'key' | '$ref'>

type GeneralColorOptions = {
    space: Color.Space
} & Pick<GeneralColor, 'key' | '$ref'>