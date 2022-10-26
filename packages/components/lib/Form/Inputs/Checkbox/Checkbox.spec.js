import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { RIPPLE_RATIO } from '../../../Ripple';
import * as stories from './Checkbox.stories';
const {
  Basic,
  Checked,
  Disabled,
  DisabledChecked,
  MixedChecked,
  ReadOnly
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

describe('Checkbox', () => {
  test('renders', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('checked', () => {
    renderWithTheme(React.createElement(Checked, null));
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toBeChecked();
  });
  test('mixed', () => {
    renderWithTheme(React.createElement(MixedChecked, null));
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toBeChecked();
    expect(screen.getByText('Check Mark Mixed')).toBeInTheDocument();
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(Disabled, null));
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeDisabled();
  });
  test('disabled & checked', () => {
    renderWithTheme(React.createElement(DisabledChecked, null));
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeChecked();
    expect(checkboxInput).toBeDisabled();
  });
  test('Accepts defaultChecked prop, and toggles value without change handler', () => {
    renderWithTheme(React.createElement(Basic, {
      defaultChecked: true
    }));
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeChecked();
    fireEvent.click(checkboxInput);
    expect(checkboxInput).not.toBeChecked();
  });
  test('Accepts checked prop, and is readOnly without a change handler', () => {
    renderWithTheme(React.createElement(Checked, null));
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeChecked();
    fireEvent.click(checkboxInput);
    expect(checkboxInput).toBeChecked();
  });
  test('Triggers onChange handler', () => {
    const mockProps = {
      onChange: jest.fn()
    };
    renderWithTheme(React.createElement(Basic, mockProps));
    const checkboxInput = screen.getByRole('checkbox');
    expect(mockProps.onChange).not.toHaveBeenCalled();
    expect(checkboxInput).not.toBeChecked();
    fireEvent.click(checkboxInput);
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(checkboxInput).toBeChecked();
  });
  test("Checkbox readOnly doesn't register change events", () => {
    const mockProps = {
      onChange: jest.fn()
    };
    renderWithTheme(React.createElement(ReadOnly, _extends({
      id: "checkboxID"
    }, mockProps)));
    const checkboxInput = screen.getByRole('checkbox');
    fireEvent.click(checkboxInput);
    expect(mockProps.onChange).toHaveBeenCalledTimes(0);
  });
  test('Supports aria-describedby', () => {
    renderWithTheme(React.createElement(Basic, {
      "aria-describedby": "some-id",
      id: "checkboxID"
    }));
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-describedby', 'some-id');
  });
  test('ripple effect', () => {
    renderWithTheme(React.createElement(Basic, null));
    const checkboxWrapper = screen.getByRole('checkbox').closest('div');
    const checkbox = screen.getByRole('checkbox');
    expect(checkboxWrapper).not.toHaveClass('bg-on fg-in');
    expect(checkboxWrapper).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    fireEvent.focus(checkbox);
    expect(checkboxWrapper).toHaveClass('bg-on');
    fireEvent.mouseDown(checkbox);
    expect(checkboxWrapper).toHaveClass('bg-on fg-in');
    fireEvent.mouseUp(checkbox);
    runTimers();
    expect(checkboxWrapper).toHaveClass('bg-on fg-out');
    runTimers();
    expect(checkboxWrapper).toHaveClass('bg-on');
    fireEvent.blur(checkbox);
    expect(checkboxWrapper).not.toHaveClass('bg-on fg-in');
  });
});
//# sourceMappingURL=Checkbox.spec.js.map