"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortByDateTime = void 0;
var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var sortByDateTime = function sortByDateTime(_ref) {
  var _fields$dimensions;
  var data = _ref.data,
    fields = _ref.fields,
    config = _ref.config;
  var dimension = fields.dimensions[0];
  var draftData = Array.from(data);
  var isTimeframeDataset = (fields === null || fields === void 0 ? void 0 : (_fields$dimensions = fields.dimensions) === null || _fields$dimensions === void 0 ? void 0 : _fields$dimensions.length) === 1 && dimension.is_timeframe;
  return {
    data: isTimeframeDataset ? (0, _sortBy["default"])(draftData, [function (d) {
      return new Date(d[dimension.name]);
    }]) : draftData,
    fields: fields,
    config: config
  };
};
exports.sortByDateTime = sortByDateTime;
//# sourceMappingURL=sortByDateTime.js.map