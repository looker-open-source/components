export const quoteFilter = filter => {
  if (typeof filter === 'undefined' || filter === null) {
    filter = '';
  }
  if (typeof filter === 'string' && (/^-|['",%_^\\]/.test(filter) || filter.toLowerCase() === 'null' || filter.toLowerCase() === 'empty')) {
    const quotedContent = filter.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${quotedContent}"`;
  } else {
    return filter;
  }
};
//# sourceMappingURL=quote_filter.js.map