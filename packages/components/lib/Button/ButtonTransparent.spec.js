import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { fireEvent, screen, act } from '@testing-library/react';
import { ButtonTransparent } from './ButtonTransparent';
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

describe('ButtonTransparent', () => {
  test('ripple effect default', () => {
    renderWithTheme(React.createElement(ButtonTransparent, null, "Test"));
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('bg-on fg-in');
    expect(button).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    fireEvent.focus(button);
    expect(button).toHaveClass('bg-on');
    fireEvent.mouseDown(button);
    expect(button).toHaveClass('bg-on fg-in');
    fireEvent.mouseUp(button);
    runTimers();
    expect(button).toHaveClass('bg-on fg-out');
    runTimers();
    expect(button).toHaveClass('bg-on');
    fireEvent.blur(button);
    expect(button).not.toHaveClass('bg-on fg-in');
  });
  test('Color critical', () => {
    renderWithTheme(React.createElement(ButtonTransparent, {
      color: "critical"
    }, "Test"));
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      '--ripple-color': '#CC1F36'
    });
  });
});
//# sourceMappingURL=ButtonTransparent.spec.js.map