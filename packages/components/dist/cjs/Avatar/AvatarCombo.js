"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarCombo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _PersonOutline = require("@styled-icons/material/PersonOutline");
var _styledIcon = require("@styled-icons/styled-icon");
var _AvatarUser = require("./AvatarUser");
var _AvatarIcon = require("./AvatarIcon");
var _Avatar = require("./Avatar");
var _excluded = ["secondaryIcon", "secondaryColor", "secondaryBg", "color", "icon", "user", "role"];
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AvatarIconSecondary = (0, _styledComponents["default"])(_AvatarIcon.AvatarIcon).withConfig({
  displayName: "AvatarCombo__AvatarIconSecondary",
  componentId: "sc-gekgjm-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var AvatarLayout = function AvatarLayout(_ref) {
  var secondaryIcon = _ref.secondaryIcon,
    secondaryColor = _ref.secondaryColor,
    secondaryBg = _ref.secondaryBg,
    color = _ref.color,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? _react["default"].createElement(_PersonOutline.PersonOutline, null) : _ref$icon,
    user = _ref.user,
    role = _ref.role,
    props = _objectWithoutProperties(_ref, _excluded);
  var BaseElement = role === 'button' ? 'button' : 'div';
  return _react["default"].createElement(BaseElement, (0, _designTokens.omitStyledProps)(props), user ? _react["default"].createElement(_AvatarUser.AvatarUser, {
    user: user,
    color: color
  }) : _react["default"].createElement(_AvatarIcon.AvatarIcon, {
    color: color,
    icon: icon
  }), _react["default"].createElement(AvatarIconSecondary, {
    bg: secondaryBg,
    color: secondaryColor,
    icon: secondaryIcon
  }));
};
var AvatarCombo = (0, _styledComponents["default"])(AvatarLayout).withConfig({
  displayName: "AvatarCombo",
  componentId: "sc-gekgjm-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  border: none;\n  height: 40px;\n  position: relative;\n  width: 40px;\n\n  ", " {\n    bottom: -4px;\n    height: 20px;\n    position: absolute;\n    right: -4px;\n    width: 20px;\n\n    ", " {\n      height: 14px;\n      width: 14px;\n    }\n  }\n"])), _Avatar.avatarButtonOverrides, AvatarIconSecondary, _styledIcon.StyledIconBase);
exports.AvatarCombo = AvatarCombo;
//# sourceMappingURL=AvatarCombo.js.map