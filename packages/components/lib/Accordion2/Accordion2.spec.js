import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { children, label, lorem } from '../fixtures/accordion';
import { Accordion2 } from './Accordion2';
import { Controlled } from './stories/index.stories';
const defaultProps = {
  children,
  label,
  lorem
};
describe('Accordion2', () => {
  test('Basic', () => {
    renderWithTheme(React.createElement(Accordion2, defaultProps));
    const accordionLabel = screen.getByText(label);
    expect(screen.queryByText(children)).not.toBeInTheDocument();
    fireEvent.click(accordionLabel);
    screen.getByText(children);
    fireEvent.click(accordionLabel);
    expect(screen.queryByText(children)).not.toBeInTheDocument();
  });
  test('defaultOpen - renders children by default when defaultOpen === true', () => {
    renderWithTheme(React.createElement(Accordion2, _extends({
      defaultOpen: true
    }, defaultProps)));
    screen.getByText(children);
  });
  test('Triggers onClose and onOpen callbacks label click', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Accordion2, _extends({
      onOpen: onOpen,
      onClose: onClose
    }, defaultProps)));
    const accordionLabel = screen.getByText(label);
    fireEvent.click(accordionLabel);
    expect(onOpen).toHaveBeenCalledTimes(1);
    fireEvent.click(accordionLabel);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Controlled - shows and hides children with provided isOpen and toggleOpen props', () => {
    renderWithTheme(React.createElement(Controlled, null));
    const accordionLabel = screen.getByText('See more');
    screen.getByText(lorem);
    fireEvent.click(accordionLabel);
    expect(screen.queryByText(lorem)).not.toBeInTheDocument();
    fireEvent.click(accordionLabel);
    screen.getByText(lorem);
  });
  test('Wraps handlers passed in', () => {
    const handleKeyDown = jest.fn();
    const handleKeyUp = jest.fn();
    const handleClick = jest.fn();
    const handleBlur = jest.fn();
    renderWithTheme(React.createElement(Accordion2, _extends({
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick,
      onBlur: handleBlur
    }, defaultProps)));
    const accordionLabel = screen.getByText(label);
    fireEvent.click(accordionLabel);
    expect(handleClick).toHaveBeenCalled();
    fireEvent.blur(accordionLabel);
    expect(handleBlur).toHaveBeenCalled();
    fireEvent.keyDown(accordionLabel, {
      key: 'Enter'
    });
    expect(handleKeyDown).toHaveBeenCalled();
    fireEvent.keyUp(accordionLabel, {
      key: 'Enter'
    });
    expect(handleKeyUp).toHaveBeenCalled();
  });
  test('Validate both controlled props are required', () => {
    renderWithTheme(React.createElement(Accordion2, _extends({
      isOpen: true
    }, defaultProps)));
  });
  test('defaultOpen mutation should be ignored', () => {
    const Example = () => {
      const [defaultOpen, setDefaultOpen] = React.useState(true);
      return React.createElement(React.Fragment, null, React.createElement("button", {
        onClick: () => setDefaultOpen(!defaultOpen)
      }, "Toggle"), React.createElement(Accordion2, {
        defaultOpen: defaultOpen,
        label: "Hello"
      }, "World"), ")");
    };

    renderWithTheme(React.createElement(Example, null));
    expect(screen.getByText('World')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.getByText('World')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Accordion2.spec.js.map