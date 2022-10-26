import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { RelativeTimeframePopoverContent } from './RelativeTimeframePopoverContent';
describe('RelativeTimeframePopoverContent', () => {
  const realDateNow = Date.now.bind(global.Date);
  beforeEach(() => {
    global.Date.now = jest.fn(() => 1479427200000);
  });
  afterEach(() => {
    global.Date.now = realDateNow;
  });
  it('renders a RelativeTimeframePopoverContent with custom timeframe', () => {
    renderWithTheme(React.createElement(RelativeTimeframePopoverContent, {
      value: {
        from: new Date(2018, 1, 1),
        to: new Date(2018, 12, 31)
      },
      onCustomChange: jest.fn(),
      onPresetChange: jest.fn(),
      onNav: jest.fn()
    }));
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('2018/02/01');
    expect(inputs[1]).toHaveValue('2019/01/31');
  });
});
//# sourceMappingURL=RelativeTimeframePopoverContent.spec.js.map