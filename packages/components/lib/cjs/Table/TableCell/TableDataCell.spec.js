"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TableDataCell = require("./TableDataCell");

test('TableDataCell', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_TableDataCell.TableDataCell, {
    "data-testid": "table-data-cell"
  })))));
  expect(_react2.screen.getByTestId('table-data-cell')).toBeInTheDocument();
  expect(_react2.screen.getByTestId('table-data-cell').tagName).toEqual('TD');
});
//# sourceMappingURL=TableDataCell.spec.js.map