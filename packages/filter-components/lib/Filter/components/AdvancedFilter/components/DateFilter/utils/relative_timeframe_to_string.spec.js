import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { renderHook } from '@testing-library/react-hooks';
import { AllPresetTimeframes } from '../types/relative_timeframe_types';
import { useRelativeTimeframeToString } from './relative_timeframe_to_string';
jest.mock('@looker/i18n', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/i18n')), {}, {
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
describe('Relative Timeframe to String', () => {
  it('should return the preset name for presets', () => {
    const {
      result: {
        current
      }
    } = renderHook(useRelativeTimeframeToString, {
      initialProps: AllPresetTimeframes.ThisMonth
    });
    expect(current).toEqual('This Month');
  });
  it('should return a formatted range for custom timeframes', () => {
    const {
      result: {
        current
      }
    } = renderHook(useRelativeTimeframeToString, {
      initialProps: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 2, 1)
      }
    });
    expect(current).toEqual('2019/01/01 - 2019/03/01');
  });
});
//# sourceMappingURL=relative_timeframe_to_string.spec.js.map