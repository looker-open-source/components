"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMeasureNames = void 0;
var _ = require(".");

var getMeasureNames = function getMeasureNames() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_EMPTY_FIELDS;
  var _fields$measures = fields.measures,
    measures = _fields$measures === void 0 ? [] : _fields$measures;
  return measures.map(function (field) {
    return field.name;
  });
};
exports.getMeasureNames = getMeasureNames;
//# sourceMappingURL=getMeasureNames.js.map