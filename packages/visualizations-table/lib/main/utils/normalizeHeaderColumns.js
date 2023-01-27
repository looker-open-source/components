"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeHeaderColumns = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var normalizeHeaderColumns = function normalizeHeaderColumns(table) {
  return table.getHeaderGroups().map(function (headerGroup) {
    var headers = headerGroup.headers.flatMap(function (header) {
      if (header.colSpan > 1) {
        var spacerArray = Array(header.colSpan - 1).fill(null);
        return [header].concat((0, _toConsumableArray2["default"])(spacerArray));
      }
      return [header];
    });
    return _objectSpread(_objectSpread({}, headerGroup), {}, {
      headers: headers
    });
  });
};
exports.normalizeHeaderColumns = normalizeHeaderColumns;
//# sourceMappingURL=normalizeHeaderColumns.js.map