

export const deriveVirtualizerPadding = virtualizer => {
  const virtualItems = virtualizer.getVirtualItems();
  const head = virtualItems === null || virtualItems === void 0 ? void 0 : virtualItems[0];
  const tail = virtualItems === null || virtualItems === void 0 ? void 0 : virtualItems[virtualItems.length - 1];
  const paddingStart = head ? head.start : 0;
  const paddingEnd = tail ? virtualizer.getTotalSize() - tail.end : 0;
  return [paddingStart, paddingEnd];
};
//# sourceMappingURL=deriveVirtualizerPadding.js.map