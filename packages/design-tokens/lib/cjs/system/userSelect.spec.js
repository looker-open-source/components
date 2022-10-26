"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _src = require("../../../components-test-utils/src");

var _userSelect = require("./userSelect");

var _templateObject;

test('userSelect', function () {
  var Test = _styledComponents["default"].p.withConfig({
    displayName: "userSelectspec__Test",
    componentId: "sc-og7j00-0"
  })(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), _userSelect.userSelect);

  (0, _src.renderWithTheme)(_react2["default"].createElement(Test, {
    userSelect: "none"
  }, "Find me"));
  expect(_react.screen.getByText('Find me')).toHaveStyle('user-select: none');
});
//# sourceMappingURL=userSelect.spec.js.map