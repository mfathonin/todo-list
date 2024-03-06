module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/no-unresolved": "off",
    "import/extensions": [
      "warn",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "always",
        svg: "always",
        "styled.ts": "never",
        "styled.tsx": "never",
      },
    ],
  },
};
