"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TableFoot = require("./TableFoot");

test('TableFoot renders', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement(_TableFoot.TableFoot, {
    "data-testid": "table-footer"
  })));
  expect(_react2.screen.getByTestId('table-footer')).toBeInTheDocument();
});
//# sourceMappingURL=TableFoot.spec.js.map