"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Fieldset = require("../../Fieldset");

var _FieldRadio = require("../../Fields/FieldRadio");

var _height = require("../height");

var _templateObject;

var _excluded = ["autoFocus", "defaultValue", "disabled", "inline", "name", "onChange", "options", "validationType", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getCheckedProps(optionValue, isControlled, value, defaultValue) {
  var key = isControlled ? 'checked' : 'defaultChecked';
  var valueToUse = isControlled ? value : defaultValue;
  return (0, _defineProperty2["default"])({}, key, valueToUse === optionValue);
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
      rest = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
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
    return _react["default"].createElement(_FieldRadio.FieldRadio, (0, _extends2["default"])({
      detail: option.detail,
      disabled: option.disabled || disabled,
      key: option.value,
      label: option.label,
      name: name,
      onChange: getChangeHandler(option.value),
      validationType: validationType
    }, checkedProps, autoFocusProps));
  });
  return _react["default"].createElement(_Fieldset.Fieldset, (0, _extends2["default"])({
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
  componentId: "sc-x72kee-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    ", "\n  }\n"])), _FieldRadio.FieldRadio, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? "line-height: ".concat(_height.inputHeight, ";") : '';
});
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map