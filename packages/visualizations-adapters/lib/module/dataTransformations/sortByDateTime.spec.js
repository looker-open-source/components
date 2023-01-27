import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { sortByDateTime } from './sortByDateTime';
import { mockFields } from '../fixtures';
describe('sortByDateTime', () => {
  const mockData = [{
    'orders.created_month': '2019-11',
    'orders.count': 1
  }, {
    'orders.created_month': '2018-10',
    'orders.count': 20
  }, {
    'orders.created_month': '2014-07',
    'orders.count': 300
  }, {
    'orders.created_month': '2017-09',
    'orders.count': 4000
  }];
  const {
    measures,
    dimensions
  } = mockFields;
  it('sorts data in chronological order', () => {
    const sortedData = sortByDateTime({
      data: mockData,
      fields: {
        measures,
        dimensions: [_objectSpread(_objectSpread({}, dimensions[0]), {}, {
          name: 'orders.created_month'
        })],
        pivots: []
      },
      config: {
        type: 'line'
      }
    });
    expect(sortedData.data).toMatchInlineSnapshot(`
      Array [
        Object {
          "orders.count": 300,
          "orders.created_month": "2014-07",
        },
        Object {
          "orders.count": 4000,
          "orders.created_month": "2017-09",
        },
        Object {
          "orders.count": 20,
          "orders.created_month": "2018-10",
        },
        Object {
          "orders.count": 1,
          "orders.created_month": "2019-11",
        },
      ]
    `);
  });
});
//# sourceMappingURL=sortByDateTime.spec.js.map