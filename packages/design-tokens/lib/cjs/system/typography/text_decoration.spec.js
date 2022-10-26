"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _src = require("../../../../components-test-utils/src");

var _text_decoration = require("./text_decoration");

var _templateObject;

test('text-decoration', function () {
  var Test = _styledComponents["default"].p.withConfig({
    displayName: "text_decorationspec__Test",
    componentId: "sc-1eut5db-0"
  })(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), _text_decoration.textDecoration);

  (0, _src.renderWithTheme)(_react2["default"].createElement(Test, {
    textDecoration: "underline"
  }, "Find me"));
  expect(_react.screen.getByText('Find me')).toHaveStyle('text-decoration: underline');
});
//# sourceMappingURL=text_decoration.spec.js.map