"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _src = require("../../components-test-utils/src");

var _ComponentsProvider = require("./ComponentsProvider");

var _ExtendComponentsProvider = require("./ExtendComponentsProvider");

var _templateObject;

var FauxParagraph = _styledComponents["default"].p.withConfig({
  displayName: "ExtendComponentsProviderspec__FauxParagraph",
  componentId: "sc-9zi5rw-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.key;
});

describe('ExtendComponentsProvider', function () {
  test('Extends existing theme', function () {
    var Test = function Test() {
      return _react["default"].createElement(_ComponentsProvider.ComponentsProvider, {
        themeCustomizations: {
          colors: {
            background: 'black',
            key: 'purple'
          }
        }
      }, _react["default"].createElement(FauxParagraph, null, "Standard"), _react["default"].createElement(_ExtendComponentsProvider.ExtendComponentsThemeProvider, {
        themeCustomizations: {
          colors: {
            key: 'red'
          }
        }
      }, _react["default"].createElement(FauxParagraph, null, "Extended")));
    };

    (0, _src.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('Standard')).toHaveStyle('color: purple');
    expect(_react2.screen.getByText('Standard')).toHaveStyle('background: black');
    expect(_react2.screen.getByText('Extended')).toHaveStyle('color: red');
    expect(_react2.screen.getByText('Extended')).toHaveStyle('background: black');
  });
});
//# sourceMappingURL=ExtendComponentsProvider.spec.js.map