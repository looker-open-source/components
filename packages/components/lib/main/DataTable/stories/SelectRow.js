"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectRow;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SelectRow() {
  var data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: "Blue"
  }];
  var columns = [{
    id: 'id',
    size: 20,
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    size: 80,
    title: 'Name',
    type: 'string'
  }];
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selections = _useState2[0],
    setSelections = _useState2[1];
  var onSelect = function onSelect(selection) {
    setSelections(selections.includes(selection) ? selections.filter(function (item) {
      return item !== selection;
    }) : [].concat((0, _toConsumableArray2["default"])(selections), [selection]));
  };
  var allSelectableItems = data.map(function (_ref) {
    var id = _ref.id;
    return String(id);
  });
  var onSelectAll = function onSelectAll() {
    setSelections(selections.length ? [] : allSelectableItems);
  };
  var items = data.map(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name;
    return _react["default"].createElement(_.DataTableItem, {
      id: String(id),
      key: id,
      onClick: function onClick() {
        return alert("".concat(name, " clicked"));
      },
      actions: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, {
        onClick: function onClick() {
          return alert("".concat(name, " deleted"));
        }
      }, "Delete"))
    }, _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name));
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTable, {
    caption: "Cheeses example",
    columns: columns,
    select: {
      onSelect: onSelect,
      onSelectAll: onSelectAll,
      pageItems: allSelectableItems,
      selectedItems: selections
    }
  }, items));
}
//# sourceMappingURL=SelectRow.js.map