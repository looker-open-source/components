import '@testing-library/jest-dom/extend-expect';
import { act, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ButtonItem } from './ButtonItem';
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

describe('ButtonItem', () => {
  test('ripple effect', () => {
    renderWithTheme(React.createElement(ButtonItem, null, "Button Item"));
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('bg-on fg-in');
    expect(button).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    button && fireEvent.focus(button);
    expect(button).toHaveClass('bg-on');
    button && fireEvent.mouseDown(button);
    expect(button).toHaveClass('bg-on fg-in');
    button && fireEvent.mouseUp(button);
    runTimers();
    expect(button).toHaveClass('bg-on fg-out');
    runTimers();
    expect(button).toHaveClass('bg-on');
    button && fireEvent.blur(button);
    expect(button).not.toHaveClass('bg-on fg-in');
    fireEvent.click(document);
  });
});
//# sourceMappingURL=ButtonItem.spec.js.map