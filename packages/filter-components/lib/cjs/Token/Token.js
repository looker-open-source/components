"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Token = exports.SubduedToken = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _components = require("@looker/components");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var _excluded = ["label", "subdued", "maxWidth", "isEmpty", "isHoverTarget", "hasError", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MAX_TOKEN_WIDTH = '20rem';
var Token = (0, _react.forwardRef)(function (_ref, ref) {
  var label = _ref.label,
      _ref$subdued = _ref.subdued,
      subdued = _ref$subdued === void 0 ? true : _ref$subdued,
      maxWidth = _ref.maxWidth,
      isEmpty = _ref.isEmpty,
      isHoverTarget = _ref.isHoverTarget,
      hasError = _ref.hasError,
      onClick = _ref.onClick,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var showError = !props['aria-expanded'] && hasError;
  var TokenComponent;

  if (isHoverTarget) {
    TokenComponent = DropTargetToken;
  } else if (isEmpty) {
    TokenComponent = EmptyToken;
  } else {
    TokenComponent = TokenBase;
  }

  return _react["default"].createElement(TokenComponent, {
    showError: showError,
    onClick: onClick,
    maxWidth: maxWidth,
    ref: ref,
    role: "button",
    "aria-selected": !subdued
  }, label);
});
exports.Token = Token;
Token.displayName = 'Token';
var TokenBase = (0, _styledComponents["default"])(_components.ChipButton).withConfig({
  displayName: "Token__TokenBase",
  componentId: "sc-194gay4-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  max-width: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme,
      showError = _ref2.showError;
  return showError && "border: 1px solid ".concat(theme.colors.criticalBorder, ";");
}, function (_ref3) {
  var maxWidth = _ref3.maxWidth;
  return maxWidth || MAX_TOKEN_WIDTH;
});
var DropTargetToken = (0, _styledComponents["default"])(TokenBase).withConfig({
  displayName: "Token__DropTargetToken",
  componentId: "sc-194gay4-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  &:hover {\n    border-color: ", ";\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.key;
});
var EmptyToken = (0, _styledComponents["default"])(TokenBase).withConfig({
  displayName: "Token__EmptyToken",
  componentId: "sc-194gay4-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  &[aria-selected='false'] {\n    background: ", ";\n    border: 1px dashed ", ";\n    color: ", ";\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.ui1;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.ui4;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.text1;
});
var SubduedToken = (0, _styledComponents["default"])(TokenBase).withConfig({
  displayName: "Token__SubduedToken",
  componentId: "sc-194gay4-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: normal;\n\n  &:hover {\n    cursor: not-allowed;\n  }\n"])));
exports.SubduedToken = SubduedToken;
//# sourceMappingURL=Token.js.map