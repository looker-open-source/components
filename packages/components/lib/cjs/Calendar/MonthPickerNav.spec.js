"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _MonthPickerNav = require("./MonthPickerNav");

describe('MonthPickerNav', function () {
  var date = new Date('January 12, 2022');
  test('updates the month via click', function () {
    var onMonthChangeMock = jest.fn();
    var onCloseMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthPickerNav.MonthPickerNav, {
      date: date,
      locale: _enUS["default"],
      onMonthChange: onMonthChangeMock,
      onClose: onCloseMock
    }));

    _userEvent["default"].click(_react2.screen.getAllByText('Feb')[1]);

    expect(onMonthChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          2022-02-12T08:00:00.000Z,\n        ],\n      ]\n    ");
  });
  test('updates the year via input', function () {
    var onMonthChangeMock = jest.fn();
    var onCloseMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthPickerNav.MonthPickerNav, {
      date: date,
      locale: _enUS["default"],
      onMonthChange: onMonthChangeMock,
      onClose: onCloseMock
    }));

    var input = _react2.screen.getByRole('textbox');

    expect(input).toHaveValue('2022');

    _react2.fireEvent.change(input, {
      target: {
        value: '2021'
      }
    });

    _react2.fireEvent.blur(input);

    _userEvent["default"].click(_react2.screen.getAllByText('Feb')[1]);

    expect(onMonthChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          2021-02-12T08:00:00.000Z,\n        ],\n      ]\n    ");
  });
  test('updates the year via prev/next', function () {
    var onMonthChangeMock = jest.fn();
    var onCloseMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthPickerNav.MonthPickerNav, {
      date: date,
      locale: _enUS["default"],
      onMonthChange: onMonthChangeMock,
      onClose: onCloseMock
    }));

    var input = _react2.screen.getByRole('textbox');

    expect(input).toHaveValue('2022');

    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: 'previous year'
    }));

    expect(input).toHaveValue('2021');

    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: 'next year'
    }));

    expect(input).toHaveValue('2022');
  });
});
//# sourceMappingURL=MonthPickerNav.spec.js.map