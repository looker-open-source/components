

import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { DEFAULT_SERIES_COLORS } from '@looker/visualizations-adapters';
import { ContextWrapper, sdkMethodColorCollectionListener } from '../testUtils';
import { useColorPalette } from './useColorPalette';
afterEach(() => {
  jest.resetAllMocks();
});
describe('useColorPalette', () => {
  const wrapper = ({
    children
  }) => React.createElement(ContextWrapper, null, children);
  it('returns DEFAULT_SERIES_COLORS when argument is undefined', () => {
    const {
      result
    } = renderHook(() => useColorPalette(), {
      wrapper
    });
    expect(result.current.colorPalette).toEqual(DEFAULT_SERIES_COLORS);
    expect(sdkMethodColorCollectionListener).not.toHaveBeenCalled();
  });
  it('returns color palette based on collection_id and paletted_id', async () => {
    const {
      result,
      waitForNextUpdate
    } = renderHook(() => useColorPalette({
      collection_id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
      palette_id: '18d0c733-1d87-42a9-934f-4ba8ef81d736'
    }), {
      wrapper
    });
    await waitForNextUpdate();
    expect(result.current.colorPalette).toEqual(['#3D52B9', '#08B248', '#A918B4', '#FC2E31', '#FC9200', '#2B99F7', '#C9DC10', '#fa2f90', '#FCBF00', '#24BED5', '#149888', '#6F38BB']);
    expect(sdkMethodColorCollectionListener).toHaveBeenCalledTimes(1);
  });
  it('returns custom color palette when that is present', async () => {
    const customColors = ['#FFFFFF', '#FF0000', '#00FF00'];
    const {
      result,
      waitForNextUpdate
    } = renderHook(() => useColorPalette({
      collection_id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
      custom: {
        colors: customColors,
        id: 'bb90f382-806e-f66a-cce0-35ee8f837186',
        label: 'Custom',
        type: 'discrete'
      }
    }), {
      wrapper
    });
    await waitForNextUpdate();
    expect(result.current.colorPalette).toEqual(customColors);
    expect(sdkMethodColorCollectionListener).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=useColorPalette.spec.js.map