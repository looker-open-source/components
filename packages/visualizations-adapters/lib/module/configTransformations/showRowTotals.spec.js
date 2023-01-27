import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { mockTableConfig, mockFields, mockSdkDataResponse } from '../fixtures';
import { showRowTotals } from './showRowTotals';
describe('showRowTotals', () => {
  test.only('config.show_row_totals === undefined', () => {
    const config = _objectSpread({}, mockTableConfig);
    const {
      config: transformedConfig
    } = showRowTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.show_row_totals).toEqual(true);
  });
  test('config.show_row_totals === true', () => {
    const config = _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_totals: true
    });
    const {
      config: transformedConfig
    } = showRowTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.show_row_totals).toEqual(true);
  });
  test('config.show_row_totals === false', () => {
    const config = _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_totals: false
    });
    const {
      config: transformedConfig
    } = showRowTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.show_row_totals).toEqual(false);
  });
});
//# sourceMappingURL=showRowTotals.spec.js.map