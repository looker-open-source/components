"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveTrap = void 0;

var getActiveTrap = function getActiveTrap(trapMap) {
  var traps = Object.values(trapMap);
  if (traps.length === 0) return;
  var sortedTraps = traps.sort(function (trapA, trapB) {
    var relationship = trapA.element.compareDocumentPosition(trapB.element);
    return relationship > 3 ? 1 : -1;
  });
  return sortedTraps[0];
};
exports.getActiveTrap = getActiveTrap;
//# sourceMappingURL=utils.js.map