

import { buildPivotFields } from './buildPivotFields';
import { mockFields, mockPivots } from '../fixtures';
describe('buildPivotFields', () => {
  it('creates pivot measure objects for each measure and pivot value pairing', () => {
    const transformedFields = buildPivotFields({
      fields: mockFields,
      pivots: mockPivots
    });
    const {
      measures: pivotMeasures
    } = transformedFields;

    expect(pivotMeasures.length).toBe(6);

    const ordersCountComplete = pivotMeasures.find(pivotMeasure => pivotMeasure.name === 'complete - orders.count') || {
      label: 'faux_label',
      label_short: 'faux_label_short'
    };
    expect(ordersCountComplete).not.toBeUndefined();
    expect(ordersCountComplete.label_short).toBe('Complete');
    expect(ordersCountComplete.label).toBe('Orders Count');

    const ordersAveragePending = pivotMeasures.find(pivotMeasure => pivotMeasure.name === 'pending - orders.average_total_amount_of_order_usd') || {
      label: 'faux_label',
      label_short: 'faux_label_short'
    };
    expect(ordersAveragePending).not.toBeUndefined();
    expect(ordersAveragePending.label_short).toBe('Pending');
    expect(ordersAveragePending.label).toBe('Orders Average Total Amount of Order USD');
  });
  it('adds a pivoted_label property to measure field objects', () => {
    const {
      measures
    } = buildPivotFields({
      fields: mockFields,
      pivots: mockPivots
    });

    const ordersCountComplete = measures.find(pivotMeasure => pivotMeasure.name === 'complete - orders.count') || {
      label: 'faux_label',
      label_short: 'faux_label_short',
      pivoted_label: 'faux_pivoted_label'
    };
    expect(ordersCountComplete.pivoted_label).toBe('Orders Count: Complete');
  });
});
//# sourceMappingURL=buildPivotFields.spec.js.map