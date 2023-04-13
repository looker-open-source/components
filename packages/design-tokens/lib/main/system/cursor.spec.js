"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _src = require("../../../components-test-utils/src");
var _cursor = require("./cursor");
var _templateObject;
test('cursor', function () {
  var Test = _styledComponents["default"].p.withConfig({
    displayName: "cursorspec__Test",
    componentId: "sc-7mezib-0"
  })(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), _cursor.cursor);
  (0, _src.renderWithTheme)(_react2["default"].createElement(Test, {
    cursor: "readonly"
  }, "Find me"));
  expect(_react.screen.getByText('Find me')).toHaveStyle('cursor: readonly');
});
//# sourceMappingURL=cursor.spec.js.map