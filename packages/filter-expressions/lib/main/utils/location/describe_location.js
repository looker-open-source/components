"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeLocation = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _describe_user_attribute = require("../user_attribute/describe_user_attribute");
var _get_distance_unit_labels = require("./get_distance_unit_labels");

var describeLat = function describeLat(lat) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var latAbs = Math.abs(lat).toFixed(1);
  var textNorth = t('lat degrees north', {
    ns: 'describe_location',
    lat: latAbs
  });
  var textSouth = t('lat degrees south', {
    ns: 'describe_location',
    lat: latAbs
  });
  return lat > 0 ? textNorth : textSouth;
};
var describeLon = function describeLon(lon) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var lonAbs = Math.abs(lon).toFixed(1);
  var textEast = t('lon degrees east', {
    ns: 'describe_location',
    lon: lonAbs
  });
  var textWest = t('lon degrees west', {
    ns: 'describe_location',
    lon: lonAbs
  });
  return lon > 0 ? textEast : textWest;
};
var box = function box(_ref) {
  var lon = _ref.lon,
    lat = _ref.lat,
    lon1 = _ref.lon1,
    lat1 = _ref.lat1;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return lon && lat && lon1 && lat1 ? t('coords1 to coords2', {
    coords1: "".concat(describeLat(lat), ", ").concat(describeLon(lon)),
    coords2: "".concat(describeLat(lat1), ", ").concat(describeLon(lon1)),
    ns: 'describe_location'
  }) : '';
};
var circle = function circle(_ref2) {
  var distance = _ref2.distance,
    unit = _ref2.unit,
    lat = _ref2.lat,
    lon = _ref2.lon;
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return distance && unit && lat && lon ? t('distance unit from lat, lon', {
    ns: 'describe_location',
    distance: distance,
    unit: (0, _get_distance_unit_labels.getDistanceUnitLabels)(unit),
    lat: lat,
    lon: lon
  }) : '';
};
var location = function location(_ref3) {
  var lat = _ref3.lat,
    lon = _ref3.lon;
  return lat && lon ? "".concat(lat, ", ").concat(lon) : '';
};
var anyvalue = function anyvalue() {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is anywhere', {
    ns: 'describe_location'
  });
};
var describeNull = function describeNull() {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is null', {
    ns: 'describe_location'
  });
};
var describeNotNull = function describeNotNull() {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return t('is not null', {
    ns: 'describe_location'
  });
};
var filterToStringMap = {
  box: box,
  circle: circle,
  location: location,
  anyvalue: anyvalue,
  "null": describeNull,
  notnull: describeNotNull,
  user_attribute: _describe_user_attribute.describeUserAttribute
};

var describeLocation = function describeLocation(item) {
  return (0, _defaultTo["default"])(filterToStringMap[item.type], function () {
    return '';
  })(item);
};
exports.describeLocation = describeLocation;
//# sourceMappingURL=describe_location.js.map