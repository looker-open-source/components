"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _relative_timeframe_types = require("../../../../types/relative_timeframe_types");

var _RelativeTimeframeCustom = require("./RelativeTimeframeCustom");

var dateRegex = /\d{4}\/\d{2}\/\d{2}/;

var getMockComponent = function getMockComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    value: _relative_timeframe_types.AllPresetTimeframes.Today,
    onCustomChange: jest.fn()
  };
  return _react2["default"].createElement(_RelativeTimeframeCustom.RelativeTimeframeCustom, (0, _extends2["default"])({}, defaultProps, props));
};

var getSelectedDatesLabels = function getSelectedDatesLabels(container) {
  var selectedDates = container.querySelectorAll('[aria-selected="true"]');
  return Array.from(selectedDates).map(function (selectedDate) {
    return selectedDate.getAttribute('aria-label');
  });
};

describe('RelativeTimeframeCustom', function () {
  beforeEach(function () {
    var defaultDate = new Date('2019-01-01T00:00:00.000-08:00');
    jest.spyOn(Date, 'now').mockImplementation(function () {
      return defaultDate.getTime();
    });
  });
  it('should default as expected when value is an AllPresetTimeframes', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(getMockComponent()),
        container = _renderWithTheme.container;

    var fromDateInput = _react.screen.getByTestId('date-from-text-input');

    var toDateInput = _react.screen.getByTestId('date-to-text-input');

    expect(fromDateInput.value).toMatch(dateRegex);
    expect(toDateInput.value).toMatch(dateRegex);
    var selectedDatesLabels = getSelectedDatesLabels(container);
    expect(selectedDatesLabels).toEqual([]);
  });
  it('should accept date range', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var fromDate, toDate, fromDateInput, toDateInput;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fromDate = new Date('2019-01-10T00:00:00.000-08:00');
            toDate = new Date('2019-01-15T00:00:00.000-08:00');
            (0, _componentsTestUtils.renderWithTheme)(getMockComponent({
              value: {
                from: fromDate,
                to: toDate
              }
            }));
            fromDateInput = _react.screen.getByTestId('date-from-text-input');
            toDateInput = _react.screen.getByTestId('date-to-text-input');
            expect(fromDateInput.value).toBe('2019/01/10');
            expect(toDateInput.value).toBe('2019/01/15');

            _react.fireEvent.click(_react.screen.getByText('Open calendar'));

            _context.next = 10;
            return (0, _react.waitFor)(function () {
              expect(_react.screen.getByTitle('Thu Jan 10, 2019')).toHaveAttribute('aria-selected', 'true');
            });

          case 10:
            expect(_react.screen.getByTitle('Tue Jan 15, 2019')).toHaveAttribute('aria-selected', 'true');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should handle updates', function () {
    var onCustomChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(getMockComponent({
      onCustomChange: onCustomChange
    }));

    var fromDateInput = _react.screen.getByTestId('date-from-text-input');

    var toDateInput = _react.screen.getByTestId('date-to-text-input');

    _react.fireEvent.change(toDateInput, {
      target: {
        value: '2019/01/12'
      }
    });

    _react.fireEvent.change(fromDateInput, {
      target: {
        value: '2019/01/11'
      }
    });

    expect(fromDateInput.value).toMatchInlineSnapshot("\"2019/01/11\"");
    expect(toDateInput.value).toMatchInlineSnapshot("\"2019/01/12\"");
  });
});
//# sourceMappingURL=RelativeTimeframeCustom.spec.js.map