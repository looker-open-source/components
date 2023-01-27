"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonLineDefaults = exports.commonCartesianDefaults = exports.chartConfigByType = void 0;
var _barPositioning = require("./barPositioning");
var _linePositioning = require("./linePositioning");
var _legendPosition = require("./legendPosition");
var _legendType = require("./legendType");
var _legendValue = require("./legendValue");
var _renderNullValues = require("./renderNullValues");
var _seriesCellVis = require("./seriesCellVis");
var _seriesColors = require("./seriesColors");
var _seriesLabels = require("./seriesLabels");
var _seriesLineWidth = require("./seriesLineWidth");
var _dimensionSeriesColors = require("./dimensionSeriesColors");
var _seriesPointShape = require("./seriesPointShape");
var _seriesPointStyle = require("./seriesPointStyle");
var _seriesSize = require("./seriesSize");
var _seriesVisible = require("./seriesVisible");
var _tooltips = require("./tooltips");
var _truncateHeader = require("./truncateHeader");
var _truncateText = require("./truncateText");
var _xAxis = require("./xAxis");
var _yAxis = require("./yAxis");
var _yAxisRange = require("./yAxisRange");
var _seriesValueFormat = require("./seriesValueFormat");
var _showTotals = require("./showTotals");
var _showRowTotals = require("./showRowTotals");

var commonCartesianDefaults = [_seriesLabels.seriesLabels, _seriesColors.seriesColors, _seriesValueFormat.seriesValueFormat, _seriesVisible.seriesVisible, _legendPosition.legendPosition, _tooltips.tooltips, _xAxis.xAxis, _yAxis.yAxis];
exports.commonCartesianDefaults = commonCartesianDefaults;
var commonLineDefaults = [_seriesPointStyle.seriesPointStyle, _seriesPointShape.seriesPointShape, _renderNullValues.renderNullValues];
exports.commonLineDefaults = commonLineDefaults;
var chartConfigByType = {
  area: [].concat(commonLineDefaults, commonCartesianDefaults, [_linePositioning.linePositioning, _seriesLineWidth.seriesLineWidth]),
  bar: [_barPositioning.barPositioning].concat(commonCartesianDefaults),
  column: [_barPositioning.barPositioning].concat(commonCartesianDefaults),
  "default": [].concat(commonCartesianDefaults),
  table: [_seriesCellVis.seriesCellVis, _seriesLabels.seriesLabels, _seriesVisible.seriesVisible, _truncateHeader.truncateHeader, _truncateText.truncateText, _seriesValueFormat.seriesValueFormat, _seriesColors.seriesColors, _showTotals.showTotals, _showRowTotals.showRowTotals],
  line: [].concat(commonLineDefaults, commonCartesianDefaults, [_seriesLineWidth.seriesLineWidth]),
  pie: [_legendPosition.legendPosition, _legendType.legendType, _legendValue.legendValue, _dimensionSeriesColors.dimensionSeriesColors, _tooltips.tooltips],
  scatter: [].concat(commonLineDefaults, commonCartesianDefaults, [_seriesLineWidth.seriesLineWidth, _seriesSize.seriesSize, _renderNullValues.renderNullValues]),
  single_value: [_seriesLabels.seriesLabels, _seriesColors.seriesColors, _seriesValueFormat.seriesValueFormat],
  sparkline: [_seriesColors.seriesColors, _seriesLineWidth.seriesLineWidth, _renderNullValues.renderNullValues, _yAxisRange.yAxisRange]
};
exports.chartConfigByType = chartConfigByType;
//# sourceMappingURL=chartConfigByType.js.map