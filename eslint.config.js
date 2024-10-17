import globals from "globals";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
        // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: { import: importPlugin },
    rules: {
      ...importPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: [
      "brain-gcd",
      "brain-prime",
      "brain-prime.js",
      "brain-progression",
      "demo.cast",
    ],
  },

  {
    rules: {
      semi: ["error", "always"],
      "no-console": "off",
      "no-unused-vars": "error",
      "import/extensions": "off",
      quotes: ["error", "single"],
    },
  },
];
