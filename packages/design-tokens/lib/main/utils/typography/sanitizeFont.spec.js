"use strict";

var _sanitizeFont = require("./sanitizeFont");

describe('sanitizeFontFaces', function () {
  it('Single entry', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)('sans-serif')).toEqual('sans-serif');
  });
  it('Single, missing quotes', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)('Helvetica neue')).toEqual("'Helvetica neue'");
  });
  it('Double quoted', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)('"Helvetica neue')).toEqual("'Helvetica neue'");
  });
  it('Single quoted', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)("'Helvetica neue'")).toEqual("'Helvetica neue'");
  });
  it('Several, properly quoted', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)("'Open Sans','Noto Sans'")).toEqual("'Open Sans', 'Noto Sans'");
  });
  it('Several, improperly quoted', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)("'Open Sans, Noto Sans'")).toEqual("'Open Sans', 'Noto Sans'");
  });
  it('Several, mixed properly & improperly quoted', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)("Helvetica neue, 'sans-serif'")).toEqual("'Helvetica neue', sans-serif");
  });
  it('Kitchen sink', function () {
    expect((0, _sanitizeFont.sanitizeFontFamily)('fixed,Helvetica neue, " Comic Sans " , sans-serif')).toEqual("fixed, 'Helvetica neue', 'Comic Sans', sans-serif");
  });
});
//# sourceMappingURL=sanitizeFont.spec.js.map