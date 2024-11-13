// @ts-check

import type { Color } from '../color'
import type { Palette } from '../palette'
import type ProtoColor from 'colorjs.io'
import type {
    AccentColor,
    AccentCorFn,
    AccentKey,
    PrimaryColor,
    ShadeColor,
    ShadeCorFn,
    ShadeKey,
    ThemeColor
} from '../settings'

declare namespace InitColor {
    type GetAccentsFunc = (color: ProtoColor, correlation: AccentCorFn) => Map<AccentKey, AccentColor>
    type GetShadesFunc = (color: ProtoColor, correlation: ShadeCorFn) => Map<ShadeKey, ShadeColor>

    type PrimaryFunc = (color: Color.Value, options: PrimaryColorOptions) => PrimaryColor
    type ThemeFunc = (color: Color.Value, options: ThemeColorOptions) => ThemeColor

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
        theme: Palette.Theme
        accentFn: AccentCorFn
        shadeFn: ShadeCorFn
    } & Pick<PrimaryColor, 'key' | '$ref'>

    type ThemeColorOptions = {
        space: Color.Space
    } & Pick<ThemeColor, 'key' | '$ref'>
}