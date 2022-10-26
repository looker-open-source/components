import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { RIPPLE_RATIO } from '../../../Ripple';
import * as stories from './ToggleSwitch.stories';
const {
  Basic,
  Checked,
  Disabled
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

describe('ToggleSwitch', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByRole('switch')).not.toBeChecked();
  });
  test('on', () => {
    renderWithTheme(React.createElement(Checked, null));
    expect(screen.getByRole('switch')).toBeChecked();
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(Disabled, null));
    expect(screen.getByRole('switch')).toBeDisabled();
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(Disabled, null));
    expect(screen.getByRole('switch')).toBeDisabled();
  });
  test('Should trigger onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(Basic, {
      onChange: onChange
    }));
    fireEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('ripple effect', () => {
    renderWithTheme(React.createElement(Basic, null));
    const input = screen.getByRole('switch');
    const handle = screen.getByTestId('handle');
    expect(handle).not.toHaveClass('bg-on fg-in');
    expect(handle).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    fireEvent.focus(input);
    expect(handle).toHaveClass('bg-on');
    fireEvent.mouseDown(input);
    expect(handle).toHaveClass('bg-on fg-in');
    fireEvent.mouseUp(input);
    runTimers();
    expect(handle).toHaveClass('bg-on fg-out');
    runTimers();
    expect(handle).toHaveClass('bg-on');
    fireEvent.blur(input);
    expect(handle).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=ToggleSwitch.spec.js.map