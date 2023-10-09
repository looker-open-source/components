"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  outline: none;\n"])));
exports.TabPanel = TabPanel;
//# sourceMappingURL=TabPanel.js.map