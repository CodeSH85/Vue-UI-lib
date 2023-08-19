module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'eslint:recommended'
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
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.vue', '.ts']
      }
    },
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue'
    ]
  }
}
