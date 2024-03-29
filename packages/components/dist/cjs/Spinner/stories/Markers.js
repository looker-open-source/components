"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Markers;
var _react = _interopRequireDefault(require("react"));
var _Spinner = require("../Spinner");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Markers() {
  return _react["default"].createElement(_Spinner.Spinner, {
    markers: 20,
    markerRadius: 50
  });
}
//# sourceMappingURL=Markers.js.map