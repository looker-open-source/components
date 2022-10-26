"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _src = require("../../components-test-utils/src");

var _ThemeProvider = require("./ThemeProvider");

var _templateObject;

var FauxParagraph = _styledComponents["default"].p.withConfig({
  displayName: "ThemeProviderspec__FauxParagraph",
  componentId: "sc-1hetuu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.key;
});

describe('ThemeProvider', function () {
  test('builtIn default works', function () {
    var Test = function Test() {
      return _react["default"].createElement(_ThemeProvider.ThemeProvider, null, _react["default"].createElement(FauxParagraph, null, "Standard"));
    };

    (0, _src.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('Standard')).toHaveStyle('color: rgb(108, 67, 224)');
  });
});
//# sourceMappingURL=ThemeProvider.spec.js.map