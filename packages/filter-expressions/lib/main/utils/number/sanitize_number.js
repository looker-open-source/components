"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeNumber = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var sanitizeNumber = function sanitizeNumber(item) {
  var _item$id = item.id,
    id = _item$id === void 0 ? '0' : _item$id,
    _item$is = item.is,
    is = _item$is === void 0 ? true : _item$is,
    type = item.type,
    _item$value = item.value,
    value = _item$value === void 0 ? [] : _item$value,
    _item$bounds = item.bounds,
    bounds = _item$bounds === void 0 ? '[]' : _item$bounds,
    high = item.high,
    low = item.low;
  var _value = (0, _slicedToArray2["default"])(value, 1),
    firstValue = _value[0];
  switch (type) {
    case '=':
      return {
        id: id,
        is: is,
        type: type,
        value: value
      };
    case '>':
    case '<':
    case '>=':
    case '<=':
      return {
        id: id,
        is: is,
        type: type,
        value: firstValue !== undefined ? [firstValue] : []
      };
    case 'between':
      return {
        id: id,
        is: is,
        type: type,
        bounds: bounds,
        low: low !== null && low !== void 0 ? low : firstValue,
        high: high !== null && high !== void 0 ? high : firstValue
      };
    case 'null':
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
exports.sanitizeNumber = sanitizeNumber;
//# sourceMappingURL=sanitize_number.js.map