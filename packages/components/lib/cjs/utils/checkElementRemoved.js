"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkElementRemoved = void 0;

var checkElementRemoved = function checkElementRemoved(mutationsList, element) {
  if (!element) return false;
  return mutationsList.some(function (_ref) {
    var type = _ref.type,
        removedNodes = _ref.removedNodes;

    if (type === 'childList' && removedNodes.length > 0) {
      return Array.from(removedNodes).some(function (node) {
        return node.contains(element);
      });
    }

    return false;
  });
};

exports.checkElementRemoved = checkElementRemoved;
//# sourceMappingURL=checkElementRemoved.js.map