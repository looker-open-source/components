"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDateQuery = void 0;

var isDateQuery = function isDateQuery(fields) {
  return fields.dimensions.length === 1 && fields.dimensions[0].is_timeframe;
};
exports.isDateQuery = isDateQuery;
//# sourceMappingURL=isDateQuery.js.map