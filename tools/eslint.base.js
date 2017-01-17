module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    jquery: true
  },
  globals: {
    CUSTOMAPIHOST: false,
    VERSION: false,
    __DEV__: false
  },
  rules: {
    'arrow-parens': [
      2,
      'always'
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.js'
        ]
      }
    ],
    'import/no-unresolved': [
      2,
      {
        caseSensitive: false
      }
    ],
    'linebreak-style': [
      2,
      'windows'
    ],
    'no-confusing-arrow': 0,
    'react/jsx-filename-extension': 0,
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
    }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './tools/webpack.dev.js'
      }
    }
  }
};
