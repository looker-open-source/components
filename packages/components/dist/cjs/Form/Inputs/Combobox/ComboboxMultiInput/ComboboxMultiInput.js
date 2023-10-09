"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxMultiInputInternal = exports.ComboboxMultiInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../../utils");
var _InputChips = require("../../InputChips");
var _ComboboxContext = require("../ComboboxContext");
var _ComboboxInput = require("../ComboboxInput");
var _utils2 = require("../utils");
var _makeHash = require("../utils/makeHash");
var _state = require("../utils/state");
var _useInputEvents = require("../utils/useInputEvents");
var _useInputPropRefs = require("../utils/useInputPropRefs");
var _templateObject;
var _excluded = ["autoComplete", "inputReadOnly", "readOnly", "onClear", "onInputChange", "inputValue", "freeInput", "validate", "formatInputValue", "onValidationFail", "onDuplicate", "chipIconLabel", "clearIconLabel"],
  _excluded2 = ["selectOnClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    rest = _objectWithoutProperties(props, _excluded);
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
  var _selectOnClick = rest.selectOnClick,
    restForCommonProps = _objectWithoutProperties(rest, _excluded2);
  var commonProps = _objectSpread(_objectSpread(_objectSpread({}, restForCommonProps), inputEvents), {}, {
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
  return freeInput ? _react["default"].createElement(_InputChips.InputChips, _extends({}, commonProps, {
    validate: validate,
    formatInputValue: formatInputValue,
    onValidationFail: onValidationFail,
    onDuplicate: onDuplicate,
    parseInputValue: parseInputValue,
    ref: ref
  })) : _react["default"].createElement(_InputChips.InputChipsBase, _extends({}, commonProps, {
    ref: ref
  }));
});
exports.ComboboxMultiInputInternal = ComboboxMultiInputInternal;
var ComboboxMultiInput = (0, _styledComponents["default"])(ComboboxMultiInputInternal).attrs(function (_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width;
  return {
    width: width
  };
}).withConfig({
  displayName: "ComboboxMultiInput",
  componentId: "sc-149ct1j-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  padding-right: 0;\n"])), _ComboboxInput.comboboxStyles);
exports.ComboboxMultiInput = ComboboxMultiInput;
//# sourceMappingURL=ComboboxMultiInput.js.map