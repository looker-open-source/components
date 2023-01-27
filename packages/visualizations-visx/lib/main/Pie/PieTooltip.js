"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieTooltip = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _tooltip = require("@visx/tooltip");
var _components = require("@looker/components");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _XYTooltip = require("../XYTooltip");
var _DLGroup = require("../DLGroup");
var _templateObject;
var PieTooltip = (0, _styledComponents["default"])(function (_ref) {
  var tooltipOpen = _ref.tooltipOpen,
    tooltipData = _ref.tooltipData,
    tooltipTop = _ref.tooltipTop,
    tooltipLeft = _ref.tooltipLeft,
    measure = _ref.measure,
    dimension = _ref.dimension,
    className = _ref.className;
  if (tooltipOpen && tooltipData) {
    return _react["default"].createElement(_tooltip.TooltipWithBounds, {
      className: className,
      top: tooltipTop,
      left: tooltipLeft,
      unstyled: true,
      applyPositionStyle: true
    }, _react["default"].createElement("dl", null, _react["default"].createElement(_components.SpaceVertical, {
      gap: "u3"
    }, _react["default"].createElement(_DLGroup.DLGroup, {
      value: tooltipData[dimension.name]
    }), _react["default"].createElement(_DLGroup.DLGroup, {
      label: measure.label || measure.label_short,
      value: tooltipData[measure.name]
    }))));
  }
  return null;
}).withConfig({
  displayName: "PieTooltip",
  componentId: "sc-1vkcacc-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _XYTooltip.tooltipStyles);
exports.PieTooltip = PieTooltip;
//# sourceMappingURL=PieTooltip.js.map