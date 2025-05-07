import js from '@eslint/js'
import vuePlugin from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import vueConfig from 'eslint-plugin-vue/lib/configs/vue3-recommended.js'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser, // 여기에 vue-parser 추가
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      vue: vuePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...vueConfig.rules,
      'vue/multi-word-component-names': 'off',
      'no-console': 'warn',
      'prettier/prettier': 'error',
    },
  },
]
