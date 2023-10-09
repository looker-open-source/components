"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ariaProps = require("../ariaProps");
var _Combobox = require("../Combobox");
var _SelectOptions = require("./SelectOptions");
var _SelectInputIcon = require("./SelectInputIcon");
var _options = require("./utils/options");
var _useFlatOptions2 = require("./utils/useFlatOptions");
var _useWindowedOptions = require("./utils/useWindowedOptions");
var _templateObject;
var _excluded = ["options", "disabled", "autoFocus", "isFilterable", "isClearable", "placeholder", "name", "onFilter", "onChange", "value", "defaultValue", "noOptionsLabel", "indicator", "listLayout", "autoResize", "windowing", "showCreate", "formatCreateLabel", "isLoading", "noErrorIcon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SelectComponent = (0, _react.forwardRef)(function (_ref, ref) {
  var options = _ref.options,
    disabled = _ref.disabled,
    autoFocus = _ref.autoFocus,
    isFilterable = _ref.isFilterable,
    isClearable = _ref.isClearable,
    placeholder = _ref.placeholder,
    name = _ref.name,
    onFilter = _ref.onFilter,
    onChange = _ref.onChange,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    noOptionsLabel = _ref.noOptionsLabel,
    indicator = _ref.indicator,
    listLayout = _ref.listLayout,
    autoResize = _ref.autoResize,
    windowingProp = _ref.windowing,
    _ref$showCreate = _ref.showCreate,
    showCreate = _ref$showCreate === void 0 ? false : _ref$showCreate,
    formatCreateLabel = _ref.formatCreateLabel,
    isLoading = _ref.isLoading,
    noErrorIcon = _ref.noErrorIcon,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useFlatOptions = (0, _useFlatOptions2.useFlatOptions)(options),
    flatOptions = _useFlatOptions.flatOptions,
    navigationOptions = _useFlatOptions.navigationOptions;
  var optionValue = (0, _options.getOption)(value, navigationOptions);
  var nullDefault = (isClearable || placeholder) && !defaultValue;
  var defaultOptionValue = nullDefault ? undefined : (0, _options.getOption)(defaultValue, navigationOptions) || options && (0, _options.getFirstOption)(options);
  function handleChange(option) {
    var newValue = option ? option.value : '';
    onChange && onChange(newValue);
    onFilter && onFilter('');
  }
  function handleInputChange(e) {
    onFilter && onFilter(e.target.value);
  }
  function handleClose() {
    onFilter && onFilter('');
  }
  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);
  var windowing = (0, _useWindowedOptions.useShouldWindowOptions)(flatOptions, windowingProp);
  return _react["default"].createElement(_Combobox.Combobox, _extends({
    value: optionValue,
    defaultValue: defaultOptionValue,
    onChange: handleChange,
    onClose: handleClose,
    width: autoResize ? 'auto' : '100%',
    display: autoResize ? 'inline-flex' : undefined,
    wrapperAriaLabel: props.wrapperAriaLabel
  }, (0, _ariaProps.omitAriaAndValidationProps)(props)), _react["default"].createElement(_Combobox.ComboboxInput, _extends({}, ariaProps, {
    before: _react["default"].createElement(_SelectInputIcon.SelectInputIcon, {
      options: navigationOptions
    }),
    disabled: disabled,
    autoFocus: autoFocus,
    placeholder: placeholder,
    name: name,
    noErrorIcon: noErrorIcon,
    validationType: props.validationType,
    isClearable: isClearable,
    autoComplete: false,
    autoResize: autoResize,
    inputReadOnly: !isFilterable,
    onChange: handleInputChange,
    selectOnClick: isFilterable,
    ref: ref
  })), !disabled && _react["default"].createElement(_Combobox.ComboboxList, _extends({
    persistSelection: true,
    windowing: windowing,
    indicator: indicator,
    width: autoResize ? 'auto' : undefined,
    "aria-busy": isLoading
  }, ariaProps, listLayout), _react["default"].createElement(_SelectOptions.SelectOptions, {
    flatOptions: flatOptions,
    navigationOptions: navigationOptions,
    windowing: windowing,
    isFilterable: isFilterable,
    noOptionsLabel: noOptionsLabel,
    showCreate: showCreate,
    formatCreateLabel: formatCreateLabel,
    isLoading: isLoading
  })));
});
SelectComponent.displayName = 'SelectComponent';
var Select = (0, _styledComponents["default"])(SelectComponent).withConfig({
  displayName: "Select",
  componentId: "sc-1grg5v4-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Select = Select;
//# sourceMappingURL=Select.js.map