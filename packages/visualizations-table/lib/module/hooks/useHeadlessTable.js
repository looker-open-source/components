
import { useState, useCallback } from 'react';
import { getCoreRowModel, useReactTable, getSortedRowModel } from '@tanstack/react-table';
import noop from 'lodash/noop';
import { buildFlatColumns, buildGroupedColumns } from '../utils';
const isPivotedQuery = props => {
  var _props$fields$pivots, _props$pivots;
  return !!((_props$fields$pivots = props.fields.pivots) !== null && _props$fields$pivots !== void 0 && _props$fields$pivots.length) && !!((_props$pivots = props.pivots) !== null && _props$pivots !== void 0 && _props$pivots.length);
};

export const useHeadlessTable = props => {
  const {
    data,
    config,
    fields
  } = props;
  const {
    column_order,
    show_row_totals = true,
    series = {}
  } = config;
  const flatFields = [...fields.dimensions, ...fields.measures];
  const columns = isPivotedQuery(props) ? buildGroupedColumns(props) : buildFlatColumns(props);
  const [sorting, setSorting] = useState(flatFields.sort((field1, field2) => {
    var _field1$sorted, _field2$sorted;
    const sortIndex1 = ((_field1$sorted = field1.sorted) === null || _field1$sorted === void 0 ? void 0 : _field1$sorted.sort_index) || -1;
    const sortIndex2 = ((_field2$sorted = field2.sorted) === null || _field2$sorted === void 0 ? void 0 : _field2$sorted.sort_index) || -1;
    return sortIndex1 - sortIndex2;
  }).map(field => {
    if (field.sorted) {
      return {
        id: field.name,
        desc: field.sorted.desc
      };
    }
    return undefined;
  }).filter(Boolean));
  const handleTableSort = useCallback((header, e) => {
    var _header$column;
    if (header !== null && header !== void 0 && (_header$column = header.column) !== null && _header$column !== void 0 && _header$column.getCanSort()) {
      var _sorting$currentSorti;
      const currentSortingIndex = sorting.findIndex(column => column.id === header.id);
      const currentDesc = !!((_sorting$currentSorti = sorting[currentSortingIndex]) !== null && _sorting$currentSorti !== void 0 && _sorting$currentSorti.desc);
      const draftColumnConfig = {
        id: header.id,
        desc: !currentDesc
      };
      if (e.shiftKey) {
        const draftSorting = [...sorting];
        if (currentSortingIndex >= 0) {
          draftSorting[currentSortingIndex] = draftColumnConfig;
        } else {
          draftSorting.push(draftColumnConfig);
        }
        setSorting(draftSorting);
      } else {
        setSorting([draftColumnConfig]);
      }
    }
  }, [sorting]);
  const columnVisibility = fields.measures.reduce((acc, {
    name
  }, i) => {
    const seriesConfig = Array.isArray(series) ? series[i] : series[name];
    if (name.includes('$$$_row_total_$$$')) {
      acc[name] = show_row_totals;
      return acc;
    } else {
      var _seriesConfig$visible;
      acc[name] = (_seriesConfig$visible = seriesConfig === null || seriesConfig === void 0 ? void 0 : seriesConfig.visible) !== null && _seriesConfig$visible !== void 0 ? _seriesConfig$visible : true;
      return acc;
    }
  }, {});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnOrder: column_order,
      columnPinning: {
        left: [],
        right: []
      },
      sorting,
      columnVisibility
    },
    onStateChange: noop,
    renderFallbackValue: null
  });
  return {
    table,
    sorting,
    handleTableSort
  };
};
//# sourceMappingURL=useHeadlessTable.js.map