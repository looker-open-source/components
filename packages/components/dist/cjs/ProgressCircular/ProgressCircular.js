"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressCircular = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _IndeterminateProgress = require("./IndeterminateProgress");
var _DeterminateProgress = require("./DeterminateProgress");
var _size = require("./size");
var _templateObject;
var _excluded = ["size", "progress", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ProgressCircular = function ProgressCircular(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'large' : _ref$size,
    progress = _ref.progress,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(ProgressContainer, _extends({
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  display: inline-flex;\n  position: relative;\n"])), _size.progressCircularSize);
//# sourceMappingURL=ProgressCircular.js.map