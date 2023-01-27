import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { mockTableConfig, mockFields, mockSdkDataResponse } from '../fixtures';
import { showTotals } from './showTotals';
describe('showTotals', () => {
  test('config.show_totals === undefined', () => {
    const config = _objectSpread({}, mockTableConfig);
    const {
      config: transformedConfig
    } = showTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.show_totals).toEqual(true);
  });
  test('config.show_totals === true', () => {
    const config = _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_totals: true
    });
    const {
      config: transformedConfig
    } = showTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.show_totals).toEqual(true);
  });
  test('config.show_totals === false', () => {
    const config = _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_totals: false
    });
    const {
      config: transformedConfig
    } = showTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.show_totals).toEqual(false);
  });
});
//# sourceMappingURL=showTotals.spec.js.map