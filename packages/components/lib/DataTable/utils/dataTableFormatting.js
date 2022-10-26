let _ = t => t,
    _t,
    _t2;

import { css } from 'styled-components';
import { SpaceVertical } from '../../Layout/Space';
import { DataTableCell } from '..';

function filterUndefined(t) {
  return t !== undefined;
}

export const getNumericColumnIndices = (columns, visibleColumns) => columns.filter(c => visibleColumns.includes(c.id) || c.hide === undefined).map((c, index) => c.type === 'number' ? index + 1 : undefined).filter(filterUndefined);
export const numericColumnCSS = columnIndices => css(_t || (_t = _`
    ${0}
  `), columnIndices.map(columnIndex => css(_t2 || (_t2 = _`
          ${0}:nth-child(${0}) {
            text-align: right;
            ${0} {
              flex-direction: row-reverse;
            }
          }
        `), DataTableCell, columnIndex + 1, SpaceVertical)));
//# sourceMappingURL=dataTableFormatting.js.map