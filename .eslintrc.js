module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:testing-library/recommended",
    "plugin:jest-dom/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "testing-library",
    "jest-dom",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "require-atomic-updates": "off",
    "no-var": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": 0,
    "no-control-regex": 0,
    eqeqeq: 1,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "react/display-name": [0, { ignoreTranspilerName: true }],
  },
};
