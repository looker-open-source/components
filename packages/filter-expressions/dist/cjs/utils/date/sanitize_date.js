"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeDate = void 0;
var _date_conversions = require("./date_conversions");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var sanitizeDate = function sanitizeDate(item) {
  var dateItem = (0, _date_conversions.dateToFilterDateTimeModel)(new Date(Date.now()));
  var _item$id = item.id,
    id = _item$id === void 0 ? '0' : _item$id,
    _item$is = item.is,
    is = _item$is === void 0 ? true : _item$is,
    type = item.type,
    unit = item.unit,
    value = item.value,
    _item$range = item.range,
    range = _item$range === void 0 ? 'relative' : _item$range,
    _item$date = item.date,
    date = _item$date === void 0 ? _objectSpread({}, dateItem) : _item$date,
    _item$year = item.year,
    year = _item$year === void 0 ? dateItem.year : _item$year,
    _item$month = item.month,
    month = _item$month === void 0 ? dateItem.month : _item$month,
    _item$start = item.start,
    start = _item$start === void 0 ? dateItem : _item$start,
    _item$end = item.end,
    end = _item$end === void 0 ? dateItem : _item$end,
    startInterval = item.startInterval,
    endInterval = item.endInterval,
    intervalType = item.intervalType;
  var interval = {
    unit: 'month',
    value: 3
  };
  switch (type) {
    case 'past':
      return {
        id: id,
        is: is,
        type: type,
        unit: unit || 'month',
        value: value || 1
      };
    case 'this':
    case 'next':
    case 'last':
      return {
        id: id,
        is: is,
        type: type,
        unit: unit || 'month'
      };
    case 'anytime':
      return {
        id: id,
        is: is,
        type: type
      };
    case 'year':
      return {
        id: id,
        is: is,
        type: type,
        year: year
      };
    case 'month':
      return {
        id: id,
        is: is,
        type: type,
        year: year,
        month: month
      };
    case 'before':
    case 'after':
      return {
        id: id,
        is: is,
        type: type,
        range: range,
        unit: unit || 'month',
        value: value || 1,
        date: date
      };
    case 'range':
      return {
        id: id,
        is: is,
        type: type,
        start: start,
        end: end
      };
    case 'thisRange':
      return {
        id: id,
        is: is,
        type: type,
        startInterval: startInterval,
        endInterval: endInterval
      };
    case 'on':
      return {
        id: id,
        is: is,
        type: type,
        date: (0, _date_conversions.clearTimeFilterDateTimeModel)(date)
      };
    case 'relative':
      return {
        id: id,
        is: is,
        type: type,
        startInterval: startInterval || interval,
        endInterval: endInterval || interval,
        intervalType: intervalType || 'ago'
      };
    case 'null':
    case 'notnull':
      return {
        id: id,
        is: is,
        type: type
      };
    default:
      return _objectSpread(_objectSpread({}, item), {}, {
        type: type
      });
  }
};
exports.sanitizeDate = sanitizeDate;
//# sourceMappingURL=sanitize_date.js.map