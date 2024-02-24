export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.mjs"],
    rules: {
      "@stylistic/indent": ["error", "tab"],
      "sort-imports": [
        "warn",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
];
