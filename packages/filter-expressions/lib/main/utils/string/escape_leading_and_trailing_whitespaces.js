"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeLeadingAndTrailingWhitespaces = void 0;

var escapeLeadingAndTrailingWhitespaces = function escapeLeadingAndTrailingWhitespaces(value) {
  var doubleEscapeLastEscapedTrailingSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var str = value.replace(/^([ ]*)(.*?)([ ]*)$/g, function (_, g1, g2, g3) {
    var leading = g1 ? g1.replace(/[ ]/g, '^ ') : '';
    var content = g2 || '';
    var trailing = g3 ? g3.replace(/[ ]/g, '^ ') : '';
    return leading + content + trailing;
  });

  if (str.endsWith('^ ') && !str.includes("'") && !str.includes('"') && doubleEscapeLastEscapedTrailingSpace) {
    str += '^ ';
  }
  return str;
};
exports.escapeLeadingAndTrailingWhitespaces = escapeLeadingAndTrailingWhitespaces;
//# sourceMappingURL=escape_leading_and_trailing_whitespaces.js.map