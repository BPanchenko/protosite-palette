module.exports = [
  {
    files: ["**/*.cjs"],
    plugins: {
      "require-sort": require("eslint-plugin-require-sort"),
    },
    rules: {
      "require-sort/require-sort": "warn",
      "@stylistic/semi": [
        "error",
        "always",
        { omitLastInOneLineClassBody: true },
      ],
      "@stylistic/semi-spacing": ["error", { before: true, after: false }],
    },
  },
];
