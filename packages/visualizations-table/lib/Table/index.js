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
    _t11,
    _t12,
    _t13,
    _t14;

const _excluded = ["column", "getContext"],
      _excluded2 = ["truncateHeader"];
import React, { useRef } from 'react';
import { getSeriesMax, getSeriesMin, DEFAULT_HEIGHT, DEFAULT_EMPTY_FIELDS } from '@looker/visualizations-adapters';
import { flexRender } from '@tanstack/react-table';
import styled, { css } from 'styled-components';
import { IconButton, Truncate, Box, Grid } from '@looker/components';
import { useHeadlessTable, useVirtual } from '../hooks';
import { useTranslation, getSortAssets } from '../utils';
import { CellVisualization } from '../CellVisualization';
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
    virtualRows,
    OffsetTop,
    OffsetBottom
  } = useVirtual({
    data: _data,
    scrollContainer,
    defaultRowHeight
  });
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
  const {
    series = {},
    show_row_numbers,
    truncate_text,
    truncate_header,
    show_totals = false
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
  const headerGroups = table.getHeaderGroups();
  const rowNumWidth = String(_data.length).length * 14;
  return React.createElement(ScrollWrapper, {
    width: width,
    height: _height,
    ref: scrollContainer
  }, React.createElement(TableElement, {
    cellSpacing: "0"
  }, React.createElement(THead, null, headerGroups.map((headerGroup, i) => React.createElement("tr", {
    key: `theadRow${i}`
  }, show_row_numbers ? React.createElement(TableHeadCell, {
    width: rowNumWidth
  }) : undefined, headerGroup.headers.map(header => {
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
      "aria-sort": ariaSort,
      width: header.column.getSize()
    }, React.createElement(TableHeadLayout, {
      sortButtonDefaultVisible: !!columnSortState
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
  })))), React.createElement("tbody", null, React.createElement(OffsetTop, null), virtualRows.map(({
    index,
    measureElement
  }) => {
    var _tableRow$getVisibleC;

    const tableRow = tableRows[index];
    return React.createElement(TableRow, {
      key: tableRow.id
    }, show_row_numbers ? React.createElement(RowNum, null, index + 1) : undefined, tableRow === null || tableRow === void 0 ? void 0 : (_tableRow$getVisibleC = tableRow.getVisibleCells) === null || _tableRow$getVisibleC === void 0 ? void 0 : _tableRow$getVisibleC.call(tableRow).map(_ref => {
      let {
        column,
        getContext
      } = _ref,
          cell = _objectWithoutProperties(_ref, _excluded);

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
        key: cell.id,
        ref: measureElement,
        width: column.getSize()
      }, typeof CellValue === 'function' ? React.createElement(CellValue, null) : React.createElement(CellContentLayout, null, columnConfig !== null && columnConfig !== void 0 && columnConfig.cell_visualization ? React.createElement(CellVisualization, {
        color: columnConfig.color,
        min: min,
        max: max,
        value: Number(cell.getValue())
      }) : null, React.createElement(CellContentWrapper, {
        truncateText: !!truncate_text
      }, valueFormat ? numeral(Number(cell.getValue())).format(valueFormat) : flexRender(cellContent, getContext()))));
    }));
  }), React.createElement(OffsetBottom, null)), React.createElement(TFoot, null, show_totals && totals ? table.getHeaderGroups().map((headerGroup, i) => React.createElement("tr", {
    key: `tfootRow${i}`
  }, headerGroup.headers.map((header, index) => {
    const totalsText = t('Totals');

    const measureIndex = _fields.measures.findIndex(m => m.name === header.id);

    const valueFormat = Array.isArray(series) ? get(series, [measureIndex, 'value_format']) : get(series, [header.id, 'value_format']);

    if (index === 0) {
      return React.createElement(TableHeadCell, {
        key: `${header.id || null}-foot`,
        colSpan: show_row_numbers ? 2 : 1
      }, totalsText);
    } else {
      return React.createElement(TableHeadCell, {
        key: `${header.id || null}-foot`
      }, valueFormat ? numeral(Number(totals[header.id])).format(valueFormat) : totals[header.id] || null);
    }
  }))) : null)));
};

const CellContentWrapper = ({
  children,
  truncateText
}) => truncateText ? React.createElement(Grid, {
  columns: 1,
  width: "auto"
}, React.createElement(Truncate, null, children)) : React.createElement(React.Fragment, null, children);

const HeaderContentWrapper = _ref2 => {
  let {
    truncateHeader
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return truncateHeader ? React.createElement(Truncate, props) : React.createElement(Box, props);
};

const ScrollWrapper = styled.div(_t || (_t = _`
  max-height: ${0};
  overflow: auto;
  max-width: ${0};
  position: relative;
`), ({
  height
}) => `${height}px`, ({
  width
}) => width ? `${width}px` : `100%`);
const TableElement = styled.table(_t2 || (_t2 = _`
  width: 100%;
  color: ${0};
  font-family: ${0};
`), ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.fonts.body);
const THead = styled.thead(_t3 || (_t3 = _`
  top: 0;
  position: sticky;
`));
const TFoot = styled.tfoot(_t4 || (_t4 = _`
  position: sticky;
  bottom: 0px;
`));
const TableCellStyles = css(_t5 || (_t5 = _`
  border-right: 1px solid ${0};
  font-size: ${0};
  line-height: ${0};
  padding: ${0};
  width: ${0}px;
  &:last-child {
    border-right: none;
  }
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.lineHeights.small, ({
  theme
}) => css(_t6 || (_t6 = _`
      ${0} ${0}
    `), theme.space.xxsmall, theme.space.xsmall), ({
  width
}) => width);
const TableCell = styled.td(_t7 || (_t7 = _`
  ${0}
`), TableCellStyles);
const RowNum = styled(TableCell)(_t8 || (_t8 = _`
  border-right: 1px solid ${0};
  text-align: right;
  width: 1rem;
`), ({
  theme
}) => theme.colors.ui4);
const TableHeadCell = styled.th(_t9 || (_t9 = _`
  ${0}
  text-align: left;
  background: ${0};
  border-bottom: 1px solid ${0};
`), TableCellStyles, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.ui4);
const TableRow = styled.tr(_t10 || (_t10 = _`
  :nth-child(even) {
    background-color: ${0};
  }
`), ({
  theme
}) => theme.colors.ui1);
const CellContentLayout = styled.div(_t11 || (_t11 = _`
  align-items: center;
  display: flex;
  gap: ${0};
`), ({
  theme
}) => theme.space.xxsmall);
const TableHeadLayout = styled.div(_t12 || (_t12 = _`
  display: grid;
  grid-template-columns: minMax(${0}, 1fr) auto;
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
}) => theme.space.u16, IconButton, ({
  sortButtonDefaultVisible
}) => sortButtonDefaultVisible ? css(_t13 || (_t13 = _`
            visibility: visible;
          `)) : css(_t14 || (_t14 = _`
            visibility: hidden;
          `)), IconButton);
//# sourceMappingURL=index.js.map