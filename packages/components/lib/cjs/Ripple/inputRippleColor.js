"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputRippleColor = void 0;

var inputRippleColor = function inputRippleColor(checked, error) {
  if (error) {
    return 'critical';
  } else if (checked) {
    return 'key';
  } else {
    return 'neutral';
  }
};

exports.inputRippleColor = inputRippleColor;
//# sourceMappingURL=inputRippleColor.js.map