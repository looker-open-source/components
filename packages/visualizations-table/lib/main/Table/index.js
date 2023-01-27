"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _reactTable = require("@tanstack/react-table");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _components = require("@looker/components");
var _hooks = require("../hooks");
var _utils = require("../utils");
var _CellVisualization = require("../CellVisualization");
var _ColumnTotals = require("../ColumnTotals");
var _TableCell = require("../TableCell");
var _TableHeadCell = require("../TableHeadCell");
var _numeral = _interopRequireDefault(require("numeral"));
var _get = _interopRequireDefault(require("lodash/get"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var _excluded = ["column", "getContext"],
  _excluded2 = ["truncateHeader"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Table = function Table(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? {
      column_order: [],
      show_row_numbers: true,
      type: 'table'
    } : _ref$config,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$fields = _ref.fields,
    fields = _ref$fields === void 0 ? _visualizationsAdapters.DEFAULT_EMPTY_FIELDS : _ref$fields,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref$height,
    pivots = _ref.pivots,
    width = _ref.width,
    totals = _ref.totals,
    defaultRowHeight = _ref.defaultRowHeight;
  var _useTranslation = (0, _utils.useTranslation)('Table'),
    t = _useTranslation.t;
  var scrollContainer = (0, _react.useRef)(null);
  var _useHeadlessTable = (0, _hooks.useHeadlessTable)({
      data: data,
      config: config,
      fields: fields,
      pivots: pivots
    }),
    table = _useHeadlessTable.table,
    sorting = _useHeadlessTable.sorting,
    handleTableSort = _useHeadlessTable.handleTableSort;
  var tableRows = table.getRowModel().rows;
  var dataToVirtualize = tableRows.map(function (row) {
    return row.getVisibleCells();
  });
  var virtualizerAssets = (0, _hooks.useVirtual)({
    data: dataToVirtualize,
    scrollContainer: scrollContainer,
    defaultRowHeight: defaultRowHeight
  });
  var virtualRows = virtualizerAssets.virtualRows,
    virtualColumns = virtualizerAssets.virtualColumns,
    OffsetTop = virtualizerAssets.OffsetTop,
    OffsetBottom = virtualizerAssets.OffsetBottom,
    OffsetLeft = virtualizerAssets.OffsetLeft,
    OffsetRight = virtualizerAssets.OffsetRight;
  var _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    show_row_numbers = config.show_row_numbers,
    truncate_text = config.truncate_text,
    truncate_header = config.truncate_header;
  var seriesMinMax = Object.fromEntries(fields.measures.map(function (_ref2) {
    var name = _ref2.name;
    var min = (0, _visualizationsAdapters.getSeriesMin)(name, data);
    var max = (0, _visualizationsAdapters.getSeriesMax)(name, data);
    return [name, {
      min: min,
      max: max
    }];
  }));
  var headerGroups = (0, _utils.normalizeHeaderColumns)(table);
  var rowNumWidth = String(data.length).length * 10;
  return _react["default"].createElement(ScrollWrapper, {
    width: width,
    height: height,
    ref: scrollContainer
  }, _react["default"].createElement(TableElement, {
    cellSpacing: "0"
  }, _react["default"].createElement(THead, null, headerGroups.map(function (headerGroup, i) {
    return _react["default"].createElement("tr", {
      key: "theadRow".concat(i)
    }, _react["default"].createElement(OffsetLeft, {
      as: "th"
    }), show_row_numbers ? _react["default"].createElement(_TableHeadCell.TableHeadCell, {
      stickyLeft: true
    }, _react["default"].createElement(PlaceholderElement, {
      width: rowNumWidth
    })) : undefined, virtualColumns.map(function (_ref3) {
      var columnIndex = _ref3.index,
        measureElement = _ref3.measureElement,
        size = _ref3.size;
      var header = headerGroup.headers[columnIndex];
      if (header) {
        var headerContent = header.column.columnDef.header;
        var columnSortState = sorting.find(function (s) {
          return s.id === header.id;
        });
        var _getSortAssets2 = (0, _utils.getSortAssets)(t, columnSortState),
          SortIcon = _getSortAssets2.SortIcon,
          sortText = _getSortAssets2.sortText,
          ariaSort = _getSortAssets2.ariaSort;
        return _react["default"].createElement(_TableHeadCell.TableHeadCell, {
          key: header.id,
          colSpan: header.colSpan,
          "aria-sort": ariaSort
        }, _react["default"].createElement(TableHeadLayout, {
          sortButtonDefaultVisible: !!columnSortState,
          ref: measureElement,
          width: size
        }, _react["default"].createElement(HeaderContentWrapper, {
          truncateHeader: !!truncate_header,
          "data-testid": "columnheader-label"
        }, (0, _reactTable.flexRender)(headerContent, header.getContext())), i === headerGroups.length - 1 && _react["default"].createElement(_components.IconButton, {
          icon: _react["default"].createElement(SortIcon, null),
          label: sortText,
          outline: true,
          shape: "square",
          size: "xxsmall",
          onClick: function onClick(e) {
            return handleTableSort(header, e);
          }
        })));
      } else {
        return null;
      }
    }), _react["default"].createElement(OffsetRight, {
      as: "th"
    }));
  })), _react["default"].createElement(TBody, null, _react["default"].createElement(OffsetTop, null), virtualRows.map(function (_ref4) {
    var rowIndex = _ref4.index,
      measureElement = _ref4.measureElement,
      size = _ref4.size;
    var tableRow = tableRows[rowIndex];
    return _react["default"].createElement(TableRow, {
      key: tableRow.id,
      ref: measureElement,
      height: size
    }, _react["default"].createElement(OffsetLeft, null), show_row_numbers ? _react["default"].createElement(_TableCell.TableCell, {
      stickyLeft: true
    }, rowIndex + 1) : undefined, virtualColumns.map(function (_ref5) {
      var columnIndex = _ref5.index;
      var _dataToVirtualize$row = dataToVirtualize[rowIndex][columnIndex],
        column = _dataToVirtualize$row.column,
        getContext = _dataToVirtualize$row.getContext,
        cell = (0, _objectWithoutProperties2["default"])(_dataToVirtualize$row, _excluded);
      var measureIndex = fields.measures.findIndex(function (m) {
        return m.name === column.id;
      });
      var columnConfig = Array.isArray(series) ? series[measureIndex] : series[column.id];
      var cellContent = column.columnDef.cell;
      var _ref6 = (seriesMinMax === null || seriesMinMax === void 0 ? void 0 : seriesMinMax[column.id]) || {
          max: Infinity,
          min: 0
        },
        max = _ref6.max,
        min = _ref6.min;
      var valueFormat = Array.isArray(series) ? (0, _get["default"])(series, [measureIndex, 'value_format']) : (0, _get["default"])(series, [column.id, 'value_format']);
      var CellValue = cell.getValue();
      return _react["default"].createElement(_TableCell.TableCell, {
        key: cell.id
      }, typeof CellValue === 'function' ? _react["default"].createElement(CellValue, null) : _react["default"].createElement(CellContentLayout, null, columnConfig !== null && columnConfig !== void 0 && columnConfig.cell_visualization ? _react["default"].createElement(_CellVisualization.CellVisualization, {
        color: columnConfig.color,
        min: min,
        max: max,
        value: Number(cell.getValue())
      }) : null, _react["default"].createElement(CellContentWrapper, {
        truncateText: !!truncate_text
      }, valueFormat ? (0, _numeral["default"])(Number(cell.getValue())).format(valueFormat) : (0, _reactTable.flexRender)(cellContent, getContext()))));
    }));
  }), _react["default"].createElement(OffsetBottom, null)), _react["default"].createElement(TFoot, null, _react["default"].createElement(_ColumnTotals.ColumnTotals, {
    totals: totals,
    config: config,
    fields: fields,
    virtualizerAssets: virtualizerAssets,
    table: table
  }))));
};

exports.Table = Table;
var CellContentWrapper = function CellContentWrapper(_ref7) {
  var children = _ref7.children,
    truncateText = _ref7.truncateText;
  return truncateText ? _react["default"].createElement(_components.Grid, {
    columns: 1,
    width: "auto"
  }, _react["default"].createElement(_components.Truncate, null, children)) : _react["default"].createElement(_react["default"].Fragment, null, children);
};

var HeaderContentWrapper = function HeaderContentWrapper(_ref8) {
  var truncateHeader = _ref8.truncateHeader,
    props = (0, _objectWithoutProperties2["default"])(_ref8, _excluded2);
  return truncateHeader ? _react["default"].createElement(_components.Truncate, props) : _react["default"].createElement(_components.Box, props);
};
var PlaceholderElement = _styledComponents["default"].div.attrs(function (_ref9) {
  var width = _ref9.width;
  return {
    style: {
      minWidth: width
    }
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
var ScrollWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  max-height: ", ";\n  overflow: auto;\n  max-width: ", ";\n  position: relative;\n"])), function (_ref10) {
  var height = _ref10.height;
  return "".concat(height, "px");
}, function (_ref11) {
  var width = _ref11.width;
  return width ? "".concat(width, "px") : "100%";
});
var TableElement = _styledComponents["default"].table(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  color: ", ";\n  font-family: ", ";\n"])), function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.text5;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.fonts.body;
});
var THead = _styledComponents["default"].thead(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  top: 0;\n  position: sticky;\n  z-index: 1;\n"])));
var TFoot = _styledComponents["default"].tfoot(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  position: sticky;\n  bottom: 0px;\n"])));
var TBody = _styledComponents["default"].tbody(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: 0;\n"])));
var TableRow = _styledComponents["default"].tr.attrs(function (_ref14) {
  var height = _ref14.height;
  return {
    height: height
  };
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  :nth-child(even) {\n    ", " {\n      background-color: ", ";\n    }\n  }\n  :nth-child(odd) {\n    ", " {\n      background-color: ", ";\n    }\n  }\n"])), _TableCell.TableCell, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.ui1;
}, _TableCell.TableCell, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.background;
});
var CellContentLayout = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  gap: ", ";\n"])), function (_ref17) {
  var theme = _ref17.theme;
  return theme.space.xxsmall;
});
var TableHeadLayout = _styledComponents["default"].div.attrs(function (_ref18) {
  var width = _ref18.width;
  return {
    style: {
      minWidth: width
    }
  };
})(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  display: grid;\n  grid-template-columns: minMax(", ", 1fr) auto;\n  grid-gap: ", ";\n  ", " {\n    ", "\n  }\n  &:hover {\n    ", " {\n      visibility: visible;\n    }\n  }\n"])), function (_ref19) {
  var theme = _ref19.theme;
  return theme.space.u16;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.space.xxsmall;
}, _components.IconButton, function (_ref21) {
  var sortButtonDefaultVisible = _ref21.sortButtonDefaultVisible;
  return sortButtonDefaultVisible ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n            visibility: visible;\n          "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n            visibility: hidden;\n          "])));
}, _components.IconButton);
//# sourceMappingURL=index.js.map