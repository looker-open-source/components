"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemTargetGroup = exports.ItemTarget = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ItemTarget = _styledComponents["default"].div.withConfig({
  displayName: "ItemTarget",
  componentId: "sc-ydt12l-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  cursor: ", ";\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  min-height: ", ";\n  min-width: ", ";\n  width: ", ";\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'inherit';
}, function (_ref2) {
  var size = _ref2.size;
  return size || _designTokens.densityTarget;
}, function (_ref3) {
  var size = _ref3.size;
  return size || _designTokens.densityTarget;
}, function (_ref4) {
  var size = _ref4.size;
  return size || _designTokens.densityTarget;
});
exports.ItemTarget = ItemTarget;
var ItemTargetGroup = _styledComponents["default"].div.withConfig({
  displayName: "ItemTarget__ItemTargetGroup",
  componentId: "sc-ydt12l-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-left: auto;\n  width: fit-content;\n"])));
exports.ItemTargetGroup = ItemTargetGroup;
//# sourceMappingURL=ItemTarget.js.map