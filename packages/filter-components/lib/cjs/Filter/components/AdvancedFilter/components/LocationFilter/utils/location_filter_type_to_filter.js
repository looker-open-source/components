"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationFilterTypeToFilter = void 0;

var _MatchesAdvanced = require("../../MatchesAdvanced");

var _UserAttributes = require("../../UserAttributes");

var _LocationBox = require("../components/LocationBox");

var _LocationCircle = require("../components/LocationCircle");

var _LocationExact = require("../components/LocationExact");

var Blank = function Blank() {
  return '';
};

var filterTypeToLocationMap = {
  location: _LocationExact.LocationExact,
  circle: _LocationCircle.LocationCircle,
  box: _LocationBox.LocationBox,
  anyvalue: Blank,
  "null": Blank,
  notnull: Blank,
  user_attribute: _UserAttributes.UserAttributes
};

var locationFilterTypeToFilter = function locationFilterTypeToFilter(type) {
  return filterTypeToLocationMap[type] || _MatchesAdvanced.MatchesAdvanced;
};

exports.locationFilterTypeToFilter = locationFilterTypeToFilter;
//# sourceMappingURL=location_filter_type_to_filter.js.map