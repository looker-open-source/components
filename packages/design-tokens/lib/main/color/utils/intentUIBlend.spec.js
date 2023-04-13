"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _src = require("../../../../components-test-utils/src");
var _intentUIBlend = require("./intentUIBlend");
var _templateObject;
describe('intentUIBlend', function () {
  test('default', function () {
    var Test = _styledComponents["default"].p.withConfig({
      displayName: "intentUIBlendspec__Test",
      componentId: "sc-61trt-0"
    })(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      background: ", ";\n      background-color: ", ";\n      color: ", ";\n    "])), (0, _intentUIBlend.intentUIBlend)('critical', 0), (0, _intentUIBlend.intentUIBlend)('critical', 1), (0, _intentUIBlend.intentUIBlend)('critical', 4));
    (0, _src.renderWithTheme)(_react["default"].createElement(Test, null, "Find me"));
    var test = _react2.screen.getByText('Find me');
    expect(test).toHaveStyleRule('background', '#fcf6f6');
    expect(test).toHaveStyleRule('background-color', '#f8e4e6');
    expect(test).toHaveStyleRule('color', '#d34054');
  });
});
//# sourceMappingURL=intentUIBlend.spec.js.map