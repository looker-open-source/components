"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Percentage = void 0;

var _useDataTable = require("../utils/useDataTable");

var _data = require("../../fixtures/DataTable/data");

var Percentage = function Percentage() {
  var columns = [{
    id: 'id',
    size: 10,
    title: 'ID'
  }, {
    id: 'name',
    size: 50,
    title: 'Name'
  }, {
    id: 'status',
    size: 20,
    title: 'Status'
  }, {
    id: 'inventory',
    size: 20,
    title: 'Inventory',
    type: 'number'
  }];
  return (0, _useDataTable.useDataTable)(_data.data, columns, 'Cheese inventory');
};

exports.Percentage = Percentage;
Percentage.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Percentage.js.map