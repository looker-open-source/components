"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYAxisFormat = exports.getXAxisFormat = void 0;
var _visualizationsAdapters = require("@looker/visualizations-adapters");

var getYAxisFormat = function getYAxisFormat(config) {
  var _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    _config$positioning = config.positioning,
    positioning = _config$positioning === void 0 ? '' : _config$positioning;
  var isPercent = positioning === 'percent';
  var isSingleSeries = !!(series.length === 1 || Object.keys(series).length === 1);
  if (isSingleSeries) {
    var valueFormat = Array.isArray(series) ? series[0].value_format : Object.values(series)[0].value_format;
    return valueFormat;
  } else {
    return isPercent ? _visualizationsAdapters.DEFAULT_STRING_FORMAT_PERCENT : _visualizationsAdapters.DEFAULT_STRING_FORMAT;
  }
};

exports.getYAxisFormat = getYAxisFormat;
var getXAxisFormat = function getXAxisFormat(fields) {
  if (typeof fields === 'undefined') return '';
  var _fields$dimensions = fields.dimensions,
    dimensions = _fields$dimensions === void 0 ? '' : _fields$dimensions;
  if (dimensions && dimensions.length === 1) {
    var value_format = dimensions[0].value_format;
    return value_format;
  } else {
    return _visualizationsAdapters.DEFAULT_STRING_FORMAT;
  }
};
exports.getXAxisFormat = getXAxisFormat;
//# sourceMappingURL=getAxisFormat.js.map