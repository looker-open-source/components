import { firePasteEvent, renderWithTheme } from '@looker/components-test-utils';
import { act, cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { SelectMulti } from './SelectMulti';
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

afterEach(cleanup);
const basicOptions = [{
  label: 'Foo',
  value: 'FOO'
}, {
  label: 'Bar',
  value: 'BAR'
}];
describe('SelectMulti', () => {
  test('ripple effect', () => {
    renderWithTheme(React.createElement(SelectMulti, {
      options: [{
        label: 'Cheddar',
        value: 'cheddar'
      }, {
        label: 'Gouda',
        value: 'gouda'
      }, {
        label: 'Swiss',
        value: 'swiss'
      }],
      placeholder: "SelectMulti"
    }));
    fireEvent.click(screen.getByPlaceholderText('SelectMulti'));
    const select = screen.getByText('Cheddar').closest('li');
    expect(select).not.toHaveClass('bg-on fg-in');
    expect(select).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    select && fireEvent.focus(select);
    expect(select).toHaveClass('bg-on');
    select && fireEvent.mouseDown(select);
    expect(select).toHaveClass('bg-on fg-in');
    select && fireEvent.mouseUp(select);
    runTimers();
    expect(select).toHaveClass('bg-on fg-out');
    runTimers();
    expect(select).toHaveClass('bg-on');
    select && fireEvent.blur(select);
    expect(select).not.toHaveClass('bg-on fg-in');
    fireEvent.click(document);
  });
  test('values', () => {
    const options = [{
      label: 'Foo',
      value: 'FOO'
    }, {
      label: 'Bar',
      value: 'BAR'
    }, {
      label: 'Baz',
      value: 'BAZ'
    }, {
      label: 'Qux',
      value: 'QUX'
    }];
    renderWithTheme(React.createElement(SelectMulti, {
      options: options,
      placeholder: "Search",
      values: ['BAZ', 'FOO'],
      onChange: jest.fn()
    }));
    expect(screen.getByText('Baz')).toBeVisible();
    expect(screen.getByText('Foo')).toBeVisible();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
  test('defaultValues', () => {
    const options = [{
      label: 'Foo',
      value: 'FOO'
    }, {
      label: 'Bar',
      value: 'BAR'
    }, {
      label: 'Baz',
      value: 'BAZ'
    }, {
      label: 'Qux',
      value: 'QUX'
    }];
    renderWithTheme(React.createElement(SelectMulti, {
      options: options,
      placeholder: "Search",
      defaultValues: ['BAR']
    }));
    expect(screen.getByText('Bar')).toBeVisible();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
  test('controlled value & context mismatch', () => {
    const TestComponent = () => {
      const [values, setValues] = React.useState(['FOO']);

      const handleFilter = () => {
        setValues([]);
      };

      return React.createElement(SelectMulti, {
        values: values,
        onChange: setValues,
        options: basicOptions,
        isFilterable: true,
        onFilter: handleFilter,
        placeholder: "Search"
      });
    };

    renderWithTheme(React.createElement(TestComponent, null));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, {
      target: {
        value: 'b'
      }
    });
    expect(input).toHaveValue('b');
    fireEvent.click(document);
  });
  test('controlled, filterable', () => {
    const cheeses = [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }, {
      value: 'Mascarpone'
    }, {
      value: 'Brie'
    }, {
      value: 'Mozzarella'
    }, {
      value: 'Cotija'
    }, {
      value: 'Pepperjack'
    }];

    const TestComponent = () => {
      const [values, setValues] = React.useState(['Cheddar']);
      const [term, setTerm] = React.useState('');
      const options = React.useMemo(() => {
        if (term === '') return cheeses;
        return cheeses.filter(cheese => cheese.value.toUpperCase().indexOf(term.toUpperCase()) > -1);
      }, [term]);
      return React.createElement(SelectMulti, {
        values: values,
        onChange: setValues,
        options: options,
        isFilterable: true,
        onFilter: setTerm,
        placeholder: "Search"
      });
    };

    renderWithTheme(React.createElement(TestComponent, null));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, {
      target: {
        value: 'z'
      }
    });
    expect(input).toHaveValue('z');
    fireEvent.click(document);
  });
});
describe('closeOnSelect', () => {
  test('false by default', () => {
    renderWithTheme(React.createElement(SelectMulti, {
      options: basicOptions,
      placeholder: "Search"
    }));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.mouseDown(input);
    const bar = screen.getByText('Bar');
    expect(screen.getByText('Foo')).toBeVisible();
    expect(bar).toBeVisible();
    fireEvent.click(bar);
    expect(screen.getByText('Foo')).toBeVisible();
    expect(screen.getAllByText('Bar')).toHaveLength(2);
    fireEvent.click(document);
  });
  test('true', () => {
    renderWithTheme(React.createElement(SelectMulti, {
      options: basicOptions,
      placeholder: "Search",
      closeOnSelect: true
    }));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.mouseDown(input);
    const bar = screen.getByText('Bar');
    expect(screen.getByText('Foo')).toBeVisible();
    expect(bar).toBeVisible();
    fireEvent.click(bar);
    expect(screen.getByText('Bar')).toBeVisible();
    expect(screen.queryByText('Foo')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  describe('removeOnBackspace', () => {
    test('true by default', () => {
      renderWithTheme(React.createElement(SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search"
      }));
      const input = screen.getByPlaceholderText('Search');
      expect(screen.getByText('Foo')).toBeVisible();
      expect(screen.getByText('Bar')).toBeVisible();
      fireEvent.keyDown(input, {
        key: 'Backspace'
      });
      expect(screen.getByText('Foo')).toBeVisible();
      expect(screen.queryByText('Bar')).not.toBeInTheDocument();
    });
    test('false', () => {
      renderWithTheme(React.createElement(SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        removeOnBackspace: false
      }));
      const input = screen.getByPlaceholderText('Search');
      expect(screen.getByText('Foo')).toBeVisible();
      expect(screen.getByText('Bar')).toBeVisible();
      fireEvent.keyDown(input, {
        key: 'Backspace'
      });
      expect(screen.getByText('Foo')).toBeVisible();
      expect(screen.queryByText('Bar')).toBeVisible();
    });
  });
  describe('freeInput', () => {
    test('false by default', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        onChange: onChangeMock
      }));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.change(input, {
        target: {
          value: 'baz,qux,'
        }
      });
      expect(onChangeMock).not.toHaveBeenCalled();
      expect(input).toHaveValue('baz,qux,');
      fireEvent.click(document);
    });
    test('true', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        onChange: onChangeMock,
        freeInput: true
      }));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.change(input, {
        target: {
          value: ' baz , qux,'
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'baz', 'qux']);
      expect(input).toHaveValue('');
      fireEvent.click(document);
    });
    test('formatInputValue false', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        onChange: onChangeMock,
        freeInput: true,
        formatInputValue: false
      }));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.change(input, {
        target: {
          value: ' baz , qux,'
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', ' baz ', ' qux']);
      expect(input).toHaveValue('');
      fireEvent.click(document);
    });
    test('creates value and closes list on blur', async () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "A random button"), React.createElement(SelectMulti, {
        options: basicOptions,
        placeholder: "Search",
        onChange: onChangeMock,
        freeInput: true
      })));
      const input = screen.getByPlaceholderText('Search');
      input.focus();
      fireEvent.change(input, {
        target: {
          value: 'baz'
        }
      });
      expect(screen.getByRole('listbox')).toBeVisible();
      screen.getByText('A random button').focus();
      expect(onChangeMock).toHaveBeenCalledWith(['baz']);
      expect(input).toHaveValue('');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
    test('copy/paste', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(SelectMulti, {
        options: basicOptions,
        values: ['FOO', 'BAR'],
        onChange: onChangeMock,
        placeholder: "Search",
        freeInput: true
      }));
      const input = screen.getByPlaceholderText('Search');
      const hiddenInput = screen.getByTestId('hidden-input');
      fireEvent.keyDown(input, {
        key: 'a',
        metaKey: true
      });
      expect(hiddenInput).toHaveDisplayValue('[{"label":"Foo","value":"FOO"},{"label":"Bar","value":"BAR"}]');
      firePasteEvent(input, '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]');
      fireEvent.change(input, {
        target: {
          value: '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]'
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'BAZ', 'QUX']);
    });
  });
});
//# sourceMappingURL=SelectMulti.spec.js.map