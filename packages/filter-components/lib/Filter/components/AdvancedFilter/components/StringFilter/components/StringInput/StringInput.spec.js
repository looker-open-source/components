import _extends from "@babel/runtime/helpers/extends";
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { StringInput } from './StringInput';
describe('StringInput tests', () => {
  jest.useFakeTimers();

  const getMockedComponent = _ref => {
    let props = _extends({}, _ref);

    return React.createElement(StringInput, _extends({
      onChange: jest.fn(),
      item: {
        id: '1'
      },
      suggestions: ['Foo']
    }, props));
  };

  describe('showDropDownMenu', () => {
    it('should show options dropdown if there are suggestions available', () => {
      renderWithTheme(getMockedComponent({
        suggestions: ['Foo']
      }));
      const input = screen.getByPlaceholderText('any value');
      fireEvent.click(input);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.getByText('Foo')).toBeInTheDocument();
      fireEvent.click(document);
    });
  });
  describe('event hanlders', () => {
    it('should hide the options popover on enter', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(getMockedComponent({
        suggestions: ['Foo'],
        onInputChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('any value');
      fireEvent.click(input);
      fireEvent.change(input, {
        target: {
          value: 'bar'
        }
      });
      fireEvent.keyDown(input, {
        key: 'Enter',
        code: 'Enter',
        charCode: 13
      });
      expect(screen.queryByText('Foo')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=StringInput.spec.js.map