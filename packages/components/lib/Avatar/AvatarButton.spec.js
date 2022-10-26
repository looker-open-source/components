import { renderWithTheme } from '@looker/components-test-utils';
import { act, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { AvatarButton } from './AvatarButton';
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

describe('AvatarButton', () => {
  test('default', () => {
    renderWithTheme(React.createElement(AvatarButton, {
      label: "Avatar"
    }));
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('bg-on fg-in');
    expect(button).toHaveStyle({
      '--ripple-color': '#71767a',
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
});
//# sourceMappingURL=AvatarButton.spec.js.map