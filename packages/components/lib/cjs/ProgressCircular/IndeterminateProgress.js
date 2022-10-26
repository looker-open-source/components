"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndeterminateProgress = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _size = require("./size");

var _constants = require("./constants");

var _ProgressSvg = require("./ProgressSvg");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IndeterminateProgress = function IndeterminateProgress(_ref) {
  var size = _ref.size;

  var _progressCircularSVG = (0, _size.progressCircularSVG)({
    size: size
  }),
      stroke = _progressCircularSVG.stroke,
      half = _progressCircularSVG.half,
      radius = _progressCircularSVG.radius,
      dashArray = _progressCircularSVG.dashArray,
      dashOffset = _progressCircularSVG.dashOffset;

  return _react["default"].createElement(IndeterminateContainer, null, _react["default"].createElement(IndeterminateSpinner, null, _react["default"].createElement(CircleClipper, null, _react["default"].createElement(LeftCircleContainer, {
    viewBox: "0 0 ".concat(half * 2, " ").concat(half * 2),
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("circle", {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset,
    strokeWidth: stroke
  }))), _react["default"].createElement(GapPatch, null, _react["default"].createElement(_ProgressSvg.CircleContainer, {
    viewBox: "0 0 ".concat(half * 2, " ").concat(half * 2),
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("circle", {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset,
    strokeWidth: stroke - 0.6
  }))), _react["default"].createElement(CircleClipper, null, _react["default"].createElement(RightCircleContainer, {
    viewBox: "0 0 ".concat(half * 2, " ").concat(half * 2),
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("circle", {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset,
    strokeWidth: stroke
  })))));
};

exports.IndeterminateProgress = IndeterminateProgress;
var containerRotate = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  to {\n    transform: rotate(360deg);\n  }\n"])));

var spinnerRotateAnimations = function spinnerRotateAnimations() {
  return (0, _toConsumableArray2["default"])(Array(9)).map(function (_, i) {
    return "".concat(i * 12.5, "% {transform: rotate(").concat(i * 0.5 * _constants.progressCircularConstants.arcSize, "deg)}");
  });
};

var spinnerKeyFrames = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), spinnerRotateAnimations().join('\n'));

var containerAnimation = function containerAnimation() {
  var duration = 360 * _constants.progressCircularConstants.arcTime / (_constants.progressCircularConstants.arcStartRotationInterval + (360 - _constants.progressCircularConstants.arcSize));
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    animation: ", " ", "ms linear infinite;\n  "])), containerRotate, duration);
};

var leftSpin = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n      transform: rotate(265deg);\n    }\n    50% {\n      transform: rotate(130deg);\n    }\n    to {\n      transform: rotate(265deg);\n    }\n"])));
var rightSpin = (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\nfrom {\n      transform: rotate(-265deg);\n    }\n    50% {\n      transform: rotate(-130deg);\n    }\n    to {\n      transform: rotate(-265deg);\n    }\n"])));

var IndeterminateSpinner = _styledComponents["default"].div.withConfig({
  displayName: "IndeterminateProgress__IndeterminateSpinner",
  componentId: "sc-1vb6yjx-0"
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100%;\n  position: absolute;\n  width: 100%;\n"])));

var IndeterminateContainer = _styledComponents["default"].div.withConfig({
  displayName: "IndeterminateProgress__IndeterminateContainer",
  componentId: "sc-1vb6yjx-1"
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 0;\n  height: 100%;\n  letter-spacing: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 100%;\n\n  ", "\n\n  ", " {\n    /* stylelint-disable */\n    animation: ", " ", "ms\n      ", " infinite both;\n    /* stylelint-enable */\n  }\n"])), containerAnimation, IndeterminateSpinner, spinnerKeyFrames, _constants.progressCircularConstants.arcTime * 4, _constants.progressCircularConstants.timingFunction);

var LeftCircleContainer = (0, _styledComponents["default"])(_ProgressSvg.CircleContainer).withConfig({
  displayName: "IndeterminateProgress__LeftCircleContainer",
  componentId: "sc-1vb6yjx-2"
})(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  animation-name: ", ";\n"])), leftSpin);
var RightCircleContainer = (0, _styledComponents["default"])(_ProgressSvg.CircleContainer).withConfig({
  displayName: "IndeterminateProgress__RightCircleContainer",
  componentId: "sc-1vb6yjx-3"
})(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  animation-name: ", ";\n  left: -100%;\n"])), rightSpin);

var CircleClipper = _styledComponents["default"].div.withConfig({
  displayName: "IndeterminateProgress__CircleClipper",
  componentId: "sc-1vb6yjx-4"
})(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 50%;\n\n  ", " {\n    animation-duration: ", "ms;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite;\n    animation-timing-function: ", ";\n    width: 200%;\n  }\n"])), _ProgressSvg.CircleContainer, _constants.progressCircularConstants.arcTime, _constants.progressCircularConstants.timingFunction);

var GapPatch = _styledComponents["default"].div.withConfig({
  displayName: "IndeterminateProgress__GapPatch",
  componentId: "sc-1vb6yjx-5"
})(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: border-box;\n  height: 100%;\n  left: 47.5%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 5%;\n\n  ", " {\n    left: -900%;\n    transform: rotate(180deg);\n    width: 2000%;\n  }\n"])), _ProgressSvg.CircleContainer);
//# sourceMappingURL=IndeterminateProgress.js.map