import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    name: 'app/files-to-lint'
  },

  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    name: 'app/files-to-ignore'
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
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
  },

  skipFormatting
]
