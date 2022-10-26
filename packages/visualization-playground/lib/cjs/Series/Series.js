"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Series = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _components = require("@looker/components");

var _SeriesColor = require("./SeriesColor");

var _SeriesVisible = require("./SeriesVisible");

var _SeriesLabel = require("./SeriesLabel");

var _SeriesLineWidth = require("./SeriesLineWidth");

var _SeriesPointShape = require("./SeriesPointShape");

var _SeriesPointStyle = require("./SeriesPointStyle");

var _SeriesSizeBy = require("./SeriesSizeBy");

var _SeriesCellVisualization = require("./SeriesCellVisualization");

var _SeriesValueFormat = require("./SeriesValueFormat");

var _partial = _interopRequireDefault(require("lodash/partial"));

var _set = _interopRequireDefault(require("lodash/set"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _has = _interopRequireDefault(require("lodash/has"));

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderFor = ['area', 'bar', 'column', 'line', 'pie', 'scatter', 'sparkline', 'table', 'single_value'];

var Series = function Series(props) {
  var config = props.config,
      fields = props.fields,
      onConfigChange = props.onConfigChange;
  var _config$series = config.series,
      series = _config$series === void 0 ? {} : _config$series;

  if (!renderFor.includes(config.type) && !(0, _has["default"])(config, 'series')) {
    return null;
  }

  var handleChange = function handleChange(seriesKey, newSeries) {
    var draft = (0, _set["default"])(_objectSpread({}, config), ['series', seriesKey], newSeries);
    onConfigChange(draft);
  };

  var seriesList = Array.isArray(series) ? series.map(function (s, i) {
    return [String(i), s];
  }) : Object.entries(series);
  return _react["default"].createElement(_react["default"].Fragment, null, seriesList.map(function (_ref, i) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        s = _ref2[1];

    var handleSeriesChange = (0, _partial["default"])(handleChange, key);
    var seriesDisabled = config.type === 'sparkline' && i > 0;
    return _react["default"].createElement(StyledFieldset, {
      legend: (0, _visualizationsAdapters.isNumeric)(key) ? "Series: ".concat(key) : key,
      accordion: true,
      defaultOpen: seriesDisabled === false,
      key: key
    }, _react["default"].createElement(_SeriesVisible.SeriesVisible, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), _react["default"].createElement(_SeriesColor.SeriesColor, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange,
      disabled: seriesDisabled
    }), _react["default"].createElement(_SeriesLabel.SeriesLabel, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), _react["default"].createElement(_SeriesLineWidth.SeriesLineWidth, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange,
      disabled: seriesDisabled
    }), _react["default"].createElement(_SeriesValueFormat.SeriesValueFormat, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), _react["default"].createElement(_components.Grid, {
      columns: 2
    }, _react["default"].createElement(_SeriesPointStyle.SeriesPointStyle, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), _react["default"].createElement(_SeriesPointShape.SeriesPointShape, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    })), _react["default"].createElement(_SeriesSizeBy.SeriesSizeBy, {
      chartType: config.type,
      fields: fields,
      series: s,
      onSeriesChange: handleSeriesChange
    }), _react["default"].createElement(_SeriesCellVisualization.SeriesCellVisualization, {
      chartType: config.type,
      series: s,
      onSeriesChange: handleSeriesChange
    }), _react["default"].createElement(_components.Divider, {
      my: "xxlarge"
    }));
  }));
};

exports.Series = Series;
var StyledFieldset = (0, _styledComponents["default"])(_components.Fieldset).withConfig({
  displayName: "Series__StyledFieldset",
  componentId: "sc-1wb80rx-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  legend {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
//# sourceMappingURL=Series.js.map