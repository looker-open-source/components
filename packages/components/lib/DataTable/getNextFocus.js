import { getTabStops } from '../utils';

const isTableHeaderCell = element => element.tagName === 'TH';

const isTableCell = element => isTableHeaderCell(element) || element.tagName === 'TD';

const isTableRow = element => element ? element.tagName === 'TR' : false;

const getCell = element => {
  if (element === null || isTableCell(element)) return element;
  return getCell(element.parentElement);
};

const getTargetCell = (targetRow, cellIndex) => {
  const targetCell = targetRow.cells[cellIndex];
  const focusableElementInside = targetCell.querySelector('[tabindex="-1"]');
  return focusableElementInside || targetCell;
};

const getCellInFirstRow = (cellIndex, section) => {
  const firstRow = section === null || section === void 0 ? void 0 : section.querySelector('tr');

  if (firstRow) {
    return getTargetCell(firstRow, cellIndex);
  }

  return null;
};

export const getNextFocus = (direction, element, vertical) => {
  const tabStops = getTabStops(element);

  if (tabStops.length > 0) {
    if (document.activeElement && tabStops.includes(document.activeElement)) {
      const _element = document.activeElement;

      if (vertical) {
        const cell = getCell(_element);
        const currentRow = cell === null || cell === void 0 ? void 0 : cell.parentElement;

        if (cell && isTableRow(currentRow)) {
          const cellIndex = cell.cellIndex;

          if (direction === -1) {
            var _currentRow$parentEle;

            if (isTableHeaderCell(cell)) {
              return null;
            }

            const previousRow = currentRow.previousElementSibling;

            if (isTableRow(previousRow)) {
              return getTargetCell(previousRow, cellIndex);
            }

            const thead = (_currentRow$parentEle = currentRow.parentElement) === null || _currentRow$parentEle === void 0 ? void 0 : _currentRow$parentEle.previousElementSibling;
            return getCellInFirstRow(cellIndex, thead);
          } else if (direction === 1) {
            if (isTableHeaderCell(cell)) {
              var _currentRow$parentEle2;

              const tbody = (_currentRow$parentEle2 = currentRow.parentElement) === null || _currentRow$parentEle2 === void 0 ? void 0 : _currentRow$parentEle2.nextElementSibling;
              return getCellInFirstRow(cellIndex, tbody);
            }

            const nextRow = currentRow.nextElementSibling;

            if (isTableRow(nextRow)) {
              return getTargetCell(nextRow, cellIndex);
            }

            return null;
          }
        }
      } else {
        var _tabStops$next;

        const next = tabStops.findIndex(el => el === document.activeElement) + direction;
        return ((_tabStops$next = tabStops[next]) === null || _tabStops$next === void 0 ? void 0 : _tabStops$next.closest('tr')) === document.activeElement.closest('tr') ? tabStops[next] : null;
      }
    }

    return tabStops[0];
  }

  return null;
};
//# sourceMappingURL=getNextFocus.js.map