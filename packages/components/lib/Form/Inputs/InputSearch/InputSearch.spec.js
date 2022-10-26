import 'jest-styled-components';
import React, { createRef } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { InputSearch } from './InputSearch';
describe('InputSearch', () => {
  describe('Search icon', () => {
    test('shows by default', () => {
      renderWithTheme(React.createElement(InputSearch, null));
      expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });
    test('hidden with hideSearchIcon', () => {
      renderWithTheme(React.createElement(InputSearch, {
        hideSearchIcon: true
      }));
      expect(screen.queryByTitle('Search')).not.toBeInTheDocument();
    });
  });
  test('displays placeholder', () => {
    renderWithTheme(React.createElement(InputSearch, {
      placeholder: "Type your search"
    }));
    expect(screen.getByPlaceholderText('Type your search')).toBeVisible();
  });
  test('supports ref assignment', () => {
    const inputRef = createRef();
    renderWithTheme(React.createElement(InputSearch, {
      ref: inputRef,
      placeholder: "type here"
    }));
    expect(screen.getByPlaceholderText('type here')).toBe(inputRef.current);
  });
  test('accepts a value', () => {
    renderWithTheme(React.createElement(InputSearch, {
      value: "start value"
    }));
    expect(screen.getByDisplayValue('start value')).toBeVisible();
  });
  test('accepts a defaultValue', () => {
    renderWithTheme(React.createElement(InputSearch, {
      defaultValue: "replace me",
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    expect(input).toHaveValue('replace me');
  });
  test('calls onChange', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputSearch, {
      onChange: onChangeMock,
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'New value'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith('New value');
  });
  test('displays summary', () => {
    renderWithTheme(React.createElement(InputSearch, {
      value: "start value",
      summary: "summary value"
    }));
    expect(screen.getByText('summary value')).toBeVisible();
  });
  describe('Clear button', () => {
    test('clears value', () => {
      renderWithTheme(React.createElement(InputSearch, {
        placeholder: "type here",
        defaultValue: "start value"
      }));
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(screen.getByPlaceholderText('type here')).toHaveDisplayValue('');
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      const input = screen.getByRole('textbox');
      expect(input).toHaveFocus();
    });
    test('calls onChange', () => {
      const onChange = jest.fn();
      renderWithTheme(React.createElement(InputSearch, {
        value: "Search",
        onChange: onChange
      }));
      const inputButton = screen.getByRole('button');
      inputButton && fireEvent.click(inputButton);
      expect(onChange).toHaveBeenCalledWith('');
    });
    test('clear button and summary together', () => {
      renderWithTheme(React.createElement(InputSearch, {
        value: "start value",
        summary: "summary value"
      }));
      expect(screen.getByRole('button')).toBeVisible();
      expect(screen.getByText('summary value')).toBeVisible();
    });
    test('hidden when isClearable is false', () => {
      renderWithTheme(React.createElement(InputSearch, {
        value: "start value",
        summary: "summary value",
        isClearable: false
      }));
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
    test('hidden when value is empty', () => {
      renderWithTheme(React.createElement(InputSearch, null));
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });
  describe('options', () => {
    const options = [{
      value: 'FOO'
    }, {
      value: 'BAR'
    }, {
      label: 'Empty',
      value: ''
    }];
    test('list opens on change, not click', () => {
      renderWithTheme(React.createElement(InputSearch, {
        options: options,
        placeholder: "type here"
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.click(input);
      expect(screen.queryByRole('option')).not.toBeInTheDocument();
      fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });
      expect(input).toHaveDisplayValue('F');
      expect(screen.queryAllByRole('option')).toHaveLength(3);
      fireEvent.click(document);
    });
    test('calls onSelectOption', () => {
      const onSelectOptionMock = jest.fn();
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputSearch, {
        options: options,
        placeholder: "type here",
        onSelectOption: onSelectOptionMock,
        onChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });
      fireEvent.click(screen.getByText('BAR'));
      expect(onSelectOptionMock).toHaveBeenCalledWith({
        value: 'BAR'
      });
      expect(onChangeMock).toHaveBeenNthCalledWith(1, 'F');
      expect(onChangeMock).toHaveBeenNthCalledWith(2, 'BAR');
      fireEvent.click(document);
    });
    test('changeOnSelect={false}', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputSearch, {
        options: options,
        placeholder: "type here",
        changeOnSelect: false,
        onChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });
      fireEvent.click(screen.getByText('BAR'));
      expect(onChangeMock).toHaveBeenNthCalledWith(1, 'F');
      expect(onChangeMock).toHaveBeenNthCalledWith(2, '');
      fireEvent.click(document);
    });
    test('clearOnClose', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputSearch, {
        options: options,
        placeholder: "type here",
        clearOnClose: false,
        onChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.change(input, {
        target: {
          value: 'F'
        }
      });
      fireEvent.click(document);
      expect(onChangeMock).toHaveBeenCalledWith('F');
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
  });
});
//# sourceMappingURL=InputSearch.spec.js.map