module.exports = {
  'extends': [
    'eslint:all',
  ],

  'env': {
    // Node.js 8.15
    'es2017': true,
    'node': true,
    'jest': true,
  },

  'parserOptions': {
    // In order to use Object rest/spread features, we set the ecmaVersion to 2018.
    // Remember that some ES 2018 features are NOT supported in Node.js 8.15.
    // TODO: Upgrade to a newer Node.js version.
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'impliedStrict': true,
    },
  },

  // Rules to turn off or override
  'rules': {
    // --- Possible Errors
    'no-await-in-loop': 'off',
    'no-extra-parens': 'off',
    'require-atomic-updates': 'off',

    // --- Best Practices
    'accessor-pairs': 'off',
    'block-scoped-var': 'off',
    'class-methods-use-this': 'warn',
    'complexity': 'off',
    'default-case': 'off',
    'default-param-last': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'warn',
    'eqeqeq': ['error', 'always', {
      'null': 'ignore',
    }],
    'guard-for-in': 'off',
    'max-classes-per-file': 'off',
    'no-else-return': 'off',
    'no-eq-null': 'off',
    'no-implicit-globals': 'off',
    'no-invalid-this': 'off',
    'no-magic-numbers': 'off',
    'no-param-reassign': 'warn',
    'no-warning-comments': 'warn',
    // Only supported in ES 2018
    'prefer-named-capture-group': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside'],

    // --- Variables
    'init-declarations': 'off',
    'no-shadow': 'off',
    'no-undefined': 'off',
    'no-use-before-define': ['error', 'nofunc'],

    // --- Node.js and CommonJS
    'callback-return': 'off',
    'global-require': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-sync': 'off',

    // --- Stylistic Issues
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': 'off',
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true,
    }],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'computed-property-spacing': ['error', 'never', {
      'enforceForClassMembers': true,
    }],
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'id-length': 'off',
    'indent': ['error', 2],
    'max-depth': ['error', 6],
    'max-len': ['error', 100],
    'max-lines': ['warn', {
      'max': 1000,
      'skipBlankLines': true,
      'skipComments': true,
    }],
    'max-lines-per-function': 'off',
    'max-params': 'warn',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', { 'capIsNew': false }],
    'newline-per-chained-call': 'off',
    'no-continue': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxBOF': 1,
      'maxEOF': 0,
    }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-linebreak': ['error', 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before',
      },
    }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'quote-props': ['error', 'as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': true,
    }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'wrap-regex': 'off',

    // --- ECMAScript 6
    'arrow-parens': ['error', 'as-needed'],
    'generator-star-spacing': ['error', 'after'],
    'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
    'prefer-const': ['error', { 'destructuring': 'all' }],
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'sort-imports': 'off',
  }
}
