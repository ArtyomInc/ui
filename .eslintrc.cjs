module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier'
  ],
  plugins: ['perfectionist'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          'vue-component',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown'
        ]
      }
    ],
    'perfectionist/sort-objects': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'always',
          void: 'always'
        },
        math: 'always',
        svg: 'always'
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off'
  }
}
