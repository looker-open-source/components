"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _2 = require(".");

afterEach(_react.cleanup);
describe('<Combobox/> with children', function () {
  test('Renders children, merges callbacks', function () {
    var handleChange = jest.fn();
    var handleClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_2.Combobox, {
      onChange: handleChange
    }, _react2["default"].createElement(_2.ComboboxInput, {
      placeholder: "Type here"
    }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
      label: "Foo",
      value: "101",
      onClick: handleClick
    }), _react2["default"].createElement(_2.ComboboxOption, {
      label: "Bar",
      value: "102"
    }))));

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.mouseDown(input);

    var foo = _react.screen.getByText('Foo');

    expect(_react.screen.getByText('Foo')).toBeInTheDocument();
    expect(_react.screen.getByText('Bar')).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleChange).toHaveBeenCalledTimes(0);

    _react.fireEvent.click(foo);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({
      label: 'Foo',
      value: '101'
    });
  });
  test.each([['Combobox', _react2["default"].createElement(_2.Combobox, {
    key: "combobox"
  }, _react2["default"].createElement(_2.ComboboxInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', _react2["default"].createElement(_2.ComboboxMulti, {
    key: "combobox-multi"
  }, _react2["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxMultiList, null, _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('Opens and closes on click (%s)', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);
    expect(_react.screen.queryByText('Foo')).not.toBeInTheDocument();

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.click(input);

    expect(_react.screen.getByText('Foo')).toBeInTheDocument();

    _react.fireEvent.click(input);

    expect(_react.screen.queryByText('Foo')).not.toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  test.each([['Combobox', _react2["default"].createElement(_2.Combobox, {
    key: "combobox"
  }, _react2["default"].createElement(_2.ComboboxInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', _react2["default"].createElement(_2.ComboboxMulti, {
    key: "combobox-multi"
  }, _react2["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxMultiList, null, _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('Highlights typed text', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.focus(input);

    _react.fireEvent.change(input, {
      target: {
        value: 'oo'
      }
    });

    expect(_react.screen.getByText('oo')).toHaveStyleRule('font-weight: 600; text-decoration: underline');
    expect(_react.screen.getByText('Bar')).not.toHaveStyleRule('font-weight: 600; text-decoration: underline');

    _react.fireEvent.click(document);
  });
  var dimensions = {
    maxHeight: 400,
    maxWidth: 800,
    minWidth: 300,
    width: '50vw'
  };
  test.each([['Combobox', _react2["default"].createElement(_2.Combobox, {
    key: "combobox"
  }, _react2["default"].createElement(_2.ComboboxInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxList, dimensions, _react2["default"].createElement(_2.ComboboxOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', _react2["default"].createElement(_2.ComboboxMulti, {
    key: "combobox-multi"
  }, _react2["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxMultiList, dimensions, _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('Sets the list layout styles (%s)', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.click(input);

    var list = _react.screen.getByRole('listbox');

    expect(list).toHaveStyleRule('max-height', '400px');
    expect(list).toHaveStyleRule('max-width', '800px');
    expect(list).toHaveStyleRule('min-width', '300px');
    expect(list).toHaveStyleRule('width', '50vw');

    _react.fireEvent.click(document);
  });

  var GetIndicatorJSX = function GetIndicatorJSX(listLevel) {
    return function (indicator) {
      return _react2["default"].createElement(_2.Combobox, {
        key: "combobox",
        value: {
          label: 'Foo',
          value: '101'
        }
      }, _react2["default"].createElement(_2.ComboboxInput, {
        placeholder: "Type here"
      }), _react2["default"].createElement(_2.ComboboxList, {
        indicator: listLevel ? indicator : undefined
      }, _react2["default"].createElement(_2.ComboboxOption, {
        label: "Foo",
        value: "101",
        indicator: listLevel ? undefined : indicator
      }), _react2["default"].createElement(_2.ComboboxOption, {
        label: "Bar",
        value: "102",
        indicator: listLevel ? undefined : indicator
      })));
    };
  };

  var GetIndicatorJSXMulti = function GetIndicatorJSXMulti(listLevel) {
    return function (indicator) {
      return _react2["default"].createElement(_2.ComboboxMulti, {
        key: "combobox-multi",
        values: [{
          label: 'Foo',
          value: '101'
        }]
      }, _react2["default"].createElement(_2.ComboboxMultiInput, {
        placeholder: "Type here"
      }), _react2["default"].createElement(_2.ComboboxMultiList, {
        indicator: listLevel ? indicator : undefined
      }, _react2["default"].createElement(_2.ComboboxMultiOption, {
        label: "Foo",
        value: "101",
        indicator: listLevel ? undefined : indicator
      }), _react2["default"].createElement(_2.ComboboxMultiOption, {
        label: "Bar",
        value: "102",
        indicator: listLevel ? undefined : indicator
      })));
    };
  };

  test.each([['list level (Combobox)', GetIndicatorJSX(true)], ['list level (ComboboxMulti)', GetIndicatorJSXMulti(true)], ['option level (Combobox)', GetIndicatorJSX(false)], ['option level (ComboboxMulti)', GetIndicatorJSXMulti(false)]])('Customize the indicator at the %s', function (_, getJSX) {
    var rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(function (cb) {
      return cb();
    });
    var indicator = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(getJSX(indicator));

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.click(input);

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

    var check = _react.screen.queryByTitle('Check');

    expect(check).not.toBeInTheDocument();
    indicator.mockClear();

    var bar = _react.screen.getByText('Bar');

    _react.fireEvent.mouseOver(bar);

    expect(indicator).toHaveBeenCalledTimes(1);
    expect(indicator).toHaveBeenCalledWith({
      isActive: true,
      isSelected: false,
      label: 'Bar',
      value: '102'
    });

    _react.fireEvent.click(document);

    rafSpy.mockRestore();
  });
  test('Does not highlight current selected value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_2.Combobox, {
      key: "combobox",
      value: {
        label: 'Foo',
        value: '101'
      }
    }, _react2["default"].createElement(_2.ComboboxInput, {
      placeholder: "Type here"
    }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
      label: "Foo",
      value: "101"
    }), _react2["default"].createElement(_2.ComboboxOption, {
      label: "FooBar",
      value: "102"
    }))));

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.click(input);

    expect(_react.screen.getByText('Foo')).not.toHaveStyleRule('font-weight: 600; text-decoration: underline');
    expect(_react.screen.getByText('FooBar')).not.toHaveStyleRule('font-weight: 600; text-decoration: underline');

    _react.fireEvent.click(document);
  });
  test.each([['Combobox', _react2["default"].createElement(_2.Combobox, {
    key: "combobox",
    openOnFocus: true
  }, _react2["default"].createElement(_2.ComboboxInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', _react2["default"].createElement(_2.ComboboxMulti, {
    key: "combobox-multi",
    openOnFocus: true
  }, _react2["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxMultiList, null, _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('with openOnFocus (%s)', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);
    expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();

    _react.screen.getByPlaceholderText('Type here').focus();

    expect(_react.screen.getByRole('listbox')).toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  test.each([['Combobox', _react2["default"].createElement(_2.Combobox, {
    key: "combobox"
  }, _react2["default"].createElement(_2.ComboboxInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', _react2["default"].createElement(_2.ComboboxMulti, {
    key: "combobox-multi"
  }, _react2["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxMultiList, null, _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('click caret to open', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);

    _react.screen.getByPlaceholderText('Type here').focus();

    expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();

    _react.fireEvent.click(_react.screen.getByTestId('caret'));

    expect(_react.screen.getByRole('listbox')).toBeInTheDocument();

    _react.fireEvent.click(document);
  });
});
describe('Keyboard navigation', function () {
  var onChangeMock = jest.fn();
  beforeEach(function () {
    onChangeMock.mockClear();
  });
  var arrowDown = {
    key: 'ArrowDown'
  };
  var arrowUp = {
    key: 'ArrowUp'
  };
  var enter = {
    key: 'Enter'
  };
  var space = {
    key: 'Spacebar'
  };
  test.each([['Combobox', _react2["default"].createElement(_2.Combobox, {
    id: "with-options",
    openOnFocus: true,
    key: "combobox",
    onChange: onChangeMock
  }, _react2["default"].createElement(_2.ComboboxInput, {
    inputReadOnly: true,
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxOption, {
    label: "Bar",
    value: "102"
  })))], ['ComboboxMulti', _react2["default"].createElement(_2.ComboboxMulti, {
    id: "with-options",
    openOnFocus: true,
    key: "combobox-multi",
    onChange: onChangeMock
  }, _react2["default"].createElement(_2.ComboboxMultiInput, {
    inputReadOnly: true,
    placeholder: "Type here"
  }), _react2["default"].createElement(_2.ComboboxMultiList, null, _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Foo",
    value: "101"
  }), _react2["default"].createElement(_2.ComboboxMultiOption, {
    label: "Bar",
    value: "102"
  })))]])('arrows, enter and space (%s)', function (name, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);
    expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(_react.screen.getByRole('listbox')).toBeInTheDocument();

    var items = _react.screen.getAllByRole('option');

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(input).toHaveValue('Foo');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(input).toHaveValue('Bar');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, arrowUp);

    expect(input).toHaveValue('Bar');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');

    _react.fireEvent.keyDown(input, arrowUp);

    expect(input).toHaveValue('Foo');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, enter);

    expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    var value = {
      label: 'Foo',
      value: '101'
    };
    var onChangeValue = name === 'Combobox' ? value : [value];
    expect(onChangeMock).toHaveBeenCalledWith(onChangeValue);

    _react.fireEvent.keyDown(input, arrowUp);

    _react.fireEvent.keyDown(input, arrowUp);

    _react.fireEvent.keyDown(input, space);

    expect(onChangeMock).toHaveBeenCalledTimes(2);
    var value2 = {
      label: 'Bar',
      value: '102'
    };
    var onChangeValue2 = name === 'Combobox' ? value2 : [value, value2];
    expect(onChangeMock).toHaveBeenNthCalledWith(2, onChangeValue2);

    if (name === 'Combobox') {
      expect(input).toHaveValue('Bar');
    } else {
      expect(_react.screen.getByText('Bar')).toBeInTheDocument();
    }

    _react.fireEvent.click(document);
  });
  test('arrows, enter and space with autoComplete = false and no inputReadOnly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_2.Combobox, {
      id: "with-options",
      openOnFocus: true
    }, _react2["default"].createElement(_2.ComboboxInput, {
      placeholder: "Type here",
      autoComplete: false
    }), _react2["default"].createElement(_2.ComboboxList, null, _react2["default"].createElement(_2.ComboboxOption, {
      label: "Foo",
      value: "101"
    }), _react2["default"].createElement(_2.ComboboxOption, {
      label: "Bar",
      value: "102"
    }))));
    expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(_react.screen.getByRole('listbox')).toBeInTheDocument();

    var items = _react.screen.getAllByRole('option');

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');

    _react.fireEvent.keyDown(input, arrowDown);

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'true');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    _react.fireEvent.keyDown(input, arrowUp);

    expect(input).toHaveValue('');
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'true');

    _react.fireEvent.keyDown(input, enter);

    expect(input).toHaveValue('Bar');
    expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();

    _react.fireEvent.keyDown(input, arrowDown);

    _react.fireEvent.keyDown(input, arrowDown);

    _react.fireEvent.keyDown(input, space);

    expect(input).toHaveValue('Bar');
    expect(_react.screen.getByRole('listbox')).toBeInTheDocument();

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=Combobox.spec.js.map