"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _testingReact = require("@storybook/testing-react");

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _it = _interopRequireDefault(require("date-fns/locale/it"));

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

var _InputDateRange = require("./InputDateRange");

var stories = _interopRequireWildcard(require("./stories/index.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    ExternalUpdates = _composeStories.ExternalUpdates;

var realDateNow = Date.now.bind(global.Date);
beforeEach(function () {
  global.Date.now = jest.fn(function () {
    return 1580567580000;
  });
});
afterEach(function () {
  global.Date.now = realDateNow;
  jest.clearAllMocks();
});
var mockProps = {
  onChange: jest.fn(),
  onValidationFail: jest.fn(),
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  }
};
test('value can be updated externally', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ExternalUpdates, null));
  expect(_react2.screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();

  _react2.fireEvent.click(_react2.screen.getByText('June 5 - 15, 2019'));

  expect(_react2.screen.getByDisplayValue('06/15/2019')).toBeInTheDocument();

  _react2.fireEvent.click(_react2.screen.getByText('January 1 - February 15, 2012'));

  expect(_react2.screen.getByDisplayValue('01/01/2012')).toBeInTheDocument();
});
test('user can change the selected date via text input field', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ExternalUpdates, null));

  _react2.fireEvent.click(_react2.screen.getByText('Open calendar'));

  expect(_react2.screen.getAllByText('Jun 2019')).toHaveLength(2);

  var fromTextInput = _react2.screen.getByDisplayValue('06/03/2019');

  _react2.fireEvent.change(fromTextInput, {
    target: {
      value: '01/01/2012'
    }
  });

  _react2.fireEvent.blur(fromTextInput);

  expect(_react2.screen.getAllByText('Jan 2012')).toHaveLength(2);

  _react2.fireEvent.click(document);
});
test('gracefully accepts partial date range objects', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ExternalUpdates, null));

          _react2.fireEvent.click(_react2.screen.getByText('From: February 9, 2021'));

          _react2.fireEvent.click(_react2.screen.getByText('Open calendar'));

          _context.next = 5;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getAllByText('Feb 2021')).toHaveLength(2);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test('calls onChange prop when a day is clicked', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
  var openCalendar;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));
          openCalendar = _react2.screen.getByText('Open calendar');

          _react2.fireEvent.click(openCalendar);

          _context2.next = 5;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getAllByText('4')[1]).toBeInTheDocument();
          });

        case 5:
          expect(mockProps.onChange).not.toHaveBeenCalled();

          _react2.fireEvent.click(_react2.screen.getAllByText('4')[1]);

          _react2.fireEvent.click(_react2.screen.getAllByText('21')[1]);

          expect(mockProps.onChange).toHaveBeenCalled();

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
test('selects a single day when clicking on one of the date endpoints', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
  var openCalendar, date;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));
          expect(mockProps.onChange).not.toHaveBeenCalled();
          openCalendar = _react2.screen.getByText('Open calendar');

          _react2.fireEvent.click(openCalendar);

          _context3.next = 6;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getAllByText('3')[1]).toBeInTheDocument();
          });

        case 6:
          date = _react2.screen.getAllByText('3')[1];

          _react2.fireEvent.click(date);

          expect(mockProps.onChange).toHaveBeenCalled();

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
test('user can clear the selected date by deleting text input content', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));

  var fromTextInput = _react2.screen.getByTestId('date-from-text-input');

  _react2.fireEvent.change(fromTextInput, {
    target: {
      value: ''
    }
  });

  _react2.fireEvent.blur(fromTextInput);

  var toTextInput = _react2.screen.getByTestId('date-to-text-input');

  _react2.fireEvent.change(toTextInput, {
    target: {
      value: ''
    }
  });

  _react2.fireEvent.blur(toTextInput);

  expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot("\n    Array [\n      Array [\n        Object {\n          \"to\": 2019-06-09T07:00:00.000Z,\n        },\n      ],\n      Array [\n        Object {\n          \"from\": 2019-06-03T07:00:00.000Z,\n        },\n      ],\n    ]\n  ");
});
test('starts new range with from when exsting value has both from and', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
  var fromInput, openCalendar, newDate;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));
          fromInput = _react2.screen.getByTestId('date-from-text-input');
          expect(fromInput).toHaveValue('06/03/2019');
          openCalendar = _react2.screen.getByText('Open calendar');

          _react2.fireEvent.click(openCalendar);

          _context4.next = 7;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getAllByText('4')[1]).toBeInTheDocument();
          });

        case 7:
          newDate = _react2.screen.getAllByText('1')[1];

          _react2.fireEvent.click(newDate);

          expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot("\n    Array [\n      Array [\n        Object {\n          \"from\": 2019-06-01T07:00:00.000Z,\n          \"to\": 2019-06-09T07:00:00.000Z,\n        },\n      ],\n    ]\n  ");

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));
test('calls onChange prop when a TextInput is modified', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));

  var toInput = _react2.screen.getByTestId('date-to-text-input');

  var fromInput = _react2.screen.getByTestId('date-from-text-input');

  expect(mockProps.onChange).not.toHaveBeenCalled();

  _react2.fireEvent.change(fromInput, {
    target: {
      value: '6/15/2019'
    }
  });

  _react2.fireEvent.blur(fromInput);

  _react2.fireEvent.change(toInput, {
    target: {
      value: '6/25/2019'
    }
  });

  _react2.fireEvent.blur(toInput);

  expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot("\n    Array [\n      Array [\n        Object {\n          \"from\": 2019-06-15T07:00:00.000Z,\n          \"to\": 2019-06-09T07:00:00.000Z,\n        },\n      ],\n      Array [\n        Object {\n          \"from\": 2019-06-03T07:00:00.000Z,\n          \"to\": 2019-06-25T07:00:00.000Z,\n        },\n      ],\n    ]\n  ");
  expect(mockProps.onValidationFail.mock.calls).toMatchInlineSnapshot("\n    Array [\n      Array [\n        \"Invalid range\",\n      ],\n    ]\n  ");
});
test('selects the to when clicking a date after the from', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee5() {
  var fromInput, toInput, openCalendar;
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, (0, _extends2["default"])({}, mockProps, {
            value: {
              from: new Date('June 3, 2019')
            }
          })));
          fromInput = _react2.screen.getByTestId('date-from-text-input');
          toInput = _react2.screen.getByTestId('date-to-text-input');
          openCalendar = _react2.screen.getByText('Open calendar');
          expect(fromInput).toHaveValue('06/03/2019');
          expect(toInput).toHaveValue('');

          _react2.fireEvent.click(openCalendar);

          _context5.next = 9;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getAllByText('15')[1]).toBeInTheDocument();
          });

        case 9:
          _react2.fireEvent.click(_react2.screen.getAllByText('15')[1]);

          expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot("\n    Array [\n      Array [\n        Object {\n          \"from\": 2019-06-15T07:00:00.000Z,\n        },\n      ],\n    ]\n  ");

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
})));
test('value prop fills TextInputs with correct dates', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));

  var fromInput = _react2.screen.getByTestId('date-from-text-input');

  var toInput = _react2.screen.getByTestId('date-to-text-input');

  expect(fromInput).toHaveValue('06/03/2019');
  expect(toInput).toHaveValue('06/09/2019');
});
test('value highlights the correct dates in the Calendar', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee6() {
  var openCalendar, startDate, endDate, dayBefore, dayAfter;
  return regeneratorRuntime.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));
          openCalendar = _react2.screen.getByText('Open calendar');

          _react2.fireEvent.click(openCalendar);

          _context6.next = 5;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getAllByText('3')[1]).toBeInTheDocument();
          });

        case 5:
          startDate = _react2.screen.getAllByText('3')[1];
          endDate = _react2.screen.getAllByText('9')[1];
          dayBefore = _react2.screen.getAllByText('2')[1];
          dayAfter = _react2.screen.getAllByText('10')[1];
          expect(startDate).toHaveAttribute('aria-selected', 'true');
          expect(endDate).toHaveAttribute('aria-selected', 'true');
          expect(dayBefore).toHaveAttribute('aria-selected', 'false');
          expect(dayAfter).toHaveAttribute('aria-selected', 'false');

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
})));
test('validates FROM text input to match localized date format', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));

  var fromInput = _react2.screen.getByTestId('date-from-text-input');

  _react2.fireEvent.change(fromInput, {
    target: {
      value: '6/3/2019'
    }
  });

  _react2.fireEvent.blur(fromInput);

  expect(mockProps.onValidationFail).not.toHaveBeenCalled();

  _react2.fireEvent.change(fromInput, {
    target: {
      value: 'not-a-valid-date'
    }
  });

  _react2.fireEvent.blur(fromInput);

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
});
test('validates TO text input to match localized date format', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, mockProps));

  var toInput = _react2.screen.getByTestId('date-to-text-input');

  _react2.fireEvent.change(toInput, {
    target: {
      value: '6/15/2019'
    }
  });

  _react2.fireEvent.blur(toInput);

  expect(mockProps.onValidationFail).not.toHaveBeenCalled();

  _react2.fireEvent.change(toInput, {
    target: {
      value: 'nope-not-valid'
    }
  });

  _react2.fireEvent.blur(toInput);

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
});
test('localizes calendar', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, (0, _extends2["default"])({
    dateStringFormat: "MMMM-dd",
    locale: _it["default"]
  }, mockProps)));
  expect(_react2.screen.getByText('giugno-03')).toBeInTheDocument();
  expect(_react2.screen.getByText('giugno-09')).toBeInTheDocument();
});
describe('localizes text input', function () {
  test('Korean', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, {
      locale: _ko["default"],
      value: {
        from: new Date(Date.now()),
        to: new Date('May 2, 2020')
      },
      onChange: jest.fn()
    }));
    expect(_react2.screen.getByDisplayValue('2020.02.01')).toBeInTheDocument();
  });
  test('Italian', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, {
      locale: _it["default"],
      value: {
        from: new Date(Date.now()),
        to: new Date('May 2, 2020')
      },
      onChange: jest.fn()
    }));
    expect(_react2.screen.getByDisplayValue('01/02/2020')).toBeInTheDocument();
  });
  test('English', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDateRange.InputDateRange, {
      locale: _enUS["default"],
      value: {
        from: new Date(Date.now()),
        to: new Date('May 2, 2020')
      },
      onChange: jest.fn()
    }));
    expect(_react2.screen.getByDisplayValue('02/01/2020')).toBeInTheDocument();
  });
});
//# sourceMappingURL=InputDateRange.spec.js.map