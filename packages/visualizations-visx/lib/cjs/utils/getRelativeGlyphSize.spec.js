"use strict";

var _getRelativeGlyphSize = require("./getRelativeGlyphSize");

describe('getRelativeGlyphSize', function () {
  it('returns a value as a percentage of the MAX_POINT_SIZE', function () {
    expect((0, _getRelativeGlyphSize.getRelativeGlyphSize)(5, 0, 10)).toMatchInlineSnapshot("4080");
    expect((0, _getRelativeGlyphSize.getRelativeGlyphSize)(9, 8, 10)).toMatchInlineSnapshot("4080");
  });
});
//# sourceMappingURL=getRelativeGlyphSize.spec.js.map