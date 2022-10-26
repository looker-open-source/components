"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarCombo = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

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

var AvatarIconSecondary = (0, _styledComponents["default"])(_AvatarIcon.AvatarIcon).withConfig({
  displayName: "AvatarCombo__AvatarIconSecondary",
  componentId: "sc-gekgjm-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));

var AvatarLayout = function AvatarLayout(_ref) {
  var secondaryIcon = _ref.secondaryIcon,
      secondaryColor = _ref.secondaryColor,
      secondaryBg = _ref.secondaryBg,
      color = _ref.color,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? _react["default"].createElement(_PersonOutline.PersonOutline, null) : _ref$icon,
      user = _ref.user,
      role = _ref.role,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
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
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  border: none;\n  height: 40px;\n  position: relative;\n  width: 40px;\n\n  ", " {\n    bottom: -4px;\n    height: 20px;\n    position: absolute;\n    right: -4px;\n    width: 20px;\n\n    ", " {\n      height: 14px;\n      width: 14px;\n    }\n  }\n"])), _Avatar.avatarButtonOverrides, AvatarIconSecondary, _styledIcon.StyledIconBase);
exports.AvatarCombo = AvatarCombo;
//# sourceMappingURL=AvatarCombo.js.map