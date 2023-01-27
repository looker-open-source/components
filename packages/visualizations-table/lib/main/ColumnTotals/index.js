"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnTotals = void 0;
var _react = _interopRequireDefault(require("react"));
var _get = _interopRequireDefault(require("lodash/get"));
var _numeral = _interopRequireDefault(require("numeral"));
var _TableHeadCell = require("../TableHeadCell");
var _utils = require("../utils");

var ColumnTotals = function ColumnTotals(_ref) {
  var _headerGroups$at;
  var totals = _ref.totals,
    config = _ref.config,
    fields = _ref.fields,
    virtualizerAssets = _ref.virtualizerAssets,
    table = _ref.table;
  var OffsetLeft = virtualizerAssets.OffsetLeft,
    virtualColumns = virtualizerAssets.virtualColumns;
  var _useTranslation = (0, _utils.useTranslation)('Table'),
    t = _useTranslation.t;
  var show_totals = config.show_totals,
    show_row_numbers = config.show_row_numbers,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series;
  var totalsText = t('Totals');
  var headerGroups = (0, _utils.normalizeHeaderColumns)(table);
  var lastHeaderRow = (_headerGroups$at = headerGroups.at(-1)) === null || _headerGroups$at === void 0 ? void 0 : _headerGroups$at.headers;
  return show_totals && totals && lastHeaderRow ? _react["default"].createElement("tr", null, _react["default"].createElement(OffsetLeft, null), show_row_numbers ? _react["default"].createElement(_TableHeadCell.TableHeadCell, {
    stickyLeft: true
  }, totalsText) : undefined, virtualColumns.map(function (_ref2) {
    var columnIndex = _ref2.index;
    var header = lastHeaderRow[columnIndex];
    if (!show_row_numbers && columnIndex === 0) {
      return _react["default"].createElement(_TableHeadCell.TableHeadCell, {
        key: "totals-label"
      }, totalsText);
    } else if (header && columnIndex >= 0) {
      var measureIndex = fields.measures.findIndex(function (m) {
        return m.name === header.id;
      });
      var valueFormat = Array.isArray(series) ? (0, _get["default"])(series, [measureIndex, 'value_format']) : (0, _get["default"])(series, [header.id, 'value_format']);
      return _react["default"].createElement(_TableHeadCell.TableHeadCell, {
        key: "".concat(header.id || null, "-foot")
      }, valueFormat ? (0, _numeral["default"])(Number(totals[header.id])).format(valueFormat) : totals[header.id] || null);
    }
    return null;
  })) : null;
};
exports.ColumnTotals = ColumnTotals;
//# sourceMappingURL=index.js.map