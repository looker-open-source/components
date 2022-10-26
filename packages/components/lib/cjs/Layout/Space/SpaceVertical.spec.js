"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _SpaceVertical = require("./SpaceVertical");

var content = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "one"), _react["default"].createElement("div", null, "two"), _react["default"].createElement("div", null, "three"), _react["default"].createElement("div", null, "four"));

describe('SpaceVertical', function () {
  test('reversed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_SpaceVertical.SpaceVertical, {
      "data-testid": "space",
      reverse: true
    }, content));
    expect(_react2.screen.getByTestId('space')).toHaveStyle('flex-direction: column-reverse;');
  });
});
//# sourceMappingURL=SpaceVertical.spec.js.map