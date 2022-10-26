"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FlexItem = require("./FlexItem");

describe('FlexItem', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FlexItem.FlexItem, {
      "data-testid": "flex"
    }, "\uD83D\uDCAA"));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('display: block;');
  });
  test('alignSelf', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FlexItem.FlexItem, {
      "data-testid": "flex",
      alignSelf: "center"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('align-self: center;');
  });
  test('order', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FlexItem.FlexItem, {
      "data-testid": "flex",
      order: 1
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('order: 1;');
  });
  test('flex', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FlexItem.FlexItem, {
      "data-testid": "flex",
      flex: "1 50px"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('flex: 1 50px;');
  });
  test('basis', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FlexItem.FlexItem, {
      "data-testid": "flex",
      flexBasis: "100px"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('flex-basis: 100px;');
  });
});
//# sourceMappingURL=FlexItem.spec.js.map