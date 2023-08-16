module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-essential",
    '@vue/standard',
    // 'standard-with-typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue'
  ],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off'
  }
}
