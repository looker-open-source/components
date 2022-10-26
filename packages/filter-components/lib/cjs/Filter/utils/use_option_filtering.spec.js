"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _use_option_filtering = require("./use_option_filtering");

jest.mock('@looker/i18n', function () {
  return {
    useTranslationBase: function useTranslationBase() {
      return {
        t: function t(str) {
          return str;
        }
      };
    }
  };
});
var options = [{
  value: 'Foo',
  label: 'Foo'
}, {
  value: 'Bar',
  label: 'Bar'
}];
jest.useFakeTimers();

var DebounceComponent = function DebounceComponent(_ref) {
  var onInputChange = _ref.onInputChange;

  var _useDebouncedFilterTe = (0, _use_option_filtering.useDebouncedFilterTerm)(onInputChange),
      debouncedFilterTerm = _useDebouncedFilterTe.debouncedFilterTerm,
      noOptionsLabel = _useDebouncedFilterTe.noOptionsLabel,
      onFilter = _useDebouncedFilterTe.onFilter;

  var handleChange = function handleChange(e) {
    onFilter(e.currentTarget.value);
  };

  return _react2["default"].createElement("div", null, _react2["default"].createElement("span", {
    "data-testid": "debouncedFilterTerm"
  }, debouncedFilterTerm), _react2["default"].createElement("span", {
    "data-testid": "noOptionsLabel"
  }, noOptionsLabel), _react2["default"].createElement("input", {
    placeholder: "input",
    onChange: handleChange
  }));
};

var OptionFilterComponent = function OptionFilterComponent(_ref2) {
  var onInputChange = _ref2.onInputChange;

  var _useOptionFiltering = (0, _use_option_filtering.useOptionFiltering)({
    limit: 2,
    onInputChange: onInputChange,
    options: options,
    value: 'Baz'
  }),
      filteredOptions = _useOptionFiltering.filteredOptions,
      noOptionsLabel = _useOptionFiltering.noOptionsLabel,
      onFilter = _useOptionFiltering.onFilter;

  var handleChange = function handleChange(e) {
    onFilter(e.currentTarget.value);
  };

  return _react2["default"].createElement("div", null, filteredOptions.map(function (_ref3, index) {
    var value = _ref3.value;
    return _react2["default"].createElement("span", {
      key: index,
      role: "option"
    }, value);
  }), _react2["default"].createElement("span", {
    "data-testid": "noOptionsLabel"
  }, noOptionsLabel), _react2["default"].createElement("input", {
    placeholder: "input",
    onChange: handleChange
  }));
};

test.each([['useDebouncedFilterTerm', DebounceComponent], ['useOptionFiltering', OptionFilterComponent]])('%s: updates only after a delay', function (_, Component) {
  var mockOnInputChange = jest.fn();
  (0, _react.render)(_react2["default"].createElement(Component, {
    onInputChange: mockOnInputChange
  }));
  expect(_react.screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values');

  var input = _react.screen.getByPlaceholderText('input');

  _react.fireEvent.change(input, {
    target: {
      value: 'Foo'
    }
  });

  expect(_react.screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values');
  (0, _react.act)(function () {
    jest.advanceTimersByTime(150);
  });
  expect(_react.screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values match "Foo"');
  expect(mockOnInputChange).toHaveBeenCalledTimes(1);
  expect(mockOnInputChange).toHaveBeenCalledWith('Foo');
  mockOnInputChange.mockClear();

  _react.fireEvent.change(input, {
    target: {
      value: 'Foo'
    }
  });

  (0, _react.act)(function () {
    jest.advanceTimersByTime(150);
  });
  expect(mockOnInputChange).not.toHaveBeenCalled();
});
describe('useDebouncedFilterTerm', function () {
  it('does not update on initial render with updateOnFirstRender', function () {
    var mockOnInputChange = jest.fn();
    (0, _react.render)(_react2["default"].createElement(DebounceComponent, {
      onInputChange: mockOnInputChange
    }));
    expect(_react.screen.getByTestId('debouncedFilterTerm')).toHaveTextContent('');
    expect(_react.screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values');
    expect(mockOnInputChange).not.toHaveBeenCalled();

    var input = _react.screen.getByPlaceholderText('input');

    _react.fireEvent.change(input, {
      target: {
        value: 'test'
      }
    });

    (0, _react.act)(function () {
      jest.advanceTimersByTime(150);
    });
    expect(mockOnInputChange.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"test\",\n        ],\n      ]\n    ");
  });
});
describe('useOptionFiltering', function () {
  it('adds the current value as an option unless a filter term is added', function () {
    var mockOnInputChange = jest.fn();
    (0, _react.render)(_react2["default"].createElement(OptionFilterComponent, {
      onInputChange: mockOnInputChange
    }));

    var options = _react.screen.getAllByRole('option');

    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Foo');
    expect(options[1]).toHaveTextContent('Bar');
    expect(options[2]).toHaveTextContent('Baz');

    var input = _react.screen.getByPlaceholderText('input');

    _react.fireEvent.change(input, {
      target: {
        value: 'test'
      }
    });

    (0, _react.act)(function () {
      jest.advanceTimersByTime(150);
    });

    var updatedOptions = _react.screen.queryByRole('option');

    expect(updatedOptions).not.toBeInTheDocument();
  });
  it('should recognize a value even if its surrounded by whitespace', function () {
    var mockOnInputChange = jest.fn();
    (0, _react.render)(_react2["default"].createElement(OptionFilterComponent, {
      onInputChange: mockOnInputChange
    }));

    var input = _react.screen.getByPlaceholderText('input');

    _react.fireEvent.change(input, {
      target: {
        value: '   Foo  '
      }
    });

    (0, _react.act)(function () {
      jest.advanceTimersByTime(150);
    });

    var updatedOptions = _react.screen.queryByRole('option');

    expect(updatedOptions).toBeInTheDocument();
  });
});
//# sourceMappingURL=use_option_filtering.spec.js.map