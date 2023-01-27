

import React from 'react';
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { ComponentsProvider } from '@looker/components-providers';
import { useLabelWidth, MIN_LABEL_SPACE } from './useLabelWidth';
const wrapper = ({
  children
}) => React.createElement(ComponentsProvider, null, children);
describe('useLabelWidth', () => {
  test('calculates the width of the longest label in a set', async () => {
    const data = {
      albany: 20,
      albuquerque: 20
    };
    const legend = {
      type: 'legend',
      value: 'label_percent'
    };
    const {
      result,
      unmount
    } = renderHook(() => useLabelWidth(40, data, legend), {
      wrapper
    });

    expect(result.current).toEqual(MIN_LABEL_SPACE);

    unmount();
    await cleanup();
  });
});
//# sourceMappingURL=useLabelWidth.spec.js.map