"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringFilter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _GroupSelect = require("../GroupSelect");

var _string_filter_type_to_filter = require("./utils/string_filter_type_to_filter");

var _utils = require("../../utils");

var _ItemLayout = require("../ItemLayout");

var _excluded = ["item", "filterType", "onInputChange", "suggestions", "userAttributes", "isLoading", "onChange", "showMatchesAdvanced", "validationMessage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var typesUsingSuggestions = ['match', 'contains', 'startsWith', 'endsWith'];

var StringFilter = function StringFilter(_ref) {
  var _rest$field;

  var item = _ref.item,
      filterType = _ref.filterType,
      onInputChange = _ref.onInputChange,
      suggestions = _ref.suggestions,
      userAttributes = _ref.userAttributes,
      isLoading = _ref.isLoading,
      onChange = _ref.onChange,
      showMatchesAdvanced = _ref.showMatchesAdvanced,
      validationMessage = _ref.validationMessage,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isParameter = (_rest$field = rest.field) === null || _rest$field === void 0 ? void 0 : _rest$field.parameter;
  var stringFilterOptions = (0, _utils.useStringFilterOptions)(isParameter);
  var options = (0, _utils.useFilterOptions)(stringFilterOptions, !isParameter && showMatchesAdvanced);

  var typeChange = function typeChange(value) {
    return onChange(item.id, (0, _filterExpressions.sanitizeString)(_objectSpread(_objectSpread({}, item), (0, _filterExpressions.convertOptionToType)(String(value))), userAttributes));
  };

  var FilterComponent = (0, _string_filter_type_to_filter.stringFilterTypeToFilter)(item.type, isParameter, rest.allowMultipleOptions);
  var selectValue = (0, _filterExpressions.convertTypeToOption)(item);
  return _react["default"].createElement(_ItemLayout.ItemLayout, (0, _extends2["default"])({
    item: item
  }, rest), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: selectValue,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: ['blank', 'null'].includes(item.type) ? undefined : 'left'
  }), _react["default"].createElement(FilterComponent, {
    item: item,
    onInputChange: onInputChange,
    onChange: onChange,
    validationMessage: validationMessage,
    suggestions: typesUsingSuggestions.includes(item.type) ? suggestions : undefined,
    placement: "right",
    userAttributes: userAttributes,
    filterType: filterType,
    isLoading: isLoading
  }));
};

exports.StringFilter = StringFilter;
//# sourceMappingURL=StringFilter.js.map