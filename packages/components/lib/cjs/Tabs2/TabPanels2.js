"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanels2 = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _templateObject;

var TabPanels2Layout = function TabPanels2Layout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  return _react["default"].createElement("div", {
    "aria-labelledby": "tab-".concat(id),
    className: className,
    id: "panel-".concat(id),
    role: "tabpanel"
  }, children);
};

var TabPanels2 = (0, _styledComponents["default"])(TabPanels2Layout).attrs(function (_ref2) {
  var _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? '100%' : _ref2$height,
      _ref2$pt = _ref2.pt,
      pt = _ref2$pt === void 0 ? 'large' : _ref2$pt;
  return {
    height: height,
    pt: pt
  };
}).withConfig({
  displayName: "TabPanels2",
  componentId: "sc-1iawi3n-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.flexbox, _designTokens.layout, _designTokens.space);
exports.TabPanels2 = TabPanels2;
//# sourceMappingURL=TabPanels2.js.map