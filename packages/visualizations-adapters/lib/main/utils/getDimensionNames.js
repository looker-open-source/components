"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensionNames = void 0;
var _ = require(".");

var getDimensionNames = function getDimensionNames() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_EMPTY_FIELDS;
  var _fields$dimensions = fields.dimensions,
    dimensions = _fields$dimensions === void 0 ? [] : _fields$dimensions;
  return dimensions.map(function (field) {
    return field.name;
  });
};
exports.getDimensionNames = getDimensionNames;
//# sourceMappingURL=getDimensionNames.js.map