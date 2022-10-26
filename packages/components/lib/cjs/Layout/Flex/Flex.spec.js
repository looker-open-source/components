"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Flex = require("./Flex");

describe('Flex', function () {
  test('default ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Flex.Flex, {
      "data-testid": "flex"
    }, _react["default"].createElement("div", null, "\uD83E\uDD51"), _react["default"].createElement("div", null, "\uD83D\uDC1B")));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('display: flex');
  });
  test('justifyContent', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Flex.Flex, {
      "data-testid": "flex",
      justifyContent: "center"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('justify-content: center');
  });
  test('alignItems', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Flex.Flex, {
      "data-testid": "flex",
      alignItems: "center"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('align-items: center');
  });
  test('alignContent', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Flex.Flex, {
      "data-testid": "flex",
      alignContent: "start"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('align-content: start');
  });
  test('flexDirection', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Flex.Flex, {
      "data-testid": "flex",
      flexDirection: "row-reverse"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('flex-direction: row-reverse');
  });
  test('flexWrap', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Flex.Flex, {
      "data-testid": "flex",
      flexWrap: "nowrap"
    }));
    expect(_react2.screen.getByTestId('flex')).toHaveStyle('flex-wrap: nowrap');
  });
});
//# sourceMappingURL=Flex.spec.js.map