"use strict";

var _branded_tint = require("./branded_tint");

describe('Branded Tint Application', function () {
  it('selected tint should match given named color', function () {
    var tintRed = (0, _branded_tint.getBrandedTint)('selected', 'red');
    var hslaRed = 'hsla(0, 100%, 98%, 100%)';
    expect(tintRed).toEqual(hslaRed);
  });
  it('border tint should match given named color', function () {
    var tintRed = (0, _branded_tint.getBrandedTint)('border', 'red');
    var hslaRed = 'hsla(0, 25%, 90%, 100%)';
    expect(tintRed).toEqual(hslaRed);
  });
  it('hover tint should match given named color', function () {
    var tintRed = (0, _branded_tint.getBrandedTint)('hover', 'red');
    var hslaRed = 'hsla(0, 25%, 97%, 70%)';
    expect(tintRed).toEqual(hslaRed);
  });
  it('pressed tint should match given named color', function () {
    var tintRed = (0, _branded_tint.getBrandedTint)('pressed', 'red');
    var hslaRed = 'hsla(0, 50%, 96%, 90%)';
    expect(tintRed).toEqual(hslaRed);
  });
});
//# sourceMappingURL=branded_tint.spec.js.map