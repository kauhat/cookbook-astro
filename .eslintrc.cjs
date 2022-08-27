module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:astro/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  // overrides: [
  //   {
  //     // Define the configuration for `.astro` file.
  //     files: ['*.astro'],
  //     // Allows Astro components to be parsed.
  //     parser: 'astro-eslint-parser',
  //     // Parse the script in `.astro` as TypeScript by adding the following configuration.
  //     // It's the setting you need when using TypeScript.
  //     parserOptions: {
  //       parser: '@typescript-eslint/parser',
  //       extraFileExtensions: ['.astro'],
  //     },
  //     rules: {
  //       // override/add rules settings here, such as:
  //       // "astro/no-set-html-directive": "error"
  //     },
  //   },
  //   // ...
  // ],
  rules: {
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/camelcase': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-this-alias': 'off',
    // 'no-console': 'warn',
    // 'prefer-const': 'off',
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],
  },
}
