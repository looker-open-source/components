"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quoteFilter = void 0;

var quoteFilter = function quoteFilter(filter) {
  if (typeof filter === 'undefined' || filter === null) {
    filter = '';
  }
  if (typeof filter === 'string' && (/^-|['",%_^]/.test(filter) || filter.toLowerCase() === 'null' || filter.toLowerCase() === 'empty')) {
    return "\"".concat(filter.replace(/"/g, '\\"'), "\"");
  } else {
    return filter;
  }
};
exports.quoteFilter = quoteFilter;
//# sourceMappingURL=quote_filter.js.map