"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marker = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _marker = require("@visx/marker");
var _Glyph = require("../Glyph");
var _utils = require("../utils");

var Marker = function Marker(_ref) {
  var series = _ref.series,
    id = _ref.id;
  var theme = (0, _styledComponents.useTheme)();
  var _series$line_width = series.line_width,
    line_width = _series$line_width === void 0 ? 1 : _series$line_width;
  var fill = (0, _utils.getMarkerFill)(series, theme);
  var size = (0, _utils.getDefaultGlyphSize)(line_width);
  var top = size / 2;
  var left = size / 2;
  return _react["default"].createElement(_marker.Marker, {
    id: "".concat(id),
    fill: fill,
    markerWidth: size,
    markerHeight: size,
    refX: left,
    refY: top
  }, _react["default"].createElement(_Glyph.Glyph, {
    series: series,
    top: top,
    left: left,
    size: size,
    fill: fill
  }));
};
exports.Marker = Marker;
//# sourceMappingURL=Marker.js.map