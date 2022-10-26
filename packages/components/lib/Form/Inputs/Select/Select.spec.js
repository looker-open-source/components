import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getAllComboboxOptionText, renderWithTheme } from '@looker/components-test-utils';
import { AutoGraph, BarChart } from '@styled-icons/material';
import { act, fireEvent, screen } from '@testing-library/react';
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '../../../Button';
import { Select } from './Select';
import { SelectMulti } from './SelectMulti';
const options100 = Array.from(Array(100), (_, i) => ({
  value: String(i + 1)
}));
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

describe('Select / SelectMulti', () => {
  test('ripple effect', () => {
    renderWithTheme(React.createElement(Select, {
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
      placeholder: "Select"
    }));
    fireEvent.click(screen.getByPlaceholderText('Select'));
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
  const options = [{
    value: 'FOO'
  }, {
    value: 'BAR'
  }];
  test.each([['Select', onChange => React.createElement(Select, {
    options: options,
    placeholder: "Search",
    onChange: onChange,
    key: "select"
  })], ['SelectMulti', onChange => React.createElement(SelectMulti, {
    options: options,
    placeholder: "Search",
    onChange: onChange,
    key: "select-multi"
  })]])('with options and handleChange (%s)', (name, getJSX) => {
    const handleChange = jest.fn();
    renderWithTheme(getJSX(handleChange));
    expect(screen.queryByText('FOO')).not.toBeInTheDocument();
    expect(screen.queryByText('BAR')).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeVisible();
    fireEvent.mouseDown(input);
    const bar = screen.getByText('BAR');
    fireEvent.click(bar);
    expect(handleChange).toHaveBeenCalledTimes(1);
    const onChangeArg = name === 'SelectMulti' ? ['BAR'] : 'BAR';
    expect(handleChange).toHaveBeenCalledWith(onChangeArg);
    fireEvent.click(document);
  });
  const initialOptions = [...options100, ...options, {
    value: 'BAZ'
  }];
  test.each([['Select', (onFilter, optionsToUse) => React.createElement(Select, {
    options: optionsToUse,
    placeholder: "Search",
    onFilter: onFilter,
    key: "select"
  })], ['SelectMulti', (onFilter, optionsToUse) => React.createElement(SelectMulti, {
    options: optionsToUse,
    placeholder: "Search",
    onFilter: onFilter,
    key: "select-multi"
  })]])('with onFilter (%s)', (_, getJSX) => {
    const mockOnFilter = jest.fn();

    function Component() {
      const [optionsToUse, setOptions] = useState(initialOptions);

      function handleFilter(term) {
        mockOnFilter(term);
        setOptions(initialOptions.filter(option => option.value.indexOf(term) > -1));
      }

      return getJSX(handleFilter, optionsToUse);
    }

    renderWithTheme(React.createElement(Component, null));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.mouseDown(input);
    expect(screen.getAllByRole('option')).toHaveLength(6);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    fireEvent.change(input, {
      target: {
        value: 'BA'
      }
    });
    expect(mockOnFilter).toHaveBeenCalledWith('BA');
    const items = screen.getAllByRole('option');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    const fireArrowDown = () => fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });

    fireArrowDown();
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    expect(input).toHaveAttribute('aria-activedescendant', items[0].id);
    fireArrowDown();
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');
    expect(input).toHaveAttribute('aria-activedescendant', items[1].id);
    fireArrowDown();
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');
    expect(input).toHaveAttribute('aria-activedescendant', items[0].id);
    fireEvent.click(document);
  });
  const groupedOptions = [{
    label: 'FOO',
    options: [{
      value: 'BAR'
    }, {
      value: 'BAZ'
    }]
  }, {
    label: 'OTHER',
    options: [{
      description: 'A description for something',
      value: 'something'
    }]
  }, {
    options: [{
      value: 'QUX'
    }, {
      value: 'TEST'
    }]
  }];
  test.each([['Select', onChange => React.createElement(Select, {
    options: groupedOptions,
    placeholder: "Search",
    onChange: onChange,
    key: "select"
  })], ['SelectMulti', onChange => React.createElement(SelectMulti, {
    options: groupedOptions,
    placeholder: "Search",
    onChange: onChange,
    key: "select-multi"
  })]])('with option descriptions and group labels (%s)', (name, getJSX) => {
    const handleChange = jest.fn();
    renderWithTheme(getJSX(handleChange));
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeVisible();
    fireEvent.mouseDown(input);
    const foo = screen.getByText('FOO');
    const other = screen.getByText('OTHER');
    const desc = screen.getByText('A description for something');
    expect(foo).toBeInTheDocument();
    expect(other).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    fireEvent.click(foo);
    fireEvent.click(desc);
    expect(handleChange).toHaveBeenCalledTimes(1);
    const onChangeArg = name === 'SelectMulti' ? ['something'] : 'something';
    expect(handleChange).toHaveBeenCalledWith(onChangeArg);
    fireEvent.click(document);
  });
  const dimensions = {
    maxHeight: 400,
    maxWidth: 800,
    minWidth: 300,
    width: '50vw'
  };
  test.each([['Select', React.createElement(Select, {
    options: groupedOptions,
    placeholder: "Search",
    listLayout: dimensions,
    key: "select"
  })], ['SelectMulti', React.createElement(SelectMulti, {
    options: groupedOptions,
    placeholder: "Search",
    listLayout: dimensions,
    key: "select-multi"
  })]])('with listLayout (%s)', (_, jsx) => {
    renderWithTheme(jsx);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeVisible();
    fireEvent.mouseDown(input);
    const list = screen.getByRole('listbox');
    expect(list).toHaveStyleRule('max-height', '400px');
    expect(list).toHaveStyleRule('max-width', '800px');
    expect(list).toHaveStyleRule('min-width', '300px');
    expect(list).toHaveStyleRule('width', '50vw');
    fireEvent.click(document);
  });

  const GetIndicatorJSX = listLevel => indicator => React.createElement(Select, {
    options: options.map(opt => _objectSpread(_objectSpread({}, opt), listLevel ? {} : {
      indicator
    })),
    value: "FOO",
    placeholder: "Search",
    indicator: listLevel ? indicator : undefined,
    key: "select"
  });

  const GetIndicatorJSXMulti = listLevel => indicator => React.createElement(SelectMulti, {
    options: options.map(opt => _objectSpread(_objectSpread({}, opt), listLevel ? {} : {
      indicator
    })),
    values: ['FOO'],
    placeholder: "Search",
    indicator: listLevel ? indicator : undefined,
    key: "select-multi"
  });

  test.each([['list level (Select)', GetIndicatorJSX(true)], ['list level (SelectMulti)', GetIndicatorJSXMulti(true)], ['option level (Select)', GetIndicatorJSX(false)], ['option level (SelectMulti)', GetIndicatorJSXMulti(false)]])('Customize the indicator at the %s', (_, getJSX) => {
    const indicator = jest.fn();
    renderWithTheme(getJSX(indicator));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.click(input);
    expect(indicator).toHaveBeenCalledTimes(2);
    expect(indicator).toHaveBeenNthCalledWith(1, {
      isActive: true,
      isSelected: true,
      label: undefined,
      value: 'FOO'
    });
    expect(indicator).toHaveBeenNthCalledWith(2, {
      isActive: false,
      isSelected: false,
      label: undefined,
      value: 'BAR'
    });
    const check = screen.queryByTitle('Check');
    expect(check).not.toBeInTheDocument();
    indicator.mockClear();
    const bar = screen.getByText('BAR');
    fireEvent.keyDown(bar, {
      key: 'ArrowDown'
    });
    expect(indicator).toHaveBeenCalledTimes(2);
    expect(indicator).toHaveBeenNthCalledWith(1, {
      isActive: false,
      isSelected: true,
      label: undefined,
      value: 'FOO'
    });
    expect(indicator).toHaveBeenNthCalledWith(2, {
      isActive: true,
      isSelected: false,
      label: undefined,
      value: 'BAR'
    });
    fireEvent.click(document);
  });
  const detailOptions = [{
    detail: 'Info about option',
    value: 'someValue'
  }];
  test.each([['Select', React.createElement(Select, {
    placeholder: "Search",
    options: detailOptions,
    key: "select"
  })], ['SelectMulti', React.createElement(SelectMulti, {
    placeholder: "Search",
    options: detailOptions,
    key: "select-multi"
  })]])('option detail (%s)', (_, jsx) => {
    renderWithTheme(jsx);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.mouseDown(input);
    expect(screen.getByText('Info about option')).toBeVisible();
    fireEvent.click(document);
  });
  describe('no options', () => {
    test.each([['Select', onChange => React.createElement(Select, {
      placeholder: "Search",
      onChange: onChange,
      key: "select"
    })], ['SelectMulti', onChange => React.createElement(SelectMulti, {
      placeholder: "Search",
      onChange: onChange,
      key: "select-multi"
    })]])('label does nothing when clicked (%s)', (_, getJSX) => {
      const handleChange = jest.fn();
      renderWithTheme(getJSX(handleChange));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      const noOptions = screen.getByText('No options');
      fireEvent.click(noOptions);
      expect(handleChange).not.toHaveBeenCalled();
      fireEvent.click(document);
    });
    const label = 'Your search returned no results';
    test.each([['Select', React.createElement(Select, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select"
    })], ['SelectMulti', React.createElement(SelectMulti, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select-multi"
    })]])('custom label text (%s)', (_, jsx) => {
      renderWithTheme(jsx);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      const noOptions = screen.queryByText(label);
      expect(noOptions).toBeVisible();
      fireEvent.click(document);
    });
    test.each([['Select', React.createElement(Select, {
      placeholder: "Search",
      isLoading: true,
      key: "select"
    })], ['SelectMulti', React.createElement(SelectMulti, {
      placeholder: "Search",
      isLoading: true,
      key: "select-multi"
    })]])('isLoading (%s)', (_, jsx) => {
      renderWithTheme(jsx);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      const spinner = screen.queryByLabelText('Loading');
      expect(spinner).toBeVisible();
      fireEvent.click(document);
    });
  });
  describe('windowed options', () => {
    const testArray = [['Select', longOptions => React.createElement(Select, {
      placeholder: "Search",
      options: longOptions,
      key: "select"
    })], ['SelectMulti', longOptions => React.createElement(SelectMulti, {
      placeholder: "Search",
      options: longOptions,
      key: "select-multi"
    })]];
    test.each(testArray)('100 options do not all render (%s)', (_, getJSX) => {
      const longOptions = Array.from(Array(100), (_, index) => ({
        value: `${index}`
      }));
      renderWithTheme(getJSX(longOptions));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      expect(screen.getByText('0')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.queryByText('6')).not.toBeInTheDocument();
      fireEvent.click(document);
    });
    test.each(testArray)('100 grouped options do not all render (%s)', (_, getJSX) => {
      const longOptions = Array.from(Array(100), (_, index) => ({
        value: `${index}`
      }));
      const groupedOptions = [{
        label: 'First',
        options: longOptions.slice(0, 4)
      }, {
        label: 'Second',
        options: longOptions.slice(4, 20)
      }, {
        label: 'Third',
        options: longOptions.slice(20, 99)
      }];
      renderWithTheme(getJSX(groupedOptions));
      const inputs = screen.getAllByRole('textbox');
      const input = inputs[inputs.length - 1];
      fireEvent.mouseDown(input);
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.queryByText('4')).not.toBeInTheDocument();
      fireEvent.click(document);
    });
    test.each(testArray)('Hover navigation is off while scrolling (%s)', (_, getJSX) => {
      jest.useFakeTimers();
      const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
      renderWithTheme(getJSX(options));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      const surface = screen.getByRole('dialog');
      expect(surface).toBeInTheDocument();
      const surfaceInner = surface && surface.firstChild;
      expect(surfaceInner).toBeInTheDocument();
      const surfaceInnerFlex = surfaceInner && surfaceInner.firstChild;
      expect(surfaceInnerFlex).toBeInTheDocument();
      surfaceInnerFlex && fireEvent.scroll(surfaceInnerFlex);
      const bar = screen.getByText('BAR');
      fireEvent.mouseOver(bar);
      expect(screen.queryByRole('option', {
        selected: true
      })).not.toBeInTheDocument();
      jest.runOnlyPendingTimers();
      fireEvent.mouseOver(bar);
      expect(screen.queryByRole('option', {
        selected: true
      })).toHaveTextContent('BAR');
      fireEvent.click(document);
      runTimers();
      rafSpy.mockRestore();
    });
    test.each(testArray)('99 options all render (%s)', (_, getJSX) => {
      const longOptions = Array.from(Array(99), (_, index) => ({
        value: `${index}`
      }));
      renderWithTheme(getJSX(longOptions));
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      expect(screen.getByText('0')).toBeInTheDocument();
      expect(screen.getByText('98')).toBeInTheDocument();
      fireEvent.click(document);
    });
    const label = 'Your search returned no results';
    test.each([['Select', React.createElement(Select, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select"
    })], ['SelectMulti', React.createElement(SelectMulti, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select-multi"
    })]])('custom label text (%s)', (_, jsx) => {
      renderWithTheme(jsx);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.mouseDown(input);
      const noOptions = screen.queryByText(label);
      expect(noOptions).toBeVisible();
      fireEvent.click(document);
    });
  });
  describe('showCreate', () => {
    const commonProps = {
      isFilterable: true,
      placeholder: 'Search',
      showCreate: true
    };
    test.each([['Select', React.createElement(Select, _extends({
      defaultValue: "test value"
    }, commonProps, {
      key: "select"
    }))], ['SelectMulti', React.createElement(SelectMulti, _extends({
      defaultValues: ['test value']
    }, commonProps, {
      key: "select-multi"
    }))]])('create option replaces "No options" (%s)', (_, jsx) => {
      renderWithTheme(jsx);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.focus(input);
      fireEvent.change(input, {
        target: {
          value: 'some text'
        }
      });
      expect(screen.getByText('Create "some text"')).toBeVisible();
      expect(screen.queryByText('No options')).not.toBeInTheDocument();
      fireEvent.focus(input);
      fireEvent.change(input, {
        target: {
          value: 'test value'
        }
      });
      expect(screen.getByText('No options')).toBeVisible();
      expect(screen.queryByText('Create "test value"')).not.toBeInTheDocument();
      fireEvent.focus(input);
      fireEvent.change(input, {
        target: {
          value: ''
        }
      });
      expect(screen.getByText('No options')).toBeVisible();
      expect(screen.queryByText('Create ""')).not.toBeInTheDocument();
      fireEvent.click(document);
    });

    const formatCreateLabel = inputValue => `${inputValue} CREATE LABEL`;

    test.each([['Select', React.createElement(Select, _extends({
      options: options
    }, commonProps, {
      formatCreateLabel: formatCreateLabel,
      key: "select"
    }))], ['SelectMulti', React.createElement(SelectMulti, _extends({
      options: options
    }, commonProps, {
      formatCreateLabel: formatCreateLabel,
      key: "select-multi"
    }))]])('custom label, checks options (%s)', (_, jsx) => {
      renderWithTheme(jsx);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.focus(input);
      fireEvent.change(input, {
        target: {
          value: 'some text'
        }
      });
      expect(screen.getByText('some text CREATE LABEL')).toBeVisible();
      fireEvent.focus(input);
      fireEvent.change(input, {
        target: {
          value: 'foo'
        }
      });
      expect(screen.queryByText('foo CREATE LABEL')).not.toBeInTheDocument();
      fireEvent.click(document);
    });
  });
  test.each([['Select', (value, onChange) => React.createElement(Select, {
    options: options,
    placeholder: "Search",
    value: value,
    onChange: onChange,
    key: "select"
  })], ['SelectMulti', (value, onChange) => React.createElement(SelectMulti, {
    options: options,
    placeholder: "Search",
    values: [value],
    onChange: values => onChange(values && values.length ? values[0] : ''),
    key: "select-multi"
  })]])('with controlled delayed update (%s)', (_, getJSX) => {
    function Component() {
      const [value, setValue] = useState('BAR');
      const [tempValue, setTempValue] = useState(value);
      useEffect(() => {
        const t = setTimeout(() => {
          setValue(tempValue);
        }, 0);
        return () => {
          clearTimeout(t);
        };
      }, [tempValue]);
      return getJSX(value, setTempValue);
    }

    renderWithTheme(React.createElement(Component, null));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.mouseDown(input);
    const option = screen.getByText('FOO');
    fireEvent.blur(input, {
      relatedTarget: option
    });
    fireEvent.click(option);
    expect(input).toHaveFocus();
    runTimers();
    fireEvent.click(document);
  });
});
describe('Select', () => {
  const globalConsole = global.console;
  const warnMock = jest.fn();
  beforeEach(() => {
    global.console = {
      warn: warnMock
    };
  });
  afterEach(() => {
    jest.resetAllMocks();
    global.console = globalConsole;
  });
  const options = [{
    label: 'Foo',
    value: 'FOO'
  }, {
    label: 'Bar',
    value: 'BAR'
  }];
  test('value', () => {
    renderWithTheme(React.createElement(Select, {
      options: options,
      placeholder: "Search",
      value: "BAR",
      onChange: jest.fn()
    }));
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveValue('Bar');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('clearing the value externally', () => {
    const Component = () => {
      const [value, setValue] = useState('FOO');
      return React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: () => setValue('')
      }, "Clear"), React.createElement(Select, {
        value: value,
        onChange: setValue,
        options: options
      }));
    };

    renderWithTheme(React.createElement(Component, null));
    const input = screen.getByDisplayValue('Foo');
    const button = screen.getByText('Clear');
    fireEvent.click(button);
    expect(input).not.toHaveValue();
  });
  test('defaultValue', () => {
    renderWithTheme(React.createElement(Select, {
      options: options,
      placeholder: "Search",
      defaultValue: "BAR"
    }));
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveValue('Bar');
  });
  test('isClearable', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(Select, {
      options: options,
      placeholder: "Search",
      defaultValue: "BAR",
      onChange: handleChange,
      isClearable: true
    }));
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveValue('Bar');
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    expect(input).not.toHaveValue();
    expect(handleChange).toHaveBeenCalledWith('');
  });
  test('placeholder, no defaultValue', () => {
    const options = [{
      value: 'FOO'
    }, {
      value: 'BAR'
    }];
    renderWithTheme(React.createElement(Select, {
      options: options,
      placeholder: "Search"
    }));
    const input = screen.getByPlaceholderText('Search');
    expect(input).not.toHaveValue();
  });
  test('isClearable, no defaultValue', () => {
    renderWithTheme(React.createElement(Select, {
      options: options,
      isClearable: true,
      "data-testid": "wrapper"
    }));
    const input = screen.getByTestId('wrapper').querySelector('input');
    expect(input).not.toHaveValue();
  });
  test('empty string defaultValue', () => {
    renderWithTheme(React.createElement(Select, {
      options: options,
      defaultValue: "",
      "data-testid": "wrapper"
    }));
    const input = screen.getByTestId('wrapper').querySelector('input');
    expect(input).not.toHaveValue();
  });
  test('empty string value', () => {
    renderWithTheme(React.createElement(Select, {
      options: options,
      value: "",
      "data-testid": "wrapper"
    }));
    const input = screen.getByTestId('wrapper').querySelector('input');
    expect(input).not.toHaveValue();
  });
  test('empty string value, empty string option', () => {
    renderWithTheme(React.createElement(Select, {
      options: [{
        label: 'An empty string',
        value: ''
      }, ...options],
      value: "",
      "data-testid": "wrapper"
    }));
    const input = screen.getByTestId('wrapper').querySelector('input');
    expect(input).toHaveValue('An empty string');
  });
  test('default to first option', () => {
    renderWithTheme(React.createElement(Select, {
      options: options,
      "data-testid": "wrapper"
    }));
    const input = screen.getByTestId('wrapper').querySelector('input');
    expect(input).toHaveValue('Foo');
  });
  test('displayed value changes when option label changes', () => {
    const Component = () => {
      const [label, setLabel] = useState('Original Label');
      const options = [{
        label,
        value: 'value_stays_the_same'
      }, {
        label: 'Another Option',
        value: 'other'
      }];
      return React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: () => setLabel('Updated label')
      }, "Update label"), React.createElement(Select, {
        value: "value_stays_the_same",
        options: options
      }));
    };

    renderWithTheme(React.createElement(Component, null));
    const input = screen.getByDisplayValue('Original Label');
    fireEvent.click(input);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "Original Label",
        "Another Option",
      ]
    `);
    fireEvent.click(document);
    fireEvent.click(screen.getByText('Update label'));
    expect(input).toHaveValue('Updated label');
    fireEvent.click(input);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "Updated label",
        "Another Option",
      ]
    `);
    fireEvent.click(document);
  });
  test('filtering out the selected option does not trigger a change', () => {
    const Component = () => {
      const [filterTerm, setFilterTerm] = useState('');
      const filteredOptions = useMemo(() => options.filter(option => option.label.indexOf(filterTerm) > -1), [filterTerm]);
      return React.createElement(Select, {
        value: "FOO",
        options: filteredOptions,
        isFilterable: true,
        onFilter: setFilterTerm
      });
    };

    renderWithTheme(React.createElement(Component, null));
    const input = screen.getByDisplayValue('Foo');
    fireEvent.change(input, {
      target: {
        value: 'Ba'
      }
    });
    expect(input).toHaveValue('Ba');
    fireEvent.click(document);
  });
  test('option icons', () => {
    renderWithTheme(React.createElement(Select, {
      placeholder: "Select a visualization",
      options: [{
        icon: React.createElement(AutoGraph, {
          "data-testid": "input-icon"
        }),
        label: 'Bar',
        value: 'bar'
      }, {
        label: 'No Icon',
        value: 'noicon'
      }, {
        icon: React.createElement(BarChart, {
          "data-testid": "input-icon"
        }),
        indicator: 'Test Indicator',
        label: 'Column',
        value: 'column'
      }, {
        icon: React.createElement(React.Fragment, null, "cool icon"),
        label: 'Custom Icon',
        value: 'custom'
      }]
    }));
    expect(screen.queryByTestId('input-icon')).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText('Select a visualization');
    expect(input).toBeInTheDocument();
    fireEvent.click(input);
    expect(screen.getAllByTestId('input-icon')).toHaveLength(2);
    expect(screen.getByTestId('option-icon-placeholder')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Column'));
    const inputIcon = screen.getByTestId('input-icon');
    expect(inputIcon.tagName).toBe('svg');
    fireEvent.click(input);
    fireEvent.click(screen.getByText('Custom Icon'));
    expect(screen.getByText('cool icon')).toBeInTheDocument();
    expect(screen.queryByText('Test Indicator')).not.toBeInTheDocument();
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "Use icon or indicator but not both at the same time.",
        ],
        Array [
          "Use icon or indicator but not both at the same time.",
        ],
      ]
    `);
    fireEvent.click(document);
  });
  test('option preface', () => {
    renderWithTheme(React.createElement(Select, {
      placeholder: "Search",
      options: [{
        label: 'Foo',
        preface: 'Preface for Foo',
        value: 'FOO'
      }, {
        label: 'Bar',
        preface: React.createElement(React.Fragment, null, React.createElement("strong", null, "Preface for"), " Bar"),
        value: 'BAR'
      }]
    }));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.click(input);
    const fooPreface = screen.getByText('Preface for Foo');
    const barPreface = screen.getByText('Preface for');
    expect(fooPreface).toBeVisible();
    expect(barPreface).toBeVisible();
    expect(barPreface.parentElement).toHaveTextContent('Preface for Bar');
    fireEvent.click(fooPreface);
    expect(input).toHaveDisplayValue('Foo');
    fireEvent.click(document);
  });
  test('filtering after selecting an option where value != label', () => {
    const customLabelOptions = [{
      label: 'Foo',
      value: 'FOO'
    }, {
      label: 'Bar',
      value: 'BAR'
    }];

    function TestComponent() {
      const [filterTerm, setFilterTerm] = useState('');
      const [value, setValue] = useState('');
      const filteredOptions = filterTerm === '' ? customLabelOptions : [];
      return React.createElement(Select, {
        options: filteredOptions,
        value: value,
        onChange: setValue,
        isFilterable: true,
        onFilter: setFilterTerm,
        placeholder: "Search"
      });
    }

    renderWithTheme(React.createElement(TestComponent, null));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.click(input);
    fireEvent.click(screen.getByText('Foo'));
    expect(input).toHaveDisplayValue('Foo');
    fireEvent.focus(input);
    fireEvent.change(input, {
      target: {
        value: 'Testing'
      }
    });
    expect(input).toHaveDisplayValue('Testing');
    fireEvent.click(document);
  });
  test('filtering a windowed list then deleting the filter', () => {
    function Component() {
      const [optionsToUse, setOptions] = useState(options100);

      function handleFilter(term) {
        setOptions(options100.filter(option => option.value.indexOf(term) > -1));
      }

      return React.createElement(Select, {
        options: optionsToUse,
        placeholder: "Search",
        onFilter: handleFilter,
        value: ""
      });
    }

    renderWithTheme(React.createElement(Component, null));
    const input = screen.getByPlaceholderText('Search');
    fireEvent.mouseDown(input);
    fireEvent.change(input, {
      target: {
        value: '90'
      }
    });
    fireEvent.change(input, {
      target: {
        value: ''
      }
    });
    expect(screen.queryByText('No options')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
});
//# sourceMappingURL=Select.spec.js.map