"use strict";

var _quote_filter = require("./quote_filter");

describe('quote filter function', function () {
  it('should not quote strings lacking single quotes (\'), double quotes (") commas (,), or leading minus (-)', function () {
    expect((0, _quote_filter.quoteFilter)('one')).toEqual('one');
  });
  it('should quote strings with commas', function () {
    expect((0, _quote_filter.quoteFilter)('one,')).toEqual('"one,"');
  });
  it('should quote strings with single quotes', function () {
    expect((0, _quote_filter.quoteFilter)("one'")).toEqual('"one\'"');
  });
  it('should quote strings with double quotes', function () {
    expect((0, _quote_filter.quoteFilter)('one"')).toEqual('"one\\""');
  });
  it('should quote strings with a percentage', function () {
    expect((0, _quote_filter.quoteFilter)('one%')).toEqual('"one%"');
  });
  it('should quote strings with leading minus sign', function () {
    expect((0, _quote_filter.quoteFilter)('-one')).toEqual('"-one"');
  });
  it('should quote the string null', function () {
    expect((0, _quote_filter.quoteFilter)('null')).toEqual('"null"');
  });
  it('should quote the string empty', function () {
    expect((0, _quote_filter.quoteFilter)('empty')).toEqual('"empty"');
  });
});
//# sourceMappingURL=quote_filter.spec.js.map