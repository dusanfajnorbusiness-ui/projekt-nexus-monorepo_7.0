export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/Legacy-Code*/**",
      "**/legacy-code*/**",
      "**/apps/main-web/src/services/**",
      "**/apps/shop/src/data/GlobalShop*/**",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: { "no-unused-vars": "off", "no-undef": "off", "no-console": "off" },
  },
];
