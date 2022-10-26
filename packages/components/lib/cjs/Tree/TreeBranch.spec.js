"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ = require(".");

test('Renders children', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeBranch, null, "My Children"));

  _react2.screen.getByText('My Children');
});
//# sourceMappingURL=TreeBranch.spec.js.map