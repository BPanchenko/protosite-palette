import type ProtoColor from 'colorjs.io'

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}`
	? `${Lowercase<P1>}${Capitalize<P2>}`
	: Lowercase<S>

declare global {
	type AccentCorFn = (index: number) => [number, number]
	type ShadeCorFn = (index: number) => number

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

	type AdditionalProps = {
		'css-value': string
		'css-variable': string
		'js-variable': string
		'key': ColorKey
		'name': ColorName
	}

	type ColorSpace = 'gl' | 'hcl' | 'lab' | 'lch' | 'oklab' | 'oklch' | 'srgb'

	type ColorSector = 'Rd' | 'Pr' | 'Bl' | 'Cy' | 'Gr' | 'Yl' | 'Mono'

	type ColorData = {
		'key': ColorKey
		'name': ColorName
		'css-variable': string
		'js-variable': string
		'hex': string
		'rgb': [number, number, number]
	}
	type ColorValue = [number, number, number]
	type ShadeWeight = number

	interface PrimaryColor extends Partial<AdditionalProps>, ProtoColor {
		type: 'primary'
		accents?: Record<ShadeWeight, ColorShade>
		shades: Record<ShadeWeight, ColorShade>
		meta: {
			sect: ColorSector
			wgth: number
			coord: {
				[K in ColorSector]: number
			}
		}
	}

	interface ColorAccent extends Partial<AdditionalProps>, ProtoColor {
		type: 'accent'
		$primaryRef: PrimaryColor
	}

	interface ColorShade extends Partial<AdditionalProps>, ProtoColor {
		type: 'shade'
		$primaryRef: PrimaryColor
	}

	type PaletteColor = PrimaryColor | ColorAccent | ColorShade

	interface Config {
		admixturesToGray?: ColorKey
		colors: Record<ColorKey, ColorValue>
		correlations: {
			accent: AccentCorFn | [number, number, number, number]
			shade: ShadeCorFn | [number, number, number, number]
		}
		space: {
			inpu: ColorSpace
			css: ColorSpace
			esm: ColorSpace
		},
		format:
		| {
			in: ColorSpace
			out: ColorSpace
		}
		| ColorSpace
		name: string
		theme: 'dark' | 'light' | ThemeConfig
	}

	interface SourceConfig
		extends Required<Pick<Config, 'colors' | 'correlations'>>,
		Partial<Omit<Config, 'colors' | 'correlations'>> { }

	type ThemeConfig = {
		background: ColorValue
		foreground: ColorValue
	}
}
