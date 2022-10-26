"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectMulti = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ariaProps = require("../ariaProps");

var _Combobox = require("../Combobox");

var _SelectOptions = require("./SelectOptions");

var _options = require("./utils/options");

var _useFlatOptions2 = require("./utils/useFlatOptions");

var _useWindowedOptions = require("./utils/useWindowedOptions");

var _templateObject;

var _excluded = ["autoFocus", "closeOnSelect", "defaultValues", "disabled", "formatCreateLabel", "freeInput", "chipIconLabel", "clearIconLabel", "indicator", "isFilterable", "isLoading", "listLayout", "noOptionsLabel", "onChange", "onDuplicate", "onFilter", "onValidationFail", "noErrorIcon", "options", "placeholder", "removeOnBackspace", "showCreate", "formatInputValue", "validate", "values", "windowing"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectMultiComponent = (0, _react.forwardRef)(function (_ref, ref) {
  var autoFocus = _ref.autoFocus,
      _ref$closeOnSelect = _ref.closeOnSelect,
      closeOnSelect = _ref$closeOnSelect === void 0 ? false : _ref$closeOnSelect,
      defaultValues = _ref.defaultValues,
      disabled = _ref.disabled,
      formatCreateLabel = _ref.formatCreateLabel,
      _ref$freeInput = _ref.freeInput,
      freeInput = _ref$freeInput === void 0 ? false : _ref$freeInput,
      chipIconLabel = _ref.chipIconLabel,
      clearIconLabel = _ref.clearIconLabel,
      indicator = _ref.indicator,
      _ref$isFilterable = _ref.isFilterable,
      isFilterable = _ref$isFilterable === void 0 ? false : _ref$isFilterable,
      isLoading = _ref.isLoading,
      listLayout = _ref.listLayout,
      noOptionsLabel = _ref.noOptionsLabel,
      onChange = _ref.onChange,
      onDuplicate = _ref.onDuplicate,
      onFilter = _ref.onFilter,
      onValidationFail = _ref.onValidationFail,
      noErrorIcon = _ref.noErrorIcon,
      options = _ref.options,
      placeholder = _ref.placeholder,
      _ref$removeOnBackspac = _ref.removeOnBackspace,
      removeOnBackspace = _ref$removeOnBackspac === void 0 ? true : _ref$removeOnBackspac,
      _ref$showCreate = _ref.showCreate,
      showCreate = _ref$showCreate === void 0 ? false : _ref$showCreate,
      formatInputValue = _ref.formatInputValue,
      validate = _ref.validate,
      values = _ref.values,
      windowingProp = _ref.windowing,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useFlatOptions = (0, _useFlatOptions2.useFlatOptions)(options),
      flatOptions = _useFlatOptions.flatOptions,
      navigationOptions = _useFlatOptions.navigationOptions;

  var optionValues = (0, _options.getOptions)(values, navigationOptions);
  var defaultOptionValues = (0, _options.getOptions)(defaultValues, navigationOptions);

  function handleChange() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var newValues = options && options.map(function (option) {
      return option.value;
    });
    onChange && onChange(newValues);
  }

  function handleInputChange(value) {
    onFilter === null || onFilter === void 0 ? void 0 : onFilter(value);
  }

  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);
  var windowing = (0, _useWindowedOptions.useShouldWindowOptions)(flatOptions, windowingProp);
  return _react["default"].createElement(_Combobox.ComboboxMulti, (0, _extends2["default"])({}, (0, _ariaProps.omitAriaAndValidationProps)(props), {
    values: optionValues,
    defaultValues: defaultOptionValues,
    onChange: handleChange
  }), _react["default"].createElement(_Combobox.ComboboxMultiInput, (0, _extends2["default"])({}, ariaProps, {
    disabled: disabled,
    autoFocus: autoFocus,
    placeholder: placeholder,
    chipIconLabel: chipIconLabel,
    clearIconLabel: clearIconLabel,
    removeOnBackspace: removeOnBackspace,
    validationType: props.validationType,
    autoComplete: false,
    inputReadOnly: !isFilterable && !freeInput,
    onInputChange: handleInputChange,
    selectOnClick: isFilterable,
    freeInput: freeInput,
    validate: validate,
    formatInputValue: formatInputValue,
    noErrorIcon: noErrorIcon,
    onValidationFail: onValidationFail,
    onDuplicate: onDuplicate,
    ref: ref
  })), !disabled && _react["default"].createElement(_Combobox.ComboboxMultiList, (0, _extends2["default"])({
    persistSelection: true,
    closeOnSelect: closeOnSelect,
    windowing: windowing,
    indicator: indicator,
    "aria-busy": isLoading
  }, ariaProps, listLayout), _react["default"].createElement(_SelectOptions.SelectOptions, {
    isMulti: true,
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
SelectMultiComponent.displayName = 'SelectMultiComponent';
var SelectMulti = (0, _styledComponents["default"])(SelectMultiComponent).withConfig({
  displayName: "SelectMulti",
  componentId: "sc-176rl8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.SelectMulti = SelectMulti;
//# sourceMappingURL=SelectMulti.js.map