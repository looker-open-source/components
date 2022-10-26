"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _AccountCircle = require("@styled-icons/material-outlined/AccountCircle");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _Button = require("../Button");

var _excluded = ["imageUrl", "label", "size"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AvatarButton = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref, forwardedRef) {
  var imageUrl = _ref.imageUrl,
      label = _ref.label,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useTranslation = (0, _utils.useTranslation)('AvatarButton'),
      t = _useTranslation.t;

  return _react["default"].createElement(_Button.IconButton, (0, _extends2["default"])({
    label: label,
    "aria-label": typeof label === 'string' ? label : '',
    icon: _react["default"].createElement(_AccountCircle.AccountCircle, null),
    size: size,
    ref: forwardedRef
  }, rest), imageUrl && _react["default"].createElement("img", {
    alt: t('Profile Picture'),
    className: "default-image",
    src: imageUrl
  }));
})).withConfig({
  displayName: "AvatarButton",
  componentId: "sc-yers8c-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n\n  img {\n    border-radius: 50%;\n    height: ", ";\n    position: absolute;\n    width: ", ";\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.medium;
});
exports.AvatarButton = AvatarButton;
//# sourceMappingURL=AvatarButton.js.map