module.exports = {
  env: {
    'node': true,
    'browser': true,
    'commonjs': true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [ './tsconfig.json' ],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    // standard rules -- best practices
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'curly': 'error',
    'dot-location': [ 'error', 'property' ],
    // 'dot-notation': 'error',
    'dot-notation': 'off', // handled by @typescript-eslint plugin
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'off', // handled by @typescript-eslint plugin
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'off', // handled by @typescript-eslint plugin
    'no-magic-numbers': 'off', // handled by @typescript-eslint plugin
    'no-multi-spaces': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'off', // handled by @typescript-eslint plugin
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'off', // handled by @typescript-eslint plugin
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'off',
    'no-warning-comments': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'radix': 'error',
    'require-await': 'off', // handled by @typescript-eslint plugin
    'require-unicode-regexp': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',

    // standard rules -- variables
    'no-shadow': 'off', // handled by @typescript-eslint plugin
    'no-unused-vars': 'off', // handled by @typescript-eslint plugin (part of "recommended")

    // standard rules -- stylistic issues
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'block-spacing': 'error',
    'brace-style': 'off', // handled by @typescript-eslint plugin
    'camelcase': 'error',
    'comma-dangle': 'off', // handled by @typescript-eslint plugin
    'comma-spacing': 'off', // handled by @typescript-eslint plugin
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'off', // handled by @typescript-eslint plugin
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': [ 'error', 'multiline-arguments' ],
    'implicit-arrow-linebreak': 'error',
    'indent': 'off', // handled by @typescript-eslint plugin
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'off', // handled by @typescript-eslint plugin
    'linebreak-style': [ 'error' ],
    'lines-between-class-members': 'off', // handled by @typescript-eslint plugin
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0, maxBOF: 0 } ],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': 'off', // handled by @typescript-eslint plugin
    'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
    'one-var': [ 'error', 'never' ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'quotes': 'off', // handled by @typescript-eslint plugin
    'semi': 'off', // handled by @typescript-eslint plugin
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off', // handled by @typescript-eslint plugin
    'space-in-parens': 'error',
    'space-infix-ops': 'off', // handled by @typescript-eslint plugin,
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',

    // standard rules -- ES2015
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'sort-imports': [ 'error', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false, memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ] } ],
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',

    // @typescript-eslint rules
    '@typescript-eslint/explicit-function-return-type': 'off', // included in "overrides" section
    '@typescript-eslint/explicit-member-accessibility': 'off', // included in "overrides" section
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-var-requires': 'off', // needed for dynamic require
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',

    // @typescript-eslint eslint extension rules
    '@typescript-eslint/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-use-before-define': 'off', // override CRA's default
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
    '@typescript-eslint/quotes': [ 'error', 'single' ],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/space-before-function-paren': [ 'error', { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
    '@typescript-eslint/space-infix-ops': 'error',

    // react rules
    'react/jsx-closing-bracket-location': [ 'error', { location: 'line-aligned' } ],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [ 'error', 2, { checkAttributes: true, indentLogicalExpressions: true } ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-pascal-case': [ 'error', { allowAllCaps: true, allowNamespace: true } ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [ 'error', { beforeClosing: 'never' } ],
    'react/no-unescaped-entities': [ 'error', { forbid: [ '>', '"', '\'', '}', '“', '”', '‘', '’' ] } ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    // import rules
    'import/order': [ 'error', { alphabetize: { order: 'asc', caseInsensitive: true } } ],

    // jest rules
    'jest/consistent-test-it': [ 'error', { fn: 'it' } ],
  },
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true } ],
        '@typescript-eslint/explicit-member-accessibility': 'error',
      },
    },
  ],
  settings: {
    react: { version: 'detect' },
  },
};
