"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Badge = require("./Badge");

describe('Badge', function () {
  test('Defaults', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Badge.Badge, null, "Good!"));

    var badge = _react2.screen.getByText('Good!');

    expect(badge).toHaveStyle('background: rgb(237, 232, 251)');
    expect(badge).toHaveStyle('line-height: 24px');
  });
  test('Small, Positive', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Badge.Badge, {
      size: "small",
      intent: "positive"
    }, "Good!"));

    var badge = _react2.screen.getByText('Good!');

    expect(badge).toHaveStyle('background: rgb(228, 245, 235)');
    expect(badge).toHaveStyle('line-height: 16px');
  });
});
//# sourceMappingURL=Badge.spec.js.map