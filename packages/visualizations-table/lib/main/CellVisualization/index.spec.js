"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");

it('renders CellVisualization', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.CellVisualization, {
    min: 0,
    max: 100,
    value: 50
  }));
  expect(_react2.screen.getByTestId('single-bar')).toHaveStyle({
    flex: 0.5
  });
});
it('does not render CellVisualization when max is 0', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.CellVisualization, {
    min: 0,
    max: 0,
    value: 50
  }));
  expect(_react2.screen.queryByTestId('single-bar')).not.toBeInTheDocument();
});
//# sourceMappingURL=index.spec.js.map