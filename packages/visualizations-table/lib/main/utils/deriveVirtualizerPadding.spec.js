"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _deriveVirtualizerPadding = require("./deriveVirtualizerPadding");
var _noop = _interopRequireDefault(require("lodash/noop"));

var mockTotalSize = 17180;
var mockVirtualItems = [{
  index: 88,
  start: 7040,
  size: 80,
  end: 7120,
  key: 88,
  measureElement: _noop["default"]
}, {
  index: 89,
  start: 7120,
  size: 80,
  end: 7200,
  key: 89,
  measureElement: _noop["default"]
}, {
  index: 90,
  start: 7200,
  size: 80,
  end: 7280,
  key: 90,
  measureElement: _noop["default"]
}];
var mockVirualizer = {
  getTotalSize: function getTotalSize() {
    return mockTotalSize;
  },
  getVirtualItems: function getVirtualItems() {
    return mockVirtualItems;
  }
};
it('returns start and end spacer padding values', function () {
  var _deriveVirtualizerPad = (0, _deriveVirtualizerPadding.deriveVirtualizerPadding)(mockVirualizer),
    _deriveVirtualizerPad2 = (0, _slicedToArray2["default"])(_deriveVirtualizerPad, 2),
    paddingStart = _deriveVirtualizerPad2[0],
    paddingEnd = _deriveVirtualizerPad2[1];
  expect(paddingStart).toEqual(mockVirtualItems[0].start);
  expect(paddingEnd).toEqual(mockTotalSize - mockVirtualItems[2].end);
});
//# sourceMappingURL=deriveVirtualizerPadding.spec.js.map