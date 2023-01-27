"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Glyph = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _glyph = require("@visx/glyph");

var Glyphs = {
  circle: _glyph.GlyphCircle,
  square: _glyph.GlyphSquare,
  diamond: _glyph.GlyphDiamond,
  triangle: _glyph.GlyphTriangle,
  'triangle-down': _glyph.GlyphTriangle
};
var Glyph = function Glyph(_ref) {
  var series = _ref.series,
    top = _ref.top,
    left = _ref.left,
    size = _ref.size,
    fill = _ref.fill,
    styleObj = _ref.styleObj,
    stroke = _ref.stroke;
  var theme = (0, _styledComponents.useTheme)();
  var _series$shape = series.shape,
    shape = _series$shape === void 0 ? 'circle' : _series$shape,
    _series$line_width = series.line_width,
    line_width = _series$line_width === void 0 ? 1 : _series$line_width;
  var CurrGlyph = Glyphs[shape];
  var strokeWidth = function strokeWidth() {
    switch (true) {
      case line_width < 3:
        return line_width;
      case line_width < 8:
        return line_width * 0.75;
      default:
        return line_width * 0.5;
    }
  };
  var renderedStroke = stroke || series.color || theme.colors.key;
  return _react["default"].createElement(CurrGlyph, {
    top: top,
    left: left,
    size: size,
    fill: fill || theme.colors.key,
    transform: shape === "triangle-down" ? "rotate(180)" : "",
    style: styleObj || {},
    stroke: stroke === false ? undefined : renderedStroke,
    strokeWidth: strokeWidth()
  });
};
exports.Glyph = Glyph;
//# sourceMappingURL=Glyph.js.map