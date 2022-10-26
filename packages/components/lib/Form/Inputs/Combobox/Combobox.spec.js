import { renderWithTheme } from '@looker/components-test-utils';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxMulti, ComboboxMultiInput, ComboboxMultiList, ComboboxMultiOption } from '.';
afterEach(cleanup);
describe('<Combobox/> with children', () => {
  test('Renders children, merges callbacks', () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();
    renderWithTheme(React.createElement(Combobox, {
      onChange: handleChange
    }, React.createElement(ComboboxInput, {
      placeholder: "Type here"
    }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
      label: "Foo",
      value: "101",
      onClick: handleClick
    }), React.createElement(ComboboxOption, {
      label: "Bar",
      value: "102"
    }))));
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.mouseDown(input);
    const foo = screen.getByText('Foo');
    expect(screen.getByText('Foo')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleChange).toHaveBeenCalledTimes(0);
    fireEvent.click(foo);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({
      label: 'Foo',
      value: '101'
    });
  });
  test.each([['Combobox', React.createElement(Combobox, {
    key: "combobox"
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', React.createElement(ComboboxMulti, {
    key: "combobox-multi"
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('Opens and closes on click (%s)', (_, jsx) => {
    renderWithTheme(jsx);
    expect(screen.queryByText('Foo')).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.click(input);
    expect(screen.getByText('Foo')).toBeInTheDocument();
    fireEvent.click(input);
    expect(screen.queryByText('Foo')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test.each([['Combobox', React.createElement(Combobox, {
    key: "combobox"
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', React.createElement(ComboboxMulti, {
    key: "combobox-multi"
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('Highlights typed text', (_, jsx) => {
    renderWithTheme(jsx);
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.focus(input);
    fireEvent.change(input, {
      target: {
        value: 'oo'
      }
    });
    expect(screen.getByText('oo')).toHaveStyleRule('font-weight: 600; text-decoration: underline');
    expect(screen.getByText('Bar')).not.toHaveStyleRule('font-weight: 600; text-decoration: underline');
    fireEvent.click(document);
  });
  const dimensions = {
    maxHeight: 400,
    maxWidth: 800,
    minWidth: 300,
    width: '50vw'
  };
  test.each([['Combobox', React.createElement(Combobox, {
    key: "combobox"
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, dimensions, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', React.createElement(ComboboxMulti, {
    key: "combobox-multi"
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, dimensions, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('Sets the list layout styles (%s)', (_, jsx) => {
    renderWithTheme(jsx);
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.click(input);
    const list = screen.getByRole('listbox');
    expect(list).toHaveStyleRule('max-height', '400px');
    expect(list).toHaveStyleRule('max-width', '800px');
    expect(list).toHaveStyleRule('min-width', '300px');
    expect(list).toHaveStyleRule('width', '50vw');
    fireEvent.click(document);
  });

  const GetIndicatorJSX = listLevel => indicator => React.createElement(Combobox, {
    key: "combobox",
    value: {
      label: 'Foo',
      value: '101'
    }
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, {
    indicator: listLevel ? indicator : undefined
  }, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101",
    indicator: listLevel ? undefined : indicator
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102",
    indicator: listLevel ? undefined : indicator
  })));

  const GetIndicatorJSXMulti = listLevel => indicator => React.createElement(ComboboxMulti, {
    key: "combobox-multi",
    values: [{
      label: 'Foo',
      value: '101'
    }]
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, {
    indicator: listLevel ? indicator : undefined
  }, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101",
    indicator: listLevel ? undefined : indicator
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102",
    indicator: listLevel ? undefined : indicator
  })));

  test.each([['list level (Combobox)', GetIndicatorJSX(true)], ['list level (ComboboxMulti)', GetIndicatorJSXMulti(true)], ['option level (Combobox)', GetIndicatorJSX(false)], ['option level (ComboboxMulti)', GetIndicatorJSXMulti(false)]])('Customize the indicator at the %s', (_, getJSX) => {
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
    const indicator = jest.fn();
    renderWithTheme(getJSX(indicator));
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.click(input);
    expect(indicator).toHaveBeenCalledTimes(2);
    expect(indicator).toHaveBeenNthCalledWith(1, {
      isActive: false,
      isSelected: true,
      label: 'Foo',
      value: '101'
    });
    expect(indicator).toHaveBeenNthCalledWith(2, {
      isActive: false,
      isSelected: false,
      label: 'Bar',
      value: '102'
    });
    const check = screen.queryByTitle('Check');
    expect(check).not.toBeInTheDocument();
    indicator.mockClear();
    const bar = screen.getByText('Bar');
    fireEvent.mouseOver(bar);
    expect(indicator).toHaveBeenCalledTimes(1);
    expect(indicator).toHaveBeenCalledWith({
      isActive: true,
      isSelected: false,
      label: 'Bar',
      value: '102'
    });
    fireEvent.click(document);
    rafSpy.mockRestore();
  });
  test('Does not highlight current selected value', () => {
    renderWithTheme(React.createElement(Combobox, {
      key: "combobox",
      value: {
        label: 'Foo',
        value: '101'
      }
    }, React.createElement(ComboboxInput, {
      placeholder: "Type here"
    }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
      label: "Foo",
      value: "101"
    }), React.createElement(ComboboxOption, {
      label: "FooBar",
      value: "102"
    }))));
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.click(input);
    expect(screen.getByText('Foo')).not.toHaveStyleRule('font-weight: 600; text-decoration: underline');
    expect(screen.getByText('FooBar')).not.toHaveStyleRule('font-weight: 600; text-decoration: underline');
    fireEvent.click(document);
  });
  test.each([['Combobox', React.createElement(Combobox, {
    key: "combobox",
    openOnFocus: true
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', React.createElement(ComboboxMulti, {
    key: "combobox-multi",
    openOnFocus: true
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('with openOnFocus (%s)', (_, jsx) => {
    renderWithTheme(jsx);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    screen.getByPlaceholderText('Type here').focus();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    fireEvent.click(document);
  });
  test.each([['Combobox', React.createElement(Combobox, {
    key: "combobox"
  }, React.createElement(ComboboxInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', React.createElement(ComboboxMulti, {
    key: "combobox-multi"
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('click caret to open', (_, jsx) => {
    renderWithTheme(jsx);
    screen.getByPlaceholderText('Type here').focus();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('caret'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    fireEvent.click(document);
  });
});
describe('Keyboard navigation', () => {
  const onChangeMock = jest.fn();
  beforeEach(() => {
    onChangeMock.mockClear();
  });
  const arrowDown = {
    key: 'ArrowDown'
  };
  const arrowUp = {
    key: 'ArrowUp'
  };
  const enter = {
    key: 'Enter'
  };
  const space = {
    key: 'Spacebar'
  };
  test.each([['Combobox', React.createElement(Combobox, {
    id: "with-options",
    openOnFocus: true,
    key: "combobox",
    onChange: onChangeMock
  }, React.createElement(ComboboxInput, {
    inputReadOnly: true,
    placeholder: "Type here"
  }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', React.createElement(ComboboxMulti, {
    id: "with-options",
    openOnFocus: true,
    key: "combobox-multi",
    onChange: onChangeMock
  }, React.createElement(ComboboxMultiInput, {
    inputReadOnly: true,
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('arrows, enter and space (%s)', (name, jsx) => {
    renderWithTheme(jsx);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.keyDown(input, arrowDown);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    const items = screen.getAllByRole('option');
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, arrowDown);
    expect(input).toHaveValue('Foo');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, arrowDown);
    expect(input).toHaveValue('Bar');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(input, arrowDown);
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, arrowUp);
    expect(input).toHaveValue('Bar');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(input, arrowUp);
    expect(input).toHaveValue('Foo');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, enter);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    const value = {
      label: 'Foo',
      value: '101'
    };
    const onChangeValue = name === 'Combobox' ? value : [value];
    expect(onChangeMock).toHaveBeenCalledWith(onChangeValue);
    fireEvent.keyDown(input, arrowUp);
    fireEvent.keyDown(input, arrowUp);
    fireEvent.keyDown(input, space);
    expect(onChangeMock).toHaveBeenCalledTimes(2);
    const value2 = {
      label: 'Bar',
      value: '102'
    };
    const onChangeValue2 = name === 'Combobox' ? value2 : [value, value2];
    expect(onChangeMock).toHaveBeenNthCalledWith(2, onChangeValue2);

    if (name === 'Combobox') {
      expect(input).toHaveValue('Bar');
    } else {
      expect(screen.getByText('Bar')).toBeInTheDocument();
    }

    fireEvent.click(document);
  });
  test('arrows, enter and space with autoComplete = false and no inputReadOnly', () => {
    renderWithTheme(React.createElement(Combobox, {
      id: "with-options",
      openOnFocus: true
    }, React.createElement(ComboboxInput, {
      placeholder: "Type here",
      autoComplete: false
    }), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
      label: "Foo",
      value: "101"
    }), React.createElement(ComboboxOption, {
      label: "Bar",
      value: "102"
    }))));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.keyDown(input, arrowDown);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    const items = screen.getAllByRole('option');
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, arrowDown);
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, arrowDown);
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(input, arrowDown);
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    fireEvent.keyDown(input, arrowUp);
    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(input, enter);
    expect(input).toHaveValue('Bar');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    fireEvent.keyDown(input, arrowDown);
    fireEvent.keyDown(input, arrowDown);
    fireEvent.keyDown(input, space);
    expect(input).toHaveValue('Bar');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    fireEvent.click(document);
  });
});
//# sourceMappingURL=Combobox.spec.js.map