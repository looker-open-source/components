"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleChevronRightDimensions = exports.DoubleChevronRight = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var DoubleChevronRight = _react["default"].forwardRef(function (props, ref) {
  var attrs = {
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg'
  };
  return _react["default"].createElement(_styledIcon.StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), _react["default"].createElement("path", {
    d: "M6 16.59L10.58 12L6 7.41L7.41 6L13.41 12L7.41 18L6 16.59Z"
  }), _react["default"].createElement("path", {
    d: "M11 16.59L15.58 12L11 7.41L12.41 6L18.41 12L12.41 18L11 16.59Z"
  }));
});
exports.DoubleChevronRight = DoubleChevronRight;
DoubleChevronRight.displayName = 'DoubleChevronRight';
var DoubleChevronRightDimensions = {
  height: 24,
  width: 24
};
exports.DoubleChevronRightDimensions = DoubleChevronRightDimensions;
//# sourceMappingURL=DoubleChevronRight.js.map