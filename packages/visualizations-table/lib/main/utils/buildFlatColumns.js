"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFlatColumns = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _ = require(".");

var buildFlatColumns = function buildFlatColumns(_ref) {
  var fields = _ref.fields,
    config = _ref.config;
  return [].concat((0, _toConsumableArray2["default"])((0, _.buildDimensionColumns)(fields.dimensions)), (0, _toConsumableArray2["default"])(Object.values((0, _.buildMeasureColumns)(fields.measures, config)).flat()));
};
exports.buildFlatColumns = buildFlatColumns;
//# sourceMappingURL=buildFlatColumns.js.map