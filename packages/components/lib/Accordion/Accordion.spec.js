import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { Accordion, AccordionContent, AccordionDisclosure } from '.';
const globalConsole = global.console;
describe('Accordion', () => {
  test('Renders AccordionDisclosure and AccordionContent (on label click)', () => {
    renderWithTheme(React.createElement(Accordion, {
      content: "My Accordion Content"
    }, "My Accordion Label"));
    const accordionLabel = screen.getByText('My Accordion Label');
    expect(screen.queryByText('My Accordion Content')).not.toBeInTheDocument();
    fireEvent.click(accordionLabel);
    screen.getByText('My Accordion Content');
    fireEvent.click(accordionLabel);
    expect(screen.queryByText('My Accordion Content')).not.toBeInTheDocument();
  });
  test('Renders AccordionContent by default when defaultOpen === true', () => {
    renderWithTheme(React.createElement(Accordion, {
      defaultOpen: true,
      content: "My Accordion Content"
    }, "My Accordion Label"));
    screen.getByText('My Accordion Content');
  });
  test('Triggers onClose and onOpen callbacks on AccordionDisclosure click', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Accordion, {
      onOpen: onOpen,
      onClose: onClose,
      content: "My Accordion Content"
    }, "My Accordion Label"));
    const accordionLabel = screen.getByText('My Accordion Label');
    fireEvent.click(accordionLabel);
    expect(onOpen).toHaveBeenCalledTimes(1);
    fireEvent.click(accordionLabel);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Shows and hides children of AccordionContent on AccordionDisclosure click with provided isOpen and toggleOpen props', () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);
      return React.createElement(Accordion, {
        isOpen: isOpen,
        toggleOpen: setIsOpen,
        content: "My Accordion Content"
      }, "My Accordion Label");
    };

    renderWithTheme(React.createElement(Wrapper, null));
    const accordionLabel = screen.getByText('My Accordion Label');
    screen.getByText('My Accordion Content');
    fireEvent.click(accordionLabel);
    expect(screen.queryByText('My Accordion Content')).not.toBeInTheDocument();
    fireEvent.click(accordionLabel);
    screen.getByText('My Accordion Content');
  });
  test('Wraps handlers passed into AccordionDisclosure', () => {
    const handleKeyDown = jest.fn();
    const handleKeyUp = jest.fn();
    const handleClick = jest.fn();
    const handleBlur = jest.fn();
    renderWithTheme(React.createElement(Accordion, {
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick,
      onBlur: handleBlur,
      content: "My Accordion Content"
    }, "My Accordion Label"));
    const accordionLabel = screen.getByText('My Accordion Label');
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
  describe('warnings', () => {
    beforeEach(() => {
      global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
        warn: jest.fn()
      });
    });
    afterEach(() => {
      global.console = globalConsole;
    });
    test('warns if isOpen is provided without toggleOpen prop', () => {
      renderWithTheme(React.createElement(Accordion, {
        isOpen: true,
        content: "My Accordion Content"
      }, "My Accordion Label"));
      expect(console.warn).toHaveBeenCalled();
    });
    test('warns if children is a falsy value', () => {
      renderWithTheme(React.createElement(Accordion, {
        content: "My Accordion Content"
      }, false));
      expect(console.warn).toHaveBeenCalled();
    });
  });
  describe('legacy composition', () => {
    test('renders Accordion when using AccordionDisclosure and AccordionContent children', () => {
      renderWithTheme(React.createElement(Accordion, {
        defaultOpen: true
      }, React.createElement(AccordionDisclosure, null, "Disclosure"), React.createElement(AccordionContent, null, "Content")));
      screen.getByText('Disclosure');
      screen.getByText('Content');
    });
  });
});
//# sourceMappingURL=Accordion.spec.js.map