"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChartGeometry = void 0;
var _pieConstants = require("./pieConstants");
var _getConnectorLength = require("./getConnectorLength");

var getChartGeometry = function getChartGeometry(_ref) {
  var width = _ref.width,
    height = _ref.height,
    labelWidth = _ref.labelWidth,
    _ref$legendType = _ref.legendType,
    legendType = _ref$legendType === void 0 ? 'legend' : _ref$legendType;
  var minChartSize = legendType === 'legend' ? 50 : 350;

  var maxConnectorLength = (0, _getConnectorLength.getConnectorLength)(0, 1) * 2;

  var maxDimension = Math.max(width, height, minChartSize);

  var hoverMargin = Math.ceil(maxDimension - maxDimension / _pieConstants.PIE_SLICE_ZOOM);

  var canvasCenter = (maxDimension - hoverMargin) / 2;

  var padding = legendType === 'labels' ? Math.max(labelWidth, maxConnectorLength) : 0;

  var outerRadius = canvasCenter - hoverMargin - padding;
  return {
    canvasW: maxDimension,
    canvasH: maxDimension - padding,
    pieCenterX: canvasCenter,
    pieCenterY: canvasCenter - padding / 2,
    outerRadius: outerRadius
  };
};
exports.getChartGeometry = getChartGeometry;
//# sourceMappingURL=getChartGeometry.js.map