"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Legend = require("./Legend");

test('A Legend', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, null, "I am legend"));
  expect(_react2.screen.getByText('I am legend')).toBeInTheDocument();
  expect(_react2.screen.getByText('I am legend').tagName).toEqual('LEGEND');
});
//# sourceMappingURL=Legend.spec.js.map