"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSortManager = void 0;

var _react = _interopRequireDefault(require("react"));

var _Item = require("../Item");

var _utils = require("../utils");

var _Link = require("../../Link");

var actionsUseDataTableSortManager = function actionsUseDataTableSortManager() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Item.DataTableAction, {
    onClick: function onClick() {
      return alert("Ordered!!");
    }
  }, "Order"), _react["default"].createElement(_Item.DataTableAction, {
    onClick: function onClick() {
      return alert('Mmmm...');
    }
  }, "Make Grilled Cheese"), _react["default"].createElement(_Item.DataTableAction, {
    onClick: function onClick() {
      return alert('Delete');
    }
  }, "Delete"));
};

var columnsUseDataTableSortManager = [{
  hide: true,
  id: 'calories',
  title: 'Calories',
  type: 'number'
}, {
  canSort: true,
  id: 'id',
  title: 'ID',
  type: 'number'
}, {
  canSort: true,
  id: 'name',
  title: 'Name',
  type: 'string'
}, {
  canSort: true,
  id: 'type',
  title: 'Type',
  type: 'string'
}];
var dataUseDataTableSortManager = [{
  calories: 101,
  id: 1,
  name: 'Cheddar',
  type: 'hard, artisan, processed'
}, {
  calories: 102,
  id: 2,
  name: 'Brie',
  type: 'soft, processed'
}, {
  calories: 103,
  id: 3,
  name: _react["default"].createElement("a", {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Gouda"),
  type: 'semi-hard, artisan, brined'
}, {
  calories: 104,
  id: 4,
  name: _react["default"].createElement(_Link.Link, {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "American"),
  type: 'semi-soft, processed'
}];

var Template = function Template() {
  return (0, _utils.useDataTableSortManager)('Caption...', dataUseDataTableSortManager, columnsUseDataTableSortManager, actionsUseDataTableSortManager);
};

var useSortManager = Template.bind({});
exports.useSortManager = useSortManager;
useSortManager.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=useSortManager.js.map