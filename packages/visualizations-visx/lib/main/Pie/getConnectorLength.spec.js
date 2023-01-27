"use strict";

var _getConnectorLength = require("./getConnectorLength");

describe('getConnectorLength', function () {
  test('defines a long connector at the top or bottom of the chart', function () {
    var lengthBottom = (0, _getConnectorLength.getConnectorLength)(Math.PI, 500);
    var lengthTop = (0, _getConnectorLength.getConnectorLength)(Math.PI * 2, 500);
    expect(lengthBottom).toMatchInlineSnapshot("68.21083018079717");
    expect(lengthBottom).toEqual(lengthTop);
  });
  test('defines a short connector at the (vertical) middle of the chart', function () {
    var lengthRight = (0, _getConnectorLength.getConnectorLength)(Math.PI / 2, 500);
    var lengthLeft = (0, _getConnectorLength.getConnectorLength)(Math.PI * 1.5, 500);
    expect(lengthLeft).toMatchInlineSnapshot("11.15");
    expect(lengthLeft).toEqual(lengthRight);
  });
});
//# sourceMappingURL=getConnectorLength.spec.js.map