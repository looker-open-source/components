"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TableBody = require("./TableBody");

test('TableBody', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement(_TableBody.TableBody, {
    "data-testid": "table-body"
  })));
  expect(_react2.screen.getByTestId('table-body')).toBeInTheDocument();
  expect(_react2.screen.getByTestId('table-body').tagName).toEqual('TBODY');
});
//# sourceMappingURL=TableBody.spec.js.map