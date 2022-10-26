"use strict";

var _fontFacesToFamily = require("./fontFacesToFamily");

describe('fontFacesToFamily', function () {
  test('basic', function () {
    return expect((0, _fontFacesToFamily.fontFacesToFamily)('verdana', ['arial', 'helvetica'])).toEqual('verdana, arial, helvetica');
  });
  test('array entry', function () {
    return expect((0, _fontFacesToFamily.fontFacesToFamily)(['verdana', 'Papyrus'], ['arial', 'Helvetica'])).toEqual('verdana, Papyrus, arial, Helvetica');
  });
  test('properly quoted faces', function () {
    return expect((0, _fontFacesToFamily.fontFacesToFamily)("'Times New Roman'", ['arial', "'Helvetica Neue'"])).toEqual("'Times New Roman', arial, 'Helvetica Neue'");
  });
  test('improperly quoted faces', function () {
    return expect((0, _fontFacesToFamily.fontFacesToFamily)('Times New Roman', ['arial', 'Helvetica Neue'])).toEqual("'Times New Roman', arial, 'Helvetica Neue'");
  });
});
//# sourceMappingURL=fontFacesToFamily.spec.js.map