import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useOptionFiltering, useDebouncedFilterTerm } from './use_option_filtering';
jest.mock('@looker/i18n', () => ({
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
const options = [{
  value: 'Foo',
  label: 'Foo'
}, {
  value: 'Bar',
  label: 'Bar'
}];
jest.useFakeTimers();

const DebounceComponent = ({
  onInputChange
}) => {
  const {
    debouncedFilterTerm,
    noOptionsLabel,
    onFilter
  } = useDebouncedFilterTerm(onInputChange);

  const handleChange = e => {
    onFilter(e.currentTarget.value);
  };

  return React.createElement("div", null, React.createElement("span", {
    "data-testid": "debouncedFilterTerm"
  }, debouncedFilterTerm), React.createElement("span", {
    "data-testid": "noOptionsLabel"
  }, noOptionsLabel), React.createElement("input", {
    placeholder: "input",
    onChange: handleChange
  }));
};

const OptionFilterComponent = ({
  onInputChange
}) => {
  const {
    filteredOptions,
    noOptionsLabel,
    onFilter
  } = useOptionFiltering({
    limit: 2,
    onInputChange,
    options,
    value: 'Baz'
  });

  const handleChange = e => {
    onFilter(e.currentTarget.value);
  };

  return React.createElement("div", null, filteredOptions.map(({
    value
  }, index) => React.createElement("span", {
    key: index,
    role: "option"
  }, value)), React.createElement("span", {
    "data-testid": "noOptionsLabel"
  }, noOptionsLabel), React.createElement("input", {
    placeholder: "input",
    onChange: handleChange
  }));
};

test.each([['useDebouncedFilterTerm', DebounceComponent], ['useOptionFiltering', OptionFilterComponent]])('%s: updates only after a delay', (_, Component) => {
  const mockOnInputChange = jest.fn();
  render(React.createElement(Component, {
    onInputChange: mockOnInputChange
  }));
  expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values');
  const input = screen.getByPlaceholderText('input');
  fireEvent.change(input, {
    target: {
      value: 'Foo'
    }
  });
  expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values');
  act(() => {
    jest.advanceTimersByTime(150);
  });
  expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values match "Foo"');
  expect(mockOnInputChange).toHaveBeenCalledTimes(1);
  expect(mockOnInputChange).toHaveBeenCalledWith('Foo');
  mockOnInputChange.mockClear();
  fireEvent.change(input, {
    target: {
      value: 'Foo'
    }
  });
  act(() => {
    jest.advanceTimersByTime(150);
  });
  expect(mockOnInputChange).not.toHaveBeenCalled();
});
describe('useDebouncedFilterTerm', () => {
  it('does not update on initial render with updateOnFirstRender', () => {
    const mockOnInputChange = jest.fn();
    render(React.createElement(DebounceComponent, {
      onInputChange: mockOnInputChange
    }));
    expect(screen.getByTestId('debouncedFilterTerm')).toHaveTextContent('');
    expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values');
    expect(mockOnInputChange).not.toHaveBeenCalled();
    const input = screen.getByPlaceholderText('input');
    fireEvent.change(input, {
      target: {
        value: 'test'
      }
    });
    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(mockOnInputChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "test",
        ],
      ]
    `);
  });
});
describe('useOptionFiltering', () => {
  it('adds the current value as an option unless a filter term is added', () => {
    const mockOnInputChange = jest.fn();
    render(React.createElement(OptionFilterComponent, {
      onInputChange: mockOnInputChange
    }));
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Foo');
    expect(options[1]).toHaveTextContent('Bar');
    expect(options[2]).toHaveTextContent('Baz');
    const input = screen.getByPlaceholderText('input');
    fireEvent.change(input, {
      target: {
        value: 'test'
      }
    });
    act(() => {
      jest.advanceTimersByTime(150);
    });
    const updatedOptions = screen.queryByRole('option');
    expect(updatedOptions).not.toBeInTheDocument();
  });
  it('should recognize a value even if its surrounded by whitespace', () => {
    const mockOnInputChange = jest.fn();
    render(React.createElement(OptionFilterComponent, {
      onInputChange: mockOnInputChange
    }));
    const input = screen.getByPlaceholderText('input');
    fireEvent.change(input, {
      target: {
        value: '   Foo  '
      }
    });
    act(() => {
      jest.advanceTimersByTime(150);
    });
    const updatedOptions = screen.queryByRole('option');
    expect(updatedOptions).toBeInTheDocument();
  });
});
//# sourceMappingURL=use_option_filtering.spec.js.map