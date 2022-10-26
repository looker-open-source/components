"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _VisuallyHidden = require("./VisuallyHidden");

test('VisuallyHiddenText default', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, "I am hidden"));
  expect(_react2.screen.getByText('I am hidden')).toBeInTheDocument();
  expect(_react2.screen.getByText('I am hidden')).toHaveStyle('clip: rect(1px, 1px, 1px, 1px); left: 0; top: 0;');
});
//# sourceMappingURL=VisuallyHidden.spec.js.map