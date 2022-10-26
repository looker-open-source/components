export function getCurrentNode(elementOrRefObject) {
  if (!elementOrRefObject) return null;
  return elementOrRefObject.addEventListener ? elementOrRefObject : elementOrRefObject.current;
}
//# sourceMappingURL=getCurrentNode.js.map