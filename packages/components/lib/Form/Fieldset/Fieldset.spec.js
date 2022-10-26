import 'jest-styled-components';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { FieldText } from '../Fields/FieldText';
import { Fieldset } from './Fieldset';
const fieldTexts = React.createElement(React.Fragment, null, React.createElement(FieldText, {
  label: "one",
  name: "name1",
  id: "text-1"
}), React.createElement(FieldText, {
  label: "two",
  name: "name2",
  id: "text-2"
}), React.createElement(FieldText, {
  label: "three",
  name: "nam3",
  id: "text-3"
}));
const globalConsole = global.console;
const warnMock = jest.fn();
beforeEach(() => {
  jest.useFakeTimers();
  global.console = {
    warn: warnMock
  };
});
afterEach(() => {
  global.console = globalConsole;
});
describe('Fieldset', () => {
  test('Basic', () => {
    renderWithTheme(React.createElement(Fieldset, null, fieldTexts));
    expect(screen.getByText('three')).toBeInTheDocument();
  });
  test('Accordion w/o Legend warning', () => {
    renderWithTheme(React.createElement(Fieldset, {
      accordion: true
    }, fieldTexts));
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "Please provide a value for the \\"legend\\" prop if using accordion mode",
        ],
      ]
    `);
  });
  test('Inline', () => {
    renderWithTheme(React.createElement(Fieldset, {
      inline: true
    }, fieldTexts));
    expect(screen.getByText('three')).toBeInTheDocument();
  });
  test('Legend', () => {
    renderWithTheme(React.createElement(Fieldset, {
      legend: "Legend"
    }, fieldTexts));
    expect(screen.getByText('Legend')).toBeInTheDocument();
  });
  test('Special Legend', () => {
    renderWithTheme(React.createElement(Fieldset, {
      legend: React.createElement(React.Fragment, null, "Legend")
    }, fieldTexts));
    expect(screen.getByText('Legend')).toBeInTheDocument();
  });
  test('Wrap', () => {
    renderWithTheme(React.createElement(Fieldset, {
      wrap: true
    }, fieldTexts));
    expect(screen.getByText('three')).toBeInTheDocument();
  });
  describe('Accordion mode', () => {
    test('Renders legend and children (on legend click)', () => {
      renderWithTheme(React.createElement(Fieldset, {
        legend: "Legend",
        accordion: true
      }, fieldTexts));
      expect(screen.queryByText('one')).not.toBeInTheDocument();
      expect(screen.queryByText('two')).not.toBeInTheDocument();
      expect(screen.queryByText('three')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Legend'));
      screen.getByText('one');
      screen.getByText('two');
      screen.getByText('three');
    });
    test('Renders children by default when defaultOpen === true', () => {
      renderWithTheme(React.createElement(Fieldset, {
        legend: "Legend",
        accordion: true,
        defaultOpen: true
      }, fieldTexts));
      screen.getByText('one');
      screen.getByText('two');
      screen.getByText('three');
    });
    test('Triggers onClose and onOpen callbacks on legend click', () => {
      const onClose = jest.fn();
      const onOpen = jest.fn();
      renderWithTheme(React.createElement(Fieldset, {
        legend: "Legend",
        accordion: true,
        onClose: onClose,
        onOpen: onOpen
      }, fieldTexts));
      const disclosure = screen.getByText('Legend');
      fireEvent.click(disclosure);
      expect(onOpen).toHaveBeenCalled();
      fireEvent.click(disclosure);
      expect(onClose).toHaveBeenCalled();
    });
    test('Shows and hides children on legend click with provided isOpen and toggleOpen props', () => {
      const Wrapper = () => {
        const [isOpen, setIsOpen] = useState(false);
        return React.createElement(Fieldset, {
          legend: "Legend",
          accordion: true,
          isOpen: isOpen,
          toggleOpen: setIsOpen
        }, fieldTexts);
      };

      renderWithTheme(React.createElement(Wrapper, null));
      expect(screen.queryByText('one')).not.toBeInTheDocument();
      expect(screen.queryByText('two')).not.toBeInTheDocument();
      expect(screen.queryByText('three')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Legend'));
      screen.getByText('one');
      screen.getByText('two');
      screen.getByText('three');
    });
  });
});
//# sourceMappingURL=Fieldset.spec.js.map