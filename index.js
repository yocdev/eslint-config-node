module.exports = {
  'extends': [
    'eslint:recommended'
  ],

  'rules': {
    'no-template-curly-in-string': 'error',
    'array-callback-return': 'error',
    'class-methods-use-this': 'error',
    'curly': ['error', 'all'],
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-new-wrappers': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'require-await': 'error',
    'no-use-before-define': 'error',
    'array-bracket-newline': ['error', {
      'multiline': true
    }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
      'mode': 'strict'
    }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 6],
    'max-len': ['error', 100],
    'new-parens': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 1,
      'maxBOF': 1
    }],
    'no-nested-ternary': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
    'padded-blocks': ['error', 'never'],
    'prefer-object-spread': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'switch-colon-spacing': ['error', {
      'after': true,
      'before': false
    }],
    'template-tag-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],

    'require-atomic-updates': 'off',
    'max-lines-per-function': 'off'
  }
}

