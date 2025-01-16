// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default tseslint.config(
  {
    ignores: ['dist/**/*.*', '.tshy/**/*.*', '.wireit/**/*.*']
  },

  eslint.configs.recommended,

  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  {
    rules: {
      'import-x/order': 'error',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'import-x/no-named-as-default-member': 'off',
      '@typescript-eslint/unified-signatures': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/unbound-method': 'off'
    }
  },

  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.cjs'],
          defaultProject: 'tsconfig.json'
        },
        tsconfigRootDir: import.meta.dirname
      },
      globals: globals.node
    }
  },

  eslintPluginPrettierRecommended,

  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },

  {
    files: ['**/*.spec.*', '**/jest.*'],
    plugins: { jest: jest },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...jest.environments.globals.globals
      }
    }
  }
);
