import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getDataRange } from './getDataRange';
import { mockBarConfig, mockFields } from '../fixtures';
describe('getDataRange', () => {
  const mockData = [{
    'orders.count': 2,
    'orders.average_total_amount_of_order_usd': 5
  }, {
    'orders.count': 7,
    'orders.average_total_amount_of_order_usd': 3
  }, {
    'orders.count': -2,
    'orders.average_total_amount_of_order_usd': -10
  }];
  it('picks min and max value from data array', () => {
    const [dataMin, dataMax] = getDataRange({
      config: mockBarConfig,
      fields: mockFields,
      data: mockData
    });
    expect(dataMin).toEqual(-10);
    expect(dataMax).toEqual(7);
  });
  it('picks min and max accumulated value of each data group when positioning == stacked', () => {
    const [dataMin, dataMax] = getDataRange({
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        positioning: 'stacked'
      }),
      fields: mockFields,
      data: mockData
    });
    expect(dataMin).toEqual(-12);
    expect(dataMax).toEqual(10);
  });
});
//# sourceMappingURL=getDataRange.spec.js.map