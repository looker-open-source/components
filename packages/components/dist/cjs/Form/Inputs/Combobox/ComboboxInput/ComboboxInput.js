"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comboboxStyles = exports.ComboboxInputInternal = exports.ComboboxInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../../../utils");
var _InputText = require("../../InputText");
var _AdvancedInputControls = require("../../AdvancedInputControls");
var _ComboboxContext = require("../ComboboxContext");
var _getComboboxText = require("../utils/getComboboxText");
var _makeHash = require("../utils/makeHash");
var _state = require("../utils/state");
var _useInputEvents = require("../utils/useInputEvents");
var _useInputPropRefs = require("../utils/useInputPropRefs");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["autoComplete", "disabled", "freeInput", "clearIconLabel", "inputReadOnly", "isClearable", "onChange", "noErrorIcon", "readOnly", "summary", "validationType", "value"],
  _excluded2 = ["selectOnClick"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ComboboxInputInternal = (0, _react.forwardRef)(function (props, forwardedRef) {
  var _props$autoComplete = props.autoComplete,
    autoComplete = _props$autoComplete === void 0 ? true : _props$autoComplete,
    disabled = props.disabled,
    freeInput = props.freeInput,
    clearIconLabel = props.clearIconLabel,
    _props$inputReadOnly = props.inputReadOnly,
    inputReadOnly = _props$inputReadOnly === void 0 ? false : _props$inputReadOnly,
    isClearable = props.isClearable,
    onChange = props.onChange,
    noErrorIcon = props.noErrorIcon,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    summary = props.summary,
    validationType = props.validationType,
    controlledValue = props.value,
    rest = _objectWithoutProperties(props, _excluded);
  var _useContext = (0, _react.useContext)(_ComboboxContext.ComboboxContext),
    _useContext$data = _useContext.data,
    navigationOption = _useContext$data.navigationOption,
    option = _useContext$data.option,
    contextInputValue = _useContext$data.inputValue,
    contextOnChange = _useContext.onChange,
    inputCallbackRef = _useContext.inputCallbackRef,
    inputElement = _useContext.inputElement,
    state = _useContext.state,
    transition = _useContext.transition,
    id = _useContext.id,
    isVisible = _useContext.isVisible;
  (0, _useInputPropRefs.useInputPropRefs)(props, _ComboboxContext.ComboboxContext);
  var ref = (0, _utils.useForkedRef)(inputCallbackRef, forwardedRef);
  var isControlled = controlledValue !== undefined;
  function handleClear() {
    contextOnChange && contextOnChange(undefined);
    transition && transition(_state.ComboboxActionType.CLEAR);
    inputElement === null || inputElement === void 0 ? void 0 : inputElement.focus();
  }
  function handleValueChange(value) {
    transition && transition(_state.ComboboxActionType.CHANGE, {
      inputValue: value
    });
  }
  var isInputting = (0, _react.useRef)(false);
  (0, _utils.useSafeLayoutEffect)(function () {
    if (controlledValue !== undefined) {
      if (isInputting.current) {
        handleValueChange(controlledValue);
      } else {
        transition && transition(_state.ComboboxActionType.CHANGE_SILENT, {
          inputValue: controlledValue
        });
      }
    }
  }, [controlledValue]);
  function handleChange(event) {
    isInputting.current = true;
    if (!isControlled) {
      handleValueChange(event.target.value);
    }
    requestAnimationFrame(function () {
      isInputting.current = false;
    });
  }
  var inputOption = contextInputValue !== undefined ? contextInputValue : option;
  if (autoComplete && (state === _state.ComboboxState.NAVIGATING || state === _state.ComboboxState.INTERACTING)) {
    inputOption = navigationOption || option;
  }
  var inputValue = controlledValue !== undefined ? controlledValue : (0, _getComboboxText.getComboboxText)(inputOption);
  var wrappedOnChange = (0, _utils.useWrapEvent)(handleChange, onChange);
  var inputEvents = (0, _useInputEvents.useInputEvents)(props, _ComboboxContext.ComboboxContext);
  var _selectOnClick = rest.selectOnClick,
    restForInputText = _objectWithoutProperties(rest, _excluded2);
  return _react["default"].createElement(_InputText.InputText, _extends({}, restForInputText, inputEvents, {
    disabled: disabled,
    after: _react["default"].createElement(_AdvancedInputControls.AdvancedInputControls, {
      disabled: disabled,
      clearIconLabel: clearIconLabel,
      isVisibleOptions: isVisible,
      onClear: handleClear,
      showCaret: !freeInput,
      showClear: !!(isClearable && inputValue) && !disabled && !readOnly,
      summary: summary,
      errorIcon: !noErrorIcon && validationType === 'error'
    }),
    ref: ref,
    value: inputValue,
    readOnly: inputReadOnly || readOnly,
    onChange: wrappedOnChange,
    id: "listbox-input-".concat(id),
    autoComplete: "off",
    "aria-autocomplete": "both",
    validationType: validationType,
    "aria-activedescendant": navigationOption ? String((0, _makeHash.makeHash)(navigationOption ? navigationOption.value : '')) : undefined
  }));
});
exports.ComboboxInputInternal = ComboboxInputInternal;
var comboboxStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var inputReadOnly = _ref.inputReadOnly;
  return inputReadOnly ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          cursor: default;\n          input {\n            cursor: default;\n          }\n        "]))) : '';
});
exports.comboboxStyles = comboboxStyles;
var ComboboxInput = (0, _styledComponents["default"])(ComboboxInputInternal).attrs(function (_ref2) {
  var _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? '100%' : _ref2$width;
  return {
    width: width
  };
}).withConfig({
  displayName: "ComboboxInput",
  componentId: "sc-1c0xkr8-0"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  flex-shrink: 0;\n"])), comboboxStyles);
exports.ComboboxInput = ComboboxInput;
//# sourceMappingURL=ComboboxInput.js.map