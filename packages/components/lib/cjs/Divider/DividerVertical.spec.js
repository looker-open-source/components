"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _DividerVertical = require("./DividerVertical");

test('render Default DividerVertical', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DividerVertical.DividerVertical, null));

  var divider = _react2.screen.getByRole('separator');

  expect(divider).toBeInTheDocument();
  expect(divider).toHaveAttribute('aria-orientation', 'vertical');
});
test('overrides global height declarations when stretching', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DividerVertical.DividerVertical, {
    stretch: true
  }));
  expect(_react2.screen.getByRole('separator')).toHaveStyle({
    height: 'inherit'
  });
});
//# sourceMappingURL=DividerVertical.spec.js.map