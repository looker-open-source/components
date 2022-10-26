"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFilter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _get_date_filter_options = require("../../utils/get_date_filter_options");

var _GroupSelect = require("../GroupSelect");

var _date_filter_type_to_filter = require("./utils/date_filter_type_to_filter");

var _new_date_item = require("./utils/new_date_item");

var _utils = require("../../utils");

var _ItemLayout = require("../ItemLayout");

var _excluded = ["item", "filterType", "onChange", "onAdd", "showAdd", "showMatchesAdvanced", "validationMessage", "userAttributes", "field"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var DateFilter = function DateFilter(_ref) {
  var item = _ref.item,
      filterType = _ref.filterType,
      onChange = _ref.onChange,
      onAdd = _ref.onAdd,
      showAdd = _ref.showAdd,
      showMatchesAdvanced = _ref.showMatchesAdvanced,
      validationMessage = _ref.validationMessage,
      userAttributes = _ref.userAttributes,
      field = _ref.field,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var typeChange = function typeChange(value) {
    return onChange(item.id, (0, _filterExpressions.sanitizeDate)(_objectSpread(_objectSpread({}, item), {}, {
      type: value
    })));
  };

  var isParameter = !!(field !== null && field !== void 0 && field.parameter);
  var dateFilterOptions = (0, _get_date_filter_options.useDateFilterOptions)(isParameter);
  var type = (0, _filterExpressions.convertTypeToMatchesAdvancedOption)(item);

  if (type === 'matchesAdvanced') {
    showMatchesAdvanced = true;
    showAdd = false;
  }

  var options = (0, _utils.useFilterOptions)(dateFilterOptions, !isParameter && showMatchesAdvanced);

  var handleOnAdd = function handleOnAdd() {
    return onAdd((0, _new_date_item.newDateItem)(item), true);
  };

  var FilterComponent = (0, _date_filter_type_to_filter.dateFilterTypeToFilter)(item.type);
  return _react["default"].createElement(_ItemLayout.ItemLayout, (0, _extends2["default"])({
    item: item,
    showAdd: showAdd,
    onAdd: handleOnAdd
  }, rest), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: type,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: ['null', 'notnull', 'anyvalue'].includes(item.type) ? undefined : 'left'
  }), _react["default"].createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    borderRadiusLeft: 0,
    userAttributes: userAttributes,
    showTime: (0, _filterExpressions.isDateTime)(filterType),
    validationMessage: validationMessage,
    filterType: filterType,
    field: field,
    placement: "right"
  }));
};

exports.DateFilter = DateFilter;
//# sourceMappingURL=DateFilter.js.map