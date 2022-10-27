module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:vue/essential",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["default", "error", "Index", "Error"],
      },
    ],
    "no-unused-expressions": [
      "error",
      { allowTernary: true, allowShortCircuit: true },
    ],

    "vue/no-deprecated-slot-scope-attribute": "off",
    "vue/no-deprecated-v-on-native-modifier": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": "off",
    "no-return-assign": "off",
    "no-restricted-syntax": "off",
  },
};
