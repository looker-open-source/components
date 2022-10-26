"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextFocus = void 0;

var _utils = require("../utils");

var isTableHeaderCell = function isTableHeaderCell(element) {
  return element.tagName === 'TH';
};

var isTableCell = function isTableCell(element) {
  return isTableHeaderCell(element) || element.tagName === 'TD';
};

var isTableRow = function isTableRow(element) {
  return element ? element.tagName === 'TR' : false;
};

var getCell = function getCell(element) {
  if (element === null || isTableCell(element)) return element;
  return getCell(element.parentElement);
};

var getTargetCell = function getTargetCell(targetRow, cellIndex) {
  var targetCell = targetRow.cells[cellIndex];
  var focusableElementInside = targetCell.querySelector('[tabindex="-1"]');
  return focusableElementInside || targetCell;
};

var getCellInFirstRow = function getCellInFirstRow(cellIndex, section) {
  var firstRow = section === null || section === void 0 ? void 0 : section.querySelector('tr');

  if (firstRow) {
    return getTargetCell(firstRow, cellIndex);
  }

  return null;
};

var getNextFocus = function getNextFocus(direction, element, vertical) {
  var tabStops = (0, _utils.getTabStops)(element);

  if (tabStops.length > 0) {
    if (document.activeElement && tabStops.includes(document.activeElement)) {
      var _element = document.activeElement;

      if (vertical) {
        var cell = getCell(_element);
        var currentRow = cell === null || cell === void 0 ? void 0 : cell.parentElement;

        if (cell && isTableRow(currentRow)) {
          var cellIndex = cell.cellIndex;

          if (direction === -1) {
            var _currentRow$parentEle;

            if (isTableHeaderCell(cell)) {
              return null;
            }

            var previousRow = currentRow.previousElementSibling;

            if (isTableRow(previousRow)) {
              return getTargetCell(previousRow, cellIndex);
            }

            var thead = (_currentRow$parentEle = currentRow.parentElement) === null || _currentRow$parentEle === void 0 ? void 0 : _currentRow$parentEle.previousElementSibling;
            return getCellInFirstRow(cellIndex, thead);
          } else if (direction === 1) {
            if (isTableHeaderCell(cell)) {
              var _currentRow$parentEle2;

              var tbody = (_currentRow$parentEle2 = currentRow.parentElement) === null || _currentRow$parentEle2 === void 0 ? void 0 : _currentRow$parentEle2.nextElementSibling;
              return getCellInFirstRow(cellIndex, tbody);
            }

            var nextRow = currentRow.nextElementSibling;

            if (isTableRow(nextRow)) {
              return getTargetCell(nextRow, cellIndex);
            }

            return null;
          }
        }
      } else {
        var _tabStops$next;

        var next = tabStops.findIndex(function (el) {
          return el === document.activeElement;
        }) + direction;
        return ((_tabStops$next = tabStops[next]) === null || _tabStops$next === void 0 ? void 0 : _tabStops$next.closest('tr')) === document.activeElement.closest('tr') ? tabStops[next] : null;
      }
    }

    return tabStops[0];
  }

  return null;
};

exports.getNextFocus = getNextFocus;
//# sourceMappingURL=getNextFocus.js.map