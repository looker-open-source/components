"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputColor = void 0;
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
    props = _objectWithoutProperties(_ref, _excluded);
  var initialColor = getColorFromText(value || defaultValue);
  var _useState = (0, _react.useState)(initialColor),
    _useState2 = _slicedToArray(_useState, 2),
    color = _useState2[0],
    setColor = _useState2[1];
  var _useState3 = (0, _react.useState)(value || defaultValue),
    _useState4 = _slicedToArray(_useState3, 2),
    inputTextValue = _useState4[0],
    setInputTextValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
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
  return _react["default"].createElement(_Combobox.Combobox, _extends({}, (0, _ariaProps.omitAriaAndValidationProps)(props), {
    onChange: handleClear
  }), _react["default"].createElement(_Combobox.ComboboxInput, _extends({
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
  }, ariaProps)), !disabled && !readOnly && _react["default"].createElement(_Combobox.ComboboxList, _extends({
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
var InputColor = (0, _styledComponents["default"])(InputColorInternal).withConfig({
  displayName: "InputColor",
  componentId: "sc-s77c8w-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.InputColor = InputColor;
//# sourceMappingURL=InputColor.js.map