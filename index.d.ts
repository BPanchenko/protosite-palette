import type { ArrayIndices, ArrayValues } from 'type-fest';
import { accentKeys, toneKeys } from './lib/settings.js';

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}` ? `${Lowercase<P1>}${Capitalize<P2>}` : Lowercase<S>;

export type AccentKey = ArrayValues<typeof accentKeys>;
export type AccentCorFn = (index: ArrayIndices<typeof accentKeys>) => [number, number];
export type ToneCorFn = (index: ArrayIndices<typeof toneKeys>) => number;
export type ToneKey = ArrayValues<typeof toneKeys>;

export type ColorKey =
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
	| 'gray';

export type ColorName = {
	[K in ColorKey]: K extends 'gray' ? CamelCase<K> : CamelCase<K> | CamelCase<`${K}-gray`>;
}[ColorKey];

export type ColorData = {
	hsl: ColorValue;
	hex: ColorValue;
	rgb: ColorValue;
};

export type ColorValue = string;

export interface Config {
	admixturesToGray?: ColorKey;
	colors: Record<ColorKey, ColorValue>;
	correlations: {
		accent: AccentCorFn | [number, number, number, number];
		tone: ToneCorFn | [number, number, number, number];
	};
	name: string;
	theme: 'dark' | 'light' | ThemeConfig;
}

export interface SourceConfig extends Optional<Omit<Config, 'colors' | 'correlations'>>, Pick<Config, 'colors' | 'correlations'> {}

export type PaletteColorData = ColorData & {
	accents?: Record<AccentKey, ColorData>;
	tones?: Record<ToneKey, ColorData>;
};

export type ThemeConfig = {
	background: ColorValue;
	foreground: ColorValue;
};
