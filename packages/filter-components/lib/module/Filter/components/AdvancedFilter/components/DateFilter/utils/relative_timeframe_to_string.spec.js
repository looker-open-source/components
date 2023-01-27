

import React from 'react';
import { ComponentsProvider } from '@looker/components';
import { renderHook } from '@testing-library/react-hooks';
import { AllPresetTimeframes } from '../types/relative_timeframe_types';
import { useRelativeTimeframeToString } from './relative_timeframe_to_string';
describe('Relative Timeframe to String', () => {
  const wrapper = ({
    children
  }) => React.createElement(ComponentsProvider, null, children);
  it('should return the preset name for presets', () => {
    const {
      result: {
        current
      }
    } = renderHook(() => useRelativeTimeframeToString(AllPresetTimeframes.ThisMonth), {
      wrapper
    });
    expect(current).toEqual('This Month');
  });
  it('should return a formatted range for custom timeframes', () => {
    const {
      result: {
        current
      }
    } = renderHook(() => useRelativeTimeframeToString({
      from: new Date(2019, 0, 1),
      to: new Date(2019, 2, 1)
    }), {
      wrapper
    });
    expect(current).toEqual('2019/01/01 - 2019/03/01');
  });
});
//# sourceMappingURL=relative_timeframe_to_string.spec.js.map