"use strict";

var _precisionUtils = require("./precisionUtils");

describe('getPrecision', function () {
  test('Calculate precision', function () {
    expect((0, _precisionUtils.getPrecision)(0.1)).toEqual(1);
    expect((0, _precisionUtils.getPrecision)(0.001)).toEqual(3);
    expect((0, _precisionUtils.getPrecision)(1)).toEqual(0);
    expect((0, _precisionUtils.getPrecision)(100.1)).toEqual(1);
    expect((0, _precisionUtils.getPrecision)(NaN)).toEqual(0);
    expect((0, _precisionUtils.getPrecision)(Infinity)).toEqual(0);
  });
});
describe('precisionRound', function () {
  test('Round to a specified precision', function () {
    expect((0, _precisionUtils.precisionRound)(0.1 + 0.2, 2)).toEqual(0.3);
    expect((0, _precisionUtils.precisionRound)(1.123456, 2)).toEqual(1.12);
    expect((0, _precisionUtils.precisionRound)(0.1 + 0.2, 0)).toEqual(0);
  });
});
//# sourceMappingURL=precisionUtils.spec.js.map