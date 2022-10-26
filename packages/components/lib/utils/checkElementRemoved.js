export const checkElementRemoved = (mutationsList, element) => {
  if (!element) return false;
  return mutationsList.some(({
    type,
    removedNodes
  }) => {
    if (type === 'childList' && removedNodes.length > 0) {
      return Array.from(removedNodes).some(node => {
        return node.contains(element);
      });
    }

    return false;
  });
};
//# sourceMappingURL=checkElementRemoved.js.map