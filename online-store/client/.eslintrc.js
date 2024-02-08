module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:mdx/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["webpack.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": ["off"],
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "no-restricted-syntax": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["*.test.tsx", "*.test.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: ["@typescript-eslint/parser", "babel-eslint"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react-hooks", "jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jest/expect-expect": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
