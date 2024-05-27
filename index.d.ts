import type { ArrayIndices, ArrayValues } from 'type-fest'
import { accentKeys, toneKeys } from './lib/settings.js'

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}`
	? `${Lowercase<P1>}${Capitalize<P2>}`
	: Lowercase<S>

declare global {
	type ColorKey =
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

	type AccentKey = ArrayValues<typeof accentKeys>
	type AccentCorFn = (
		index: ArrayIndices<typeof accentKeys>
	) => [number, number]
	type ToneCorFn = (index: ArrayIndices<typeof toneKeys>) => number
	type ToneKey = ArrayValues<typeof toneKeys>

	type ColorKey =
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

	type ColorName = {
		[K in ColorKey]: K extends 'gray'
			? CamelCase<K>
			: CamelCase<K> | CamelCase<`${K}-gray`>
	}[ColorKey]

	type ColorData = {
		hsl: ColorValue
		hex: ColorValue
		rgb: ColorValue
	}

	type ColorValue = string

	interface Config {
		admixturesToGray?: ColorKey
		colors: Record<ColorKey, ColorValue>
		correlations: {
			accent: AccentCorFn | [number, number, number, number]
			tone: ToneCorFn | [number, number, number, number]
		}
		name: string
		theme: 'dark' | 'light' | ThemeConfig
	}

	interface SourceConfig
		extends Required<Pick<Config, 'colors' | 'correlations'>>,
			Optional<Omit<Config, 'colors' | 'correlations'>> {}

	type PaletteColorData = ColorData & {
		accents?: Record<AccentKey, ColorData>
		tones?: Record<ToneKey, ColorData>
	}

	type ThemeConfig = {
		background: ColorValue
		foreground: ColorValue
	}
}
