"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconMargins = exports.buttonIcon = void 0;
var _styledComponents = require("styled-components");
var _styledIcon = require("@styled-icons/styled-icon");
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var iconMargins = function iconMargins(props) {
  var spacing = {
    inner: '0',
    outer: '0'
  };
  switch (props.size) {
    case 'xxsmall':
    case 'xsmall':
    case 'small':
      spacing.outer = '0.25rem';
      spacing.inner = '0.25rem';
      break;
    case 'large':
    default:
      spacing.outer = '0.25rem';
      spacing.inner = '0.5rem';
  }
  if (props.iconBefore) {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      margin-left: -", ";\n      margin-right: ", ";\n    "])), spacing.outer, spacing.inner);
  } else if (props.iconAfter) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: ", ";\n      margin-right: -", ";\n    "])), spacing.inner, spacing.outer);
  } else {
    return false;
  }
};
exports.iconMargins = iconMargins;
var buttonIcon = function buttonIcon(props) {
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", " {\n    ", "\n    flex-shrink: 0;\n  }\n"])), _styledIcon.StyledIconBase, iconMargins(props));
};
exports.buttonIcon = buttonIcon;
//# sourceMappingURL=icon.js.map