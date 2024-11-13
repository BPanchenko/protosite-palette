// @ts-check

import type {
    AccentColor,
    AccentCorFn,
    AccentKey,
    PrimaryColor,
    PrimaryKey,
    ShadeColor,
    ShadeCorFn,
    ShadeKey,
    ThemeColor,
    ThemeKey,
    UserConfig
} from './settings'

import type {
    Color
} from './color'

declare namespace Palette {
    type Color = ThemeColor | PrimaryColor | ShadeColor | AccentColor

    type Config = {
        correlations: {
            accent: AccentCorFn
            shade: ShadeCorFn
        }
    } & Required<Omit<UserConfig, 'correlations'>>

    type Theme = Record<ThemeKey, ThemeColor>

    type Key = `${PrimaryKey}-${ShadeKey | AccentKey}` | PrimaryKey

    interface IFace {
        entries(): Array<[PrimaryKey, PrimaryColor]>
        keys(): Array<PrimaryKey>
        values(): Array<Color.Data>
    }

    interface Constructor {
        new(configuration: UserConfig): IFace;
    }

    export const IFace: Constructor
}
