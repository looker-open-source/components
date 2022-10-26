"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeHandlers = void 0;

var mergeHandlers = function mergeHandlers(newHandler, existingHandler) {
  return function (event) {
    existingHandler === null || existingHandler === void 0 ? void 0 : existingHandler(event);

    if (!event.defaultPrevented) {
      newHandler === null || newHandler === void 0 ? void 0 : newHandler(event);
    }
  };
};

exports.mergeHandlers = mergeHandlers;
//# sourceMappingURL=mergeHandlers.js.map