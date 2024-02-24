module.exports = [
  {
    files: ["**/*.cjs"],
    plugins: {
      "require-sort": require("eslint-plugin-require-sort"),
    },
    rules: {
      semi: ["warn", "always", { omitLastInOneLineBlock: true }],
      "require-sort/require-sort": "warn",
    },
  },
];
