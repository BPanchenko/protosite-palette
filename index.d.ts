import type { ArrayIndices, ArrayValues } from "type-fest";
import { accentKeys, toneKeys } from "./lib/settings.js";

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}`
  ? `${Lowercase<P1>}${Capitalize<P2>}`
  : Lowercase<S>;

export type AccentCorFn = (
  index: ArrayIndices<typeof accentKeys>
) => [number, number];

export type ToneCorFn = (index: ArrayIndices<typeof toneKeys>) => number;

export type ColorKey =
  | "red"
  | "pink"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "light-blue"
  | "cyan"
  | "teal"
  | "green"
  | "light-green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deep-orange"
  | "brown";

export type ColorName = {
  [K in ColorKey]: CamelCase<K>;
}[ColorKey];

export type ColorData = {
  hsl: ColorValue;
  hex: ColorValue;
  rgb: ColorValue;
};

export type ColorValue = string;

export type Config = {
  colors: Record<ColorKey, ColorValue>;
  correlations: {
    accent: AccentCorFn | [number, number, number, number];
    tone: ToneCorFn | [number, number, number, number];
  };
  format: "hex" | "hsl" | "rgba";
  mixins: Array<[ColorKey, ColorKey]>;
  name: string;
  theme: "dark" | "light";
};

export type PaletteColorData = ColorData & {
  accents?: Record<AccentColorKey, ColorData>;
  tones?: Record<ToneKey, ColorData>;
};

export type AccentColorKey = ArrayValues<typeof accentKeys>;
export type ToneKey = ArrayValues<typeof toneKeys>;

export type Source = {
  colors: Record<ColorKey, ColorValue>;
  correlations: {
    accent: AccentCorFn | [number, number, number, number];
    tone: ToneCorFn | [number, number, number, number];
  };
};
