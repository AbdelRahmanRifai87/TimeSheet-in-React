import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import { fixupPluginRules } from '@eslint/compat'

export default tseslint.config(
  {
    // Ignore files and directories here.
    // It's a best practice to define this at the top level.
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': fixupPluginRules(reactHooks),
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // CORRECTED: Use the flat-compatible recommended config
      reactPlugin.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,

    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // The rules from reactHooks.configs['recommended-latest'] are already included
      // in the extends array, so you don't need this line again.
      // If you needed to override it, you would do it here.
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // <-- ADD THIS LINE
      },
    },
  },
)