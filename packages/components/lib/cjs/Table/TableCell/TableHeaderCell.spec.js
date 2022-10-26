"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TableHeaderCell = require("./TableHeaderCell");

test('TableHeaderCell', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement(_TableHeaderCell.TableHeaderCell, {
    "data-testid": "table-header-cell"
  })))));
  expect(_react2.screen.getByTestId('table-header-cell')).toBeInTheDocument();
  expect(_react2.screen.getByTestId('table-header-cell').tagName).toEqual('TH');
});
//# sourceMappingURL=TableHeaderCell.spec.js.map