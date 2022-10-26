import _extends from "@babel/runtime/helpers/extends";
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { MultiStringInput } from './MultiStringInput';
describe('MultiStringInput tests', () => {
  jest.useFakeTimers();

  const getMockedComponent = _ref => {
    let props = _extends({}, _ref);

    return React.createElement(MultiStringInput, _extends({
      onChange: jest.fn(),
      onInputChange: jest.fn(),
      item: {
        id: '1'
      },
      suggestions: ['Foo']
    }, props));
  };

  describe('showDropDownMenu', () => {
    it('defaults true, show options', () => {
      renderWithTheme(getMockedComponent({
        suggestions: ['Foo']
      }));
      const input = screen.getByPlaceholderText('any value');
      fireEvent.click(input);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.getByText('Foo')).toBeInTheDocument();
      fireEvent.click(document);
    });
    it('no menu when false', () => {
      renderWithTheme(getMockedComponent({
        showDropDownMenu: false,
        suggestions: ['Foo']
      }));
      const input = screen.getByPlaceholderText('any value');
      fireEvent.click(input);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(screen.queryByText('Foo')).not.toBeInTheDocument();
    });
  });
  describe('disableCreate', () => {
    it('defaults false, allow free input', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(getMockedComponent({
        onChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('any value');
      fireEvent.change(input, {
        target: {
          value: 'bar,'
        }
      });
      expect(input).toHaveValue('');
      expect(onChangeMock).toHaveBeenCalledWith('1', {
        value: ['bar']
      });
      fireEvent.click(document);
    });
    it('no free input when true', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(getMockedComponent({
        disableCreate: true,
        onChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('any value');
      fireEvent.change(input, {
        target: {
          value: 'bar,'
        }
      });
      expect(input).toHaveValue('bar,');
      expect(onChangeMock).not.toHaveBeenCalled();
      fireEvent.click(document);
    });
  });
});
//# sourceMappingURL=MultiStringInput.spec.js.map