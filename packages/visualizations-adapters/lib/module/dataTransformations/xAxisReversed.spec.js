

import { xAxisReversed } from './xAxisReversed';
import { mockFields } from '../fixtures';
describe('xAxisReversed', () => {
  const mockData = [{
    'orders.created_month': 'First',
    'orders.count': 1
  }, {
    'orders.created_month': 'Second',
    'orders.count': 1000
  }, {
    'orders.created_month': 'Third',
    'orders.count': 4000
  }];
  it('reversed data', () => {
    const {
      data: draftData
    } = xAxisReversed({
      data: mockData,
      fields: mockFields,
      config: {
        type: 'line',
        x_axis: [{
          reversed: true
        }]
      }
    });
    expect(draftData).toMatchInlineSnapshot(`
      Array [
        Object {
          "orders.count": 4000,
          "orders.created_month": "Third",
        },
        Object {
          "orders.count": 1000,
          "orders.created_month": "Second",
        },
        Object {
          "orders.count": 1,
          "orders.created_month": "First",
        },
      ]
    `);
  });
});
//# sourceMappingURL=xAxisReversed.spec.js.map