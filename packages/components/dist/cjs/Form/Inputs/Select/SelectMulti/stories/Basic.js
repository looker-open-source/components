"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Basic(props) {
  return _react["default"].createElement(_.SelectMulti, _extends({
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }, {
      value: 'Mascarpone'
    }, {
      value: 'Brie'
    }, {
      value: 'Mozzarella'
    }, {
      value: 'Cotija'
    }, {
      value: 'Pepperjack'
    }],
    placeholder: "Cheeses",
    flex: 1
  }, props));
}
//# sourceMappingURL=Basic.js.map