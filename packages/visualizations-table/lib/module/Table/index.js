import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8,
  _t9,
  _t10,
  _t11;
const _excluded = ["column", "getContext"],
  _excluded2 = ["truncateHeader"];

import React, { useRef } from 'react';
import { getSeriesMax, getSeriesMin, DEFAULT_HEIGHT, DEFAULT_EMPTY_FIELDS } from '@looker/visualizations-adapters';
import { flexRender } from '@tanstack/react-table';
import styled, { css } from 'styled-components';
import { IconButton, Truncate, Box, Grid } from '@looker/components';
import { useHeadlessTable, useVirtual } from '../hooks';
import { useTranslation, getSortAssets, normalizeHeaderColumns } from '../utils';
import { CellVisualization } from '../CellVisualization';
import { ColumnTotals } from '../ColumnTotals';
import { TableCell } from '../TableCell';
import { TableHeadCell } from '../TableHeadCell';
import numeral from 'numeral';
import get from 'lodash/get';
export const Table = ({
  config: _config = {
    column_order: [],
    show_row_numbers: true,
    type: 'table'
  },
  data: _data = [],
  fields: _fields = DEFAULT_EMPTY_FIELDS,
  height: _height = DEFAULT_HEIGHT,
  pivots,
  width,
  totals,
  defaultRowHeight
}) => {
  const {
    t
  } = useTranslation('Table');
  const scrollContainer = useRef(null);
  const {
    table,
    sorting,
    handleTableSort
  } = useHeadlessTable({
    data: _data,
    config: _config,
    fields: _fields,
    pivots
  });
  const tableRows = table.getRowModel().rows;
  const dataToVirtualize = tableRows.map(row => row.getVisibleCells());
  const virtualizerAssets = useVirtual({
    data: dataToVirtualize,
    scrollContainer,
    defaultRowHeight
  });
  const {
    virtualRows,
    virtualColumns,
    OffsetTop,
    OffsetBottom,
    OffsetLeft,
    OffsetRight
  } = virtualizerAssets;
  const {
    series = {},
    show_row_numbers,
    truncate_text,
    truncate_header
  } = _config;
  const seriesMinMax = Object.fromEntries(_fields.measures.map(({
    name
  }) => {
    const min = getSeriesMin(name, _data);
    const max = getSeriesMax(name, _data);
    return [name, {
      min,
      max
    }];
  }));
  const headerGroups = normalizeHeaderColumns(table);
  const rowNumWidth = String(_data.length).length * 10;
  return React.createElement(ScrollWrapper, {
    width: width,
    height: _height,
    ref: scrollContainer
  }, React.createElement(TableElement, {
    cellSpacing: "0"
  }, React.createElement(THead, null, headerGroups.map((headerGroup, i) => {
    return React.createElement("tr", {
      key: `theadRow${i}`
    }, React.createElement(OffsetLeft, {
      as: "th"
    }), show_row_numbers ? React.createElement(TableHeadCell, {
      stickyLeft: true
    }, React.createElement(PlaceholderElement, {
      width: rowNumWidth
    })) : undefined, virtualColumns.map(({
      index: columnIndex,
      measureElement,
      size
    }) => {
      const header = headerGroup.headers[columnIndex];
      if (header) {
        const {
          header: headerContent
        } = header.column.columnDef;
        const columnSortState = sorting.find(s => s.id === header.id);
        const {
          SortIcon,
          sortText,
          ariaSort
        } = getSortAssets(t, columnSortState);
        return React.createElement(TableHeadCell, {
          key: header.id,
          colSpan: header.colSpan,
          "aria-sort": ariaSort
        }, React.createElement(TableHeadLayout, {
          sortButtonDefaultVisible: !!columnSortState,
          ref: measureElement,
          width: size
        }, React.createElement(HeaderContentWrapper, {
          truncateHeader: !!truncate_header,
          "data-testid": "columnheader-label"
        }, flexRender(headerContent, header.getContext())), i === headerGroups.length - 1 && React.createElement(IconButton, {
          icon: React.createElement(SortIcon, null),
          label: sortText,
          outline: true,
          shape: "square",
          size: "xxsmall",
          onClick: e => handleTableSort(header, e)
        })));
      } else {
        return null;
      }
    }), React.createElement(OffsetRight, {
      as: "th"
    }));
  })), React.createElement(TBody, null, React.createElement(OffsetTop, null), virtualRows.map(({
    index: rowIndex,
    measureElement,
    size
  }) => {
    const tableRow = tableRows[rowIndex];
    return React.createElement(TableRow, {
      key: tableRow.id,
      ref: measureElement,
      height: size
    }, React.createElement(OffsetLeft, null), show_row_numbers ? React.createElement(TableCell, {
      stickyLeft: true
    }, rowIndex + 1) : undefined, virtualColumns.map(({
      index: columnIndex
    }) => {
      const _dataToVirtualize$row = dataToVirtualize[rowIndex][columnIndex],
        {
          column,
          getContext
        } = _dataToVirtualize$row,
        cell = _objectWithoutProperties(_dataToVirtualize$row, _excluded);
      const measureIndex = _fields.measures.findIndex(m => m.name === column.id);
      const columnConfig = Array.isArray(series) ? series[measureIndex] : series[column.id];
      const {
        cell: cellContent
      } = column.columnDef;
      const {
        max,
        min
      } = (seriesMinMax === null || seriesMinMax === void 0 ? void 0 : seriesMinMax[column.id]) || {
        max: Infinity,
        min: 0
      };
      const valueFormat = Array.isArray(series) ? get(series, [measureIndex, 'value_format']) : get(series, [column.id, 'value_format']);
      const CellValue = cell.getValue();
      return React.createElement(TableCell, {
        key: cell.id
      }, typeof CellValue === 'function' ? React.createElement(CellValue, null) : React.createElement(CellContentLayout, null, columnConfig !== null && columnConfig !== void 0 && columnConfig.cell_visualization ? React.createElement(CellVisualization, {
        color: columnConfig.color,
        min: min,
        max: max,
        value: Number(cell.getValue())
      }) : null, React.createElement(CellContentWrapper, {
        truncateText: !!truncate_text
      }, valueFormat ? numeral(Number(cell.getValue())).format(valueFormat) : flexRender(cellContent, getContext()))));
    }));
  }), React.createElement(OffsetBottom, null)), React.createElement(TFoot, null, React.createElement(ColumnTotals, {
    totals: totals,
    config: _config,
    fields: _fields,
    virtualizerAssets: virtualizerAssets,
    table: table
  }))));
};

