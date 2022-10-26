"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

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
    onFilter && onFilter(e.currentTarget.value);
  }

  function handleClose() {
    onFilter && onFilter('');
  }

  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);
  var windowing = (0, _useWindowedOptions.useShouldWindowOptions)(flatOptions, windowingProp);
  return _react["default"].createElement(_Combobox.Combobox, (0, _extends2["default"])({
    value: optionValue,
    defaultValue: defaultOptionValue,
    onChange: handleChange,
    onClose: handleClose,
    width: autoResize ? 'auto' : '100%',
    display: autoResize ? 'inline-flex' : undefined,
    wrapperAriaLabel: props.wrapperAriaLabel
  }, (0, _ariaProps.omitAriaAndValidationProps)(props)), _react["default"].createElement(_Combobox.ComboboxInput, (0, _extends2["default"])({}, ariaProps, {
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
  })), !disabled && _react["default"].createElement(_Combobox.ComboboxList, (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.Select = Select;
//# sourceMappingURL=Select.js.map