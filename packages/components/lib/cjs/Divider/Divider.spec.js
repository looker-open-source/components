"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Divider = require("./Divider");

describe('Divider', function () {
  test('Default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Divider.Divider, null));

    var divider = _react2.screen.getByRole('separator');

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });
  test('appearance', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Divider.Divider, {
      appearance: "onDark"
    }));
    expect(_react2.screen.getByRole('separator')).toHaveStyle('background-color: rgb(112, 119, 129)');
  });
  test('custom', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Divider.Divider, {
      size: "20px",
      customColor: "turquoise"
    }));
    expect(_react2.screen.getByRole('separator')).toHaveStyle('height: 20px');
    expect(_react2.screen.getByRole('separator')).toHaveStyle('background-color: turquoise');
  });
});
//# sourceMappingURL=Divider.spec.js.map