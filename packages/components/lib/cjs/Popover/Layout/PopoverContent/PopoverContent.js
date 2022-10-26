"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _ModalContent = require("../../../Modal/ModalContent");

var _excluded = ["children", "p", "py", "px"];

var _templateObject;

var popoverContentDefaults = {
  px: 'u5',
  py: 'u4'
};
var PopoverContent = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
      p = _ref.p,
      py = _ref.py,
      px = _ref.px,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  py = py || p || popoverContentDefaults.py;
  px = px || p || popoverContentDefaults.px;
  return _react["default"].createElement(_ModalContent.ModalContent, (0, _extends2["default"])({
    overflowVerticalPadding: "u1",
    py: py,
    px: px
  }, props), children);
}).withConfig({
  displayName: "PopoverContent",
  componentId: "sc-pgzun4-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _designTokens.layout);
exports.PopoverContent = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map