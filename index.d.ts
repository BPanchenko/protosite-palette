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
		key: ColorKey
		name: ColorName
		hex: string
		rgb: ColorAsRGB
		meta: ColorMeta
		'css-variable': string
		'css-value': string
		'js-variable': string
		'js-value': number
	} & {
		[K in ColorSpace]?: string
	} & {
		accents?: Array<ColorData>
		shades?: Array<ColorData>
	}

	type ColorAsRGB = [number, number, number]
	type ColorMeta = {
		sect: ColorSector
		wgth: number
		coord: {
			[K in ColorSector]: number
		}
	}
	type ColorValue = string | ColorAsRGB
	type ShadeWeight = number

	interface PrimaryColor extends Partial<AdditionalProps>, ProtoColor {
		type: 'primary'
		accents?: Record<ShadeWeight, ColorShade>
		shades: Record<ShadeWeight, ColorShade>
		meta: ColorMeta
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
		name: string
		space: {
			input: ColorSpace
			output: ColorSpace
		}
		colors: Record<ColorKey, ColorValue>
		mixtures: Array<[ColorKey, ColorKey]>
		correlations: {
			accent: AccentCorFn | [number, number, number, number]
			shade: ShadeCorFn | [number, number, number, number]
		}
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
