"use strict";

var _normalizeHeaderColumns = require("./normalizeHeaderColumns");

var mockHeader = {
  colSpan: 1
};
var mockHeaderColspan2 = {
  colSpan: 2
};
var mockHeaderGroups = [{
  id: '0',
  depth: 0,
  headers: [mockHeaderColspan2, mockHeader]
}, {
  id: '1',
  depth: 1,
  headers: [mockHeader, mockHeader, mockHeader]
}];
var mockTable = {
  getHeaderGroups: function getHeaderGroups() {
    return mockHeaderGroups;
  }
};
it('ensures that every header row has the same number of entries when headers span multiple columns', function () {
  var normalizedHeaderGroups = (0, _normalizeHeaderColumns.normalizeHeaderColumns)(mockTable);
  expect(normalizedHeaderGroups[0].headers).toEqual([mockHeaderColspan2, null,
  mockHeader]);
  expect(normalizedHeaderGroups[1].headers).toEqual(mockHeaderGroups[1].headers);
});
//# sourceMappingURL=normalizeHeaderColumns.spec.js.map