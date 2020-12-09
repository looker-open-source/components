/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-no-empty': null,
    'block-opening-brace-newline-after': 'always-multi-line',
    'color-hex-case': 'lower',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': 'named-where-possible',
    'function-calc-no-unspaced-operator': true,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-nesting-depth': 2,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'no-unknown-animations': true,
    'number-no-trailing-zeros': true,
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
    /**
     * Workaround until stylelint-processor-styled-components patched:
     * https://github.com/styled-components/stylelint-processor-styled-components/pull/297
     * */
    'property-no-unknown': [
      true,
      {
        ignoreProperties: 'should-forward-prop',
      },
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^-styled-mixin/'],
      },
    ],
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-allowed-list': ['fr', 'px', 'deg', 'rem', 'vh', 'vw', '%', 'ms'],
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-no-vendor-prefix': true,
  },
}
