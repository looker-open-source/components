"use strict";

var _theme = require("../../theme");
var _googleFontUrl = require("./googleFontUrl");

describe('GoogleFontsLoader', function () {
  describe('googleFontParam', function () {
    test('basic', function () {
      return expect((0, _googleFontUrl.googleFontParam)({
        family: 'Roboto',
        italic: false,
        weights: [100]
      })).toEqual('Roboto:wght@0,100');
    });
    test('explicit italic', function () {
      return expect((0, _googleFontUrl.googleFontParam)({
        family: 'Roboto',
        italic: true,
        weights: [100]
      })).toEqual('Roboto:ital,wght@0,100;1,100');
    });
    test('kitchen sink (italic inferred)', function () {
      return expect((0, _googleFontUrl.googleFontParam)({
        family: 'Roboto',
        weights: [200, 300]
      })).toEqual('Roboto:ital,wght@0,200;0,300;1,200;1,300');
    });
  });
  test('googleFontUrl', function () {
    return expect((0, _googleFontUrl.googleFontUrl)(_theme.theme)).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  });
});
//# sourceMappingURL=googleFontUrl.spec.js.map