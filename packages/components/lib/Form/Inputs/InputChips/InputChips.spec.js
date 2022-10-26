import React from 'react';
import { firePasteEvent, renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { parseOption } from '../Combobox/utils';
import { InputChips } from './InputChips';
describe('InputChips', () => {
  test('values are added on Enter keydown', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag1'
      }
    });
    expect(onChangeMock).not.toHaveBeenCalled();
    fireEvent.keyDown(input, {
      key: 'Enter'
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  test('values are added when a comma is last character entered', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag1,'
      }
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  test('values are not added when a comma is escaped', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag1\\,'
      }
    });
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(input).toHaveValue('tag1\\,');
  });
  test('values are added when pasting', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    firePasteEvent(input, `tag1
tag2`);
    fireEvent.change(input, {
      target: {
        value: 'tag1  tag2'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2']);
    onChangeMock.mockClear();
    firePasteEvent(input, `tag1,tag2`);
    fireEvent.change(input, {
      target: {
        value: 'tag1, tag2'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2']);
  });
  test('values are added on blur', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag1'
      }
    });
    expect(onChangeMock).not.toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  test('new values are appended to existing values', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: ['tag1'],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag2,'
      }
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2']);
    expect(input).toHaveValue('');
  });
  test('values are removed on backspace keydown', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: ['tag1'],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 't'
      }
    });
    fireEvent.keyDown(input, {
      key: 'Backspace'
    });
    expect(onChangeMock).not.toHaveBeenCalled();
    fireEvent.change(input, {
      target: {
        value: ''
      }
    });
    fireEvent.keyDown(input, {
      key: 'Backspace'
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
  test('all values are removed by clicking clear field', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: ['tag1', 'tag2']
    }));
    const clear = screen.getByText('Clear Field');
    fireEvent.click(clear);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
  test('values are removed by clicking remove on the chip', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: ['tag1']
    }));
    const remove = screen.getByText('Delete');
    fireEvent.click(remove);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
  test('new values are validated', () => {
    const onChangeMock = jest.fn();
    const onValidationFailMock = jest.fn();
    const onDuplicateMock = jest.fn();
    const validate = jest.fn(value => value === 'tag1');
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here",
      validate: validate,
      onValidationFail: onValidationFailMock,
      onDuplicate: onDuplicateMock
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag2,'
      }
    });
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(input).toHaveValue('tag2');
    expect(onValidationFailMock).toHaveBeenCalledWith(['tag2']);
    fireEvent.change(input, {
      target: {
        value: ' tag1,'
      }
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('');
  });
  describe('formatInputValue', () => {
    test('false', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: onChangeMock,
        values: [],
        placeholder: "type here",
        formatInputValue: false
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.change(input, {
        target: {
          value: '  no trim  ,'
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(['  no trim  ']);
      expect(input).toHaveValue('');
    });
    test('custom', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: onChangeMock,
        values: [],
        placeholder: "type here",
        formatInputValue: value => value.toUpperCase()
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.change(input, {
        target: {
          value: '  no trim  ,'
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(['  NO TRIM  ']);
      expect(input).toHaveValue('');
    });
  });
  test('duplicate values are not added', () => {
    const onChangeMock = jest.fn();
    const onDuplicateMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: ['tag1'],
      placeholder: "type here",
      onDuplicate: onDuplicateMock
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: ' tag1,'
      }
    });
    expect(onChangeMock).toHaveBeenCalledTimes(0);
    expect(onDuplicateMock).toHaveBeenCalledWith(['tag1']);
    expect(input).toHaveValue('tag1');
  });
  test('escaped commas and tabs are preserved', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputChips, {
      onChange: onChangeMock,
      values: [],
      placeholder: "type here"
    }));
    const input = screen.getByPlaceholderText('type here');
    fireEvent.change(input, {
      target: {
        value: 'tag\\,1,tag\\	2,'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith(['tag,1', 'tag	2']);
  });
  describe('removeOnBackspace', () => {
    test('true by default', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.keyDown(input, {
        key: 'Backspace'
      });
      expect(onChangeMock).toHaveBeenCalledWith(['foo']);
    });
    test('false', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here",
        removeOnBackspace: false
      }));
      const input = screen.getByPlaceholderText('type here');
      fireEvent.keyDown(input, {
        key: 'Backspace'
      });
      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });
  test('mousedown on a chip does not focus the inner input', () => {
    jest.useFakeTimers();
    renderWithTheme(React.createElement(InputChips, {
      onChange: () => null,
      values: ['foo', 'bar'],
      placeholder: "type here"
    }));
    const chip = screen.getByText('bar');
    const deleteButton = screen.getAllByText('Delete')[0];
    const input = screen.getByPlaceholderText('type here');
    fireEvent.mouseDown(chip);
    expect(input).not.toHaveFocus();
    fireEvent.click(deleteButton);
    expect(input).toHaveFocus();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('mousedown on clear button does not focus the inner input', () => {
    jest.useFakeTimers();
    renderWithTheme(React.createElement(InputChips, {
      onChange: () => null,
      values: ['foo', 'bar'],
      placeholder: "type here"
    }));
    const clear = screen.getByText('Clear Field');
    const input = screen.getByPlaceholderText('type here');
    fireEvent.mouseDown(clear);
    expect(input).not.toHaveFocus();
    fireEvent.click(clear);
    expect(input).toHaveFocus();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  describe('Selecting chips', () => {
    function hasSelectedValues(values) {
      const selectedChips = screen.getAllByRole('option', {
        selected: true
      });
      expect(selectedChips).toHaveLength(values.length);
      values.forEach((value, index) => {
        expect(selectedChips[index]).toHaveTextContent(value);
      });
      expect(screen.getByTestId('hidden-input')).toHaveValue(values.join(','));
    }

    function hasNoSelectedValues() {
      expect(screen.queryByRole('option', {
        selected: true
      })).not.toBeInTheDocument();
    }

    test('arrow keys', () => {
      renderWithTheme(React.createElement(InputChips, {
        onChange: () => null,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const input = screen.getByPlaceholderText('type here');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.keyDown(input, {
        key: 'ArrowLeft'
      });
      expect(hiddenInput).toHaveFocus();
      hasSelectedValues(['bar']);
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowLeft'
      });
      hasSelectedValues(['foo']);
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight'
      });
      hasSelectedValues(['bar']);
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight'
      });
      expect(input).toHaveFocus();
      hasNoSelectedValues();
    });
    test('arrow + shift keys', () => {
      renderWithTheme(React.createElement(InputChips, {
        onChange: () => null,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const input = screen.getByPlaceholderText('type here');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.keyDown(input, {
        key: 'ArrowLeft',
        shiftKey: true
      });
      hasSelectedValues(['bar']);
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowLeft',
        shiftKey: true
      });
      hasSelectedValues(['foo', 'bar']);
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight',
        shiftKey: true
      });
      expect(input).toHaveFocus();
      hasNoSelectedValues();
      fireEvent.keyDown(input, {
        key: 'ArrowLeft'
      });
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowLeft'
      });
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight',
        shiftKey: true
      });
      hasSelectedValues(['foo', 'bar']);
    });
    test('cmd/ctrl + a', () => {
      renderWithTheme(React.createElement(InputChips, {
        onChange: () => null,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const input = screen.getByPlaceholderText('type here');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.keyDown(input, {
        key: 'a'
      });
      hasNoSelectedValues();
      fireEvent.keyDown(hiddenInput, {
        ctrlKey: true,
        key: 'a'
      });
      hasSelectedValues(['foo', 'bar']);
      fireEvent.keyDown(hiddenInput, {
        key: 'ArrowRight'
      });
      hasNoSelectedValues();
      fireEvent.keyDown(hiddenInput, {
        key: 'a',
        metaKey: true
      });
      hasSelectedValues(['foo', 'bar']);
    });
    test('clicking', () => {
      renderWithTheme(React.createElement(InputChips, {
        onChange: () => null,
        values: ['foo', 'bar', 'baz'],
        placeholder: "type here"
      }));
      const foo = screen.getByText('foo');
      const baz = screen.getByText('baz');
      fireEvent.click(foo);
      hasSelectedValues(['foo']);
      fireEvent.click(baz);
      hasSelectedValues(['baz']);
      fireEvent.click(foo, {
        metaKey: true
      });
      hasSelectedValues(['foo', 'baz']);
      fireEvent.click(baz, {
        metaKey: true
      });
      hasSelectedValues(['foo']);
      const input = screen.getByPlaceholderText('type here');
      fireEvent.focus(input);
      hasNoSelectedValues();
      fireEvent.click(baz);
      hasSelectedValues(['baz']);
      fireEvent.click(foo, {
        ctrlKey: true
      });
      hasSelectedValues(['foo', 'baz']);
      fireEvent.click(baz, {
        ctrlKey: true
      });
      hasSelectedValues(['foo']);
      fireEvent.focus(input);
      hasNoSelectedValues();
      fireEvent.click(baz);
      fireEvent.click(foo, {
        shiftKey: true
      });
      hasSelectedValues(['foo', 'bar', 'baz']);
    });
  });
  describe('copying / removing selected chips', () => {
    test('delete & backspace keys', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const foo = screen.getByText('foo');
      const bar = screen.getByText('bar');
      const input = screen.getByPlaceholderText('type here');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.click(foo);
      expect(hiddenInput).toHaveFocus();
      fireEvent.keyDown(hiddenInput, {
        key: 'Delete'
      });
      expect(onChangeMock).toHaveBeenCalledWith(['bar']);
      expect(input).toHaveFocus();
      fireEvent.click(bar);
      fireEvent.keyDown(hiddenInput, {
        key: 'Backspace'
      });
      expect(onChangeMock).toHaveBeenCalledWith(['foo']);
    });
    test('copy', () => {
      document.execCommand = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: () => null,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const foo = screen.getByText('foo');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.click(foo);
      fireEvent.keyDown(hiddenInput, {
        key: 'c',
        metaKey: true
      });
      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });
    test('cut', () => {
      document.execCommand = jest.fn();
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(InputChips, {
        onChange: onChangeMock,
        values: ['foo', 'bar'],
        placeholder: "type here"
      }));
      const foo = screen.getByText('foo');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.click(foo);
      fireEvent.keyDown(hiddenInput, {
        ctrlKey: true,
        key: 'x'
      });
      expect(document.execCommand).toHaveBeenCalledWith('copy');
      expect(onChangeMock).toHaveBeenCalledWith(['bar']);
    });
  });
  test('formatChip', () => {
    renderWithTheme(React.createElement(InputChips, {
      onChange: () => null,
      values: ['Foo Bar<foo.bar@example.com>', 'Baz Qux<baz.qux@example.com>', 'example@example.com'],
      formatChip: value => {
        const option = parseOption(value);
        return option.label || option.value;
      }
    }));
    const chips = screen.getAllByRole('option');
    expect(chips[0]).toHaveTextContent('Foo Bar');
    expect(chips[1]).toHaveTextContent('Baz Qux');
    expect(chips[2]).toHaveTextContent('example@example.com');
  });
});
//# sourceMappingURL=InputChips.spec.js.map