"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;
var _react = _interopRequireDefault(require("react"));
var _xychart = require("@visx/xychart");
var _every = _interopRequireDefault(require("lodash/every"));

var Grid = function Grid(_ref) {
  var config = _ref.config;
  var x_axis = (config === null || config === void 0 ? void 0 : config.x_axis) || [];
  var y_axis = (config === null || config === void 0 ? void 0 : config.y_axis) || [];
  var showGridX = (0, _every["default"])(x_axis, ['gridlines', true]);
  var showGridY = (0, _every["default"])(y_axis, ['gridlines', true]);
  return _react["default"].createElement(_xychart.Grid, {
    rows: showGridY,
    columns: showGridX
  });
};
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map