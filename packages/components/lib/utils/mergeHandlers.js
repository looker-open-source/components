export const mergeHandlers = (newHandler, existingHandler) => event => {
  existingHandler === null || existingHandler === void 0 ? void 0 : existingHandler(event);

  if (!event.defaultPrevented) {
    newHandler === null || newHandler === void 0 ? void 0 : newHandler(event);
  }
};
//# sourceMappingURL=mergeHandlers.js.map