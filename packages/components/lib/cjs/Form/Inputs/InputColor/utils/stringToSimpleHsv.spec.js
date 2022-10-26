"use strict";

var _stringToSimpleHsv6 = require("./stringToSimpleHsv");

describe('stringToSimpleHsv', function () {
  describe('red', function () {
    test('converts hex to hsv', function () {
      var _stringToSimpleHsv = (0, _stringToSimpleHsv6.stringToSimpleHsv)('#FF0000'),
          h = _stringToSimpleHsv.h,
          s = _stringToSimpleHsv.s,
          v = _stringToSimpleHsv.v;

      expect(h).toBe(0);
      expect(s).toBe(1);
      expect(v).toBe(1);
    });
    test('converts color name to hsv', function () {
      var _stringToSimpleHsv2 = (0, _stringToSimpleHsv6.stringToSimpleHsv)('red'),
          h = _stringToSimpleHsv2.h,
          s = _stringToSimpleHsv2.s,
          v = _stringToSimpleHsv2.v;

      expect(h).toBe(0);
      expect(s).toBe(1);
      expect(v).toBe(1);
    });
  });
  describe('hueless and saturationless colors', function () {
    test('returns object with h = 0 and s = 0 when using "black"', function () {
      var _stringToSimpleHsv3 = (0, _stringToSimpleHsv6.stringToSimpleHsv)('black'),
          h = _stringToSimpleHsv3.h,
          s = _stringToSimpleHsv3.s,
          v = _stringToSimpleHsv3.v;

      expect(h).toBe(0);
      expect(s).toBe(0);
      expect(v).toBe(0);
    });
    test('returns object with h = 0 when using "white"', function () {
      var _stringToSimpleHsv4 = (0, _stringToSimpleHsv6.stringToSimpleHsv)('white'),
          h = _stringToSimpleHsv4.h,
          s = _stringToSimpleHsv4.s,
          v = _stringToSimpleHsv4.v;

      expect(h).toBe(0);
      expect(s).toBe(0);
      expect(v).toBe(1);
    });
    test('returns object with h = 0 when using "grey"', function () {
      var _stringToSimpleHsv5 = (0, _stringToSimpleHsv6.stringToSimpleHsv)('grey'),
          h = _stringToSimpleHsv5.h,
          s = _stringToSimpleHsv5.s,
          v = _stringToSimpleHsv5.v;

      expect(h).toBe(0);
      expect(s).toBe(0);
      expect(v).toBe(0.5019607843137255);
    });
  });
});
//# sourceMappingURL=stringToSimpleHsv.spec.js.map