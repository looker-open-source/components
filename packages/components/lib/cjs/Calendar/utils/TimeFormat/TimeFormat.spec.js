"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ = require(".");

var date = new Date('January 25, 1988 11:58:03');
test('TimeFormat renders only time', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.TimeFormat, null, date));

  var time = _react.screen.getByText('11:58:03 AM');

  expect(time).toBeInTheDocument();
});
//# sourceMappingURL=TimeFormat.spec.js.map