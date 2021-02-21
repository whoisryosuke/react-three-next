// @js-ignore
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'react-app',
    'prettier/react',
    'plugin:tailwind/recommended',
    'plugin:react-hooks/recommended',
    "prettier/@typescript-eslint",
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-indent-props': [2, 'first'],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-multi-assign': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: "off",
    "@typescript-eslint/quotes": [
      2,
      "backtick",
      {
        avoidEscape: true,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
    ],
  },
  settings: {},
  plugins: ["import", "@typescript-eslint", "prettier"],
}
