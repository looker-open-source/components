"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarUser = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _utils = require("../utils");
var _Avatar = require("./Avatar");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["color", "user", "role", "size"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AvatarLayout = function AvatarLayout(_ref) {
  var color = _ref.color,
    user = _ref.user,
    role = _ref.role,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0, _utils.useTranslation)('AvatarUser'),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    imgError = _useState2[0],
    setImgError = _useState2[1];
  var handleError = function handleError() {
    return setImgError(true);
  };
  var firstInitial = user && user.first_name && user.first_name[0];
  var lastInitial = user && user.last_name && user.last_name[0];
  var name = user ? "".concat(user.first_name, " ").concat(user.last_name) : t('Avatar');
  var BaseElement = role === 'button' ? 'button' : 'div';
  return _react["default"].createElement(BaseElement, _extends({}, (0, _designTokens.omitStyledProps)(props), {
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n"])));
var AvatarInitials = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "AvatarUser__AvatarInitials",
  componentId: "sc-ds3q2d-1"
}).attrs(function (_ref2) {
  var color = _ref2.color;
  return {
    bg: color
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref3) {
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
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  background: currentColor;\n  position: relative;\n"])), _Avatar.avatarCSS, function (_ref5) {
  var role = _ref5.role;
  return role === 'button' && 'cursor: pointer;';
});
exports.AvatarUser = AvatarUser;
//# sourceMappingURL=AvatarUser.js.map