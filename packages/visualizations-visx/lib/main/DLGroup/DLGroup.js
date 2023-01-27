"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DLGroup = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("@looker/components");
var _templateObject;
var DLGroup = function DLGroup(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    value = _ref.value,
    preface = _ref.preface;
  return _react["default"].createElement(_components.SpaceVertical, {
    gap: "none"
  }, preface && _react["default"].createElement("em", null, preface), _react["default"].createElement("dt", null, label), _react["default"].createElement(DD, null, value));
};
exports.DLGroup = DLGroup;
var DD = _styledComponents["default"].dd.withConfig({
  displayName: "DLGroup__DD",
  componentId: "sc-ayqk0v-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: bold;\n  margin: 0;\n"])));
//# sourceMappingURL=DLGroup.js.map