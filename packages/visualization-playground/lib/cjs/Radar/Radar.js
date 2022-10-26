"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radar = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _group = require("@visx/group");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _scale = require("@visx/scale");

var _point = require("@visx/point");

var _shape = require("@visx/shape");

var isOdd = function isOdd(num) {
  return num % 2;
};

var DEGREES = 360;

var genAngles = function genAngles(length) {
  var angleOffset = isOdd(length) ? DEGREES / length / 2 : 0;
  return (0, _toConsumableArray2["default"])(new Array(length + 1)).map(function (_, i) {
    return {
      angle: i * (DEGREES / length) - angleOffset
    };
  });
};

var genPoints = function genPoints(length, radius) {
  var step = Math.PI * 2 / length;
  return (0, _toConsumableArray2["default"])(new Array(length)).map(function (_, i) {
    return {
      x: radius * Math.sin(i * step),
      y: radius * Math.cos(i * step)
    };
  });
};

function genPolygonPoints(dataArray, scale, getValue) {
  var step = Math.PI * 2 / dataArray.length;
  var points = new Array(dataArray.length).fill({
    x: 0,
    y: 0
  });
  var pointString = new Array(dataArray.length + 1).fill('').reduce(function (res, _, i) {
    if (i > dataArray.length) return res;
    var xVal = scale(getValue(dataArray[i - 1])) * Math.sin(i * step);
    var yVal = scale(getValue(dataArray[i - 1])) * Math.cos(i * step);
    points[i - 1] = {
      x: xVal,
      y: yVal
    };
    res += "".concat(xVal, ",").concat(yVal, " ");
    return res;
  });
  return {
    points: points,
    pointString: pointString
  };
}

var defaultMargin = {
  top: 40,
  left: 40,
  right: 40,
  bottom: 40
};

var Radar = function Radar(_ref) {
  var _y_axis$, _y_axis$$range;

  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref$width,
      _ref$levels = _ref.levels,
      levels = _ref$levels === void 0 ? 5 : _ref$levels,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? defaultMargin : _ref$margin,
      fields = _ref.fields,
      data = _ref.data,
      config = _ref.config;
  var theme = (0, _styledComponents.useTheme)();

  var _getDataRange = (0, _visualizationsAdapters.getDataRange)({
    config: config,
    data: data,
    fields: fields
  }),
      _getDataRange2 = (0, _slicedToArray2["default"])(_getDataRange, 2),
      _ = _getDataRange2[0],
      dataMax = _getDataRange2[1];

  var _config$series = config.series,
      series = _config$series === void 0 ? {} : _config$series,
      _config$y_axis = config.y_axis,
      y_axis = _config$y_axis === void 0 ? [] : _config$y_axis;
  var layoutMax = Math.max(width, height);
  var xMax = layoutMax - margin.left - margin.right;
  var yMax = layoutMax - margin.top - margin.bottom;
  var radius = Math.min(xMax, yMax) / 2;
  var radialScale = (0, _scale.scaleLinear)({
    range: [0, Math.PI * 2],
    domain: [DEGREES, 0]
  });
  var yScaleMax = (y_axis === null || y_axis === void 0 ? void 0 : (_y_axis$ = y_axis[0]) === null || _y_axis$ === void 0 ? void 0 : (_y_axis$$range = _y_axis$.range) === null || _y_axis$$range === void 0 ? void 0 : _y_axis$$range[1]) || 'auto';
  var yScale = (0, _scale.scaleLinear)({
    range: [0, radius],
    domain: [0, yScaleMax === 'auto' ? dataMax : yScaleMax]
  });
  var webs = genAngles(data.length);
  var points = genPoints(data.length, radius);
  var polygonPoints = fields.measures.map(function (m) {
    return genPolygonPoints(data, function (d) {
      var _yScale;

      return (_yScale = yScale(d)) !== null && _yScale !== void 0 ? _yScale : 0;
    }, function (d) {
      return d[m.name];
    });
  });
  var zeroPoint = new _point.Point({
    x: 0,
    y: 0
  });
  return layoutMax < 10 ? null : _react["default"].createElement("svg", {
    width: layoutMax,
    height: layoutMax
  }, _react["default"].createElement(_group.Group, {
    top: layoutMax / 2 - margin.top,
    left: layoutMax / 2
  }, y_axis[0].gridlines ? (0, _toConsumableArray2["default"])(new Array(levels)).map(function (_, i) {
    return _react["default"].createElement(_shape.LineRadial, {
      key: "web-".concat(i),
      data: webs,
      angle: function angle(d) {
        var _radialScale;

        return (_radialScale = radialScale(d.angle)) !== null && _radialScale !== void 0 ? _radialScale : 0;
      },
      radius: (i + 1) * radius / levels,
      fill: "none",
      stroke: theme.colors.ui2,
      strokeWidth: 2,
      strokeOpacity: 0.8,
      strokeLinecap: "round"
    });
  }) : null, (0, _toConsumableArray2["default"])(new Array(data.length)).map(function (_, i) {
    return _react["default"].createElement(_shape.Line, {
      key: "radar-line-".concat(i),
      from: zeroPoint,
      to: points[i],
      stroke: theme.colors.ui2
    });
  }), fields.measures.map(function (m, i) {
    var _ref2 = Array.isArray(series) ? series[i] : series[m.name],
        color = _ref2.color,
        visible = _ref2.visible;

    if (!visible) {
      return null;
    }

    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("polygon", {
      points: polygonPoints[i].pointString,
      fill: color,
      fillOpacity: 0.3,
      stroke: color,
      strokeWidth: 1
    }), polygonPoints[i].points.map(function (point, k) {
      return _react["default"].createElement("circle", {
        key: "radar-point-".concat(k),
        cx: point.x,
        cy: point.y,
        r: 4,
        fill: color
      });
    }));
  })));
};

exports.Radar = Radar;
//# sourceMappingURL=Radar.js.map