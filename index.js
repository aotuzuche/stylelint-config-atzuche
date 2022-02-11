module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,
    'function-url-quotes': 'always',
    'selector-class-pattern': '^[a-z0-9_-]+$',
    'color-hex-case': 'lower',

    indentation: 2,
    linebreaks: null,
    'max-line-length': null,

    'function-comma-newline-after': null,
    'function-comma-newline-before': null,
    'function-comma-space-after': 'always',
    'function-comma-space-before': null,
    'function-max-empty-lines': 0,
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': null,

    // prettier doesnt care about this space lets keep it here
    // 'function-whitespace-after': 'always'|'never',

    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': null,
    'value-list-comma-space-before': null,
    'value-list-max-empty-lines': null,

    // this is fixable but lets keep it
    // 'custom-property-empty-line-before': 'never'

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': null,
    'declaration-block-semicolon-newline-after': null,
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': null,

    // prettier always adds the trailing semicolon
    'declaration-block-trailing-semicolon': null,

    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',

    // prettier doesnt care about this space
    // 'selector-attribute-operator-space-after': 'never'
    // 'selector-attribute-operator-space-before': 'never'

    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': null,
    'selector-combinator-space-before': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-list-comma-newline-after': null,
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': null,
    'selector-list-comma-space-before': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',

    // prettier doesnt care about this space
    // 'media-feature-range-operator-space-after': 'always',
    // 'media-feature-range-operator-space-before': 'always'

    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'media-query-list-comma-space-after': null,
    'media-query-list-comma-space-before': null,
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': null,
    'at-rule-semicolon-space-before': 'never',

    // prettier doesnt care about this whitespace
    // 'comment-whitespace-inside': 'always'

    'max-empty-lines': 1,
    'no-eol-whitespace': null,
    'no-missing-end-of-source-newline': null,
    'no-empty-first-line': null,
    // 'unicode-bom': null,
    'number-leading-zero': null,

    // prettier lowercases hex colors
    'color-hex-case': null,

    // prettier removes trailing zeros
    'number-no-trailing-zeros': null,

    // prettier lowercases units
    'unit-case': null,

    // prettier lowercases properties
    'property-case': null,

    // prettier lowercases pseudo class selectors
    'selector-pseudo-class-case': null,

    // prettier lowercases pseudo element selectors
    'selector-pseudo-element-case': null,

    // prettier lowercases media feature names
    'media-feature-name-case': null,

    // prettier lowercases @ rule names
    'at-rule-name-case': null,

    // prettier removes extra semicolons
    'no-extra-semicolons': null,

    // prettier has its own quotes rule
    'string-quotes': null,
    'comment-empty-line-before': null,
    'function-name-case': ['lower'],
    'no-invalid-double-slash-comments': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
  },
}
