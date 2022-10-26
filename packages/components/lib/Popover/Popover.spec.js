import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import React, { useRef } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Button } from '../Button';
import { Popover } from './Popover';
import { PopoverLayout } from './Layout';
const SimpleContent = React.createElement("div", null, "simple content");
describe('Popover', () => {
  afterEach(() => {
    const root = document.getElementById('modal-root');

    if (root) {
      document.body.removeChild(root);
    }
  });
  test('Accessibility', () => {
    renderWithTheme(React.createElement(Popover, {
      id: "a11y",
      content: React.createElement(PopoverLayout, {
        header: "Header text",
        footer: true
      }, "content")
    }, React.createElement(Button, null, "Open")));
    const openPopover = screen.getByText('Open');
    fireEvent.click(openPopover);
    expect(screen.getByText('Header text')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'a11y-heading');
    expect(screen.getByText('Header text')).toHaveAttribute('id', 'a11y-heading');
    fireEvent.click(document);
  });
  test('cloneElement style opens and closes', () => {
    renderWithTheme(React.createElement(Popover, {
      content: SimpleContent
    }, React.createElement("button", null, "Test")));
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
    const trigger = screen.getByText('Test');
    fireEvent.click(trigger);
    expect(screen.getByText('simple content')).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
  });
  test('renderProps style expanded opens and closes', () => {
    renderWithTheme(React.createElement(Popover, {
      content: SimpleContent
    }, popoverProps => React.createElement("button", popoverProps, "Test")));
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
    const trigger = screen.getByText('Test');
    fireEvent.click(trigger);
    expect(screen.getByText('simple content')).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
  });
  test('preventDefault works on trigger 2nd click', () => {
    const mockFormSubmit = jest.fn(e => e.preventDefault());
    renderWithTheme(React.createElement("form", {
      onSubmit: mockFormSubmit
    }, React.createElement(Popover, {
      content: SimpleContent
    }, React.createElement("button", null, "Test"))));
    const trigger = screen.getByText('Test');
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(mockFormSubmit).not.toHaveBeenCalled();
  });
  test('stopPropagation works - event on container is not called', () => {
    const mockContainerOnClick = jest.fn();
    renderWithTheme(React.createElement("div", {
      onClick: mockContainerOnClick
    }, React.createElement(Popover, {
      content: SimpleContent
    }, React.createElement("button", null, "Test"))));
    const trigger = screen.getByText('Test');
    fireEvent.click(trigger);
    expect(screen.getByText('simple content')).toBeInTheDocument();
    expect(mockContainerOnClick).not.toHaveBeenCalled();
    fireEvent.click(document);
  });
  test('Open popover does not cancel event on "dismissal click"', () => {
    const doThing = jest.fn();
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(Popover, {
      content: SimpleContent
    }, React.createElement("button", null, "Instant Click")), React.createElement("a", {
      onClick: doThing
    }, "Do thing...")));
    const trigger = screen.getByText('Instant Click');
    fireEvent.click(trigger);
    const closer = screen.getByText('Do thing...');
    fireEvent.click(closer);
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
    expect(doThing).toBeCalledTimes(1);
  });
  test('With cancelClickOutside = true, open popover cancels 1st click event', () => {
    const doThing = jest.fn();
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(Popover, {
      content: SimpleContent,
      cancelClickOutside: true
    }, React.createElement("button", null, "Instant Click")), React.createElement("a", {
      onClick: doThing
    }, "Do thing...")));
    const trigger = screen.getByText('Instant Click');
    fireEvent.click(trigger);
    const closer = screen.getByText('Do thing...');
    fireEvent.click(closer);
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
    expect(doThing).toBeCalledTimes(0);
  });
  test('Popover trigger is shown/hidden on hover of hoverDisclosureRef', () => {
    const Component = () => {
      const hoverRef = useRef(null);
      return React.createElement("div", {
        ref: hoverRef
      }, React.createElement(Popover, {
        content: SimpleContent,
        hoverDisclosureRef: hoverRef
      }, React.createElement(Button, null, "Instant Click")), "Some text in the div");
    };

    renderWithTheme(React.createElement(Component, null));
    const trigger = screen.queryByText('Instant Click');
    const div = screen.getByText('Some text in the div');
    expect(trigger).not.toBeInTheDocument();
    fireEvent(div, new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true
    }));
    const triggerNew = screen.getByText('Instant Click');
    expect(screen.queryByText('simple content')).not.toBeInTheDocument();
    fireEvent.click(triggerNew);
    expect(screen.getByText('simple content')).toBeInTheDocument();
    fireEvent.click(document);
  });
});
//# sourceMappingURL=Popover.spec.js.map