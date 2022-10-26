"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Swatch = require("./Swatch");

describe('Swatch', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Swatch.Swatch, null));
    expect(_react2.screen.getByTestId('swatch')).toBeInTheDocument();
  });
  test('hex value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Swatch.Swatch, {
      color: "#4c6670"
    }));
    expect(_react2.screen.getByTestId('swatch')).toHaveStyle('background-color: #4c6670');
  });
  test('width and height', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Swatch.Swatch, {
      color: "blue",
      size: "large"
    }));

    var swatch = _react2.screen.getByTestId('swatch');

    expect(swatch).toHaveStyle('height: 2rem');
    expect(swatch).toHaveStyle('width: 2rem');
  });
  test('disabled state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Swatch.Swatch, {
      color: "blue",
      disabled: true
    }));
    expect(_react2.screen.getByTestId('swatch')).toHaveAttribute('disabled');
  });
});
//# sourceMappingURL=Swatch.spec.js.map