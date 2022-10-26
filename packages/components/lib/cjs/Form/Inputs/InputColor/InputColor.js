"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputColor = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Popover = require("../../../Popover");

var _Combobox = require("../Combobox");

var _ariaProps = require("../ariaProps");

var _Swatch = require("./Swatch");

var _utils2 = require("./utils");

var _ColorPicker = require("./ColorPicker");

var _dimensions = require("./dimensions");

var _templateObject;

var _excluded = ["hideInput", "id", "name", "onChange", "onFocus", "onBlur", "placeholder", "value", "defaultValue", "disabled", "readOnly", "validationType"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var createEventWithHSVValue = function createEventWithHSVValue(color, name) {
  return {
    currentTarget: {
      name: name,
      value: typeof color === 'string' ? color : (0, _utils2.simpleHsvToHex)(color)
    },
    target: {
      name: name,
      value: typeof color === 'string' ? color : (0, _utils2.simpleHsvToHex)(color)
    }
  };
};

function getColorFromText(text) {
  return text && (0, _utils2.isValidColor)(text) ? (0, _utils2.stringToSimpleHsv)(text) : undefined;
}

var InputColorInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var hideInput = _ref.hideInput,
      id = _ref.id,
      name = _ref.name,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      placeholder = _ref.placeholder,
      value = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      validationType = _ref.validationType,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var initialColor = getColorFromText(value || defaultValue);

  var _useState = (0, _react.useState)(initialColor),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = (0, _react.useState)(value || defaultValue),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      inputTextValue = _useState4[0],
      setInputTextValue = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isFocused = _useState6[0],
      setIsFocused = _useState6[1];

  var handleFocus = function handleFocus() {
    return setIsFocused(true);
  };

  var handleBlur = function handleBlur() {
    return setIsFocused(false);
  };

  var wrappedOnFocus = (0, _utils.useWrapEvent)(handleFocus, onFocus);
  var wrappedOnBlur = (0, _utils.useWrapEvent)(handleBlur, onBlur);
  (0, _react.useEffect)(function () {
    if (value && value !== inputTextValue) {
      setColor((0, _utils2.stringToSimpleHsv)(value));
      !isFocused && setInputTextValue(value);
    }
  }, [isFocused, value, inputTextValue]);

  var callOnChange = function callOnChange(newColor) {
    onChange === null || onChange === void 0 ? void 0 : onChange(createEventWithHSVValue(newColor, name));
  };

  var setColorState = function setColorState(newColor) {
    setColor(newColor);
    var newTextValue = newColor ? (0, _utils2.simpleHsvToHex)(newColor) : '';
    setInputTextValue(newTextValue);
    callOnChange(newColor || '');
  };

  var handleInputTextChange = function handleInputTextChange(e) {
    var newValue = e.currentTarget.value;
    setInputTextValue(newValue);
    var isValid = (0, _utils2.isValidColor)(newValue) || newValue === '';

    if (isValid) {
      callOnChange(newValue);
    }

    setColor(getColorFromText(newValue));
  };

  var handleClear = function handleClear(value) {
    if (!value) {
      setColorState();
    }
  };

  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);
  return _react["default"].createElement(_Combobox.Combobox, (0, _extends2["default"])({}, (0, _ariaProps.omitAriaAndValidationProps)(props), {
    onChange: handleClear
  }), _react["default"].createElement(_Combobox.ComboboxInput, (0, _extends2["default"])({
    before: _react["default"].createElement(_Swatch.Swatch, {
      color: color ? (0, _utils2.hsvToHex)(color) : undefined,
      disabled: disabled,
      readOnly: readOnly,
      ml: "u2"
    }),
    "aria-describedby": "describedby-".concat(id),
    ref: ref,
    disabled: disabled,
    readOnly: readOnly,
    validationType: validationType,
    onChange: handleInputTextChange,
    value: inputTextValue,
    onFocus: wrappedOnFocus,
    onBlur: wrappedOnBlur,
    placeholder: placeholder,
    isClearable: true
  }, ariaProps)), !disabled && !readOnly && _react["default"].createElement(_Combobox.ComboboxList, (0, _extends2["default"])({
    width: "fit-content"
  }, ariaProps), _react["default"].createElement(_Popover.PopoverLayout, null, _react["default"].createElement(_ColorPicker.ColorPicker, {
    hsv: color || {
      h: 0,
      s: 1,
      v: 1
    },
    setHsv: setColorState,
    width: _dimensions.DEFAULT_INPUT_COLOR_WIDTH
  }))));
});
InputColorInternal.displayName = 'InputColorInternal';
var InputColor = (0, _styledComponents["default"])(InputColorInternal).withConfig({
  displayName: "InputColor",
  componentId: "sc-s77c8w-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.InputColor = InputColor;
//# sourceMappingURL=InputColor.js.map