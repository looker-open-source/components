"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TableHead = require("./TableHead");

test('TableHead', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement(_TableHead.TableHead, {
    "data-testid": "table-head"
  })));
  expect(_react2.screen.getByTestId('table-head')).toBeInTheDocument();
  expect(_react2.screen.getByTestId('table-head').tagName).toEqual('THEAD');
});
//# sourceMappingURL=TableHead.spec.js.map