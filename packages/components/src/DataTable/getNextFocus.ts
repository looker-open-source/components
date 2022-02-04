/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { getTabStops } from '../utils'

// Type guards
const isTableHeaderCell = (
  element: Element
): element is HTMLTableHeaderCellElement => element.tagName === 'TH'

const isTableCell = (
  element: Element
): element is HTMLTableCellElement | HTMLTableHeaderCellElement =>
  isTableHeaderCell(element) || element.tagName === 'TD'

const isTableRow = (element?: Element | null): element is HTMLTableRowElement =>
  element ? element.tagName === 'TR' : false

// Returns the table cell containing the focused element (button, link, input)
// or the focused element itself, if it's a table cell
const getCell = (
  element: Element | null
): HTMLTableHeaderCellElement | HTMLTableDataCellElement | null => {
  if (element === null || isTableCell(element)) return element
  return getCell(element.parentElement)
}

// Returns the cell above/below (or a focusable element in the cell)
const getTargetCell = (
  targetRow: HTMLTableRowElement,
  cellIndex: number
): HTMLElement | null => {
  const targetCell = targetRow.cells[cellIndex]
  // Do not use targetCell.tabIndex !== -1
  // it will return true if tabindex is not set
  const focusableElementInside = targetCell.querySelector('[tabindex="-1"]')
  return (focusableElementInside as HTMLElement) || targetCell
}

// Returns the cell/focusable element above/below
// if it's in another section (thead or tbody)
const getCellInFirstRow = (cellIndex: number, section?: Element | null) => {
  const firstRow = section?.querySelector('tr')
  if (firstRow) {
    return getTargetCell(firstRow, cellIndex)
  }
  return null
}

/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export const getNextFocus = (
  direction: 1 | -1,
  element: HTMLElement,
  vertical?: boolean
): HTMLElement | null => {
  const tabStops = getTabStops(element)
  if (tabStops.length > 0) {
    if (
      document.activeElement &&
      tabStops.includes(document.activeElement as HTMLElement)
    ) {
      const element = document.activeElement
      if (vertical) {
        const cell = getCell(element)
        const currentRow = cell?.parentElement
        if (cell && isTableRow(currentRow)) {
          const cellIndex = cell.cellIndex
          if (direction === -1) {
            // Up Arrow
            if (isTableHeaderCell(cell)) {
              // Currently only supporting one table header row,
              // do nothing on up arrow
              return null
            }
            const previousRow = currentRow.previousElementSibling
            if (isTableRow(previousRow)) {
              return getTargetCell(previousRow, cellIndex)
            }
            // If there's no previous row, go to the header row
            const thead = currentRow.parentElement?.previousElementSibling
            return getCellInFirstRow(cellIndex, thead)
          } else if (direction === 1) {
            // Down Arrow
            if (isTableHeaderCell(cell)) {
              // Currently only supporting one table header row,
              // look for the first tr in tbody
              const tbody = currentRow.parentElement?.nextElementSibling
              return getCellInFirstRow(cellIndex, tbody)
            }
            const nextRow = currentRow.nextElementSibling
            if (isTableRow(nextRow)) {
              return getTargetCell(nextRow, cellIndex)
            }
            return null
          }
        }
      } else {
        // check if tabStops[next] is in the same table row as document.activeElement and return null if it isn't.
        const next =
          tabStops.findIndex(el => el === document.activeElement) + direction
        return tabStops[next]?.closest('tr') ===
          document.activeElement.closest('tr')
          ? tabStops[next]
          : null
      }
    }
    return tabStops[0]
  }
  return null
}
