"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ValidationMessage = require("./ValidationMessage");

test('An error message', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ValidationMessage.ValidationMessage, {
    type: "error",
    message: "Error!"
  }));
  expect(_react2.screen.getByText('Error!')).toBeInTheDocument();
});
//# sourceMappingURL=ValidationMessage.spec.js.map