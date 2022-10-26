"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Space = require("./Space");

var content = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "one"), _react["default"].createElement("div", null, "two"), _react["default"].createElement("div", null, "three"), _react["default"].createElement("div", null, "four"));

describe('Space', function () {
  test('reversed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Space.Space, {
      reverse: true,
      "data-testid": "space"
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyleRule('flex-direction', 'row-reverse');
  });
  test('around + gap (all you get is around)', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Space.Space, {
      around: true,
      gap: "u10",
      "data-testid": "space"
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-around');
  });
  test('around', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Space.Space, {
      around: true,
      "data-testid": "space"
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-around');
  });
  test('between', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Space.Space, {
      between: true,
      "data-testid": "space"
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-between');
  });
  test('evenly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Space.Space, {
      evenly: true,
      "data-testid": "space"
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-evenly');
  });
  test('align="stretch" overrides justify', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Space.Space, {
      justify: "end",
      align: "stretch",
      "data-testid": "space"
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyleRule('align-items', 'stretch');
    expect(_react2.screen.getByTestId('space')).not.toHaveStyleRule('justify-content', 'flex-end');
  });
});
//# sourceMappingURL=Space.spec.js.map