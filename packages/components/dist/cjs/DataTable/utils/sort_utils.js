"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringComparator = exports.doDataTableSort = exports.dateComparator = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  var sortedData = _toConsumableArray(data);
  var updatedColumns = _toConsumableArray(columns);
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