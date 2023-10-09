"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateValues = exports.splitInputValue = exports.InputChips = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _InputChipsBase = require("./InputChipsBase");
var _excluded = ["values", "onChange", "chipIconLabel", "clearIconLabel", "inputValue", "onInputChange", "parseInputValue", "validate", "formatInputValue", "onValidationFail", "onDuplicate", "onBlur", "onKeyDown", "onPaste"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var splitInputValue = function splitInputValue(inputValue) {
  var commaKey = '0UX1bJKsFBFQonIIXq9oyeV40ITHwtew';
  var tabKey = 'heF6X4qMBtIti8c8U9nMhskYOQUQiXqx';
  var removedEscapes = inputValue.replace(/\\,/g, commaKey).replace(/\\\t/g, tabKey);
  var splitRegexp = "[,\\t\\n\\r]+";
  return removedEscapes.split(new RegExp(splitRegexp)).map(function (value) {
    return value.replace(new RegExp(commaKey, 'g'), ',').replace(new RegExp(tabKey, 'g'), '\t');
  });
};
exports.splitInputValue = splitInputValue;
var validateValues = function validateValues(newValues, currentValues, validate, formatInputValue) {
  var duplicateValues = [];
  var invalidValues = [];
  var unusedValues = [];
  var validValues = [];
  newValues.forEach(function (val) {
    var formattedValue = formatInputValue ? formatInputValue(val) : val;
    if (formattedValue === '') return;
    if (validate && !validate(formattedValue)) {
      unusedValues.push(formattedValue);
      return invalidValues.push(formattedValue);
    } else if (currentValues && currentValues.includes(formattedValue)) {
      unusedValues.push(formattedValue);
      return duplicateValues.push(formattedValue);
    } else {
      return validValues.push(formattedValue);
    }
  });
  return {
    duplicateValues: duplicateValues,
    invalidValues: invalidValues,
    unusedValues: unusedValues,
    validValues: validValues
  };
};
exports.validateValues = validateValues;
var trimValue = function trimValue(value) {
  return value.trim();
};
var InputChips = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref, ref) {
  var values = _ref.values,
    onChange = _ref.onChange,
    chipIconLabel = _ref.chipIconLabel,
    clearIconLabel = _ref.clearIconLabel,
    controlledInputValue = _ref.inputValue,
    onInputChange = _ref.onInputChange,
    _ref$parseInputValue = _ref.parseInputValue,
    parseInputValue = _ref$parseInputValue === void 0 ? splitInputValue : _ref$parseInputValue,
    validate = _ref.validate,
    _ref$formatInputValue = _ref.formatInputValue,
    formatInputValue = _ref$formatInputValue === void 0 ? trimValue : _ref$formatInputValue,
    onValidationFail = _ref.onValidationFail,
    onDuplicate = _ref.onDuplicate,
    onBlur = _ref.onBlur,
    onKeyDown = _ref.onKeyDown,
    onPaste = _ref.onPaste,
    props = _objectWithoutProperties(_ref, _excluded);
  var isControlled = (0, _utils.useControlWarn)({
    controllingProps: ['inputValue', 'onInputChange'],
    isControlledCheck: function isControlledCheck() {
      return controlledInputValue !== undefined && onInputChange !== undefined;
    },
    name: 'InputChips'
  });
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    uncontrolledValue = _useState2[0],
    setUncontrolledValue = _useState2[1];
  var inputValue = isControlled ? controlledInputValue || '' : uncontrolledValue;
  var setInputValue = function setInputValue(val, event) {
    if (!isControlled) {
      setUncontrolledValue(val);
    }
    if (val !== inputValue) {
      onInputChange && onInputChange(val, event);
    }
  };
  var getUpdatedValues = function getUpdatedValues(newInputValue) {
    var inputValues = parseInputValue(newInputValue || inputValue);
    var _validateValues = validateValues(inputValues, values, validate, formatInputValue),
      duplicateValues = _validateValues.duplicateValues,
      invalidValues = _validateValues.invalidValues,
      unusedValues = _validateValues.unusedValues,
      validValues = _validateValues.validValues;
    var updatedInputValue = unusedValues.join(', ');
    var newValues = validValues.length > 0 && [].concat(_toConsumableArray(values), _toConsumableArray(validValues));
    return {
      duplicateValues: duplicateValues,
      invalidValues: invalidValues,
      newValues: newValues,
      updatedInputValue: updatedInputValue
    };
  };
  var updateValues = function updateValues(_ref2) {
    var duplicateValues = _ref2.duplicateValues,
      invalidValues = _ref2.invalidValues,
      newValues = _ref2.newValues,
      updatedInputValue = _ref2.updatedInputValue;
    if (newValues) {
      onChange(newValues);
    }
    setInputValue(updatedInputValue);
    if (invalidValues.length > 0) {
      onValidationFail && onValidationFail(invalidValues);
    }
    if (duplicateValues.length > 0) {
      onDuplicate && onDuplicate(duplicateValues);
    }
  };
  var handleBlur = function handleBlur(e) {
    var updatedValues = getUpdatedValues();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e, updatedValues.newValues || []);
    if (!e.defaultPrevented) {
      updateValues(updatedValues);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateValues(getUpdatedValues());
    }
  };
  var pastedValue = (0, _react.useRef)();
  var handlePaste = function handlePaste(e) {
    pastedValue.current = e.clipboardData.getData('Text');
  };
  var handleInputChange = function handleInputChange(value, event) {
    if (pastedValue.current || value.endsWith(',') && !value.endsWith('\\,')) {
      updateValues(getUpdatedValues(pastedValue.current || value));
      pastedValue.current = null;
    } else {
      setInputValue(value, event);
    }
  };
  var wrappedEvents = {
    onKeyDown: (0, _utils.useWrapEvent)(handleKeyDown, onKeyDown),
    onPaste: (0, _utils.useWrapEvent)(handlePaste, onPaste)
  };
  return _react["default"].createElement(_InputChipsBase.InputChipsBase, _extends({
    ref: ref,
    values: values,
    onChange: onChange,
    chipIconLabel: chipIconLabel,
    clearIconLabel: clearIconLabel,
    inputValue: inputValue,
    onInputChange: handleInputChange,
    onBlur: handleBlur
  }, wrappedEvents, props));
})).withConfig({
  displayName: "InputChips",
  componentId: "sc-6zpztz-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.InputChips = InputChips;
//# sourceMappingURL=InputChips.js.map