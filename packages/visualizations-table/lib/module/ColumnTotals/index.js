
import React from 'react';
import get from 'lodash/get';
import numeral from 'numeral';
import { TableHeadCell } from '../TableHeadCell';
import { useTranslation, normalizeHeaderColumns } from '../utils';

export const ColumnTotals = ({
  totals,
  config,
  fields,
  virtualizerAssets,
  table
}) => {
  var _headerGroups$at;
  const {
    OffsetLeft,
    virtualColumns
  } = virtualizerAssets;
  const {
    t
  } = useTranslation('Table');
  const {
    show_totals,
    show_row_numbers,
    series = {}
  } = config;
  const totalsText = t('Totals');
  const headerGroups = normalizeHeaderColumns(table);
  const lastHeaderRow = (_headerGroups$at = headerGroups.at(-1)) === null || _headerGroups$at === void 0 ? void 0 : _headerGroups$at.headers;
  return show_totals && totals && lastHeaderRow ? React.createElement("tr", null, React.createElement(OffsetLeft, null), show_row_numbers ? React.createElement(TableHeadCell, {
    stickyLeft: true
  }, totalsText) : undefined, virtualColumns.map(({
    index: columnIndex
  }) => {
    const header = lastHeaderRow[columnIndex];
    if (!show_row_numbers && columnIndex === 0) {
      return React.createElement(TableHeadCell, {
        key: "totals-label"
      }, totalsText);
    } else if (header && columnIndex >= 0) {
      const measureIndex = fields.measures.findIndex(m => m.name === header.id);
      const valueFormat = Array.isArray(series) ? get(series, [measureIndex, 'value_format']) : get(series, [header.id, 'value_format']);
      return React.createElement(TableHeadCell, {
        key: `${header.id || null}-foot`
      }, valueFormat ? numeral(Number(totals[header.id])).format(valueFormat) : totals[header.id] || null);
    }
    return null;
  })) : null;
};
//# sourceMappingURL=index.js.map