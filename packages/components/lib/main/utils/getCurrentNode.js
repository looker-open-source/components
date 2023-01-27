"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentNode = getCurrentNode;

function getCurrentNode(elementOrRefObject) {
  if (!elementOrRefObject) return null;
  return elementOrRefObject.addEventListener ? elementOrRefObject : elementOrRefObject.current;
}
//# sourceMappingURL=getCurrentNode.js.map