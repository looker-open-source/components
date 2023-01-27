"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeParameterValue = void 0;

var escapeParameterValue = function escapeParameterValue(value) {
  return value.replace(/([\^_%,"']|^-)/g, '^$1');
};
exports.escapeParameterValue = escapeParameterValue;
//# sourceMappingURL=escape_parameter_value.js.map