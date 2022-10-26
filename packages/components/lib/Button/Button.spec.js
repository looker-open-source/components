import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { fireEvent, screen, act } from '@testing-library/react';
import { Button } from './Button';
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

describe('Button', () => {
  test('accepts a className prop', () => {
    const {
      container
    } = renderWithTheme(React.createElement(Button, {
      className: "foo"
    }, "button with class"));
    expect(container.firstChild).toHaveClass('foo');
  });
  test('size', () => {
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(Button, {
      size: "xxsmall"
    }, "Xsmall Button"), React.createElement(Button, {
      size: "large"
    }, "Large Button")));
    expect(screen.getByText('Xsmall Button')).toBeInTheDocument();
    expect(screen.getByText('Large Button')).toBeInTheDocument();
  });
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(React.createElement(Button, null, "Test"));
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('bg-on fg-in');
      expect(button).toHaveStyle({
        '--ripple-color': '#FFFFFF',
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
      renderWithTheme(React.createElement(Button, {
        color: "critical"
      }, "Test"));
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        '--ripple-color': '#FFFFFF'
      });
    });
  });
});
//# sourceMappingURL=Button.spec.js.map