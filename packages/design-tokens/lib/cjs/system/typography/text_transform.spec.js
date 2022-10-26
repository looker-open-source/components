"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _src = require("../../../../components-test-utils/src");

var _text_transform = require("./text_transform");

var _templateObject;

test('text-transform', function () {
  var Test = _styledComponents["default"].p.withConfig({
    displayName: "text_transformspec__Test",
    componentId: "sc-m8huxu-0"
  })(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), _text_transform.textTransform);

  (0, _src.renderWithTheme)(_react2["default"].createElement(Test, {
    textTransform: "uppercase"
  }, "Find me"));
  expect(_react.screen.getByText('Find me')).toHaveStyle('text-transform: uppercase');
});
//# sourceMappingURL=text_transform.spec.js.map