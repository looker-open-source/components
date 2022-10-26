"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _MenuHeading = require("./MenuHeading.hooks");

var TestHook = function TestHook() {
  var _useElementVisibility = (0, _MenuHeading.useElementVisibility)(),
      _useElementVisibility2 = (0, _slicedToArray2["default"])(_useElementVisibility, 2),
      isVisible = _useElementVisibility2[0],
      ref = _useElementVisibility2[1];

  return _react2["default"].createElement("div", {
    ref: ref
  }, isVisible.toString());
};

describe('MenuHeading Hooks', function () {
  it('it returns true as the default visibility state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestHook, null));
    expect(_react.screen.getByText('true')).toBeVisible();
  });
});
//# sourceMappingURL=MenuHeading.hooks.spec.js.map