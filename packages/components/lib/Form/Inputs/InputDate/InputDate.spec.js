import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import ital from 'date-fns/locale/it';
import { InputDate } from './InputDate';
afterEach(() => {
  jest.clearAllMocks();
});

const ControlledInputDate = () => {
  const [value, setValue] = useState(new Date('June 3, 2019'));
  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: () => setValue(new Date('June 15, 2019'))
  }, "June 15, 2019"), React.createElement("button", {
    onClick: () => setValue(new Date('January 1, 2012'))
  }, "January 1, 2012"), React.createElement(InputDate, {
    value: value,
    onChange: date => setValue(date)
  }));
};

const mockProps = {
  defaultValue: new Date('June 3, 2019 11:00:00 PM'),
  onChange: jest.fn(),
  onValidationFail: jest.fn()
};
test('calls onChange prop when a day is clicked', () => {
  renderWithTheme(React.createElement(InputDate, mockProps));
  fireEvent.click(screen.getByText('Open calendar'));
  fireEvent.click(screen.getByTitle('Sat Jun 15, 2019'));
  expect(mockProps.onChange).toHaveBeenCalledWith(new Date('June 15, 2019 11:00:00 PM'));
});
test('fills TextInput with value', () => {
  renderWithTheme(React.createElement(InputDate, mockProps));
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();
});
test('updates text input value when day is clicked', () => {
  renderWithTheme(React.createElement(InputDate, mockProps));
  expect(mockProps.onChange).not.toHaveBeenCalled();
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Open calendar'));
  fireEvent.click(screen.getByTitle('Sat Jun 15, 2019'));
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument();
});
test('value can be controlled externally', () => {
  renderWithTheme(React.createElement(ControlledInputDate, null));
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();
  fireEvent.click(screen.getByText('June 15, 2019'));
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument();
  fireEvent.click(screen.getByText('January 1, 2012'));
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument();
});
test('user can change the selected date via text input field', () => {
  renderWithTheme(React.createElement(ControlledInputDate, null));
  const input = screen.getByDisplayValue('06/03/2019');
  fireEvent.change(input, {
    target: {
      value: '01/01/2012'
    }
  });
  fireEvent.blur(input);
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument();
});
test('user can clear the selected date by deleting text input content', () => {
  renderWithTheme(React.createElement(InputDate, mockProps));
  const input = screen.getByDisplayValue('06/03/2019');
  fireEvent.change(input, {
    target: {
      value: ''
    }
  });
  fireEvent.blur(input);
  expect(mockProps.onChange).toHaveBeenCalledWith(undefined);
});
test('validates text input to match localized date format', () => {
  renderWithTheme(React.createElement(InputDate, mockProps));
  const input = screen.getByDisplayValue('06/03/2019');
  fireEvent.change(input, {
    target: {
      value: '6/3/2019'
    }
  });
  fireEvent.blur(input);
  expect(mockProps.onValidationFail).not.toHaveBeenCalled();
  fireEvent.change(input, {
    target: {
      value: 'not-a-valid-date'
    }
  });
  fireEvent.blur(input);
  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
});
test('localizes calendar', () => {
  renderWithTheme(React.createElement(InputDate, _extends({
    locale: ital,
    dateStringFormat: "MMMM-dd"
  }, mockProps)));
  expect(screen.getByDisplayValue('giugno-03')).toBeInTheDocument();
});
test('Initial dateStringValue', () => {
  renderWithTheme(React.createElement(InputDate, _extends({
    dateStringFormat: "yyyy-MM-dd"
  }, mockProps)));
  expect(screen.getByDisplayValue('2019-06-03')).toBeInTheDocument();
});
test('Changing value with dateStringFormat', () => {
  renderWithTheme(React.createElement(InputDate, _extends({
    dateStringFormat: "yyyy-MM-dd"
  }, mockProps)));
  fireEvent.click(screen.getByText('Open calendar'));
  fireEvent.click(screen.getByTitle('Sat Jun 15, 2019'));
  expect(screen.getByDisplayValue('2019-06-15')).toBeInTheDocument();
});
//# sourceMappingURL=InputDate.spec.js.map