"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressCircular = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IndeterminateProgress = require("./IndeterminateProgress");

var _DeterminateProgress = require("./DeterminateProgress");

var _size = require("./size");

var _templateObject;

var _excluded = ["size", "progress", "label"];

var ProgressCircular = function ProgressCircular(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      progress = _ref.progress,
      label = _ref.label,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(ProgressContainer, (0, _extends2["default"])({
    size: size,
    role: "progressbar",
    "aria-label": label || undefined,
    "aria-valuemin": 0,
    "aria-valuemax": 1,
    "aria-valuenow": progress || undefined
  }, props), progress !== undefined ? _react["default"].createElement(_DeterminateProgress.DeterminateProgress, {
    size: size,
    progress: progress
  }) : _react["default"].createElement(_IndeterminateProgress.IndeterminateProgress, {
    size: size
  }));
};

exports.ProgressCircular = ProgressCircular;

var ProgressContainer = _styledComponents["default"].div.withConfig({
  displayName: "ProgressCircular__ProgressContainer",
  componentId: "sc-1yq3gkc-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  display: inline-flex;\n  position: relative;\n"])), _size.progressCircularSize);
//# sourceMappingURL=ProgressCircular.js.map