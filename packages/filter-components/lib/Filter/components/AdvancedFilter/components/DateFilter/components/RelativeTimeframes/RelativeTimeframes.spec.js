import { screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { RelativeTimeframes } from './RelativeTimeframes';
const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    value: 800
  });
});
afterEach(() => {
  if (originalClientWidth) {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  }
});
describe('RelativeTimeframes', () => {
  it('should render RelativeTimeframes with custom timeframe', async () => {
    renderWithTheme(React.createElement(RelativeTimeframes, {
      value: {
        from: new Date(2016, 2, 1),
        to: new Date(2016, 3, 1)
      },
      onChange: jest.fn()
    }));
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByDisplayValue('2016/04/01')).toBeInTheDocument();
    fireEvent.click(document);
  });
  it('should render RelativeTimeframes in a dialog on mobile', async () => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: 400
    });
    renderWithTheme(React.createElement(RelativeTimeframes, {
      value: {
        from: new Date(2016, 2, 1),
        to: new Date(2016, 3, 1)
      },
      onChange: jest.fn()
    }));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Choose a Timeframe')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close'));
    await waitForElementToBeRemoved(() => screen.queryByText('Choose a Timeframe'));
  });
});
//# sourceMappingURL=RelativeTimeframes.spec.js.map