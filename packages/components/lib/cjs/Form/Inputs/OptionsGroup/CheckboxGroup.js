"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _xor = _interopRequireDefault(require("lodash/xor"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Fieldset = require("../../Fieldset");

var _FieldCheckbox = require("../../Fields/FieldCheckbox");

var _height = require("../height");

var _templateObject;

var _excluded = ["autoFocus", "disabled", "inline", "name", "options", "defaultValue", "value", "onChange", "validationType"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getCheckedProps(optionValue, value, defaultValue) {
  var key = value ? 'checked' : 'defaultChecked';
  var valueToUse = value || defaultValue || [];
  return (0, _defineProperty2["default"])({}, key, valueToUse.includes(optionValue));
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
      rest = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
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
    return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, (0, _extends2["default"])({
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
  return _react["default"].createElement(_Fieldset.Fieldset, (0, _extends2["default"])({
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
  componentId: "sc-kl6hc5-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    ", "\n  }\n"])), _FieldCheckbox.FieldCheckbox, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? "line-height: ".concat(_height.inputHeight, ";") : '';
});
exports.CheckboxGroup = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map