"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _index = require("./stories/index.stories");

describe('Density', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));
    expect(_react2.screen.getByText('Cheddar')).toHaveStyle('font-size: 0.875rem');
  });
  test('+1', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Positive1, null));
    expect(_react2.screen.getByText('Cheddar')).toHaveStyle('font-size: 1rem');
  });
  test('-3', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Negative3, null));
    expect(_react2.screen.getByText('Cheddar')).toHaveStyle('font-size: 0.75rem');
  });
});
//# sourceMappingURL=Density.spec.js.map