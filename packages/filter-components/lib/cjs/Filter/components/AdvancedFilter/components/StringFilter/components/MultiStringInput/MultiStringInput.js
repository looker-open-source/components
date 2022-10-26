"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiStringInputLayout = exports.MultiStringInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _components = require("@looker/components");

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filter_styles = require("../../../../../../utils/filter_styles");

var _option_utils = require("../../../../../../utils/option_utils");

var _use_option_filtering = require("../../../../../../utils/use_option_filtering");

var _use_placeholder = require("../../../../../../utils/use_placeholder");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var MultiStringInputLayout = function MultiStringInputLayout(_ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      isLoading = _ref.isLoading,
      item = _ref.item,
      disableCreate = _ref.disableCreate,
      suggestions = _ref.suggestions,
      enumerations = _ref.enumerations,
      validationMessage = _ref.validationMessage,
      id = _ref.id,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? _filter_styles.multiInputWidth : _ref$width,
      height = _ref.height,
      _ref$showDropDownMenu = _ref.showDropDownMenu,
      showDropDownMenu = _ref$showDropDownMenu === void 0 ? true : _ref$showDropDownMenu;
  var values = (0, _isArray["default"])(item.value) ? item.value : [];
  var options = (0, _react.useMemo)(function () {
    return suggestions ? (0, _option_utils.createOptions)(suggestions) : enumerations || [];
  }, [suggestions, enumerations]);

  var _useOptionFiltering = (0, _use_option_filtering.useOptionFiltering)({
    excludeValues: true,
    onInputChange: onInputChange,
    options: options,
    value: item.value
  }),
      debouncedFilterTerm = _useOptionFiltering.debouncedFilterTerm,
      filteredOptions = _useOptionFiltering.filteredOptions,
      noOptionsLabel = _useOptionFiltering.noOptionsLabel,
      onFilter = _useOptionFiltering.onFilter;

  var handleChange = function handleChange(newValues) {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: newValues
    });
  };

  var placeholderProps = (0, _use_placeholder.usePlaceholder)(item.value, validationMessage);

  var commonProps = _objectSpread(_objectSpread({}, placeholderProps), {}, {
    className: className,
    height: height,
    id: id,
    maxHeight: 145,
    onChange: handleChange,
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    values: values,
    width: width
  });

  var noSuggestions = debouncedFilterTerm === '' && !suggestions && !enumerations;

  if (noSuggestions || showDropDownMenu === false) {
    return _react["default"].createElement(_components.InputChips, commonProps);
  }

  return _react["default"].createElement(_components.SelectMulti, (0, _extends2["default"])({}, commonProps, {
    options: filteredOptions,
    isFilterable: true,
    onFilter: onFilter,
    freeInput: !disableCreate,
    noOptionsLabel: noOptionsLabel,
    indicator: false,
    closeOnSelect: true,
    isLoading: isLoading
  }));
};

exports.MultiStringInputLayout = MultiStringInputLayout;
var MultiStringInput = (0, _styledComponents["default"])(MultiStringInputLayout).withConfig({
  displayName: "MultiStringInput",
  componentId: "sc-18howej-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", " {\n    ", "\n  }\n"])), _filter_styles.inputPlacementStyle, _components.InputText, _filter_styles.inputPlacementStyle);
exports.MultiStringInput = MultiStringInput;
//# sourceMappingURL=MultiStringInput.js.map