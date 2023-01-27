"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deriveVirtualizerPadding = void 0;

var deriveVirtualizerPadding = function deriveVirtualizerPadding(virtualizer) {
  var virtualItems = virtualizer.getVirtualItems();
  var head = virtualItems === null || virtualItems === void 0 ? void 0 : virtualItems[0];
  var tail = virtualItems === null || virtualItems === void 0 ? void 0 : virtualItems[virtualItems.length - 1];
  var paddingStart = head ? head.start : 0;
  var paddingEnd = tail ? virtualizer.getTotalSize() - tail.end : 0;
  return [paddingStart, paddingEnd];
};
exports.deriveVirtualizerPadding = deriveVirtualizerPadding;
//# sourceMappingURL=deriveVirtualizerPadding.js.map