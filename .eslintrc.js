module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
