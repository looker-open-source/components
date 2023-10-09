"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _designTokens = require("@looker/design-tokens");
var _PersonOutline = require("@styled-icons/material/PersonOutline");
var _styledIcon = require("@styled-icons/styled-icon");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Avatar = require("./Avatar");
var _templateObject;
var _excluded = ["color", "icon", "role"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  border: solid 1px currentColor;\n\n  ", " {\n    ", "\n  }\n"])), _Avatar.avatarCSS, function (_ref3) {
  var role = _ref3.role;
  return role === 'button' && 'cursor: pointer;';
}, _styledIcon.StyledIconBase, size);
exports.AvatarIcon = AvatarIcon;
//# sourceMappingURL=AvatarIcon.js.map