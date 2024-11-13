// @ts-check

import type {
    PrimaryKey,
    UserConfig
} from '../settings'

import type {
    Color
} from '../color'

declare class Palette {
    constructor(configuration: UserConfig)
    entries(): Array<[PrimaryKey, Color.Data]>
    keys(): Array<PrimaryKey>
    values(): Array<Color.Data>
}

export default Palette