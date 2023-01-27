"use strict";

var _hexToRgba = require("./hexToRgba");

describe('hexToRgba', function () {
  test('converts hex code to rgba equivalent', function () {
    expect((0, _hexToRgba.hexToRgba)('#ffffff', 1)).toEqual('rgba(255, 255, 255, 1)');
    expect((0, _hexToRgba.hexToRgba)('#000000', 0.1)).toEqual('rgba(0, 0, 0, 0.1)');
  });
  test('handles 3-digit hex colors without the preceeding # symbol', function () {
    expect((0, _hexToRgba.hexToRgba)('fff', 0.5)).toEqual('rgba(255, 255, 255, 0.5)');
  });
  test('throws error when invalid arguments are supplied', function () {
    expect(function () {
      (0, _hexToRgba.hexToRgba)('not-a-hex-code', 1);
    }).toThrow();
    expect(function () {
      (0, _hexToRgba.hexToRgba)('FFFFFF', 1000);
    }).toThrow();
  });
});
//# sourceMappingURL=hexToRgba.spec.js.map