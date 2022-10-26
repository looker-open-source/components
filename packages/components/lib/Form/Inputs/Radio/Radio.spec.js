import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { RIPPLE_RATIO } from '../../../Ripple';
import * as stories from './Radio.stories';
const {
  Basic,
  Disabled,
  DisabledChecked
} = composeStories(stories);
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.resetAllMocks();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

describe('Radio', () => {
  test('renders properly', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
  test('accepts defaultChecked prop', () => {
    renderWithTheme(React.createElement(Basic, {
      defaultChecked: true
    }));
    expect(screen.getByRole('radio')).toBeChecked();
  });
  test('should accept disabled prop', () => {
    renderWithTheme(React.createElement(Disabled, null));
    expect(screen.getByRole('radio')).toBeDisabled();
  });
  test('should accept disabled and checked props together', () => {
    renderWithTheme(React.createElement(DisabledChecked, null));
    expect(screen.getByRole('radio')).toBeDisabled();
    expect(screen.getByRole('radio')).toBeChecked();
  });
  test('has aria-describedby attribute', () => {
    renderWithTheme(React.createElement(Basic, {
      "aria-describedby": "some-id",
      id: "RadioID"
    }));
    expect(screen.getByRole('radio')).toHaveAttribute('aria-describedby', 'some-id');
  });
  test('renders with error', () => {
    renderWithTheme(React.createElement(Basic, {
      validationType: "error"
    }));
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });
  test('renders checked with error', () => {
    renderWithTheme(React.createElement(Basic, {
      defaultChecked: true,
      validationType: "error"
    }));
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });
  test('should trigger onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(Basic, {
      id: "radioID",
      onChange: onChange
    }));
    fireEvent.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('ripple effect', () => {
    renderWithTheme(React.createElement(Basic, null));
    const radioWrapper = screen.getByRole('radio').closest('div');
    const radio = screen.getByRole('radio');
    expect(radioWrapper).not.toHaveClass('bg-on fg-in');
    expect(radioWrapper).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    fireEvent.focus(radio);
    expect(radioWrapper).toHaveClass('bg-on');
    fireEvent.mouseDown(radio);
    expect(radioWrapper).toHaveClass('bg-on fg-in');
    fireEvent.mouseUp(radio);
    runTimers();
    expect(radioWrapper).toHaveClass('bg-on fg-out');
    runTimers();
    expect(radioWrapper).toHaveClass('bg-on');
    fireEvent.blur(radio);
    expect(radioWrapper).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=Radio.spec.js.map