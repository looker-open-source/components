"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDimensionColumns = void 0;

var buildDimensionColumns = function buildDimensionColumns(dimensions) {
  return dimensions.map(function (dimension) {
    return {
      header: dimension.label,
      accessorFn: function accessorFn(data) {
        return data[dimension.name];
      },
      id: dimension.name
    };
  });
};
exports.buildDimensionColumns = buildDimensionColumns;
//# sourceMappingURL=buildDimensionColumns.js.map