"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ = require(".");

afterEach(_react.cleanup);
describe('<ComboboxMulti/> with values', function () {
  var handleChange = jest.fn();
  var handleClick = jest.fn();

  var renderComboboxMulti = function renderComboboxMulti() {
    return (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.ComboboxMulti, {
      onChange: handleChange,
      values: [{
        label: 'Bar',
        value: '102'
      }, {
        label: 'Qux',
        value: '104'
      }]
    }, _react2["default"].createElement(_.ComboboxMultiInput, {
      placeholder: "Type here"
    }), _react2["default"].createElement(_.ComboboxMultiList, null, _react2["default"].createElement(_.ComboboxMultiOption, {
      label: "Foo",
      value: "101",
      onClick: handleClick
    }), _react2["default"].createElement(_.ComboboxMultiOption, {
      label: "Bar",
      value: "102",
      onClick: handleClick
    }), _react2["default"].createElement(_.ComboboxMultiOption, {
      label: "Baz",
      value: "103",
      onClick: handleClick
    }), _react2["default"].createElement(_.ComboboxMultiOption, {
      label: "Qux",
      value: "104",
      onClick: handleClick
    }))));
  };

  afterEach(function () {
    handleChange.mockClear();
    handleClick.mockClear();
  });
  test('Adds new values to existing', function () {
    renderComboboxMulti();

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.mouseDown(input);

    var foo = _react.screen.getByText('Foo');

    expect(foo).toBeInTheDocument();
    expect(_react.screen.getByText('Baz')).toBeInTheDocument();
    expect(_react.screen.getAllByText('Bar')).toHaveLength(2);
    expect(_react.screen.getAllByText('Qux')).toHaveLength(2);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleChange).toHaveBeenCalledTimes(0);

    _react.fireEvent.click(foo);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith([{
      label: 'Bar',
      value: '102'
    }, {
      label: 'Qux',
      value: '104'
    }, {
      label: 'Foo',
      value: '101'
    }]);

    _react.fireEvent.click(document);
  });
  test('Removes existing values via option click or enter key', function () {
    renderComboboxMulti();

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });

    _react.fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });

    _react.fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });

    _react.fireEvent.keyDown(input, {
      key: 'Enter'
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith([{
      label: 'Qux',
      value: '104'
    }]);

    _react.fireEvent.mouseDown(input);

    var qux = _react.screen.getAllByText('Qux')[0];

    _react.fireEvent.click(qux);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenNthCalledWith(2, [{
      label: 'Bar',
      value: '102'
    }]);

    _react.fireEvent.click(document);
  });
  test('Removes existing values via chip delete', function () {
    renderComboboxMulti();

    var removeChip = _react.screen.getAllByRole('button')[1];

    _react.fireEvent.click(removeChip);

    expect(handleChange).toHaveBeenCalledWith([{
      label: 'Bar',
      value: '102'
    }]);

    _react.fireEvent.click(document);
  });
  test('freeInput allows values to be added', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.ComboboxMulti, {
      onChange: onChangeMock,
      values: [{
        value: 'Bar'
      }, {
        value: 'Qux'
      }]
    }, _react2["default"].createElement(_.ComboboxMultiInput, {
      placeholder: "Type here",
      freeInput: true
    }), _react2["default"].createElement(_.ComboboxMultiList, null, _react2["default"].createElement(_.ComboboxMultiOption, {
      value: "Foo",
      onClick: handleClick
    }), _react2["default"].createElement(_.ComboboxMultiOption, {
      value: "Bar",
      onClick: handleClick
    }), _react2["default"].createElement(_.ComboboxMultiOption, {
      value: "Baz",
      onClick: handleClick
    }), _react2["default"].createElement(_.ComboboxMultiOption, {
      value: "Qux",
      onClick: handleClick
    }))));

    var input = _react.screen.getByPlaceholderText('Type here');

    _react.fireEvent.change(input, {
      target: {
        value: 'apples,bananas,'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith([{
      value: 'Bar'
    }, {
      value: 'Qux'
    }, {
      value: 'apples'
    }, {
      value: 'bananas'
    }]);

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=ComboboxMulti.spec.js.map