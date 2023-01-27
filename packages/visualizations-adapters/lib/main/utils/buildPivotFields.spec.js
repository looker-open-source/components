"use strict";

var _buildPivotFields2 = require("./buildPivotFields");
var _fixtures = require("../fixtures");

describe('buildPivotFields', function () {
  it('creates pivot measure objects for each measure and pivot value pairing', function () {
    var transformedFields = (0, _buildPivotFields2.buildPivotFields)({
      fields: _fixtures.mockFields,
      pivots: _fixtures.mockPivots
    });
    var pivotMeasures = transformedFields.measures;

    expect(pivotMeasures.length).toBe(6);

    var ordersCountComplete = pivotMeasures.find(function (pivotMeasure) {
      return pivotMeasure.name === 'complete - orders.count';
    }) || {
      label: 'faux_label',
      label_short: 'faux_label_short'
    };
    expect(ordersCountComplete).not.toBeUndefined();
    expect(ordersCountComplete.label_short).toBe('Complete');
    expect(ordersCountComplete.label).toBe('Orders Count');

    var ordersAveragePending = pivotMeasures.find(function (pivotMeasure) {
      return pivotMeasure.name === 'pending - orders.average_total_amount_of_order_usd';
    }) || {
      label: 'faux_label',
      label_short: 'faux_label_short'
    };
    expect(ordersAveragePending).not.toBeUndefined();
    expect(ordersAveragePending.label_short).toBe('Pending');
    expect(ordersAveragePending.label).toBe('Orders Average Total Amount of Order USD');
  });
  it('adds a pivoted_label property to measure field objects', function () {
    var _buildPivotFields = (0, _buildPivotFields2.buildPivotFields)({
        fields: _fixtures.mockFields,
        pivots: _fixtures.mockPivots
      }),
      measures = _buildPivotFields.measures;

    var ordersCountComplete = measures.find(function (pivotMeasure) {
      return pivotMeasure.name === 'complete - orders.count';
    }) || {
      label: 'faux_label',
      label_short: 'faux_label_short',
      pivoted_label: 'faux_pivoted_label'
    };
    expect(ordersCountComplete.pivoted_label).toBe('Orders Count: Complete');
  });
});
//# sourceMappingURL=buildPivotFields.spec.js.map