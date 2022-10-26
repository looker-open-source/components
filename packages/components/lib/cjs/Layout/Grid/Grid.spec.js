"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Grid = require("./Grid");

var content = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "first"), _react["default"].createElement("div", null, "second"), _react["default"].createElement("div", null, "third"), _react["default"].createElement("div", null, "fourth"));

describe('Grid', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Grid.Grid, {
      "data-testid": "grid"
    }, content, " "));
    expect(_react2.screen.getByTestId('grid')).toHaveStyleRule('display', 'grid');
  });
  test('specified gap', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Grid.Grid, {
      "data-testid": "grid",
      gap: "u8"
    }, content));
    expect(_react2.screen.getByTestId('grid')).toHaveStyleRule('grid-gap', '2rem');
  });
  test('specified columns', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Grid.Grid, {
      "data-testid": "grid",
      columns: 4
    }, content));
    expect(_react2.screen.getByTestId('grid')).toHaveStyleRule('grid-template-columns', 'repeat(4,minmax(0,1fr))');
  });
  test('specified width', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Grid.Grid, {
      "data-testid": "grid",
      width: "50%"
    }, content));
    expect(_react2.screen.getByTestId('grid')).toHaveStyleRule('width', '50%');
  });
});
//# sourceMappingURL=Grid.spec.js.map