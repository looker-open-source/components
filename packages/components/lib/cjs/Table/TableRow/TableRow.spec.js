"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TableRow = require("./TableRow");

test('TableRow', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement(_TableRow.TableRow, {
    "data-testid": "table-row"
  }))));
  expect(_react2.screen.getByTestId('table-row')).toBeInTheDocument();
  expect(_react2.screen.getByTestId('table-row').tagName).toEqual('TR');
});
//# sourceMappingURL=TableRow.spec.js.map