"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ChipButton = require("./ChipButton");

test('ChipButton', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ChipButton.ChipButton, null, "chip"));
  expect(_react2.screen.getByText('chip')).toBeInTheDocument();
});
//# sourceMappingURL=ChipButton.spec.js.map