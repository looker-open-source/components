"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationFilter = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _GroupSelect = require("../GroupSelect");

var _location_filter_type_to_filter = require("./utils/location_filter_type_to_filter");

var _utils = require("../../utils");

var LocationFilter = function LocationFilter(_ref) {
  var item = _ref.item,
      filterType = _ref.filterType,
      onChange = _ref.onChange,
      userAttributes = _ref.userAttributes,
      validationMessage = _ref.validationMessage,
      showMatchesAdvanced = _ref.showMatchesAdvanced;
  var locationFilterOptions = (0, _utils.useLocationFilterOptions)();
  var options = (0, _utils.useFilterOptions)(locationFilterOptions, showMatchesAdvanced);

  var locationTypeChange = function locationTypeChange(value) {
    return onChange(item.id, {
      type: value
    });
  };

  var FilterComponent = (0, _location_filter_type_to_filter.locationFilterTypeToFilter)(item.type);
  return _react["default"].createElement(_components.Flex, {
    flexDirection: "row",
    alignItems: "center"
  }, _react["default"].createElement(_components.Box, null, _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: item.type,
    options: options,
    onChange: locationTypeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: ['null', 'notnull', 'anyvalue'].includes(item.type) ? undefined : 'left'
  })), _react["default"].createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    validationMessage: validationMessage,
    userAttributes: userAttributes,
    filterType: filterType
  }));
};

exports.LocationFilter = LocationFilter;
//# sourceMappingURL=LocationFilter.js.map