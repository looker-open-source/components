"use strict";

var _dataTableFormatting = require("./dataTableFormatting");

describe('DataTable CSS Utils', function () {
  var columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }, {
    id: 'age',
    title: 'Age',
    type: 'number'
  }];
  test('getNumericColumnIndices', function () {
    expect((0, _dataTableFormatting.getNumericColumnIndices)(columns, ['id', 'name', 'age'])).toEqual([1, 3]);
  });
});
//# sourceMappingURL=dataTableFormatting.spec.js.map