"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Dialog = require("../Dialog");

var _index = require("./stories/index.stories");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

var dialogContext = {
  closeModal: jest.fn(),
  id: '123'
};
afterEach(function () {
  dialogContext.closeModal.mockClear();
});
describe('Calendar', function () {
  test('ripple', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));

    var calendar = _react2.screen.getAllByText('1')[0].closest('button');

    expect(calendar).not.toHaveClass('bg-on fg-in');
    expect(calendar).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    calendar && _react2.fireEvent.focus(calendar);
    expect(calendar).toHaveClass('bg-on');
    calendar && _react2.fireEvent.mouseDown(calendar);
    expect(calendar).toHaveClass('bg-on fg-in');
    calendar && _react2.fireEvent.mouseUp(calendar);
    runTimers();
    expect(calendar).toHaveClass('bg-on fg-out');
    runTimers();
    expect(calendar).toHaveClass('bg-on');
    calendar && _react2.fireEvent.blur(calendar);
    expect(calendar).not.toHaveClass('bg-on fg-in');
  });
  test('opens month picker', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));

    var button = _react2.screen.getAllByText('Jul 2021')[0];

    _react2.fireEvent.click(button);

    expect(_react2.screen.getByText('2022')).toBeVisible();
  });
  test('closes popover after single date selection', function () {
    var onSelectDateMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.DialogContext.Provider, {
      value: dialogContext
    }, _react["default"].createElement(_index.Basic, {
      onSelectDate: onSelectDateMock
    })));

    var seven = _react2.screen.getByRole('button', {
      name: 'Wed Jul 07, 2021'
    });

    _react2.fireEvent.click(seven);

    expect(onSelectDateMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          2021-07-07T07:00:00.000Z,\n        ],\n      ]\n    ");
    expect(dialogContext.closeModal).toHaveBeenCalledTimes(1);
  });
  describe('Range selection', function () {
    test('shows draft selection on hover', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Range, null));

      var seven = _react2.screen.getByRole('button', {
        name: 'Mon Feb 07, 2022'
      });

      var five = _react2.screen.getByRole('button', {
        name: 'Sat Feb 05, 2022'
      });

      var fifteen = _react2.screen.getByRole('button', {
        name: 'Tue Feb 15, 2022'
      });

      _react2.fireEvent.mouseEnter(seven);

      expect(seven).toHaveClass('bg-on');

      _react2.fireEvent.click(seven);

      _react2.fireEvent.mouseEnter(five);

      expect(five).toHaveClass('bg-on');

      _react2.fireEvent.mouseEnter(fifteen);

      expect(fifteen).toHaveClass('bg-on');
    });
    test('select start and end', function () {
      var onSelectRangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.DialogContext.Provider, {
        value: dialogContext
      }, _react["default"].createElement(_index.Range, {
        viewMonth: new Date('January 12, 2022'),
        onSelectRange: onSelectRangeMock
      })));

      var start = _react2.screen.getAllByText('8')[1];

      var end = _react2.screen.getAllByText('23')[1];

      _react2.fireEvent.click(start);

      _react2.fireEvent.click(end);

      expect(start).toHaveAttribute('aria-selected', 'true');
      expect(end).toHaveAttribute('aria-selected', 'true');
      expect(onSelectRangeMock.mock.calls).toMatchInlineSnapshot("\n        Array [\n          Array [\n            Object {\n              \"from\": 2022-01-08T08:00:00.000Z,\n            },\n          ],\n          Array [\n            Object {\n              \"from\": 2022-01-08T08:00:00.000Z,\n              \"to\": 2022-01-23T08:00:00.000Z,\n            },\n          ],\n        ]\n      ");
      expect(dialogContext.closeModal).not.toHaveBeenCalled();
    });
    test('range spanning multiple months', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Range, {
        viewMonth: new Date('February 12, 2022')
      }));

      var start = _react2.screen.getAllByText('8')[0];

      var end = _react2.screen.getAllByText('23')[1];

      _react2.fireEvent.click(start);

      _react2.fireEvent.click(end);

      expect(_react2.screen.getAllByText('Feb 2022')[1]).toHaveStyle('background: rgb(232, 229, 255)');
    });
  });
});
//# sourceMappingURL=Calendar.spec.js.map