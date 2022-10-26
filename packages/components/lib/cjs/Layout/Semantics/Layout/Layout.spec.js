"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Layout = require("./Layout.stories");

describe('Semantic Layout', function () {
  test('render Layout', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Layout.Basic, null));
    expect(_react2.screen.getByText("I'm the header")).toBeInTheDocument();
    expect(_react2.screen.getAllByText('blah')[0]).toBeInTheDocument();
    expect(_react2.screen.getByText('Page title')).toBeInTheDocument();
    expect(_react2.screen.getByText("I'm a footer")).toBeInTheDocument();
  });
  test('Footer And Header fixed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Layout.FixedWithFooterAndHeaderShadow, null));

    var container = _react2.screen.getByText("I'm the header").closest('div');

    expect(container).toHaveStyle('overflow: hidden');
  });
});
//# sourceMappingURL=Layout.spec.js.map