"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateValues = exports.splitInputValue = exports.InputChips = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _InputChipsBase = require("./InputChipsBase");

var _excluded = ["values", "onChange", "chipIconLabel", "clearIconLabel", "inputValue", "onInputChange", "parseInputValue", "validate", "formatInputValue", "onValidationFail", "onDuplicate", "onBlur", "onKeyDown", "onPaste"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isControlled = (0, _utils.useControlWarn)({
    controllingProps: ['inputValue', 'onInputChange'],
    isControlledCheck: function isControlledCheck() {
      return controlledInputValue !== undefined && onInputChange !== undefined;
    },
    name: 'InputChips'
  });

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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

  var updateValues = function updateValues(newInputValue) {
    var inputValues = parseInputValue(newInputValue || inputValue);

    var _validateValues = validateValues(inputValues, values, validate, formatInputValue),
        duplicateValues = _validateValues.duplicateValues,
        invalidValues = _validateValues.invalidValues,
        unusedValues = _validateValues.unusedValues,
        validValues = _validateValues.validValues;

    var updatedInputValue = unusedValues.join(', ');
    var updatedValues = validValues.length && [].concat((0, _toConsumableArray2["default"])(values), (0, _toConsumableArray2["default"])(validValues));

    if (updatedValues) {
      onChange(updatedValues);
    }

    setInputValue(updatedInputValue);

    if (invalidValues.length > 0) {
      onValidationFail && onValidationFail(invalidValues);
    }

    if (duplicateValues.length > 0) {
      onDuplicate && onDuplicate(duplicateValues);
    }
  };

  var handleBlur = function handleBlur() {
    updateValues();
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateValues();
    }
  };

  var pastedValue = (0, _react.useRef)();

  var handlePaste = function handlePaste(e) {
    pastedValue.current = e.clipboardData.getData('Text');
  };

  var handleInputChange = function handleInputChange(value, event) {
    if (pastedValue.current || value.endsWith(',') && !value.endsWith('\\,')) {
      updateValues(pastedValue.current || value);
      pastedValue.current = null;
    } else {
      setInputValue(value, event);
    }
  };

  var wrappedEvents = {
    onBlur: (0, _utils.useWrapEvent)(handleBlur, onBlur),
    onKeyDown: (0, _utils.useWrapEvent)(handleKeyDown, onKeyDown),
    onPaste: (0, _utils.useWrapEvent)(handlePaste, onPaste)
  };
  return _react["default"].createElement(_InputChipsBase.InputChipsBase, (0, _extends2["default"])({
    ref: ref,
    values: values,
    onChange: onChange,
    chipIconLabel: chipIconLabel,
    clearIconLabel: clearIconLabel,
    inputValue: inputValue,
    onInputChange: handleInputChange
  }, wrappedEvents, props));
})).withConfig({
  displayName: "InputChips",
  componentId: "sc-6zpztz-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.InputChips = InputChips;
//# sourceMappingURL=InputChips.js.map