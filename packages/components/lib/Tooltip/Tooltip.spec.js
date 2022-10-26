import 'jest-styled-components';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { Tooltip } from './Tooltip';
describe('Tooltip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  const runTimers = () => act(() => {
    jest.runOnlyPendingTimers();
  });

  test('trigger: delay on mouseover, exits immediately on mouseout', () => {
    renderWithTheme(React.createElement(Tooltip, {
      content: "Hello world"
    }, React.createElement(Button, null, "Test")));
    const trigger = screen.getByText('Test');
    fireEvent.mouseOver(trigger);
    const tooltip = screen.getByText('Hello world');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).not.toBeVisible();
    runTimers();
    expect(tooltip).toBeVisible();
    fireEvent.mouseOut(tooltip);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('isOpen', () => {
    renderWithTheme(React.createElement(Tooltip, {
      content: "Hello world",
      isOpen: true
    }, React.createElement(Button, null, "Test")));
    const tooltip = screen.getByText('Hello world');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).not.toBeVisible();
    runTimers();
    expect(tooltip).toBeVisible();
    fireEvent.mouseOut(tooltip);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('delayNone', () => {
    jest.useFakeTimers();
    renderWithTheme(React.createElement(Tooltip, {
      content: "Hello world",
      isOpen: true,
      delay: "none"
    }, React.createElement(Button, null, "Test")));
    const trigger = screen.getByText('Test');
    fireEvent.mouseOver(trigger);
    runTimers();
    const tooltip = screen.getByText('Hello world');
    expect(tooltip).toBeInTheDocument();
    fireEvent.mouseOut(tooltip);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('open initially, collapse on mouseout', () => {
    renderWithTheme(React.createElement(Tooltip, {
      content: "Hello world",
      isOpen: true
    }, React.createElement(Button, null, "Test")));
    const trigger = screen.getByText('Test');
    const tooltip = screen.queryByText('Hello world');
    runTimers();
    expect(tooltip).toBeVisible();
    fireEvent.mouseOut(trigger);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('supports styling props', () => {
    renderWithTheme(React.createElement(Tooltip, {
      content: "Hello world",
      width: "20rem",
      textAlign: "right"
    }, React.createElement(Button, null, "Test")));
    const trigger = screen.getByText('Test');
    fireEvent.mouseOver(trigger);
    const tooltip = screen.queryByText('Hello world');
    runTimers();
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveStyleRule('max-width: 20rem');
    expect(tooltip).toHaveStyleRule('text-align: right');
    fireEvent.mouseOut(trigger);
    runTimers();
  });
  test('Render props version works', () => {
    renderWithTheme(React.createElement(Tooltip, {
      content: "Hello world"
    }, props => React.createElement(Button, props, "Test")));
    const trigger = screen.getByText('Test');
    fireEvent.mouseOver(trigger);
    const tooltip = screen.queryByText('Hello world');
    expect(tooltip).not.toBeVisible();
    runTimers();
    expect(tooltip).toBeVisible();
    fireEvent.mouseOut(trigger);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('nested in a Popover', () => {
    const mockHandlers = {
      onBlur: jest.fn(),
      onClick: jest.fn(),
      onFocus: jest.fn(),
      onMouseOut: jest.fn(),
      onMouseOver: jest.fn()
    };
    renderWithTheme(React.createElement(Popover, {
      content: "Some popover"
    }, React.createElement(Tooltip, {
      content: "Some tooltip"
    }, React.createElement(Button, mockHandlers, "Open"))));
    const button = screen.getByText('Open');
    fireEvent.focus(button);
    expect(mockHandlers.onFocus).toHaveBeenCalled();
    runTimers();
    expect(screen.getByText('Some tooltip')).toBeVisible();
    fireEvent.click(button);
    expect(screen.getByText('Some popover')).toBeVisible();
    expect(screen.queryByText('Some tooltip')).not.toBeInTheDocument();
    expect(mockHandlers.onClick).toHaveBeenCalled();
    fireEvent.mouseOut(button);
    expect(mockHandlers.onMouseOut).toHaveBeenCalled();
    fireEvent.mouseOver(button);
    expect(mockHandlers.onMouseOver).toHaveBeenCalled();
    runTimers();
    expect(screen.queryByText('Some tooltip')).not.toBeInTheDocument();
    fireEvent.blur(button);
    expect(mockHandlers.onBlur).toHaveBeenCalled();
    fireEvent.click(document);
  });
  test('with nested autoFocus input', () => {
    const AutoFocusInput = () => {
      const [show, setShow] = useState(false);
      return React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: () => setShow(true)
      }, "Click"), show && React.createElement(Tooltip, {
        content: "See what happens when you scroll",
        placement: "right"
      }, React.createElement("div", null, React.createElement("input", {
        type: "text",
        autoFocus: true
      }))));
    };

    renderWithTheme(React.createElement(AutoFocusInput, null));
    fireEvent.click(screen.getByText('Click'));
    runTimers();
    expect(screen.getByRole('tooltip')).toBeVisible();
    fireEvent.blur(screen.getByRole('textbox'));
  });
  test('disabled, no undefined className', () => {
    renderWithTheme(React.createElement(Tooltip, {
      disabled: true,
      content: "Hello world"
    }, React.createElement(Button, null, "Test")));
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('undefined');
  });
});
//# sourceMappingURL=Tooltip.spec.js.map