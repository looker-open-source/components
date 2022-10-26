"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarUser = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _utils = require("../utils");

var _Avatar = require("./Avatar");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["color", "user", "role", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AvatarLayout = function AvatarLayout(_ref) {
  var color = _ref.color,
      user = _ref.user,
      role = _ref.role,
      size = _ref.size,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useTranslation = (0, _utils.useTranslation)('AvatarUser'),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imgError = _useState2[0],
      setImgError = _useState2[1];

  var handleError = function handleError() {
    return setImgError(true);
  };

  var firstInitial = user && user.first_name && user.first_name[0];
  var lastInitial = user && user.last_name && user.last_name[0];
  var name = user ? "".concat(user.first_name, " ").concat(user.last_name) : t('Avatar');
  var BaseElement = role === 'button' ? 'button' : 'div';
  return _react["default"].createElement(BaseElement, (0, _extends2["default"])({}, (0, _designTokens.omitStyledProps)(props), {
    "aria-label": name
  }), _react["default"].createElement(AvatarInitials, {
    color: color,
    "aria-hidden": true
  }, size === 'xxsmall' ? "".concat(firstInitial) : "".concat(firstInitial).concat(lastInitial)), user && user.avatar_url && !imgError && _react["default"].createElement(AvatarPhoto, {
    "aria-hidden": true,
    onError: handleError,
    "data-testid": "avatar-photo",
    src: user.avatar_url
  }));
};

var AvatarPhoto = _styledComponents["default"].img.withConfig({
  displayName: "AvatarUser__AvatarPhoto",
  componentId: "sc-ds3q2d-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n"])));

var AvatarInitials = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "AvatarUser__AvatarInitials",
  componentId: "sc-ds3q2d-1"
}).attrs(function (_ref2) {
  var color = _ref2.color;
  return {
    bg: color
  };
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.keyText;
});

var AvatarUser = (0, _styledComponents["default"])(AvatarLayout).attrs(function (_ref4) {
  var _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'key' : _ref4$color,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 'small' : _ref4$size;
  return {
    color: color,
    size: size
  };
}).withConfig({
  displayName: "AvatarUser",
  componentId: "sc-ds3q2d-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  background: currentColor;\n  position: relative;\n"])), _Avatar.avatarCSS, function (_ref5) {
  var role = _ref5.role;
  return role === 'button' && 'cursor: pointer;';
});
exports.AvatarUser = AvatarUser;
//# sourceMappingURL=AvatarUser.js.map