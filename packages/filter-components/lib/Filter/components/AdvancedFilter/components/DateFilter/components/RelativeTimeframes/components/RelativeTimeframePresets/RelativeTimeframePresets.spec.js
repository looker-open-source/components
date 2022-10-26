import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { AllPresetTimeframes } from '../../../../types/relative_timeframe_types';
import { RelativeTimeframePresets } from './RelativeTimeframePresets';
describe('RelativeTimeframePresets', () => {
  it('renders a preset and calls onPresetChange', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(RelativeTimeframePresets, {
      value: AllPresetTimeframes.Last14,
      onPresetChange: onChangeMock
    }));
    const item = screen.getByText('Last 14 Days');
    expect(item).toBeInTheDocument();
    fireEvent.click(item);
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "Last 14 Days",
        ],
      ]
    `);
  });
});
//# sourceMappingURL=RelativeTimeframePresets.spec.js.map