

import { nullValueZero } from './nullValueZero';
import { mockFields } from '../fixtures';
describe('nullValueZero', () => {
  const mockData = [{
    'orders.created_month': '2019-11',
    'orders.count': 1,
    'orders.average_total_amount_of_order_usd': null
  }, {
    'orders.created_month': '2014-07',
    'orders.count': null,
    'orders.average_total_amount_of_order_usd': null
  }, {
    'orders.created_month': '2017-09',
    'orders.count': 4000,
    'orders.average_total_amount_of_order_usd': 15
  }];
  it('replaces null values with 0 when render_null_values is true', () => {
    const {
      data: draftData
    } = nullValueZero({
      data: mockData,
      fields: mockFields,
      config: {
        type: 'line',
        render_null_values: true
      }
    });
    expect(draftData).toMatchInlineSnapshot(`
      Array [
        Object {
          "orders.average_total_amount_of_order_usd": 0,
          "orders.count": 1,
          "orders.created_month": "2019-11",
        },
        Object {
          "orders.average_total_amount_of_order_usd": 0,
          "orders.count": 0,
          "orders.created_month": "2014-07",
        },
        Object {
          "orders.average_total_amount_of_order_usd": 15,
          "orders.count": 4000,
          "orders.created_month": "2017-09",
        },
      ]
    `);
  });
  it('passes through unmodified data when render_null_values is false', () => {
    const {
      data: draftData
    } = nullValueZero({
      data: mockData,
      fields: mockFields,
      config: {
        type: 'line',
        render_null_values: false
      }
    });
    expect(draftData).toEqual(mockData);
  });
});
//# sourceMappingURL=renderNullValues.spec.js.map