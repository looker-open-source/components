"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _CardContent = require("./CardContent");

describe('CardContent', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CardContent.CardContent, null, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toBeInTheDocument();
  });
  test('custom padding', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CardContent.CardContent, {
      p: "u8"
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('padding: 2rem');
  });
});
//# sourceMappingURL=CardContent.spec.js.map