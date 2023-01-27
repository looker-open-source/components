"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xAxisReversed = void 0;

var xAxisReversed = function xAxisReversed(_ref) {
  var _x_axis;
  var data = _ref.data,
    fields = _ref.fields,
    config = _ref.config;
  var xAxisReversed = config === null || config === void 0 ? void 0 : (_x_axis = config.x_axis) === null || _x_axis === void 0 ? void 0 : _x_axis[0].reversed;
  var dataCopy = xAxisReversed ? data.slice().reverse() : data;
  return {
    data: dataCopy,
    fields: fields,
    config: config
  };
};
exports.xAxisReversed = xAxisReversed;
//# sourceMappingURL=xAxisReversed.js.map