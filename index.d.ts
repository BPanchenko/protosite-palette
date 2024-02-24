import type { ArrayIndices, ArrayValues } from "type-fest";
import { accentKeys, toneKeys } from "./lib/settings.mjs";

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}`
  ? `${Lowercase<P1>}${Capitalize<P2>}`
  : Lowercase<S>;

export type PaletteColorData = ColorData & {
  accents?: Record<AccentColorKey, ColorData>;
  tones?: Record<ToneKey, ColorData>;
};

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
  | "brown"
  | "grey"
  | "blue-grey"
  | "green-grey";

export type ColorName = {
  [K in ColorKey]: CamelCase<K>;
}[ColorKey];

export type ColorData = {
  hsl: ColorValue;
  hex: ColorValue;
  rgb: ColorValue;
};

export type ColorValue = string;
export type AccentColorKey = ArrayValues<typeof accentKeys>;
export type ToneKey = ArrayValues<typeof toneKeys>;

export type AccentCorrelationFunction = (
  index: ArrayIndices<typeof accentKeys>
) => [number, number];

export type ToneCorrelationFunction = (
  index: ArrayIndices<typeof toneKeys>
) => number;
