import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  {
    languageOptions: {
      globals: globals.browser 
    },
    rules: {
      // правила, рекомендуемые eslint
      ...pluginJs.configs.recommended.rules,
      // Ниже свои правила можем добавить/переписать
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-console": "error",
      "semi": "error",
    },
  },
  {
    files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  }
];