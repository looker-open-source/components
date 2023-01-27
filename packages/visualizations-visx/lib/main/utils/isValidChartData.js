"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidChartData = void 0;

var isValidChartData = function isValidChartData(data, fields) {
  return (data === null || data === void 0 ? void 0 : data.length) && (fields === null || fields === void 0 ? void 0 : fields.measures.length);
};
exports.isValidChartData = isValidChartData;
//# sourceMappingURL=isValidChartData.js.map