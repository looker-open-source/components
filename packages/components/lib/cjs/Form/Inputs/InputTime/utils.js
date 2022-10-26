"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBase10Int = exports.isValidTime = exports.formatTimeString = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _padStart = _interopRequireDefault(require("lodash/padStart"));

var _toString = _interopRequireDefault(require("lodash/toString"));

var _map3 = _interopRequireDefault(require("lodash/map"));

var formatTimeString = function formatTimeString(number) {
  return (0, _padStart["default"])((0, _toString["default"])(number), 2, '0');
};

exports.formatTimeString = formatTimeString;

var parseBase10Int = function parseBase10Int(value) {
  return value.length ? parseInt(value, 10) : 0;
};

exports.parseBase10Int = parseBase10Int;

var isValidTime = function isValidTime(value) {
  if (!value) {
    return true;
  }

  var _map = (0, _map3["default"])(value.split(':'), parseBase10Int),
      _map2 = (0, _slicedToArray2["default"])(_map, 2),
      _map2$ = _map2[0],
      hour = _map2$ === void 0 ? 0 : _map2$,
      _map2$2 = _map2[1],
      minute = _map2$2 === void 0 ? 0 : _map2$2;

  if (hour < 24 && minute <= 60) {
    return true;
  }

  return false;
};

exports.isValidTime = isValidTime;
//# sourceMappingURL=utils.js.map