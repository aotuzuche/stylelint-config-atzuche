module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['**/*.tsx', '**/*.jsx'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,
    'function-url-quotes': 'always',
  },
}
