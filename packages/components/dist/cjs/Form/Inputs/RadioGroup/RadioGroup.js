"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _Fieldset = require("../../../Fieldset");
var _FieldRadio = require("../../Fields/FieldRadio");
var _height = require("../height");
var _templateObject;
var _excluded = ["autoFocus", "defaultValue", "disabled", "inline", "name", "onChange", "options", "validationType", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getCheckedProps(optionValue, isControlled, value, defaultValue) {
  var key = isControlled ? 'checked' : 'defaultChecked';
  var valueToUse = isControlled ? value : defaultValue;
  return _defineProperty({}, key, valueToUse === optionValue);
}
var RadioGroupLayout = (0, _react.forwardRef)(function (_ref2, ref) {
  var autoFocus = _ref2.autoFocus,
    defaultValue = _ref2.defaultValue,
    disabled = _ref2.disabled,
    inline = _ref2.inline,
    propsName = _ref2.name,
    onChange = _ref2.onChange,
    options = _ref2.options,
    validationType = _ref2.validationType,
    value = _ref2.value,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var name = (0, _utils.useID)(propsName);
  var isControlled = onChange !== undefined && defaultValue === undefined;
  var getChangeHandler = (0, _react.useCallback)(function (optionValue) {
    return onChange ? function () {
      return onChange(optionValue);
    } : undefined;
  }, [onChange]);
  var radios = options.map(function (option, index) {
    var checkedProps = getCheckedProps(option.value, isControlled, value, defaultValue);
    var autoFocusProps = index === 0 && autoFocus ? {
      autoFocus: autoFocus
    } : {};
    return _react["default"].createElement(_FieldRadio.FieldRadio, _extends({
      detail: option.detail,
      disabled: option.disabled || disabled,
      key: option.value,
      label: option.label,
      name: name,
      onChange: getChangeHandler(option.value),
      validationType: validationType
    }, checkedProps, autoFocusProps));
  });
  return _react["default"].createElement(_Fieldset.Fieldset, _extends({
    "data-testid": "radio-list",
    role: "radiogroup",
    inline: inline,
    wrap: inline,
    gap: !inline ? 'u1' : undefined,
    width: inline ? 'auto' : undefined,
    ref: ref
  }, rest), radios);
});
RadioGroupLayout.displayName = 'RadioGroupLayout';
var RadioGroup = (0, _styledComponents["default"])(RadioGroupLayout).withConfig({
  displayName: "RadioGroup",
  componentId: "sc-1ekc4ms-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", " {\n    ", "\n  }\n"])), _FieldRadio.FieldRadio, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? "line-height: ".concat(_height.inputHeight, ";") : '';
});
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map