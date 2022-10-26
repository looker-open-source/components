import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { InputTime } from './InputTime';
const globalConsole = global.console;
beforeEach(() => {
  global.console = {
    error: jest.fn(),
    warn: jest.fn()
  };
});
afterEach(() => {
  jest.resetAllMocks();
  global.console = globalConsole;
});

const selectSubInputs = mockProps => {
  renderWithTheme(React.createElement(InputTime, mockProps));
  const inputHour = screen.getByTestId('input-hour');
  const inputMinute = screen.getByTestId('input-minute');
  const inputPeriod = screen.getByTestId('input-period');
  return {
    inputHour,
    inputMinute,
    inputPeriod
  };
};

test('fires onChange ONLY when all fields are filled in', () => {
  const mockProps = {
    onChange: jest.fn()
  };
  const {
    inputHour,
    inputMinute,
    inputPeriod
  } = selectSubInputs(mockProps);
  fireEvent.keyDown(inputHour, {
    key: '1',
    keyCode: 49
  });
  expect(mockProps.onChange).not.toHaveBeenCalled();
  fireEvent.keyDown(inputMinute, {
    key: '1',
    keyCode: 49
  });
  expect(mockProps.onChange).not.toHaveBeenCalled();
  fireEvent.keyDown(inputPeriod, {
    key: 'p'
  });
  expect(mockProps.onChange).toHaveBeenCalledWith('13:01');
});
test('fires onChange when any sub-input is cleared', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: '14:52'
  };
  const {
    inputHour
  } = selectSubInputs(mockProps);
  expect(mockProps.onChange).not.toHaveBeenCalled();
  expect(inputHour.value).toEqual('02');
  fireEvent.keyDown(inputHour, {
    key: 'Backspace'
  });
  expect(inputHour.value).toEqual('');
  expect(mockProps.onChange).toHaveBeenCalledWith(undefined);
});
test('accepts a 24-hour time value', () => {
  const mockProps = {
    value: '14:52'
  };
  const {
    inputHour,
    inputMinute,
    inputPeriod
  } = selectSubInputs(mockProps);
  expect(inputHour.value).toEqual('02');
  expect(inputMinute.value).toEqual('52');
  expect(inputPeriod.value).toEqual('PM');
});
test('accepts a 24-hour time defautValue', () => {
  const mockProps = {
    defaultValue: '14:52'
  };
  const {
    inputHour,
    inputMinute,
    inputPeriod
  } = selectSubInputs(mockProps);
  expect(inputHour.value).toEqual('02');
  expect(inputMinute.value).toEqual('52');
  expect(inputPeriod.value).toEqual('PM');
});
test('ignores invalid time value string', () => {
  const mockProps = {
    value: 'cheesecake'
  };
  const {
    inputHour,
    inputMinute,
    inputPeriod
  } = selectSubInputs(mockProps);
  expect(inputHour.value).toEqual('');
  expect(inputMinute.value).toEqual('');
  expect(inputPeriod.value).toEqual('');
  expect(console.error).toHaveBeenCalledWith('Invalid time ("cheesecake") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").');
});
test('clears child input if an invalid number is entered', () => {
  const mockProps = {
    onChange: jest.fn()
  };
  const {
    inputMinute
  } = selectSubInputs(mockProps);
  fireEvent.keyDown(inputMinute, {
    key: '7',
    keyCode: 55
  });
  expect(inputMinute.value).toEqual('07');
  fireEvent.keyDown(inputMinute, {
    key: '7',
    keyCode: 55
  });
  expect(inputMinute.value).toEqual('');
});
test('renders 24 hour formatted time', () => {
  const mockProps = {
    format: '24h',
    value: '23:32'
  };
  renderWithTheme(React.createElement(InputTime, mockProps));
  const inputHour = screen.getByTestId('input-hour');
  const inputMinute = screen.getByTestId('input-minute');
  const inputPeriod = screen.queryByTestId('input-period');
  expect(inputHour.value).toEqual('23');
  expect(inputMinute.value).toEqual('32');
  expect(inputPeriod).not.toBeInTheDocument();
});
test('up/down arrow keys cycle through possible values', () => {
  const mockProps = {};
  const {
    inputHour,
    inputMinute,
    inputPeriod
  } = selectSubInputs(mockProps);
  fireEvent.keyDown(inputHour, {
    key: 'ArrowUp',
    keyCode: 38
  });
  expect(inputHour.value).toEqual('01');
  fireEvent.keyDown(inputHour, {
    key: 'ArrowDown',
    keyCode: 40
  });
  expect(inputHour.value).toEqual('12');
  fireEvent.keyDown(inputMinute, {
    key: 'ArrowUp',
    keyCode: 38
  });
  expect(inputMinute.value).toEqual('01');
  fireEvent.keyDown(inputMinute, {
    key: 'ArrowDown',
    keyCode: 40
  });
  fireEvent.keyDown(inputMinute, {
    key: 'ArrowDown',
    keyCode: 40
  });
  expect(inputMinute.value).toEqual('59');
  fireEvent.keyDown(inputPeriod, {
    key: 'ArrowUp',
    keyCode: 38
  });
  expect(inputPeriod.value).toEqual('PM');
  fireEvent.keyDown(inputPeriod, {
    key: 'ArrowDown',
    keyCode: 40
  });
  expect(inputPeriod.value).toEqual('AM');
});
test('fires onValidationFail callback when an invalid time value prop is passed in', () => {
  const mockProps = {
    onValidationFail: jest.fn(),
    value: 'Stardate 2004.14'
  };
  expect(mockProps.onValidationFail).not.toHaveBeenCalled();
  const {
    inputHour,
    inputMinute,
    inputPeriod
  } = selectSubInputs(mockProps);
  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
  expect(inputHour.value).toEqual('');
  expect(inputMinute.value).toEqual('');
  expect(inputPeriod.value).toEqual('');
});
//# sourceMappingURL=InputTime.spec.js.map