"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationToString = void 0;
var _tree_to_string = require("../tree/tree_to_string");
var _user_attribute_to_string = require("../user_attribute/user_attribute_to_string");

var locationExactToString = function locationExactToString(_ref) {
  var lat = _ref.lat,
    lon = _ref.lon;
  return lat && lon ? "".concat(lat, ", ").concat(lon) : '';
};
var circleToString = function circleToString(_ref2) {
  var distance = _ref2.distance,
    unit = _ref2.unit,
    lat = _ref2.lat,
    lon = _ref2.lon;
  return distance && unit && lat && lon ? "".concat(distance, " ").concat(unit, " from ").concat(lat, ", ").concat(lon) : '';
};
var boxToString = function boxToString(_ref3) {
  var lon = _ref3.lon,
    lat = _ref3.lat,
    lon1 = _ref3.lon1,
    lat1 = _ref3.lat1;
  return lon && lat && lon1 && lat1 ? "inside box from ".concat(lat, ", ").concat(lon, " to ").concat(lat1, ", ").concat(lon1) : '';
};
var anyvalue = function anyvalue() {
  return '';
};
var nullToString = function nullToString() {
  return 'null';
};
var notNullToString = function notNullToString() {
  return '-null';
};
var filterToStringMap = {
  location: locationExactToString,
  circle: circleToString,
  box: boxToString,
  anyvalue: anyvalue,
  "null": nullToString,
  notnull: notNullToString,
  user_attribute: _user_attribute_to_string.userAttributeToString
};
var locationToExpression = function locationToExpression(item) {
  var toStringFunction = filterToStringMap[item.type];
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item)) || '';
};
var locationToString = function locationToString(root) {
  return (0, _tree_to_string.treeToString)(root, locationToExpression);
};
exports.locationToString = locationToString;
//# sourceMappingURL=location_to_string.js.map