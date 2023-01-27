"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionToDate = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _dateFns = require("date-fns");
var _isDateQuery = require("./isDateQuery");
var _excluded = ["dimension"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var dimensionToDate = function dimensionToDate(data, fields) {
  return (0, _isDateQuery.isDateQuery)(fields) ? data.map(function (_ref) {
    var dimension = _ref.dimension,
      restDatum = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    return _objectSpread({
      dimension: (0, _dateFns.parseISO)(dimension)
    }, restDatum);
  }) : data;
};
exports.dimensionToDate = dimensionToDate;
//# sourceMappingURL=dimensionToDate.js.map