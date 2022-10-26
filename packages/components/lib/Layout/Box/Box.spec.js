import 'jest-styled-components';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Box } from './Box';
describe('Box', () => {
  describe('as=', () => {
    test('render as any HTML tag', () => {
      renderWithTheme(React.createElement(Box, {
        as: "button"
      }, "Press Me"));
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    test('any prop can be passed to Box', () => {
      renderWithTheme(React.createElement(Box, {
        as: "input",
        type: "checkbox"
      }));
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });
  describe('core HTML attributes', () => {
    test('allows autoFocus', () => {
      renderWithTheme(React.createElement(Box, {
        as: "input",
        type: "text",
        defaultValue: "Autofocus",
        autoFocus: true
      }));
      expect(screen.getByDisplayValue('Autofocus')).toHaveFocus();
    });
    test('allows for HTML events', () => {
      const handleClick = jest.fn();
      renderWithTheme(React.createElement(Box, {
        onClick: handleClick
      }, "Click me"));
      fireEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('allows for ARIA attributes', () => {
      renderWithTheme(React.createElement(Box, {
        "aria-label": "for screen readers only"
      }, "aria-label"));
      expect(screen.getByLabelText('for screen readers only')).toBeInTheDocument();
    });
  });
  describe('user select', () => {
    test('cannot be selected', () => {
      renderWithTheme(React.createElement(Box, {
        userSelect: "none"
      }, "Can't touch this"));
      expect(screen.getByText("Can't touch this")).toHaveStyleRule('user-select', 'none');
    });
  });
});
//# sourceMappingURL=Box.spec.js.map