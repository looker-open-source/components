"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTruncateTooltip = void 0;
var _react = _interopRequireDefault(require("react"));
var _Span = require("../Text/Span");
var _Tooltip = require("../Tooltip");
var _utils = require("../utils");

var useTruncateTooltip = function useTruncateTooltip(_ref) {
  var children = _ref.children,
    description = _ref.description,
    element = _ref.element;
  return (0, _Tooltip.useTooltip)({
    canOpen: function canOpen(triggerElement) {
      return description !== undefined || (0, _utils.isOverflowing)(element || triggerElement);
    },
    content: _react["default"].createElement(_react["default"].Fragment, null, children, description && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("br", null), _react["default"].createElement(_Span.Span, {
      color: "text2"
    }, description))),
    invert: false,
    placement: 'top-start',
    textAlign: 'left',
    width: 'auto'
  });
};
exports.useTruncateTooltip = useTruncateTooltip;
//# sourceMappingURL=useTruncateTooltip.js.map