"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _src = require("../../components-test-utils/src");
var _ComponentsProvider = require("./ComponentsProvider");
var _templateObject;
var FauxParagraph = _styledComponents["default"].p.withConfig({
  displayName: "ComponentsProviderspec__FauxParagraph",
  componentId: "sc-1k86yic-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  font-family: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.key;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fonts.body;
});
describe('ComponentsProvider', function () {
  test('Nesting ignores parent values (not a desireable choice)', function () {
    var Test = function Test() {
      return _react["default"].createElement(_ComponentsProvider.ComponentsProvider, {
        themeCustomizations: {
          colors: {
            background: 'black'
          }
        }
      }, _react["default"].createElement(FauxParagraph, null, "1 layer"), _react["default"].createElement(_ComponentsProvider.ComponentsProvider, {
        themeCustomizations: {
          colors: {
            key: 'purple'
          }
        }
      }, _react["default"].createElement(FauxParagraph, null, "2 layer")));
    };
    (0, _src.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('1 layer')).toHaveStyle('color:rgb(108, 67, 224)');
    expect(_react2.screen.getByText('1 layer')).toHaveStyle('background: black');
    expect(_react2.screen.getByText('2 layer')).toHaveStyle('color: purple');
    expect(_react2.screen.getByText('2 layer')).toHaveStyle('background:rgb(255, 255, 255);');
  });
  test('loadGoogleFonts', function () {
    var Test = function Test() {
      return _react["default"].createElement(_ComponentsProvider.ComponentsProvider, {
        loadGoogleFonts: true
      }, _react["default"].createElement(FauxParagraph, null, "Some Text"));
    };
    (0, _src.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('Some Text')).toHaveStyle("font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif;");
  });
});
//# sourceMappingURL=ComponentsProvider.spec.js.map