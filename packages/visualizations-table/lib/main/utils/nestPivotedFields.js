"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nestPivotedFields = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _reactTable = require("@tanstack/react-table");

var nestPivotedFields = function nestPivotedFields(_ref) {
  var _ref$pivotList = _ref.pivotList,
    pivotList = _ref$pivotList === void 0 ? [] : _ref$pivotList,
    pivotIndex = _ref.pivotIndex,
    nestedPivots = _ref.nestedPivots,
    pivotValues = _ref.pivotValues;
  var columnHelper = (0, _reactTable.createColumnHelper)();
  var pivot = pivotList[pivotIndex];
  if (pivot) {
    var _pivotValues$labels$p;
    var _ref3 = pivotValues ? {
        id: "".concat(pivot.name, " - ").concat(pivotValues === null || pivotValues === void 0 ? void 0 : pivotValues.data[pivot.name]),
        header: pivotValues === null || pivotValues === void 0 ? void 0 : (_pivotValues$labels$p = pivotValues.labels[pivot.name]) === null || _pivotValues$labels$p === void 0 ? void 0 : _pivotValues$labels$p.replace(/(<([^>]+)>)/gi, '')
      } : {
        id: pivot.name,
        header: pivot.label
      },
      id = _ref3.id,
      header = _ref3.header;
    return nestPivotedFields({
      pivotList: pivotList,
      pivotIndex: pivotIndex + 1,
      nestedPivots: columnHelper.group({
        id: id,
        header: header,
        columns: (0, _toConsumableArray2["default"])(Array.isArray(nestedPivots) ? nestedPivots : [nestedPivots])
      }),
      pivotValues: pivotValues
    });
  }

  if (Array.isArray(nestedPivots)) {
    return columnHelper.group({
      id: "pivot-field-".concat(pivotIndex),
      columns: nestedPivots
    });
  }
  return nestedPivots;
};
exports.nestPivotedFields = nestPivotedFields;
//# sourceMappingURL=nestPivotedFields.js.map