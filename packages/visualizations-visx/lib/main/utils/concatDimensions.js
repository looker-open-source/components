"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatDimensions = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _pick = _interopRequireDefault(require("lodash/pick"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var concatDimensions = function concatDimensions(data, fields) {
  var dimensionNames = (0, _visualizationsAdapters.getDimensionNames)(fields);
  var measureNames = (0, _visualizationsAdapters.getMeasureNames)(fields);
  var formattedData = data.map(function (datum) {
    var dimension = dimensionNames.map(function (name) {
      return datum[name];
    }).join(' - ');
    return _objectSpread({
      dimension: dimension
    }, (0, _pick["default"])(datum, measureNames));
  });
  return formattedData;
};
exports.concatDimensions = concatDimensions;
//# sourceMappingURL=concatDimensions.js.map