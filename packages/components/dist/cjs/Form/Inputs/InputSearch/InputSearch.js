"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSearch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Search = require("@styled-icons/material-outlined/Search");
var _utils = require("../../../utils");
var _Combobox = require("../Combobox");
var _Select = require("../Select");
var _ariaProps = require("../ariaProps");
var _options = require("../Select/utils/options");
var _useWindowedOptions = require("../Select/utils/useWindowedOptions");
var _useFlatOptions2 = require("../Select/utils/useFlatOptions");
var _templateObject;
var _excluded = ["autoResize", "autoFocus", "changeOnSelect", "clearOnClose", "defaultValue", "disabled", "hideSearchIcon", "clearIconLabel", "indicator", "isClearable", "isLoading", "listLayout", "name", "noOptionsLabel", "onChange", "onSelectOption", "options", "placeholder", "readOnly", "summary", "value", "windowing"];
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
var InputSearchLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var autoResize = _ref.autoResize,
    autoFocus = _ref.autoFocus,
    _ref$changeOnSelect = _ref.changeOnSelect,
    changeOnSelect = _ref$changeOnSelect === void 0 ? true : _ref$changeOnSelect,
    _ref$clearOnClose = _ref.clearOnClose,
    clearOnClose = _ref$clearOnClose === void 0 ? !changeOnSelect : _ref$clearOnClose,
    defaultValue = _ref.defaultValue,
    disabled = _ref.disabled,
    hideSearchIcon = _ref.hideSearchIcon,
    clearIconLabel = _ref.clearIconLabel,
    indicator = _ref.indicator,
    _ref$isClearable = _ref.isClearable,
    isClearable = _ref$isClearable === void 0 ? true : _ref$isClearable,
    isLoading = _ref.isLoading,
    listLayout = _ref.listLayout,
    name = _ref.name,
    noOptionsLabel = _ref.noOptionsLabel,
    onChange = _ref.onChange,
    onSelectOption = _ref.onSelectOption,
    options = _ref.options,
    placeholder = _ref.placeholder,
    readOnly = _ref.readOnly,
    summary = _ref.summary,
    controlledValue = _ref.value,
    windowingProp = _ref.windowing,
    props = _objectWithoutProperties(_ref, _excluded);
  var isControlled = (0, _utils.useControlWarn)({
    controllingProps: ['value'],
    isControlledCheck: function isControlledCheck() {
      return controlledValue !== undefined;
    },
    name: 'InputSearch'
  });
  var _useState = (0, _react.useState)(defaultValue || ''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueToUse = isControlled ? controlledValue : value;
  var _useFlatOptions = (0, _useFlatOptions2.useFlatOptions)(options),
    flatOptions = _useFlatOptions.flatOptions,
    navigationOptions = _useFlatOptions.navigationOptions;
  var matchingOption = (0, _options.getMatchingOption)(valueToUse, navigationOptions);
  var optionValue = matchingOption || {
    value: ''
  };
  function updateValue(newValue) {
    if (onChange) {
      onChange(newValue);
    }
    if (!isControlled) {
      setValue(newValue);
    }
  }
  function handleChange(option) {
    onSelectOption && onSelectOption(option);
    if (changeOnSelect) {
      updateValue((option === null || option === void 0 ? void 0 : option.value) || '');
    }
  }
  function handleInputChange(e) {
    updateValue(e.target.value);
  }
  function handleClose() {
    if (clearOnClose) {
      updateValue('');
    }
  }
  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);
  var windowing = (0, _useWindowedOptions.useShouldWindowOptions)(flatOptions, windowingProp);
  return _react["default"].createElement(_Combobox.Combobox, _extends({
    value: optionValue,
    onChange: handleChange,
    onClose: handleClose,
    openOnClick: false,
    width: autoResize ? 'auto' : '100%',
    display: autoResize ? 'inline-flex' : undefined
  }, (0, _ariaProps.omitAriaAndValidationProps)(props), {
    role: props.role
  }), _react["default"].createElement(_Combobox.ComboboxInput, _extends({}, ariaProps, {
    autoComplete: false,
    autoFocus: autoFocus,
    autoResize: autoResize,
    disabled: disabled,
    freeInput: true,
    iconBefore: hideSearchIcon ? undefined : _react["default"].createElement(_Search.Search, {
      "data-testid": "search-icon"
    }),
    clearIconLabel: clearIconLabel,
    name: name,
    isClearable: isClearable,
    onChange: handleInputChange,
    placeholder: placeholder,
    readOnly: readOnly,
    ref: ref,
    summary: summary,
    validationType: props.validationType,
    value: valueToUse
  })), !disabled && ((options === null || options === void 0 ? void 0 : options.length) || noOptionsLabel) && _react["default"].createElement(_Combobox.ComboboxList, _extends({
    persistSelection: true,
    windowing: windowing,
    indicator: indicator,
    width: autoResize ? 'auto' : undefined,
    "aria-busy": isLoading
  }, ariaProps, listLayout), _react["default"].createElement(_Select.SelectOptions, {
    flatOptions: flatOptions,
    navigationOptions: navigationOptions,
    windowing: windowing,
    isFilterable: true,
    noOptionsLabel: noOptionsLabel,
    isLoading: isLoading
  })));
});
InputSearchLayout.displayName = 'InputSearch';
var InputSearch = (0, _styledComponents["default"])(InputSearchLayout).withConfig({
  displayName: "InputSearch",
  componentId: "sc-c2e1s0-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.InputSearch = InputSearch;
//# sourceMappingURL=InputSearch.js.map