import { Format } from "./settings.js";
import type Module from "node:module";

export type TFormat = {
  [P in keyof typeof Format]: (typeof Format)[P];
};

export type TDescription =
  | Record<"isBuiltin" | "isDependency" | "isDirectory" | "isFile", boolean>
  | Partial<{
      format: Module.ModuleFormat;
      path: string;
    }>;
