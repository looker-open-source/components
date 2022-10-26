"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesSizeBy = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _has = _interopRequireDefault(require("lodash/has"));

var _components = require("@looker/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderFor = ['scatter'];

var SeriesSizeBy = function SeriesSizeBy(props) {
  var chartType = props.chartType,
      fields = props.fields,
      series = props.series,
      onSeriesChange = props.onSeriesChange;

  if (!renderFor.includes(chartType) && !(0, _has["default"])(series, 'size_by')) {
    return null;
  }

  var handleChange = function handleChange(value) {
    var draft = _objectSpread(_objectSpread({}, series), {}, {
      size_by: value
    });

    onSeriesChange(draft);
  };

  var sizeByOptions = ['none'].concat((0, _toConsumableArray2["default"])(fields.measures.map(function (m) {
    return m.name;
  })));
  return _react["default"].createElement(_components.FieldSelect, {
    label: "Size By",
    onChange: handleChange,
    options: sizeByOptions.map(function (s) {
      return {
        value: s
      };
    }),
    value: series.size_by || 'none'
  });
};

exports.SeriesSizeBy = SeriesSizeBy;
//# sourceMappingURL=SeriesSizeBy.js.map