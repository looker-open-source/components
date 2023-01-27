"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultChartTypeMap = exports.Visualization = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _styledComponents = require("styled-components");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _visualizationsSingleValue = require("@looker/visualizations-single-value");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _has = _interopRequireDefault(require("lodash/has"));
var _QueryError = require("../QueryError");
var _utils = require("../utils");

var defaultChartTypeMap = {
  area: _visualizationsVisx.Area,
  bar: _visualizationsVisx.Bar,
  column: _visualizationsVisx.Column,
  "default": _visualizationsTable.Table,
  line: _visualizationsVisx.Line,
  pie: _visualizationsVisx.Pie,
  scatter: _visualizationsVisx.Scatter,
  single_value: _visualizationsSingleValue.SingleValue,
  sparkline: _visualizationsVisx.Sparkline,
  table: _visualizationsTable.Table
};
exports.defaultChartTypeMap = defaultChartTypeMap;
var VisualizationComponent = function VisualizationComponent(_ref) {
  var height = _ref.height,
    width = _ref.width,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    fields = _ref.fields,
    pivots = _ref.pivots,
    totals = _ref.totals,
    config = _ref.config,
    _ref$chartTypeMap = _ref.chartTypeMap,
    chartTypeMap = _ref$chartTypeMap === void 0 ? {} : _ref$chartTypeMap;
  var _useTranslation = (0, _utils.useTranslation)('Visualization'),
    t = _useTranslation.t;
  if (fields !== null && fields !== void 0 && fields.measures.some(function (measure) {
    return measure.type === 'date';
  })) {
    throw new Error(t("Measures of type 'date' are currently not supported"));
  }

  var completeChartTypeMap = Object.assign({}, defaultChartTypeMap, chartTypeMap);
  if ((0, _has["default"])(completeChartTypeMap, (config === null || config === void 0 ? void 0 : config.type) || '')) {
    var ChartComponent = completeChartTypeMap[config === null || config === void 0 ? void 0 : config.type];
    return _react["default"].createElement(ChartComponent, {
      data: data,
      config: config,
      fields: fields,
      totals: totals,
      pivots: pivots,
      width: width,
      height: height
    });
  } else {
    return _react["default"].createElement(_QueryError.QueryError, {
      message: t('No chart found for type "{{type}}"', {
        type: config === null || config === void 0 ? void 0 : config.type
      })
    });
  }
};
var Visualization = function Visualization(props) {
  var theme = (0, _styledComponents.useTheme)();
  if (!theme) {
    return _react["default"].createElement(_components.ComponentsProvider, null, _react["default"].createElement(Visualization, props));
  }
  return _react["default"].createElement(_visualizationsAdapters.ErrorBoundary, props, _react["default"].createElement(VisualizationComponent, props));
};
exports.Visualization = Visualization;
//# sourceMappingURL=Visualization.js.map