export default [
  {
    files: ["**/*.mjs"],
    rules: {
      semi: ["warn", "never", { beforeStatementContinuationChars: "always" }],
    },
  },
];
