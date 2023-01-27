"use strict";

var _buildPivotMeasureName = require("./buildPivotMeasureName");

describe('buildPivotMeasureName', function () {
  it('concats a measure name and pivot value with a | character', function () {
    var pivotMeasureName = (0, _buildPivotMeasureName.buildPivotMeasureName)({
      measureName: 'orders.count',
      pivotValue: 'complete'
    });
    expect(pivotMeasureName).toEqual('complete - orders.count');
  });
});
//# sourceMappingURL=buildPivotMeasureName.spec.js.map