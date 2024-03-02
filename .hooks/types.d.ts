import { Format } from "./settings.js";

type TFormatKeys = keyof typeof Format;
type TFormatValues = (typeof Format)[TFormatKeys];

export type TFormat = {
  [P in TFormatKeys]: (typeof Format)[P];
};

export type TDescription =
  | Record<"isBuiltin" | "isDependency" | "isDirectory" | "isFile", boolean>
  | Partial<{
      format: TFormatValues;
      path: string;
    }>;
