"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TierFilter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _GroupSelect = require("../GroupSelect");

var _tier_filter_type_to_filter = require("./utils/tier_filter_type_to_filter");

var _utils = require("../../utils");

var _ItemLayout = require("../ItemLayout");

var _utils2 = require("../../../../utils");

var _excluded = ["item", "filterType", "enumerations", "field", "userAttributes", "onChange", "showMatchesAdvanced", "validationMessage"];

var TierFilter = function TierFilter(_ref) {
  var item = _ref.item,
      filterType = _ref.filterType,
      enumerations = _ref.enumerations,
      field = _ref.field,
      userAttributes = _ref.userAttributes,
      onChange = _ref.onChange,
      showMatchesAdvanced = _ref.showMatchesAdvanced,
      validationMessage = _ref.validationMessage,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var typeChange = function typeChange(value) {
    return onChange(item.id, (0, _filterExpressions.convertOptionToType)(String(value)));
  };

  var selectValue = (0, _filterExpressions.convertTypeToOption)(item);
  var isParamFilter = field ? field.category === 'parameter' : false;
  var unescapeEnumerationValues = (field === null || field === void 0 ? void 0 : field.has_allowed_values) && isParamFilter;
  var unescapedEnumerations = enumerations === null || enumerations === void 0 ? void 0 : enumerations.map((0, _utils2.createEnumeration)(unescapeEnumerationValues));
  var FilterComponent = (0, _tier_filter_type_to_filter.tierFilterTypeToFilter)(item.type, isParamFilter, rest.allowMultipleOptions);
  var isValueSet = item.value && item.value.length > 0;
  var isValueInEnumeration = unescapedEnumerations === null || unescapedEnumerations === void 0 ? void 0 : unescapedEnumerations.some(function (e) {
    var _item$value;

    return (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.includes(e.value);
  });

  if (isParamFilter && unescapedEnumerations !== null && unescapedEnumerations !== void 0 && unescapedEnumerations.length && isValueSet && !isValueInEnumeration) {
    item.value = [String(unescapedEnumerations[0].value)];
  }

  var paramFilterOptions = (0, _utils.useParamFilterOptions)();
  var tierFilterOptions = (0, _utils.useTierFilterOptions)();
  var options = (0, _utils.useFilterOptions)(isParamFilter ? paramFilterOptions : tierFilterOptions, isParamFilter ? false : showMatchesAdvanced);
  return _react["default"].createElement(_ItemLayout.ItemLayout, (0, _extends2["default"])({
    item: item
  }, rest), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: selectValue,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: item.type === 'anyvalue' ? undefined : 'left'
  }), _react["default"].createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    borderRadiusLeft: 0,
    disableCreate: true,
    validationMessage: validationMessage,
    enumerations: unescapedEnumerations,
    userAttributes: userAttributes,
    filterType: filterType,
    placement: "right"
  }));
};

exports.TierFilter = TierFilter;
//# sourceMappingURL=TierFilter.js.map