const CellContentWrapper = ({
  children,
  truncateText
}) => truncateText ? React.createElement(Grid, {
  columns: 1,
  width: "auto"
}, React.createElement(Truncate, null, children)) : React.createElement(React.Fragment, null, children);

const HeaderContentWrapper = _ref => {
  let {
      truncateHeader
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded2);
  return truncateHeader ? React.createElement(Truncate, props) : React.createElement(Box, props);
};
const PlaceholderElement = styled.div.attrs(({
  width
}) => ({
  style: {
    minWidth: width
  }
}))(_t || (_t = _``));
const ScrollWrapper = styled.div(_t2 || (_t2 = _`
  max-height: ${0};
  overflow: auto;
  max-width: ${0};
  position: relative;
`), ({
  height
}) => `${height}px`, ({
  width
}) => width ? `${width}px` : `100%`);
const TableElement = styled.table(_t3 || (_t3 = _`
  width: 100%;
  color: ${0};
  font-family: ${0};
`), ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.fonts.body);
const THead = styled.thead(_t4 || (_t4 = _`
  top: 0;
  position: sticky;
  z-index: 1;
`));
const TFoot = styled.tfoot(_t5 || (_t5 = _`
  position: sticky;
  bottom: 0px;
`));
const TBody = styled.tbody(_t6 || (_t6 = _`
  position: relative;
  z-index: 0;
`));
const TableRow = styled.tr.attrs(({
  height
}) => ({
  height
}))(_t7 || (_t7 = _`
  :nth-child(even) {
    ${0} {
      background-color: ${0};
    }
  }
  :nth-child(odd) {
    ${0} {
      background-color: ${0};
    }
  }
`), TableCell, ({
  theme
}) => theme.colors.ui1, TableCell, ({
  theme
}) => theme.colors.background);
const CellContentLayout = styled.div(_t8 || (_t8 = _`
  align-items: center;
  display: flex;
  gap: ${0};
`), ({
  theme
}) => theme.space.xxsmall);
const TableHeadLayout = styled.div.attrs(({
  width
}) => ({
  style: {
    minWidth: width
  }
}))(_t9 || (_t9 = _`
  display: grid;
  grid-template-columns: minMax(${0}, 1fr) auto;
  grid-gap: ${0};
  ${0} {
    ${0}
  }
  &:hover {
    ${0} {
      visibility: visible;
    }
  }
`), ({
  theme
}) => theme.space.u16, ({
  theme
}) => theme.space.xxsmall, IconButton, ({
  sortButtonDefaultVisible
}) => sortButtonDefaultVisible ? css(_t10 || (_t10 = _`
            visibility: visible;
          `)) : css(_t11 || (_t11 = _`
            visibility: hidden;
          `)), IconButton);
//# sourceMappingURL=index.js.map