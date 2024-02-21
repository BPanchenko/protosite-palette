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
export type AccentColorKey = string;
export type ToneKey = string;

export type CorrelationFunction = (n: number) => number;
