"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabShadowColor = exports.iconButtonColorDerivation = exports.calendarMixColor = exports.buttonShadow = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _rgba = _interopRequireDefault(require("polished/lib/color/rgba"));
var _lighten = _interopRequireDefault(require("polished/lib/color/lighten"));
var _mix = _interopRequireDefault(require("polished/lib/color/mix"));
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var buttonShadow = function buttonShadow() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'key';
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-shadow: 0 0 0 0.15rem ", ";\n  "])), function (_ref) {
    var theme = _ref.theme;
    return (0, _rgba["default"])(theme.colors[color], 0.25);
  });
};
exports.buttonShadow = buttonShadow;
var iconButtonColorDerivation = function iconButtonColorDerivation() {
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return (0, _lighten["default"])(0.14, theme.colors.neutral);
  });
};
exports.iconButtonColorDerivation = iconButtonColorDerivation;
var tabShadowColor = function tabShadowColor() {
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 0 0 0.15rem ", ";\n"])), function (_ref3) {
    var theme = _ref3.theme;
    return (0, _rgba["default"])(theme.colors.keyFocus, 0.25);
  });
};
exports.tabShadowColor = tabShadowColor;
var calendarMixColor = function calendarMixColor() {
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (_ref4) {
    var colors = _ref4.theme.colors;
    return (0, _mix["default"])(0.65, colors.keyAccent, colors.neutralInteractive);
  });
};
exports.calendarMixColor = calendarMixColor;
//# sourceMappingURL=helpers.js.map