"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringComparator = exports.doDataTableSort = exports.dateComparator = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var stringComparator = function stringComparator(stringA, stringB) {
  var upperCasedStringA = stringA.toUpperCase();
  var upperCasedStringB = stringB.toUpperCase();
  if (upperCasedStringA < upperCasedStringB) return -1;
  if (upperCasedStringA > upperCasedStringB) return 1;
  return 0;
};

exports.stringComparator = stringComparator;

var dateComparator = function dateComparator(dateA, dateB) {
  if (dateA < dateB) return -1;
  if (dateA > dateB) return 1;
  return 0;
};

exports.dateComparator = dateComparator;

var doDataTableSort = function doDataTableSort(data, columns, id, sortDirection) {
  var sortedData = (0, _toConsumableArray2["default"])(data);
  var updatedColumns = (0, _toConsumableArray2["default"])(columns);
  var targetColumn = updatedColumns.find(function (column) {
    return column.id === id;
  });
  columns.forEach(function (column) {
    return delete column.sortDirection;
  });

  if (targetColumn) {
    if (targetColumn.type === 'number') {
      if (sortDirection === 'desc') {
        sortedData.sort(function (a, b) {
          return b[id] - a[id];
        });
      } else {
        sortedData.sort(function (a, b) {
          return a[id] - b[id];
        });
      }
    } else if (targetColumn.type === 'date') {
      if (sortDirection === 'desc') {
        sortedData.sort(function (a, b) {
          return dateComparator(b[id], a[id]);
        });
      } else {
        sortedData.sort(function (a, b) {
          return dateComparator(a[id], b[id]);
        });
      }
    } else {
      if (sortDirection === 'desc') {
        sortedData.sort(function (a, b) {
          return stringComparator(b[id], a[id]);
        });
      } else {
        sortedData.sort(function (a, b) {
          return stringComparator(a[id], b[id]);
        });
      }
    }

    targetColumn.sortDirection = sortDirection;
  }

  return {
    columns: updatedColumns,
    data: sortedData
  };
};

exports.doDataTableSort = doDataTableSort;
//# sourceMappingURL=sort_utils.js.map