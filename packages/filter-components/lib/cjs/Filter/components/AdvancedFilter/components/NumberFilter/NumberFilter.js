"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberFilter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../utils");

var _ItemLayout = require("../ItemLayout");

var _GroupSelect = require("../GroupSelect");

var _number_filter_type_to_filter = require("./utils/number_filter_type_to_filter");

var _utils2 = require("../../utils");

var _excluded = ["item", "filterType", "onChange", "validationMessage", "userAttributes", "showMatchesAdvanced"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var NumberFilter = function NumberFilter(_ref) {
  var _rest$field, _item$value;

  var item = _ref.item,
      filterType = _ref.filterType,
      onChange = _ref.onChange,
      validationMessage = _ref.validationMessage,
      userAttributes = _ref.userAttributes,
      showMatchesAdvanced = _ref.showMatchesAdvanced,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isParameter = !!((_rest$field = rest.field) !== null && _rest$field !== void 0 && _rest$field.parameter);
  var numberFilterOptions = (0, _utils2.useNumberFilterOptions)(isParameter);
  var options = (0, _utils2.useFilterOptions)(numberFilterOptions, !isParameter && showMatchesAdvanced);

  var typeChange = function typeChange(value) {
    return onChange(item.id, (0, _filterExpressions.sanitizeNumber)(_objectSpread(_objectSpread({}, item), (0, _filterExpressions.convertOptionToType)(String(value)))));
  };

  var FilterComponent = (0, _number_filter_type_to_filter.numberFilterTypeToFilter)(item.type, !!rest.allowMultipleOptions, isParameter);
  var selectValue = (0, _filterExpressions.convertTypeToOption)(item);
  var validationText = validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.message;

  var _useTranslation = (0, _utils.useTranslation)('NumberFilter'),
      t = _useTranslation.t;

  var placeholder = validationText || (!(item !== null && item !== void 0 && (_item$value = item.value) !== null && _item$value !== void 0 && _item$value.length) || item.value.length === 0 ? t('any value') : '');
  return _react["default"].createElement(_ItemLayout.ItemLayout, (0, _extends2["default"])({
    item: item
  }, rest), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: selectValue,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: item.type === 'null' ? undefined : 'left'
  }), _react["default"].createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    validationMessage: validationMessage,
    placement: "right",
    userAttributes: userAttributes,
    filterType: filterType,
    placeholder: placeholder
  }));
};

exports.NumberFilter = NumberFilter;
//# sourceMappingURL=NumberFilter.js.map