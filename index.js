module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,
    'function-url-quotes': 'always',
    'declaration-block-trailing-semicolon': null,
    'selector-class-pattern': '^[a-z0-9_-]+$',
  },
}
