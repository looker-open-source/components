"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var TabPanelLayout = function TabPanelLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      selected = _ref.selected,
      _ref$isTabStop = _ref.isTabStop,
      isTabStop = _ref$isTabStop === void 0 ? false : _ref$isTabStop;
  return selected ? _react["default"].createElement("div", {
    className: className,
    tabIndex: isTabStop ? 0 : -1
  }, children) : null;
};

var TabPanel = (0, _styledComponents["default"])(TabPanelLayout).withConfig({
  displayName: "TabPanel",
  componentId: "sc-1konee-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100%;\n  outline: none;\n"])));
exports.TabPanel = TabPanel;
//# sourceMappingURL=TabPanel.js.map