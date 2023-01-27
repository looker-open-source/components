"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHeadlessTable = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _reactTable = require("@tanstack/react-table");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _utils = require("../utils");

var isPivotedQuery = function isPivotedQuery(props) {
  var _props$fields$pivots, _props$pivots;
  return !!((_props$fields$pivots = props.fields.pivots) !== null && _props$fields$pivots !== void 0 && _props$fields$pivots.length) && !!((_props$pivots = props.pivots) !== null && _props$pivots !== void 0 && _props$pivots.length);
};

var useHeadlessTable = function useHeadlessTable(props) {
  var data = props.data,
    config = props.config,
    fields = props.fields;
  var column_order = config.column_order,
    _config$show_row_tota = config.show_row_totals,
    show_row_totals = _config$show_row_tota === void 0 ? true : _config$show_row_tota,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series;
  var flatFields = [].concat((0, _toConsumableArray2["default"])(fields.dimensions), (0, _toConsumableArray2["default"])(fields.measures));
  var columns = isPivotedQuery(props) ? (0, _utils.buildGroupedColumns)(props) : (0, _utils.buildFlatColumns)(props);
  var _useState = (0, _react.useState)(flatFields.sort(function (field1, field2) {
      var _field1$sorted, _field2$sorted;
      var sortIndex1 = ((_field1$sorted = field1.sorted) === null || _field1$sorted === void 0 ? void 0 : _field1$sorted.sort_index) || -1;
      var sortIndex2 = ((_field2$sorted = field2.sorted) === null || _field2$sorted === void 0 ? void 0 : _field2$sorted.sort_index) || -1;
      return sortIndex1 - sortIndex2;
    }).map(function (field) {
      if (field.sorted) {
        return {
          id: field.name,
          desc: field.sorted.desc
        };
      }
      return undefined;
    }).filter(Boolean)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    sorting = _useState2[0],
    setSorting = _useState2[1];
  var handleTableSort = (0, _react.useCallback)(function (header, e) {
    var _header$column;
    if (header !== null && header !== void 0 && (_header$column = header.column) !== null && _header$column !== void 0 && _header$column.getCanSort()) {
      var _sorting$currentSorti;
      var currentSortingIndex = sorting.findIndex(function (column) {
        return column.id === header.id;
      });
      var currentDesc = !!((_sorting$currentSorti = sorting[currentSortingIndex]) !== null && _sorting$currentSorti !== void 0 && _sorting$currentSorti.desc);
      var draftColumnConfig = {
        id: header.id,
        desc: !currentDesc
      };
      if (e.shiftKey) {
        var draftSorting = (0, _toConsumableArray2["default"])(sorting);
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
  var columnVisibility = fields.measures.reduce(function (acc, _ref, i) {
    var name = _ref.name;
    var seriesConfig = Array.isArray(series) ? series[i] : series[name];
    if (name.includes('$$$_row_total_$$$')) {
      acc[name] = show_row_totals;
      return acc;
    } else {
      var _seriesConfig$visible;
      acc[name] = (_seriesConfig$visible = seriesConfig === null || seriesConfig === void 0 ? void 0 : seriesConfig.visible) !== null && _seriesConfig$visible !== void 0 ? _seriesConfig$visible : true;
      return acc;
    }
  }, {});
  var table = (0, _reactTable.useReactTable)({
    data: data,
    columns: columns,
    getCoreRowModel: (0, _reactTable.getCoreRowModel)(),
    getSortedRowModel: (0, _reactTable.getSortedRowModel)(),
    state: {
      columnOrder: column_order,
      columnPinning: {
        left: [],
        right: []
      },
      sorting: sorting,
      columnVisibility: columnVisibility
    },
    onStateChange: _noop["default"],
    renderFallbackValue: null
  });
  return {
    table: table,
    sorting: sorting,
    handleTableSort: handleTableSort
  };
};
exports.useHeadlessTable = useHeadlessTable;
//# sourceMappingURL=useHeadlessTable.js.map