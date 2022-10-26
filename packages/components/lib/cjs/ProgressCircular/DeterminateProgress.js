"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeterminateProgress = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ProgressSvg = require("./ProgressSvg");

var _size = require("./size");

var _templateObject, _templateObject2;

var DeterminateProgress = function DeterminateProgress(_ref) {
  var size = _ref.size,
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress;

  var _progressCircularSVG = (0, _size.progressCircularSVG)({
    size: size
  }),
      stroke = _progressCircularSVG.stroke,
      half = _progressCircularSVG.half,
      radius = _progressCircularSVG.radius,
      dashArray = _progressCircularSVG.dashArray;

  var progressOffset = (1 - progress) * (2 * Math.PI * radius);
  return _react["default"].createElement(DeterminateContainer, null, _react["default"].createElement(_ProgressSvg.CircleContainer, {
    viewBox: "0 0 ".concat(half * 2, " ").concat(half * 2),
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement(DeterminateCircle, {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: progressOffset,
    strokeWidth: stroke
  })));
};

exports.DeterminateProgress = DeterminateProgress;

var DeterminateContainer = _styledComponents["default"].div.withConfig({
  displayName: "DeterminateProgress__DeterminateContainer",
  componentId: "sc-yb0ja2-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100%;\n  position: absolute;\n  transform: rotate(-90deg);\n  width: 100%;\n"])));

var DeterminateCircle = _styledComponents["default"].circle.withConfig({
  displayName: "DeterminateProgress__DeterminateCircle",
  componentId: "sc-yb0ja2-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  stroke: ", ";\n  transition: stroke-dashoffset 500ms;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.key;
});
//# sourceMappingURL=DeterminateProgress.js.map