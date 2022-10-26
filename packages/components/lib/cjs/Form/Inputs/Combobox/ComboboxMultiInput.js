"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxMultiInputInternal = exports.ComboboxMultiInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _InputChips = require("../InputChips");

var _ComboboxContext = require("./ComboboxContext");

var _ComboboxInput = require("./ComboboxInput");

var _utils2 = require("./utils");

var _makeHash = require("./utils/makeHash");

var _state = require("./utils/state");

var _useInputEvents = require("./utils/useInputEvents");

var _useInputPropRefs = require("./utils/useInputPropRefs");

var _templateObject;

var _excluded = ["autoComplete", "inputReadOnly", "readOnly", "onClear", "onInputChange", "inputValue", "freeInput", "validate", "formatInputValue", "onValidationFail", "onDuplicate", "chipIconLabel", "clearIconLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function parseInputValue(value) {
  try {
    var parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.map(function (option) {
        return typeof option === 'string' ? option : JSON.stringify(option);
      });
    }

    return (0, _InputChips.splitInputValue)(value);
  } catch (e) {
    return (0, _InputChips.splitInputValue)(value);
  }
}

function formatTextToCopy(selectedValues) {
  var noJson = true;
  var jsonReadyValues = selectedValues.map(function (value) {
    try {
      JSON.parse(value);
      noJson = false;
      return value;
    } catch (e) {
      return "\"".concat(value, "\"");
    }
  });

  if (noJson) {
    return (0, _InputChips.joinValues)(selectedValues);
  }

  return "[".concat(jsonReadyValues.join(','), "]");
}

var ComboboxMultiInputInternal = (0, _react.forwardRef)(function (props, forwardedRef) {
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? true : _props$autoComplete,
      _props$inputReadOnly = props.inputReadOnly,
      inputReadOnly = _props$inputReadOnly === void 0 ? false : _props$inputReadOnly,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      onClear = props.onClear,
      onInputChange = props.onInputChange,
      controlledInputValue = props.inputValue,
      _props$freeInput = props.freeInput,
      freeInput = _props$freeInput === void 0 ? false : _props$freeInput,
      validate = props.validate,
      formatInputValue = props.formatInputValue,
      onValidationFail = props.onValidationFail,
      onDuplicate = props.onDuplicate,
      chipIconLabel = props.chipIconLabel,
      clearIconLabel = props.clearIconLabel,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useContext = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext),
      _useContext$data = _useContext.data,
      navigationOption = _useContext$data.navigationOption,
      options = _useContext$data.options,
      contextInputValue = _useContext$data.inputValue,
      contextOnChange = _useContext.onChange,
      inputCallbackRef = _useContext.inputCallbackRef,
      state = _useContext.state,
      transition = _useContext.transition,
      id = _useContext.id,
      isVisible = _useContext.isVisible;

  (0, _useInputPropRefs.useInputPropRefs)(props, _ComboboxContext.ComboboxMultiContext);

  function handleClear() {
    transition && transition(_state.ComboboxActionType.CLEAR);
    contextOnChange && contextOnChange([]);
    onClear && onClear();
  }

  function handleChange(values) {
    transition && transition(_state.ComboboxActionType.CHANGE_VALUES, {
      inputValues: values
    });
    var newOptions = (0, _state.getOptionsFromValues)(options, values);
    contextOnChange && contextOnChange(newOptions);
  }

  var isInputting = (0, _react.useRef)(false);
  var handleInputValueChange = (0, _react.useCallback)(function (value) {
    var action = isInputting.current ? _state.ComboboxActionType.CHANGE : _state.ComboboxActionType.CHANGE_SILENT;
    transition === null || transition === void 0 ? void 0 : transition(action, {
      inputValue: value
    });
  }, [transition]);
  var latestInputValueRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (contextInputValue !== undefined && contextInputValue !== latestInputValueRef.current) {
      onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(contextInputValue);
      latestInputValueRef.current = contextInputValue;
    }
  }, [contextInputValue]);
  (0, _react.useEffect)(function () {
    if (controlledInputValue !== undefined) {
      handleInputValueChange(controlledInputValue);
      latestInputValueRef.current = controlledInputValue;
    }
  }, [controlledInputValue]);
  var isControlled = controlledInputValue !== undefined;
  var handleInputChange = (0, _react.useCallback)(function (value, event) {
    isInputting.current = event !== undefined;

    if (!isControlled) {
      handleInputValueChange(value);
    }

    requestAnimationFrame(function () {
      isInputting.current = false;
    });
  }, [handleInputValueChange, isControlled]);
  var inputValues = options.map(_utils2.formatOptionAsString);
  var inputValue = contextInputValue || '';

  if (autoComplete && (state === _state.ComboboxState.NAVIGATING || state === _state.ComboboxState.INTERACTING) && navigationOption) {
    inputValue = (0, _utils2.getComboboxText)(navigationOption);
  }

  var wrappedOnInputChange = (0, _react.useCallback)(function (value, event) {
    handleInputChange(value, event);
    onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(value, event);
    latestInputValueRef.current = value;
  }, [handleInputChange, onInputChange]);
  var inputEvents = (0, _useInputEvents.useInputEvents)(props, _ComboboxContext.ComboboxMultiContext);

  function formatChip(value) {
    var option = (0, _utils2.parseOption)(value);
    return option.label || option.value;
  }

  var commonProps = _objectSpread(_objectSpread(_objectSpread({}, (0, _omit["default"])(rest, 'selectOnClick')), inputEvents), {}, {
    'aria-activedescendant': navigationOption ? String((0, _makeHash.makeHash)(navigationOption ? navigationOption.value : '')) : undefined,
    'aria-autocomplete': 'both',
    autoComplete: 'off',
    chipIconLabel: chipIconLabel,
    clearIconLabel: clearIconLabel,
    formatChip: formatChip,
    formatTextToCopy: formatTextToCopy,
    id: "listbox-input-".concat(id),
    inputReadOnly: inputReadOnly,
    inputValue: inputValue,
    isVisibleOptions: isVisible,
    onChange: handleChange,
    onClear: handleClear,
    onInputChange: wrappedOnInputChange,
    readOnly: readOnly,
    showCaret: true,
    values: inputValues
  });

  var ref = (0, _utils.useForkedRef)(inputCallbackRef, forwardedRef);
  return freeInput ? _react["default"].createElement(_InputChips.InputChips, (0, _extends2["default"])({}, commonProps, {
    validate: validate,
    formatInputValue: formatInputValue,
    onValidationFail: onValidationFail,
    onDuplicate: onDuplicate,
    parseInputValue: parseInputValue,
    ref: ref
  })) : _react["default"].createElement(_InputChips.InputChipsBase, (0, _extends2["default"])({}, commonProps, {
    ref: ref
  }));
});
exports.ComboboxMultiInputInternal = ComboboxMultiInputInternal;
ComboboxMultiInputInternal.displayName = 'ComboboxMultiInputInternal';
var ComboboxMultiInput = (0, _styledComponents["default"])(ComboboxMultiInputInternal).attrs(function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width;
  return {
    width: width
  };
}).withConfig({
  displayName: "ComboboxMultiInput",
  componentId: "sc-17k5d0g-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  padding-right: 0;\n"])), _ComboboxInput.comboboxStyles);
exports.ComboboxMultiInput = ComboboxMultiInput;
//# sourceMappingURL=ComboboxMultiInput.js.map