"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _material = require("@styled-icons/material");

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _Button = require("../../../Button");

var _Select = require("./Select");

var _SelectMulti = require("./SelectMulti");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var options100 = Array.from(Array(100), function (_, i) {
  return {
    value: String(i + 1)
  };
});
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

describe('Select / SelectMulti', function () {
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
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

    _react.fireEvent.click(_react.screen.getByPlaceholderText('Select'));

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
  var options = [{
    value: 'FOO'
  }, {
    value: 'BAR'
  }];
  test.each([['Select', function (onChange) {
    return _react2["default"].createElement(_Select.Select, {
      options: options,
      placeholder: "Search",
      onChange: onChange,
      key: "select"
    });
  }], ['SelectMulti', function (onChange) {
    return _react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: options,
      placeholder: "Search",
      onChange: onChange,
      key: "select-multi"
    });
  }]])('with options and handleChange (%s)', function (name, getJSX) {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(getJSX(handleChange));
    expect(_react.screen.queryByText('FOO')).not.toBeInTheDocument();
    expect(_react.screen.queryByText('BAR')).not.toBeInTheDocument();

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).toBeVisible();

    _react.fireEvent.mouseDown(input);

    var bar = _react.screen.getByText('BAR');

    _react.fireEvent.click(bar);

    expect(handleChange).toHaveBeenCalledTimes(1);
    var onChangeArg = name === 'SelectMulti' ? ['BAR'] : 'BAR';
    expect(handleChange).toHaveBeenCalledWith(onChangeArg);

    _react.fireEvent.click(document);
  });
  var initialOptions = [].concat(options100, options, [{
    value: 'BAZ'
  }]);
  test.each([['Select', function (onFilter, optionsToUse) {
    return _react2["default"].createElement(_Select.Select, {
      options: optionsToUse,
      placeholder: "Search",
      onFilter: onFilter,
      key: "select"
    });
  }], ['SelectMulti', function (onFilter, optionsToUse) {
    return _react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: optionsToUse,
      placeholder: "Search",
      onFilter: onFilter,
      key: "select-multi"
    });
  }]])('with onFilter (%s)', function (_, getJSX) {
    var mockOnFilter = jest.fn();

    function Component() {
      var _useState = (0, _react2.useState)(initialOptions),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          optionsToUse = _useState2[0],
          setOptions = _useState2[1];

      function handleFilter(term) {
        mockOnFilter(term);
        setOptions(initialOptions.filter(function (option) {
          return option.value.indexOf(term) > -1;
        }));
      }

      return getJSX(handleFilter, optionsToUse);
    }

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.mouseDown(input);

    expect(_react.screen.getAllByRole('option')).toHaveLength(6);
    expect(_react.screen.getByText('1')).toBeInTheDocument();
    expect(_react.screen.getByText('6')).toBeInTheDocument();

    _react.fireEvent.change(input, {
      target: {
        value: 'BA'
      }
    });

    expect(mockOnFilter).toHaveBeenCalledWith('BA');

    var items = _react.screen.getAllByRole('option');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveAttribute('aria-selected', 'false');
    expect(items[1]).toHaveAttribute('aria-selected', 'false');

    var fireArrowDown = function fireArrowDown() {
      return _react.fireEvent.keyDown(input, {
        key: 'ArrowDown'
      });
    };

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

    _react.fireEvent.click(document);
  });
  var groupedOptions = [{
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
  test.each([['Select', function (onChange) {
    return _react2["default"].createElement(_Select.Select, {
      options: groupedOptions,
      placeholder: "Search",
      onChange: onChange,
      key: "select"
    });
  }], ['SelectMulti', function (onChange) {
    return _react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: groupedOptions,
      placeholder: "Search",
      onChange: onChange,
      key: "select-multi"
    });
  }]])('with option descriptions and group labels (%s)', function (name, getJSX) {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(getJSX(handleChange));

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).toBeVisible();

    _react.fireEvent.mouseDown(input);

    var foo = _react.screen.getByText('FOO');

    var other = _react.screen.getByText('OTHER');

    var desc = _react.screen.getByText('A description for something');

    expect(foo).toBeInTheDocument();
    expect(other).toBeInTheDocument();
    expect(desc).toBeInTheDocument();

    _react.fireEvent.click(foo);

    _react.fireEvent.click(desc);

    expect(handleChange).toHaveBeenCalledTimes(1);
    var onChangeArg = name === 'SelectMulti' ? ['something'] : 'something';
    expect(handleChange).toHaveBeenCalledWith(onChangeArg);

    _react.fireEvent.click(document);
  });
  var dimensions = {
    maxHeight: 400,
    maxWidth: 800,
    minWidth: 300,
    width: '50vw'
  };
  test.each([['Select', _react2["default"].createElement(_Select.Select, {
    options: groupedOptions,
    placeholder: "Search",
    listLayout: dimensions,
    key: "select"
  })], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, {
    options: groupedOptions,
    placeholder: "Search",
    listLayout: dimensions,
    key: "select-multi"
  })]])('with listLayout (%s)', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).toBeVisible();

    _react.fireEvent.mouseDown(input);

    var list = _react.screen.getByRole('listbox');

    expect(list).toHaveStyleRule('max-height', '400px');
    expect(list).toHaveStyleRule('max-width', '800px');
    expect(list).toHaveStyleRule('min-width', '300px');
    expect(list).toHaveStyleRule('width', '50vw');

    _react.fireEvent.click(document);
  });

  var GetIndicatorJSX = function GetIndicatorJSX(listLevel) {
    return function (indicator) {
      return _react2["default"].createElement(_Select.Select, {
        options: options.map(function (opt) {
          return _objectSpread(_objectSpread({}, opt), listLevel ? {} : {
            indicator: indicator
          });
        }),
        value: "FOO",
        placeholder: "Search",
        indicator: listLevel ? indicator : undefined,
        key: "select"
      });
    };
  };

  var GetIndicatorJSXMulti = function GetIndicatorJSXMulti(listLevel) {
    return function (indicator) {
      return _react2["default"].createElement(_SelectMulti.SelectMulti, {
        options: options.map(function (opt) {
          return _objectSpread(_objectSpread({}, opt), listLevel ? {} : {
            indicator: indicator
          });
        }),
        values: ['FOO'],
        placeholder: "Search",
        indicator: listLevel ? indicator : undefined,
        key: "select-multi"
      });
    };
  };

  test.each([['list level (Select)', GetIndicatorJSX(true)], ['list level (SelectMulti)', GetIndicatorJSXMulti(true)], ['option level (Select)', GetIndicatorJSX(false)], ['option level (SelectMulti)', GetIndicatorJSXMulti(false)]])('Customize the indicator at the %s', function (_, getJSX) {
    var indicator = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(getJSX(indicator));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.click(input);

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

    var check = _react.screen.queryByTitle('Check');

    expect(check).not.toBeInTheDocument();
    indicator.mockClear();

    var bar = _react.screen.getByText('BAR');

    _react.fireEvent.keyDown(bar, {
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

    _react.fireEvent.click(document);
  });
  var detailOptions = [{
    detail: 'Info about option',
    value: 'someValue'
  }];
  test.each([['Select', _react2["default"].createElement(_Select.Select, {
    placeholder: "Search",
    options: detailOptions,
    key: "select"
  })], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, {
    placeholder: "Search",
    options: detailOptions,
    key: "select-multi"
  })]])('option detail (%s)', function (_, jsx) {
    (0, _componentsTestUtils.renderWithTheme)(jsx);

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.mouseDown(input);

    expect(_react.screen.getByText('Info about option')).toBeVisible();

    _react.fireEvent.click(document);
  });
  describe('no options', function () {
    test.each([['Select', function (onChange) {
      return _react2["default"].createElement(_Select.Select, {
        placeholder: "Search",
        onChange: onChange,
        key: "select"
      });
    }], ['SelectMulti', function (onChange) {
      return _react2["default"].createElement(_SelectMulti.SelectMulti, {
        placeholder: "Search",
        onChange: onChange,
        key: "select-multi"
      });
    }]])('label does nothing when clicked (%s)', function (_, getJSX) {
      var handleChange = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(getJSX(handleChange));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      var noOptions = _react.screen.getByText('No options');

      _react.fireEvent.click(noOptions);

      expect(handleChange).not.toHaveBeenCalled();

      _react.fireEvent.click(document);
    });
    var label = 'Your search returned no results';
    test.each([['Select', _react2["default"].createElement(_Select.Select, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select"
    })], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select-multi"
    })]])('custom label text (%s)', function (_, jsx) {
      (0, _componentsTestUtils.renderWithTheme)(jsx);

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      var noOptions = _react.screen.queryByText(label);

      expect(noOptions).toBeVisible();

      _react.fireEvent.click(document);
    });
    test.each([['Select', _react2["default"].createElement(_Select.Select, {
      placeholder: "Search",
      isLoading: true,
      key: "select"
    })], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, {
      placeholder: "Search",
      isLoading: true,
      key: "select-multi"
    })]])('isLoading (%s)', function (_, jsx) {
      (0, _componentsTestUtils.renderWithTheme)(jsx);

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      var spinner = _react.screen.queryByLabelText('Loading');

      expect(spinner).toBeVisible();

      _react.fireEvent.click(document);
    });
  });
  describe('windowed options', function () {
    var testArray = [['Select', function (longOptions) {
      return _react2["default"].createElement(_Select.Select, {
        placeholder: "Search",
        options: longOptions,
        key: "select"
      });
    }], ['SelectMulti', function (longOptions) {
      return _react2["default"].createElement(_SelectMulti.SelectMulti, {
        placeholder: "Search",
        options: longOptions,
        key: "select-multi"
      });
    }]];
    test.each(testArray)('100 options do not all render (%s)', function (_, getJSX) {
      var longOptions = Array.from(Array(100), function (_, index) {
        return {
          value: "".concat(index)
        };
      });
      (0, _componentsTestUtils.renderWithTheme)(getJSX(longOptions));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      expect(_react.screen.getByText('0')).toBeInTheDocument();
      expect(_react.screen.getByText('5')).toBeInTheDocument();
      expect(_react.screen.queryByText('6')).not.toBeInTheDocument();

      _react.fireEvent.click(document);
    });
    test.each(testArray)('100 grouped options do not all render (%s)', function (_, getJSX) {
      var longOptions = Array.from(Array(100), function (_, index) {
        return {
          value: "".concat(index)
        };
      });
      var groupedOptions = [{
        label: 'First',
        options: longOptions.slice(0, 4)
      }, {
        label: 'Second',
        options: longOptions.slice(4, 20)
      }, {
        label: 'Third',
        options: longOptions.slice(20, 99)
      }];
      (0, _componentsTestUtils.renderWithTheme)(getJSX(groupedOptions));

      var inputs = _react.screen.getAllByRole('textbox');

      var input = inputs[inputs.length - 1];

      _react.fireEvent.mouseDown(input);

      expect(_react.screen.getByText('First')).toBeInTheDocument();
      expect(_react.screen.getByText('3')).toBeInTheDocument();
      expect(_react.screen.queryByText('4')).not.toBeInTheDocument();

      _react.fireEvent.click(document);
    });
    test.each(testArray)('Hover navigation is off while scrolling (%s)', function (_, getJSX) {
      jest.useFakeTimers();
      var rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(function (cb) {
        return cb();
      });
      (0, _componentsTestUtils.renderWithTheme)(getJSX(options));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      var surface = _react.screen.getByRole('dialog');

      expect(surface).toBeInTheDocument();
      var surfaceInner = surface && surface.firstChild;
      expect(surfaceInner).toBeInTheDocument();
      var surfaceInnerFlex = surfaceInner && surfaceInner.firstChild;
      expect(surfaceInnerFlex).toBeInTheDocument();
      surfaceInnerFlex && _react.fireEvent.scroll(surfaceInnerFlex);

      var bar = _react.screen.getByText('BAR');

      _react.fireEvent.mouseOver(bar);

      expect(_react.screen.queryByRole('option', {
        selected: true
      })).not.toBeInTheDocument();
      jest.runOnlyPendingTimers();

      _react.fireEvent.mouseOver(bar);

      expect(_react.screen.queryByRole('option', {
        selected: true
      })).toHaveTextContent('BAR');

      _react.fireEvent.click(document);

      runTimers();
      rafSpy.mockRestore();
    });
    test.each(testArray)('99 options all render (%s)', function (_, getJSX) {
      var longOptions = Array.from(Array(99), function (_, index) {
        return {
          value: "".concat(index)
        };
      });
      (0, _componentsTestUtils.renderWithTheme)(getJSX(longOptions));

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      expect(_react.screen.getByText('0')).toBeInTheDocument();
      expect(_react.screen.getByText('98')).toBeInTheDocument();

      _react.fireEvent.click(document);
    });
    var label = 'Your search returned no results';
    test.each([['Select', _react2["default"].createElement(_Select.Select, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select"
    })], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, {
      placeholder: "Search",
      noOptionsLabel: label,
      key: "select-multi"
    })]])('custom label text (%s)', function (_, jsx) {
      (0, _componentsTestUtils.renderWithTheme)(jsx);

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.mouseDown(input);

      var noOptions = _react.screen.queryByText(label);

      expect(noOptions).toBeVisible();

      _react.fireEvent.click(document);
    });
  });
  describe('showCreate', function () {
    var commonProps = {
      isFilterable: true,
      placeholder: 'Search',
      showCreate: true
    };
    test.each([['Select', _react2["default"].createElement(_Select.Select, (0, _extends2["default"])({
      defaultValue: "test value"
    }, commonProps, {
      key: "select"
    }))], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, (0, _extends2["default"])({
      defaultValues: ['test value']
    }, commonProps, {
      key: "select-multi"
    }))]])('create option replaces "No options" (%s)', function (_, jsx) {
      (0, _componentsTestUtils.renderWithTheme)(jsx);

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.focus(input);

      _react.fireEvent.change(input, {
        target: {
          value: 'some text'
        }
      });

      expect(_react.screen.getByText('Create "some text"')).toBeVisible();
      expect(_react.screen.queryByText('No options')).not.toBeInTheDocument();

      _react.fireEvent.focus(input);

      _react.fireEvent.change(input, {
        target: {
          value: 'test value'
        }
      });

      expect(_react.screen.getByText('No options')).toBeVisible();
      expect(_react.screen.queryByText('Create "test value"')).not.toBeInTheDocument();

      _react.fireEvent.focus(input);

      _react.fireEvent.change(input, {
        target: {
          value: ''
        }
      });

      expect(_react.screen.getByText('No options')).toBeVisible();
      expect(_react.screen.queryByText('Create ""')).not.toBeInTheDocument();

      _react.fireEvent.click(document);
    });

    var formatCreateLabel = function formatCreateLabel(inputValue) {
      return "".concat(inputValue, " CREATE LABEL");
    };

    test.each([['Select', _react2["default"].createElement(_Select.Select, (0, _extends2["default"])({
      options: options
    }, commonProps, {
      formatCreateLabel: formatCreateLabel,
      key: "select"
    }))], ['SelectMulti', _react2["default"].createElement(_SelectMulti.SelectMulti, (0, _extends2["default"])({
      options: options
    }, commonProps, {
      formatCreateLabel: formatCreateLabel,
      key: "select-multi"
    }))]])('custom label, checks options (%s)', function (_, jsx) {
      (0, _componentsTestUtils.renderWithTheme)(jsx);

      var input = _react.screen.getByPlaceholderText('Search');

      _react.fireEvent.focus(input);

      _react.fireEvent.change(input, {
        target: {
          value: 'some text'
        }
      });

      expect(_react.screen.getByText('some text CREATE LABEL')).toBeVisible();

      _react.fireEvent.focus(input);

      _react.fireEvent.change(input, {
        target: {
          value: 'foo'
        }
      });

      expect(_react.screen.queryByText('foo CREATE LABEL')).not.toBeInTheDocument();

      _react.fireEvent.click(document);
    });
  });
  test.each([['Select', function (value, onChange) {
    return _react2["default"].createElement(_Select.Select, {
      options: options,
      placeholder: "Search",
      value: value,
      onChange: onChange,
      key: "select"
    });
  }], ['SelectMulti', function (value, _onChange) {
    return _react2["default"].createElement(_SelectMulti.SelectMulti, {
      options: options,
      placeholder: "Search",
      values: [value],
      onChange: function onChange(values) {
        return _onChange(values && values.length ? values[0] : '');
      },
      key: "select-multi"
    });
  }]])('with controlled delayed update (%s)', function (_, getJSX) {
    function Component() {
      var _useState3 = (0, _react2.useState)('BAR'),
          _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
          value = _useState4[0],
          setValue = _useState4[1];

      var _useState5 = (0, _react2.useState)(value),
          _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
          tempValue = _useState6[0],
          setTempValue = _useState6[1];

      (0, _react2.useEffect)(function () {
        var t = setTimeout(function () {
          setValue(tempValue);
        }, 0);
        return function () {
          clearTimeout(t);
        };
      }, [tempValue]);
      return getJSX(value, setTempValue);
    }

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.mouseDown(input);

    var option = _react.screen.getByText('FOO');

    _react.fireEvent.blur(input, {
      relatedTarget: option
    });

    _react.fireEvent.click(option);

    expect(input).toHaveFocus();
    runTimers();

    _react.fireEvent.click(document);
  });
});
describe('Select', function () {
  var globalConsole = global.console;
  var warnMock = jest.fn();
  beforeEach(function () {
    global.console = {
      warn: warnMock
    };
  });
  afterEach(function () {
    jest.resetAllMocks();
    global.console = globalConsole;
  });
  var options = [{
    label: 'Foo',
    value: 'FOO'
  }, {
    label: 'Bar',
    value: 'BAR'
  }];
  test('value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      placeholder: "Search",
      value: "BAR",
      onChange: jest.fn()
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).toHaveValue('Bar');
    expect(_react.screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('clearing the value externally', function () {
    var Component = function Component() {
      var _useState7 = (0, _react2.useState)('FOO'),
          _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
          value = _useState8[0],
          setValue = _useState8[1];

      return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Button.Button, {
        onClick: function onClick() {
          return setValue('');
        }
      }, "Clear"), _react2["default"].createElement(_Select.Select, {
        value: value,
        onChange: setValue,
        options: options
      }));
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var input = _react.screen.getByDisplayValue('Foo');

    var button = _react.screen.getByText('Clear');

    _react.fireEvent.click(button);

    expect(input).not.toHaveValue();
  });
  test('defaultValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      placeholder: "Search",
      defaultValue: "BAR"
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).toHaveValue('Bar');
  });
  test('isClearable', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      placeholder: "Search",
      defaultValue: "BAR",
      onChange: handleChange,
      isClearable: true
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).toHaveValue('Bar');

    var clearButton = _react.screen.getByRole('button');

    _react.fireEvent.click(clearButton);

    expect(input).not.toHaveValue();
    expect(handleChange).toHaveBeenCalledWith('');
  });
  test('placeholder, no defaultValue', function () {
    var options = [{
      value: 'FOO'
    }, {
      value: 'BAR'
    }];
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      placeholder: "Search"
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    expect(input).not.toHaveValue();
  });
  test('isClearable, no defaultValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      isClearable: true,
      "data-testid": "wrapper"
    }));

    var input = _react.screen.getByTestId('wrapper').querySelector('input');

    expect(input).not.toHaveValue();
  });
  test('empty string defaultValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      defaultValue: "",
      "data-testid": "wrapper"
    }));

    var input = _react.screen.getByTestId('wrapper').querySelector('input');

    expect(input).not.toHaveValue();
  });
  test('empty string value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      value: "",
      "data-testid": "wrapper"
    }));

    var input = _react.screen.getByTestId('wrapper').querySelector('input');

    expect(input).not.toHaveValue();
  });
  test('empty string value, empty string option', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: [{
        label: 'An empty string',
        value: ''
      }].concat(options),
      value: "",
      "data-testid": "wrapper"
    }));

    var input = _react.screen.getByTestId('wrapper').querySelector('input');

    expect(input).toHaveValue('An empty string');
  });
  test('default to first option', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      options: options,
      "data-testid": "wrapper"
    }));

    var input = _react.screen.getByTestId('wrapper').querySelector('input');

    expect(input).toHaveValue('Foo');
  });
  test('displayed value changes when option label changes', function () {
    var Component = function Component() {
      var _useState9 = (0, _react2.useState)('Original Label'),
          _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
          label = _useState10[0],
          setLabel = _useState10[1];

      var options = [{
        label: label,
        value: 'value_stays_the_same'
      }, {
        label: 'Another Option',
        value: 'other'
      }];
      return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Button.Button, {
        onClick: function onClick() {
          return setLabel('Updated label');
        }
      }, "Update label"), _react2["default"].createElement(_Select.Select, {
        value: "value_stays_the_same",
        options: options
      }));
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var input = _react.screen.getByDisplayValue('Original Label');

    _react.fireEvent.click(input);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"Original Label\",\n        \"Another Option\",\n      ]\n    ");

    _react.fireEvent.click(document);

    _react.fireEvent.click(_react.screen.getByText('Update label'));

    expect(input).toHaveValue('Updated label');

    _react.fireEvent.click(input);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"Updated label\",\n        \"Another Option\",\n      ]\n    ");

    _react.fireEvent.click(document);
  });
  test('filtering out the selected option does not trigger a change', function () {
    var Component = function Component() {
      var _useState11 = (0, _react2.useState)(''),
          _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
          filterTerm = _useState12[0],
          setFilterTerm = _useState12[1];

      var filteredOptions = (0, _react2.useMemo)(function () {
        return options.filter(function (option) {
          return option.label.indexOf(filterTerm) > -1;
        });
      }, [filterTerm]);
      return _react2["default"].createElement(_Select.Select, {
        value: "FOO",
        options: filteredOptions,
        isFilterable: true,
        onFilter: setFilterTerm
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var input = _react.screen.getByDisplayValue('Foo');

    _react.fireEvent.change(input, {
      target: {
        value: 'Ba'
      }
    });

    expect(input).toHaveValue('Ba');

    _react.fireEvent.click(document);
  });
  test('option icons', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      placeholder: "Select a visualization",
      options: [{
        icon: _react2["default"].createElement(_material.AutoGraph, {
          "data-testid": "input-icon"
        }),
        label: 'Bar',
        value: 'bar'
      }, {
        label: 'No Icon',
        value: 'noicon'
      }, {
        icon: _react2["default"].createElement(_material.BarChart, {
          "data-testid": "input-icon"
        }),
        indicator: 'Test Indicator',
        label: 'Column',
        value: 'column'
      }, {
        icon: _react2["default"].createElement(_react2["default"].Fragment, null, "cool icon"),
        label: 'Custom Icon',
        value: 'custom'
      }]
    }));
    expect(_react.screen.queryByTestId('input-icon')).not.toBeInTheDocument();

    var input = _react.screen.getByPlaceholderText('Select a visualization');

    expect(input).toBeInTheDocument();

    _react.fireEvent.click(input);

    expect(_react.screen.getAllByTestId('input-icon')).toHaveLength(2);
    expect(_react.screen.getByTestId('option-icon-placeholder')).toBeInTheDocument();

    _react.fireEvent.click(_react.screen.getByText('Column'));

    var inputIcon = _react.screen.getByTestId('input-icon');

    expect(inputIcon.tagName).toBe('svg');

    _react.fireEvent.click(input);

    _react.fireEvent.click(_react.screen.getByText('Custom Icon'));

    expect(_react.screen.getByText('cool icon')).toBeInTheDocument();
    expect(_react.screen.queryByText('Test Indicator')).not.toBeInTheDocument();
    expect(warnMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"Use icon or indicator but not both at the same time.\",\n        ],\n        Array [\n          \"Use icon or indicator but not both at the same time.\",\n        ],\n      ]\n    ");

    _react.fireEvent.click(document);
  });
  test('option preface', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Select.Select, {
      placeholder: "Search",
      options: [{
        label: 'Foo',
        preface: 'Preface for Foo',
        value: 'FOO'
      }, {
        label: 'Bar',
        preface: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("strong", null, "Preface for"), " Bar"),
        value: 'BAR'
      }]
    }));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.click(input);

    var fooPreface = _react.screen.getByText('Preface for Foo');

    var barPreface = _react.screen.getByText('Preface for');

    expect(fooPreface).toBeVisible();
    expect(barPreface).toBeVisible();
    expect(barPreface.parentElement).toHaveTextContent('Preface for Bar');

    _react.fireEvent.click(fooPreface);

    expect(input).toHaveDisplayValue('Foo');

    _react.fireEvent.click(document);
  });
  test('filtering after selecting an option where value != label', function () {
    var customLabelOptions = [{
      label: 'Foo',
      value: 'FOO'
    }, {
      label: 'Bar',
      value: 'BAR'
    }];

    function TestComponent() {
      var _useState13 = (0, _react2.useState)(''),
          _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
          filterTerm = _useState14[0],
          setFilterTerm = _useState14[1];

      var _useState15 = (0, _react2.useState)(''),
          _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
          value = _useState16[0],
          setValue = _useState16[1];

      var filteredOptions = filterTerm === '' ? customLabelOptions : [];
      return _react2["default"].createElement(_Select.Select, {
        options: filteredOptions,
        value: value,
        onChange: setValue,
        isFilterable: true,
        onFilter: setFilterTerm,
        placeholder: "Search"
      });
    }

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.click(input);

    _react.fireEvent.click(_react.screen.getByText('Foo'));

    expect(input).toHaveDisplayValue('Foo');

    _react.fireEvent.focus(input);

    _react.fireEvent.change(input, {
      target: {
        value: 'Testing'
      }
    });

    expect(input).toHaveDisplayValue('Testing');

    _react.fireEvent.click(document);
  });
  test('filtering a windowed list then deleting the filter', function () {
    function Component() {
      var _useState17 = (0, _react2.useState)(options100),
          _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
          optionsToUse = _useState18[0],
          setOptions = _useState18[1];

      function handleFilter(term) {
        setOptions(options100.filter(function (option) {
          return option.value.indexOf(term) > -1;
        }));
      }

      return _react2["default"].createElement(_Select.Select, {
        options: optionsToUse,
        placeholder: "Search",
        onFilter: handleFilter,
        value: ""
      });
    }

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var input = _react.screen.getByPlaceholderText('Search');

    _react.fireEvent.mouseDown(input);

    _react.fireEvent.change(input, {
      target: {
        value: '90'
      }
    });

    _react.fireEvent.change(input, {
      target: {
        value: ''
      }
    });

    expect(_react.screen.queryByText('No options')).not.toBeInTheDocument();

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=Select.spec.js.map