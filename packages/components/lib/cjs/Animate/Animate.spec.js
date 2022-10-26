"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Animate = require("./Animate");

describe('FadeIn', function () {
  it('defaults', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Animate.FadeIn, {
      "data-testid": "fadein"
    }));
    expect(_react2.screen.getByTestId('fadein')).toBeInTheDocument();
    expect(_react2.screen.getByTestId('fadein')).toHaveStyle('animation-fill-mode: both;');
  });
  it('delay and duration props', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Animate.FadeIn, {
      "data-testid": "fadein",
      delay: "intricate",
      duration: "complex"
    }));
    expect(_react2.screen.getByTestId('fadein')).toHaveStyle('animation-delay: 500ms;');
    expect(_react2.screen.getByTestId('fadein')).toHaveStyle('animation-duration: 400ms;');
  });
  it('elements inside', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Animate.FadeIn, null, _react["default"].createElement("span", null, "Some text")));
    expect(_react2.screen.getByText('Some text')).toBeVisible();
  });
});
//# sourceMappingURL=Animate.spec.js.map