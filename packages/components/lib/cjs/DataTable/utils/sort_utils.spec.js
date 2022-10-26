"use strict";

var _sort_utils = require("./sort_utils");

describe('DataTable Sort Utils', function () {
  test('Default string comparison', function () {
    var compared = [['Animal', 'Crossing'], ['MaRiO', 'mario'], ['Samus', 'Link'], ['', '%(#&@'], ['1234', '10000']].map(function (values) {
      return (0, _sort_utils.stringComparator)(values[0], values[1]);
    });
    expect(compared).toMatchInlineSnapshot("\n      Array [\n        -1,\n        0,\n        1,\n        -1,\n        1,\n      ]\n    ");
  });
  var data = [{
    birthday: new Date('March 6, 1972'),
    id: 1,
    name: 'Shaq'
  }, {
    birthday: new Date('August 23, 1978'),
    id: 2,
    name: 'Kobe'
  }, {
    birthday: new Date('August 23, 1978'),
    id: 3,
    name: 'Andrew Rannells'
  }];
  var columns = [{
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
    id: 'birthday',
    title: 'Birthday',
    type: 'date'
  }];
  var testConditions = [['Sort ID Ascending', {
    id: 'id',
    sortDirection: 'asc'
  }], ['Sort ID Descending', {
    id: 'id',
    sortDirection: 'desc'
  }], ['Sort Name Ascending', {
    id: 'name',
    sortDirection: 'asc'
  }], ['Sort Name Ascending', {
    id: 'name',
    sortDirection: 'desc'
  }], ['Sort Date Ascending', {
    id: 'birthday',
    sortDirection: 'asc'
  }], ['Sort Date Descending', {
    id: 'birthday',
    sortDirection: 'desc'
  }]];
  test.each(testConditions)('%s', function (_, _ref) {
    var id = _ref.id,
        sortDirection = _ref.sortDirection;
    expect((0, _sort_utils.doDataTableSort)(data, columns, id, sortDirection).data).toMatchSnapshot();
  });
});
//# sourceMappingURL=sort_utils.spec.js.map