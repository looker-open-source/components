"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _2 = require("../../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default() {
  return _react["default"].createElement(_2.SpaceVertical, null, _react["default"].createElement(_.InputDate, {
    value: new Date('February 3, 2009')
  }), _react["default"].createElement(_.InputDate, {
    defaultValue: new Date('June 3, 2019')
  }));
};
exports["default"] = _default;
//# sourceMappingURL=ValueAndDefaultValue.js.map