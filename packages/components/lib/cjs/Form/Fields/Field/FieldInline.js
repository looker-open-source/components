"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldInline = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Label = require("../../Label/Label");

var _Text = require("../../../Text");

var _ValidationMessage = require("../../ValidationMessage/ValidationMessage");

var _Truncate = require("../../../Truncate");

var _RequiredStar = require("./RequiredStar");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldInlineLayout = function FieldInlineLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      detail = _ref.detail,
      label = _ref.label,
      id = _ref.id,
      required = _ref.required,
      validationMessage = _ref.validationMessage;
  var describedbyId = "describedby-".concat(id);
  var inputWithAriaDescribed = (0, _react.isValidElement)(children) ? _react["default"].cloneElement(children, {
    'aria-describedby': describedbyId
  }) : children;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement(InputArea, null, inputWithAriaDescribed), _react["default"].createElement(_Label.Label, {
    htmlFor: id
  }, _react["default"].createElement(_Truncate.Truncate, null, label), required && _react["default"].createElement(_RequiredStar.RequiredStar, null)), detail && _react["default"].createElement(FieldDetail, null, detail), _react["default"].createElement(MessageArea, {
    id: describedbyId
  }, description && _react["default"].createElement(FieldDescription, null, description), validationMessage && _react["default"].createElement(_ValidationMessage.ValidationMessage, validationMessage)));
};

var FieldDetail = (0, _styledComponents["default"])(_Text.Span).withConfig({
  displayName: "FieldInline__FieldDetail",
  componentId: "sc-1gab50g-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  grid-column: 3;\n  grid-row: 1;\n  /* stylelint-disable */\n  -ms-grid-column: 3;\n  -ms-grid-column-span: 2;\n  -ms-grid-row: 1;\n  /* stylelint-enable */\n  padding-left: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.xsmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u2;
});
var FieldDescription = (0, _styledComponents["default"])(_Text.Paragraph).withConfig({
  displayName: "FieldInline__FieldDescription",
  componentId: "sc-1gab50g-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  padding-bottom: ", ";\n  padding-top: ", ";\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text2;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSizes.xsmall;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.lineHeights.xsmall;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.u05;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.space.u05;
});

var InputArea = _styledComponents["default"].div.withConfig({
  displayName: "FieldInline__InputArea",
  componentId: "sc-1gab50g-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  grid-column: 1;\n  grid-row: 1;\n  padding-right: ", ";\n  /* stylelint-disable */\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  -ms-grid-row: 1;\n  /* stylelint-enable */\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.space.u1;
});

var MessageArea = _styledComponents["default"].div.withConfig({
  displayName: "FieldInline__MessageArea",
  componentId: "sc-1gab50g-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  grid-column: 2;\n  grid-column-end: span 2;\n  grid-row: 2;\n  /* stylelint-disable */\n  -ms-grid-column: 2;\n  -ms-grid-column-end: span 2;\n  -ms-grid-column-span: 2;\n  -ms-grid-row: 2;\n  /* stylelint-enable */\n"])));

var FieldInline = (0, _styledComponents["default"])(FieldInlineLayout).withConfig({
  displayName: "FieldInline",
  componentId: "sc-1gab50g-4"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  justify-content: start;\n  line-height: ", ";\n  /* stylelint-disable */\n  display: -ms-grid;\n  -ms-grid-columns: auto auto auto auto;\n  /* stylelint-enable */\n\n  ", " {\n    align-items: center;\n    color: ", ";\n    display: flex;\n    font-size: ", ";\n    font-weight: normal;\n    grid-column: 2;\n    grid-row: 1;\n    overflow: hidden;\n    width: 100%;\n    /* stylelint-disable */\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1;\n    -ms-grid-row: 1;\n    /* stylelint-enable */\n  }\n"])), function (_ref11) {
  var theme = _ref11.theme;
  return theme.lineHeights.small;
}, _Label.Label, function (_ref12) {
  var theme = _ref12.theme,
      disabled = _ref12.disabled;
  return disabled && theme.colors.text1;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.fontSizes.small;
});
exports.FieldInline = FieldInline;
//# sourceMappingURL=FieldInline.js.map