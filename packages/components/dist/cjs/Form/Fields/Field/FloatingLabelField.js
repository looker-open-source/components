"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingLabelField = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Layout = require("../../../Layout");
var _constants = require("../../constants");
var _Fieldset = require("../../../Fieldset");
var _Field = require("./Field");
var _FieldDetail = require("./FieldDetail");
var _FieldLabel = require("./FieldLabel");
var _HelperText = require("./HelperText");
var _InputArea = require("./InputArea");
var _useFloatingLabel2 = require("./useFloatingLabel");
var _excluded = ["className", "externalLabel"],
  _excluded2 = ["ariaLabelOnly", "children", "detail", "disabled", "hideLabel", "id", "inline", "label", "required", "labelOffset", "hasValue", "checkValueOnBlur"];
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var getLabelColor = function getLabelColor(isFocused, validationMessage) {
  if ((validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type) === 'error') return 'critical';
  if (isFocused) return 'key';
  return undefined;
};
var FloatingLabelField = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
    propsExternalLabel = _ref.externalLabel,
    props = _objectWithoutProperties(_ref, _excluded);
  var ariaLabelOnly = props.ariaLabelOnly,
    children = props.children,
    detail = props.detail,
    disabled = props.disabled,
    hideLabel = props.hideLabel,
    id = props.id,
    inline = props.inline,
    label = props.label,
    required = props.required,
    labelOffset = props.labelOffset,
    hasValue = props.hasValue,
    checkValueOnBlur = props.checkValueOnBlur,
    rest = _objectWithoutProperties(props, _excluded2);
  var _useFloatingLabel = (0, _useFloatingLabel2.useFloatingLabel)({
      checkValueOnBlur: checkValueOnBlur,
      hasValue: hasValue,
      labelOffset: labelOffset
    }),
    labelPositionClass = _useFloatingLabel.className,
    isFocused = _useFloatingLabel.isFocused,
    handlers = _useFloatingLabel.handlers,
    style = _useFloatingLabel.style;
  var _useTheme = (0, _styledComponents.useTheme)(),
    externalLabel = _useTheme.defaults.externalLabel;
  var _useContext = (0, _react.useContext)(_Fieldset.FieldsetContext),
    fieldsHideLabel = _useContext.fieldsHideLabel;
  if (externalLabel || propsExternalLabel || !label || hideLabel || fieldsHideLabel || inline) {
    return _react["default"].createElement(_Field.Field, _extends({}, props, {
      className: className
    }));
  }
  return _react["default"].createElement("div", {
    className: "".concat(className, " ").concat(labelPositionClass, " floating"),
    style: style,
    "data-disabled": disabled
  }, _react["default"].createElement(_InputArea.InputArea, handlers, children), _react["default"].createElement(_FieldLabel.FieldLabel, {
    ariaLabelOnly: ariaLabelOnly,
    id: id,
    label: label,
    hideLabel: hideLabel,
    required: required,
    fontWeight: "normal",
    color: getLabelColor(isFocused, props.validationMessage)
  }), _react["default"].createElement(_Layout.Space, {
    width: "auto",
    align: "start"
  }, _react["default"].createElement(_HelperText.HelperText, _extends({
    id: id
  }, rest)), detail && _react["default"].createElement(_FieldDetail.FieldDetail, {
    pt: "u2",
    color: "text2"
  }, detail)));
}).withConfig({
  displayName: "FloatingLabelField",
  componentId: "sc-1sw05so-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.floating {\n    display: ", ";\n    opacity: ", ";\n    /* Make the top border intersect the the middle of the label */\n    padding-top: calc(", " / 2);\n    position: relative;\n    width: ", ";\n    ", "\n\n    label {\n      background: ", ";\n      border-radius: ", ";\n      font-size: ", ";\n      /* Align with the input contents, compensate for left border */\n      left: calc(", " + 1px);\n      line-height: initial;\n      padding: 0 ", ";\n      position: absolute;\n      top: 0;\n      transition: ", "ms;\n    }\n    &.label-down {\n      label {\n        font-size: ", ";\n        pointer-events: none;\n        transform: translate(var(--label-translate, 0));\n      }\n      input::placeholder,\n      textarea::placeholder {\n        color: ", ";\n      }\n    }\n\n    & > ", " {\n      /* Align with the input contents, compensate for left border */\n      margin: 0 calc(", " + 1px);\n    }\n  }\n"])), function (_ref2) {
  var autoResize = _ref2.autoResize;
  return autoResize ? 'inline-block' : 'block';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? _constants.DISABLED_OPACITY : '1';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontSizes.xsmall;
}, function (_ref5) {
  var autoResize = _ref5.autoResize;
  return autoResize ? 'fit-content' : '100%';
}, _designTokens.width, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.field;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.radii.small;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSizes.xsmall;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.space.u2;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.space.u1;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.transitions.rapid;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSizes.small;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.field;
}, _Layout.Space, function (_ref14) {
  var theme = _ref14.theme;
  return theme.space.u3;
});
exports.FloatingLabelField = FloatingLabelField;
//# sourceMappingURL=FloatingLabelField.js.map