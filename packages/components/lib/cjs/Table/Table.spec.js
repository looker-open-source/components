"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Table = require("./Table");

test('A Table should render', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Table.Table, {
    "data-testid": "table"
  }));
  expect(_react2.screen.getByTestId('table')).toBeInTheDocument();
  expect(_react2.screen.getByTestId('table').tagName).toEqual('TABLE');
});
//# sourceMappingURL=Table.spec.js.map