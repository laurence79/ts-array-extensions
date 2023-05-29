module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/prettier'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // codelens does this for us
    '@typescript-eslint/lines-between-class-members': 'off'
  },
  overrides: [
    // non production code is more relaxed
    {
      files: ['*.spec.ts'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/naming-convention': 'off'
      }
    }
  ]
};
