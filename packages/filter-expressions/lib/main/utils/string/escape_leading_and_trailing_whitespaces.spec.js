"use strict";

var _escape_leading_and_trailing_whitespaces = require("./escape_leading_and_trailing_whitespaces");

describe('Escape Leading and Trailing Whitespaces', function () {
  it('should return the same string if no trailing/leading spaces', function () {
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('something')).toBe('something');
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('something with a     space')).toBe('something with a     space');
  });
  it('should escape leading spaces', function () {
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)(' leading space here')).toBe('^ leading space here');
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('  double leading space here')).toBe('^ ^ double leading space here');
  });
  it('should escape trailing spaces', function () {
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('trailing space here ')).toBe('trailing space here^ ^ ');
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('2 trailing spaces here  ')).toBe('2 trailing spaces here^ ^ ^ ');
  });
  it('should escape a leading and trailing space', function () {
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)(' leading and trailing ')).toBe('^ leading and trailing^ ^ ');
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('  leading and trailing  ')).toBe('^ ^ leading and trailing^ ^ ^ ');
  });
  it('should not do a double escape at the end', function () {
    expect((0, _escape_leading_and_trailing_whitespaces.escapeLeadingAndTrailingWhitespaces)('hello there ', false)).toBe('hello there^ ');
  });
});
//# sourceMappingURL=escape_leading_and_trailing_whitespaces.spec.js.map