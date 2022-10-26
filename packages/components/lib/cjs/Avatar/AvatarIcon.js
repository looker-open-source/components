"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _designTokens = require("@looker/design-tokens");

var _PersonOutline = require("@styled-icons/material/PersonOutline");

var _styledIcon = require("@styled-icons/styled-icon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Avatar = require("./Avatar");

var _templateObject;

var _excluded = ["color", "icon", "role"];
var size = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    xxsmall: {
      height: '16px',
      width: '16px'
    },
    xsmall: {
      height: '20px',
      width: '20px'
    },
    small: {
      height: '20px',
      width: '20px'
    },
    medium: {
      height: '30px',
      width: '30px'
    },
    large: {
      height: '36px',
      width: '36px'
    }
  }
});

var AvatarLayout = function AvatarLayout(_ref) {
  var color = _ref.color,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? _react["default"].createElement(_PersonOutline.PersonOutline, null) : _ref$icon,
      role = _ref.role,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var BaseElement = role === 'button' ? 'button' : 'div';
  return _react["default"].createElement(BaseElement, (0, _designTokens.omitStyledProps)(props), icon);
};

var AvatarIcon = (0, _styledComponents["default"])(AvatarLayout).attrs(function (_ref2) {
  var _ref2$bg = _ref2.bg,
      bg = _ref2$bg === void 0 ? 'background' : _ref2$bg,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'keyFocus' : _ref2$color,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'small' : _ref2$size;
  return {
    bg: bg,
    color: color,
    size: size
  };
}).withConfig({
  displayName: "AvatarIcon",
  componentId: "sc-18uvd0-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  border: solid 1px currentColor;\n\n  ", " {\n    ", "\n  }\n"])), _Avatar.avatarCSS, function (_ref3) {
  var role = _ref3.role;
  return role === 'button' && 'cursor: pointer;';
}, _styledIcon.StyledIconBase, size);
exports.AvatarIcon = AvatarIcon;
//# sourceMappingURL=AvatarIcon.js.map