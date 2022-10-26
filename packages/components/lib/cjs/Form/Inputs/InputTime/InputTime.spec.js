"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _InputTime = require("./InputTime");

var globalConsole = global.console;
beforeEach(function () {
  global.console = {
    error: jest.fn(),
    warn: jest.fn()
  };
});
afterEach(function () {
  jest.resetAllMocks();
  global.console = globalConsole;
});

var selectSubInputs = function selectSubInputs(mockProps) {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputTime.InputTime, mockProps));

  var inputHour = _react2.screen.getByTestId('input-hour');

  var inputMinute = _react2.screen.getByTestId('input-minute');

  var inputPeriod = _react2.screen.getByTestId('input-period');

  return {
    inputHour: inputHour,
    inputMinute: inputMinute,
    inputPeriod: inputPeriod
  };
};

test('fires onChange ONLY when all fields are filled in', function () {
  var mockProps = {
    onChange: jest.fn()
  };

  var _selectSubInputs = selectSubInputs(mockProps),
      inputHour = _selectSubInputs.inputHour,
      inputMinute = _selectSubInputs.inputMinute,
      inputPeriod = _selectSubInputs.inputPeriod;

  _react2.fireEvent.keyDown(inputHour, {
    key: '1',
    keyCode: 49
  });

  expect(mockProps.onChange).not.toHaveBeenCalled();

  _react2.fireEvent.keyDown(inputMinute, {
    key: '1',
    keyCode: 49
  });

  expect(mockProps.onChange).not.toHaveBeenCalled();

  _react2.fireEvent.keyDown(inputPeriod, {
    key: 'p'
  });

  expect(mockProps.onChange).toHaveBeenCalledWith('13:01');
});
test('fires onChange when any sub-input is cleared', function () {
  var mockProps = {
    onChange: jest.fn(),
    value: '14:52'
  };

  var _selectSubInputs2 = selectSubInputs(mockProps),
      inputHour = _selectSubInputs2.inputHour;

  expect(mockProps.onChange).not.toHaveBeenCalled();
  expect(inputHour.value).toEqual('02');

  _react2.fireEvent.keyDown(inputHour, {
    key: 'Backspace'
  });

  expect(inputHour.value).toEqual('');
  expect(mockProps.onChange).toHaveBeenCalledWith(undefined);
});
test('accepts a 24-hour time value', function () {
  var mockProps = {
    value: '14:52'
  };

  var _selectSubInputs3 = selectSubInputs(mockProps),
      inputHour = _selectSubInputs3.inputHour,
      inputMinute = _selectSubInputs3.inputMinute,
      inputPeriod = _selectSubInputs3.inputPeriod;

  expect(inputHour.value).toEqual('02');
  expect(inputMinute.value).toEqual('52');
  expect(inputPeriod.value).toEqual('PM');
});
test('accepts a 24-hour time defautValue', function () {
  var mockProps = {
    defaultValue: '14:52'
  };

  var _selectSubInputs4 = selectSubInputs(mockProps),
      inputHour = _selectSubInputs4.inputHour,
      inputMinute = _selectSubInputs4.inputMinute,
      inputPeriod = _selectSubInputs4.inputPeriod;

  expect(inputHour.value).toEqual('02');
  expect(inputMinute.value).toEqual('52');
  expect(inputPeriod.value).toEqual('PM');
});
test('ignores invalid time value string', function () {
  var mockProps = {
    value: 'cheesecake'
  };

  var _selectSubInputs5 = selectSubInputs(mockProps),
      inputHour = _selectSubInputs5.inputHour,
      inputMinute = _selectSubInputs5.inputMinute,
      inputPeriod = _selectSubInputs5.inputPeriod;

  expect(inputHour.value).toEqual('');
  expect(inputMinute.value).toEqual('');
  expect(inputPeriod.value).toEqual('');
  expect(console.error).toHaveBeenCalledWith('Invalid time ("cheesecake") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").');
});
test('clears child input if an invalid number is entered', function () {
  var mockProps = {
    onChange: jest.fn()
  };

  var _selectSubInputs6 = selectSubInputs(mockProps),
      inputMinute = _selectSubInputs6.inputMinute;

  _react2.fireEvent.keyDown(inputMinute, {
    key: '7',
    keyCode: 55
  });

  expect(inputMinute.value).toEqual('07');

  _react2.fireEvent.keyDown(inputMinute, {
    key: '7',
    keyCode: 55
  });

  expect(inputMinute.value).toEqual('');
});
test('renders 24 hour formatted time', function () {
  var mockProps = {
    format: '24h',
    value: '23:32'
  };
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputTime.InputTime, mockProps));

  var inputHour = _react2.screen.getByTestId('input-hour');

  var inputMinute = _react2.screen.getByTestId('input-minute');

  var inputPeriod = _react2.screen.queryByTestId('input-period');

  expect(inputHour.value).toEqual('23');
  expect(inputMinute.value).toEqual('32');
  expect(inputPeriod).not.toBeInTheDocument();
});
test('up/down arrow keys cycle through possible values', function () {
  var mockProps = {};

  var _selectSubInputs7 = selectSubInputs(mockProps),
      inputHour = _selectSubInputs7.inputHour,
      inputMinute = _selectSubInputs7.inputMinute,
      inputPeriod = _selectSubInputs7.inputPeriod;

  _react2.fireEvent.keyDown(inputHour, {
    key: 'ArrowUp',
    keyCode: 38
  });

  expect(inputHour.value).toEqual('01');

  _react2.fireEvent.keyDown(inputHour, {
    key: 'ArrowDown',
    keyCode: 40
  });

  expect(inputHour.value).toEqual('12');

  _react2.fireEvent.keyDown(inputMinute, {
    key: 'ArrowUp',
    keyCode: 38
  });

  expect(inputMinute.value).toEqual('01');

  _react2.fireEvent.keyDown(inputMinute, {
    key: 'ArrowDown',
    keyCode: 40
  });

  _react2.fireEvent.keyDown(inputMinute, {
    key: 'ArrowDown',
    keyCode: 40
  });

  expect(inputMinute.value).toEqual('59');

  _react2.fireEvent.keyDown(inputPeriod, {
    key: 'ArrowUp',
    keyCode: 38
  });

  expect(inputPeriod.value).toEqual('PM');

  _react2.fireEvent.keyDown(inputPeriod, {
    key: 'ArrowDown',
    keyCode: 40
  });

  expect(inputPeriod.value).toEqual('AM');
});
test('fires onValidationFail callback when an invalid time value prop is passed in', function () {
  var mockProps = {
    onValidationFail: jest.fn(),
    value: 'Stardate 2004.14'
  };
  expect(mockProps.onValidationFail).not.toHaveBeenCalled();

  var _selectSubInputs8 = selectSubInputs(mockProps),
      inputHour = _selectSubInputs8.inputHour,
      inputMinute = _selectSubInputs8.inputMinute,
      inputPeriod = _selectSubInputs8.inputPeriod;

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
  expect(inputHour.value).toEqual('');
  expect(inputMinute.value).toEqual('');
  expect(inputPeriod.value).toEqual('');
});
//# sourceMappingURL=InputTime.spec.js.map