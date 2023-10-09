"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;
var _xor = _interopRequireDefault(require("lodash/xor"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _Fieldset = require("../../../Fieldset");
var _FieldCheckbox = require("../../Fields/FieldCheckbox");
var _height = require("../height");
var _templateObject;
var _excluded = ["autoFocus", "disabled", "inline", "name", "options", "defaultValue", "value", "onChange", "validationType"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getCheckedProps(optionValue, value, defaultValue) {
  var key = value ? 'checked' : 'defaultChecked';
  var valueToUse = value || defaultValue || [];
  return _defineProperty({}, key, valueToUse.includes(optionValue));
}
var CheckboxGroupLayout = (0, _react.forwardRef)(function (_ref2, ref) {
  var autoFocus = _ref2.autoFocus,
    disabled = _ref2.disabled,
    inline = _ref2.inline,
    propsName = _ref2.name,
    options = _ref2.options,
    _ref2$defaultValue = _ref2.defaultValue,
    defaultValue = _ref2$defaultValue === void 0 ? [] : _ref2$defaultValue,
    value = _ref2.value,
    onChange = _ref2.onChange,
    validationType = _ref2.validationType,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var name = (0, _utils.useID)(propsName);
  var uncontrolledValueRef = (0, _react.useRef)(defaultValue);
  var getChangeHandler = (0, _react.useCallback)(function (optionValue) {
    return onChange ? function () {
      var oldValue = value || uncontrolledValueRef.current;
      var newValue = (0, _xor["default"])(oldValue, [optionValue]);
      onChange(newValue);
      uncontrolledValueRef.current = newValue;
    } : undefined;
  }, [onChange, value]);
  var checkboxes = options.map(function (option, index) {
    var checkedProps = getCheckedProps(option.value, value, defaultValue);
    var autoFocusProps = index === 0 && autoFocus ? {
      autoFocus: autoFocus
    } : {};
    var handleChange = getChangeHandler(option.value);
    return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, _extends({
      onChange: handleChange,
      disabled: option.disabled || disabled,
      key: option.value,
      label: option.label,
      detail: option.detail,
      name: name,
      validationType: validationType,
      value: option.value
    }, checkedProps, autoFocusProps));
  });
  return _react["default"].createElement(_Fieldset.Fieldset, _extends({
    "data-testid": "checkbox-list",
    inline: inline,
    wrap: inline,
    gap: !inline ? 'u1' : undefined,
    width: inline ? 'auto' : undefined,
    ref: ref
  }, rest), checkboxes);
});
CheckboxGroupLayout.displayName = 'CheckboxGroupLayout';
var CheckboxGroup = (0, _styledComponents["default"])(CheckboxGroupLayout).withConfig({
  displayName: "CheckboxGroup",
  componentId: "sc-ojzo2z-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", " {\n    ", "\n  }\n"])), _FieldCheckbox.FieldCheckbox, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? "line-height: ".concat(_height.inputHeight, ";") : '';
});
exports.CheckboxGroup = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map