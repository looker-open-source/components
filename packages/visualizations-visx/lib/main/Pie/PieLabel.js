"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieLabel = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _annotation = require("@visx/annotation");
var _d3Shape = require("d3-shape");
var _styledComponents = require("styled-components");
var _getConnectorLength = require("./getConnectorLength");

var PieLabel = function PieLabel(_ref) {
  var arc = _ref.arc,
    outerRadius = _ref.outerRadius,
    labelContent = _ref.labelContent,
    datumColor = _ref.datumColor;
  var theme = (0, _styledComponents.useTheme)();
  var startAngle = arc.startAngle,
    endAngle = arc.endAngle;
  var averageAngle = (startAngle + endAngle) / 2;
  var _pointRadial = (0, _d3Shape.pointRadial)(averageAngle, outerRadius),
    _pointRadial2 = (0, _slicedToArray2["default"])(_pointRadial, 2),
    connectorX = _pointRadial2[0],
    connectorY = _pointRadial2[1];
  var connectorLength = (0, _getConnectorLength.getConnectorLength)(averageAngle, outerRadius);
  var _pointRadial3 = (0, _d3Shape.pointRadial)(averageAngle, connectorLength),
    _pointRadial4 = (0, _slicedToArray2["default"])(_pointRadial3, 2),
    labelX = _pointRadial4[0],
    labelY = _pointRadial4[1];
  var ANCHOR_POSITION = connectorX > 0 ? 'start' : 'end';
  return _react["default"].createElement(_annotation.Annotation, {
    x: connectorX,
    y: connectorY,
    dx: labelX,
    dy: labelY
  }, _react["default"].createElement(_annotation.Connector, {
    stroke: datumColor,
    pathProps: {
      strokeWidth: 2
    },
    type: "line"
  }), _react["default"].createElement(_annotation.Label, {
    titleFontSize: theme.fontSizes.xsmall,
    backgroundFill: "transparent",
    backgroundPadding: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    showAnchorLine: false,
    horizontalAnchor: ANCHOR_POSITION,
    verticalAnchor: "middle",
    title: labelContent
  }));
};
exports.PieLabel = PieLabel;
//# sourceMappingURL=PieLabel.js.map