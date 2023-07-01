module.exports = {
  env: {
    browser: true,
    node: true,
  },

  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint"],

  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],

  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
