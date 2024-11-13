import vueTsEslintConfig from '@vue/eslint-config-typescript'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['node_modules/**/*', 'dist/**/*']
  },
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  {
    files: ['**/*{.ts,.mts,.tsx,.vue,.js,.jsx}'],
    plugins: {
      perfectionist: perfectionistPlugin
    },
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
]
