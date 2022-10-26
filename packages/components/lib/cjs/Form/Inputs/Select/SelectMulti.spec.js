"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _SelectMulti = require("./SelectMulti");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

afterEach(_react.cleanup);
var basicOptions = [{
  label: 'Foo',
  value: 'FOO'
}, {
  label: 'Bar',
  value: 'BAR'
}];
describe('SelectMulti', function () {
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
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

    _react.fireEvent.click(_react.screen.getByPlaceholderText('SelectMulti'));

    var select = _react.screen.getByText('Cheddar').closest('li');

    expect(select).not.toHaveClass('bg-on fg-in');
    expect(select).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    select && _react.fireEvent.focus(select);
    expect(select).toHaveClass('bg-on');
    select && _react.fireEvent.mouseDown(select);
    expect(select).toHaveClass('bg-on fg-in');
    select && _react.fireEvent.mouseUp(select);
    runTimers();
    expect(select).toHaveClass('bg-on fg-out');
    runTimers();
    expect(select).toHaveClass('bg-on');
    select && _react.fireEvent.blur(select);
    expect(select).not.toHaveClass('bg-on fg-in');

    _react.fireEvent.click(document);
  });
  test('values', function () {
    var options = [{
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
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: options,
      placeholder: "Search",
      values: ['BAZ', 'FOO'],
      onChange: jest.fn()
    }));
    expect(_react.screen.getByText('Baz')).toBeVisible();
    expect(_react.screen.getByText('Foo')).toBeVisible();
    expect(_react.screen.getAllByRole('button')).toHaveLength(3);
  });
  test('defaultValues', function () {
    var options = [{
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
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: options,
      placeholder: "Search",
      defaultValues: ['BAR']
    }));
    expect(_react.screen.getByText('Bar')).toBeVisible();
    expect(_react.screen.getAllByRole('button')).toHaveLength(2);
  });
  test('controlled value & context mismatch', function () {
    var TestComponent = function TestComponent() {
      var _React$useState = _react2["default"].useState(['FOO']),
          _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
          values = _React$useState2[0],
          setValues = _React$useState2[1];

      var handleFilter = function handleFilter() {
        setValues([]);
      };

      return _react2["default"].createElement(_SelectMulti.SelectMulti, {
        values: values,
        onChange: setValues,
        options: basicOptions,
        isFilterable: true,
        onFilter: handleFilter,
        placeholder: "Search"
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.change(input, {
      target: {
        value: 'b'
      }
    });

    expect(input).toHaveValue('b');

    _react.fireEvent.click(document);
  });
  test('controlled, filterable', function () {
    var cheeses = [{
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

    var TestComponent = function TestComponent() {
      var _React$useState3 = _react2["default"].useState(['Cheddar']),
          _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
          values = _React$useState4[0],
          setValues = _React$useState4[1];

      var _React$useState5 = _react2["default"].useState(''),
          _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
          term = _React$useState6[0],
          setTerm = _React$useState6[1];

      var options = _react2["default"].useMemo(function () {
        if (term === '') return cheeses;
        return cheeses.filter(function (cheese) {
          return cheese.value.toUpperCase().indexOf(term.toUpperCase()) > -1;
        });
      }, [term]);

      return _react2["default"].createElement(_SelectMulti.SelectMulti, {
        values: values,
        onChange: setValues,
        options: options,
        isFilterable: true,
        onFilter: setTerm,
        placeholder: "Search"
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.change(input, {
      target: {
        value: 'z'
      }
    });

    expect(input).toHaveValue('z');

    _react.fireEvent.click(document);
  });
});
describe('closeOnSelect', function () {
  test('false by default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: basicOptions,
      placeholder: "Search"
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.mouseDown(input);

    var bar = _react.screen.getByText('Bar');

    expect(_react.screen.getByText('Foo')).toBeVisible();
    expect(bar).toBeVisible();

    _react.fireEvent.click(bar);

    expect(_react.screen.getByText('Foo')).toBeVisible();
    expect(_react.screen.getAllByText('Bar')).toHaveLength(2);

    _react.fireEvent.click(document);
  });
  test('true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: basicOptions,
      placeholder: "Search",
      closeOnSelect: true
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.mouseDown(input);

    var bar = _react.screen.getByText('Bar');

    expect(_react.screen.getByText('Foo')).toBeVisible();
    expect(bar).toBeVisible();

    _react.fireEvent.click(bar);

    expect(_react.screen.getByText('Bar')).toBeVisible();
    expect(_react.screen.queryByText('Foo')).not.toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  describe('removeOnBackspace', function () {
    test('true by default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search"
      }));

      var input = _react.screen.getByPlaceholderText('Search');

      expect(_react.screen.getByText('Foo')).toBeVisible();
      expect(_react.screen.getByText('Bar')).toBeVisible();

      _react.fireEvent.keyDown(input, {
        key: 'Backspace'
      });

      expect(_react.screen.getByText('Foo')).toBeVisible();
      expect(_react.screen.queryByText('Bar')).not.toBeInTheDocument();
    });
    test('false', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        removeOnBackspace: false
      }));

      var input = _react.screen.getByPlaceholderText('Search');

      expect(_react.screen.getByText('Foo')).toBeVisible();
      expect(_react.screen.getByText('Bar')).toBeVisible();

      _react.fireEvent.keyDown(input, {
        key: 'Backspace'
      });

      expect(_react.screen.getByText('Foo')).toBeVisible();
      expect(_react.screen.queryByText('Bar')).toBeVisible();
    });
  });
  describe('freeInput', function () {
    test('false by default', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        onChange: onChangeMock
      }));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.change(input, {
        target: {
          value: 'baz,qux,'
        }
      });

      expect(onChangeMock).not.toHaveBeenCalled();
      expect(input).toHaveValue('baz,qux,');

      _react.fireEvent.click(document);
    });
    test('true', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        onChange: onChangeMock,
        freeInput: true
      }));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.change(input, {
        target: {
          value: ' baz , qux,'
        }
      });

      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'baz', 'qux']);
      expect(input).toHaveValue('');

      _react.fireEvent.click(document);
    });
    test('formatInputValue false', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: basicOptions,
        defaultValues: ['FOO', 'BAR'],
        placeholder: "Search",
        onChange: onChangeMock,
        freeInput: true,
        formatInputValue: false
      }));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.change(input, {
        target: {
          value: ' baz , qux,'
        }
      });

      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', ' baz ', ' qux']);
      expect(input).toHaveValue('');

      _react.fireEvent.click(document);
    });
    test('creates value and closes list on blur', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      var onChangeMock, input;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onChangeMock = jest.fn();
              (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("button", null, "A random button"), _react2["default"].createElement(_SelectMulti.SelectMulti, {
                options: basicOptions,
                placeholder: "Search",
                onChange: onChangeMock,
                freeInput: true
              })));
              input = _react.screen.getByPlaceholderText('Search');
              input.focus();

              _react.fireEvent.change(input, {
                target: {
                  value: 'baz'
                }
              });

              expect(_react.screen.getByRole('listbox')).toBeVisible();

              _react.screen.getByText('A random button').focus();

              expect(onChangeMock).toHaveBeenCalledWith(['baz']);
              expect(input).toHaveValue('');
              expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test('copy/paste', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: basicOptions,
        values: ['FOO', 'BAR'],
        onChange: onChangeMock,
        placeholder: "Search",
        freeInput: true
      }));

      var input = _react.screen.getByPlaceholderText('Search');

      var hiddenInput = _react.screen.getByTestId('hidden-input');

      _react.fireEvent.keyDown(input, {
        key: 'a',
        metaKey: true
      });

      expect(hiddenInput).toHaveDisplayValue('[{"label":"Foo","value":"FOO"},{"label":"Bar","value":"BAR"}]');
      (0, _componentsTestUtils.firePasteEvent)(input, '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]');

      _react.fireEvent.change(input, {
        target: {
          value: '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]'
        }
      });

      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'BAZ', 'QUX']);
    });
  });
});
//# sourceMappingURL=SelectMulti.spec.js.map