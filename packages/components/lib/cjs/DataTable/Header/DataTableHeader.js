"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _useID = require("../../utils/useID");

var _DataTableRow = require("../Item/DataTableRow");

var _DataTableContext = require("../DataTableContext");

var _DataTableHeaderCell = require("./DataTableHeaderCell");

var _excluded = ["id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTableHeader = function DataTableHeader(_ref) {
  var id = _ref.id;

  var _useContext = (0, _react.useContext)(_DataTableContext.DataTableContext),
      allSelected = _useContext.allSelected,
      columns = _useContext.columns,
      select = _useContext.select;

  var hasCheckbox = !!select;

  var onChange = function onChange() {
    return select ? select.onSelectAll() : undefined;
  };

  var headerColumns = columns && columns.map(function (_ref2) {
    var id = _ref2.id,
        column = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
    return _react["default"].createElement(_DataTableHeaderCell.DataTableHeaderCell, (0, _extends2["default"])({}, column, {
      columnId: id,
      key: id
    }));
  });
  return _react["default"].createElement(_DataTableRow.DataTableRow, {
    checked: allSelected,
    id: (0, _useID.useID)(id),
    isHeaderRow: true,
    hasCheckbox: hasCheckbox,
    onChange: onChange
  }, headerColumns);
};

exports.DataTableHeader = DataTableHeader;
//# sourceMappingURL=DataTableHeader.js.map