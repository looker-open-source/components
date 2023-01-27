"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ControlBar;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ControlBar() {
  var data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: "Blue"
  }, {
    id: 4,
    name: 'American'
  }, {
    id: 5,
    name: 'Cheddar'
  }, {
    id: 6,
    name: 'Pepper Jack'
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
  var _useState = (0, _react.useState)(1),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var perPageCount = 3;

  var pageItemData = data.filter(function (_ref) {
    var id = _ref.id;
    return id > (page - 1) * perPageCount && id <= page * perPageCount;
  });
  var pageItemIds = pageItemData.map(function (_ref2) {
    var id = _ref2.id;
    return String(id);
  });
  var pageItems = pageItemData.map(function (_ref3) {
    var id = _ref3.id,
      name = _ref3.name;
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
  var _useSelectManager = (0, _.useSelectManager)(pageItemIds),
    onSelect = _useSelectManager.onSelect,
    onSelectAll = _useSelectManager.onSelectAll,
    selections = _useSelectManager.selections,
    setSelections = _useSelectManager.setSelections;
  var allItems = [].concat(data).map(function (_ref4) {
    var id = _ref4.id;
    return String(id);
  });
  var onTotalSelectAll = function onTotalSelectAll() {
    return setSelections(allItems);
  };
  var onTotalClearAll = function onTotalClearAll() {
    return setSelections([]);
  };
  var bulkActionsConfig = {
    actions: _react["default"].createElement(_.DataTableAction, {
      onClick: function onClick() {
        return alert("Selected Items: ".concat(selections));
      }
    }, "View Selected Item IDs"),
    onTotalClearAll: onTotalClearAll,
    onTotalSelectAll: onTotalSelectAll,
    pageCount: pageItems.length,
    totalCount: allItems.length
  };
  return _react["default"].createElement(_.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, _react["default"].createElement(_.Box, {
    width: "100%",
    mb: "u3"
  }, _react["default"].createElement(_.DataTable, {
    bulk: bulkActionsConfig,
    caption: "Cheeses example",
    select: {
      onSelect: onSelect,
      onSelectAll: onSelectAll,
      pageItems: pageItemIds,
      selectedItems: selections
    },
    columns: columns
  }, pageItems)), _react["default"].createElement(_.Pagination, {
    current: page,
    pages: data.length / perPageCount,
    onChange: function onChange(nextPage) {
      setSelections([]);
      setPage(nextPage);
    }
  }));
}
//# sourceMappingURL=ControlBar.js.map