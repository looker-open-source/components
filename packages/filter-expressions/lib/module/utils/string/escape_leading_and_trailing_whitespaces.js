

export const escapeLeadingAndTrailingWhitespaces = (value, doubleEscapeLastEscapedTrailingSpace = true) => {
  let str = value.replace(/^([ ]*)(.*?)([ ]*)$/g, (_, g1, g2, g3) => {
    const leading = g1 ? g1.replace(/[ ]/g, '^ ') : '';
    const content = g2 || '';
    const trailing = g3 ? g3.replace(/[ ]/g, '^ ') : '';
    return leading + content + trailing;
  });

  if (str.endsWith('^ ') && !str.includes("'") && !str.includes('"') && doubleEscapeLastEscapedTrailingSpace) {
    str += '^ ';
  }
  return str;
};
//# sourceMappingURL=escape_leading_and_trailing_whitespaces.js.map