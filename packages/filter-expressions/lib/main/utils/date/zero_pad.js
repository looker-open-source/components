"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroPad4 = exports.zeroPad2 = exports.zeroPad = void 0;
var _padStart = _interopRequireDefault(require("lodash/padStart"));

var zeroPad = function zeroPad(length) {
  return function (value) {
    return (0, _padStart["default"])(String(value), length, '0');
  };
};
exports.zeroPad = zeroPad;
var zeroPad2 = zeroPad(2);
exports.zeroPad2 = zeroPad2;
var zeroPad4 = zeroPad(4);
exports.zeroPad4 = zeroPad4;
//# sourceMappingURL=zero_pad.js.map