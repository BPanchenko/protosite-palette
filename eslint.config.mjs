import stylistic from "@stylistic/eslint-plugin";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import _import from "eslint-plugin-import";
import sonarjs from "eslint-plugin-sonarjs";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:sonarjs/recommended"), {
    plugins: {
        "@stylistic": stylistic,
        "@stylistic/ts": stylisticTs,
        import: fixupPluginRules(_import),
        sonarjs,
    },

    languageOptions: {
        globals: {
            ...globals.commonjs,
            ...globals.node,
        },

        parser: babelParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,
        },
    },

    settings: {
        "json/sort-package-json": "standard",
        "json/ignore-files": ["**/package-lock.json"],
        "json/json-with-comments-files": [".config/**"],
    },

    rules: {
        "@stylistic/arrow-parens": [1, "as-needed", {
            requireForBlockBody: true,
        }],

        "@stylistic/comma-dangle": [1, "always-multiline"],
        "@stylistic/indent": [1, "tab"],

        "@stylistic/semi": [1, "always", {
            beforeStatementContinuationChars: "always",
        }],

        "@stylistic/semi-spacing": [1, {
            before: false,
            after: false,
        }],

        "@stylistic/no-extra-semi": 1,
        "@stylistic/ts/member-delimiter-style": 1,

        "sort-imports": [1, {
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        }],

        "sort-keys": [1, "asc", {
            caseSensitive: true,
            natural: true,
            minKeys: 2,
        }],

        "sort-vars": 2,
    },
}, {
    files: ["**/*.ts"],

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "no-unused-vars": "off",
    },
}];