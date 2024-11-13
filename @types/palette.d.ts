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
    type Config = {
        correlations: {
            accent: AccentCorFn
            shade: ShadeCorFn
        }
    } & Required<Omit<UserConfig, 'correlations'>>

    type Key = PrimaryKey | ShadeKey | AccentKey
    type Color = ThemeColor | PrimaryColor | ShadeColor | AccentColor
    type Theme = Record<ThemeKey, ThemeColor>

    interface IFace {
        entries(): Array<[PrimaryKey, PrimaryColor]>
        keys(): Array<PrimaryKey>
        values(): Array<Color.Data>
    }

    interface Constructor {
        new(configuration: UserConfig): IFace;
    }

    const IFace: Constructor
}
