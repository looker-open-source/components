"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSearch = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isControlled = (0, _utils.useControlWarn)({
    controllingProps: ['value'],
    isControlledCheck: function isControlledCheck() {
      return controlledValue !== undefined;
    },
    name: 'InputSearch'
  });

  var _useState = (0, _react.useState)(defaultValue || ''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
    updateValue(e.currentTarget.value);
  }

  function handleClose() {
    if (clearOnClose) {
      updateValue('');
    }
  }

  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);
  var windowing = (0, _useWindowedOptions.useShouldWindowOptions)(flatOptions, windowingProp);
  return _react["default"].createElement(_Combobox.Combobox, (0, _extends2["default"])({
    value: optionValue,
    onChange: handleChange,
    onClose: handleClose,
    openOnClick: false,
    width: autoResize ? 'auto' : '100%',
    display: autoResize ? 'inline-flex' : undefined
  }, (0, _ariaProps.omitAriaAndValidationProps)(props), {
    role: props.role
  }), _react["default"].createElement(_Combobox.ComboboxInput, (0, _extends2["default"])({}, ariaProps, {
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
  })), !disabled && ((options === null || options === void 0 ? void 0 : options.length) || noOptionsLabel) && _react["default"].createElement(_Combobox.ComboboxList, (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.InputSearch = InputSearch;
//# sourceMappingURL=InputSearch.js.map