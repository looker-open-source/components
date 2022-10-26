"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _YearMonth = require("./YearMonth");

describe('YearMonth', function () {
  var onChangeMock = jest.fn();
  var mockProps = {
    item: {
      id: '1',
      month: '1',
      year: '2017'
    },
    onChange: onChangeMock
  };
  beforeEach(function () {
    onChangeMock.mockReset();
  });
  it('should render the given year and month', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_YearMonth.YearMonth, mockProps));
    expect(_react.screen.getByText('January')).toBeVisible();
    expect(_react.screen.getByDisplayValue('2017')).toBeVisible();
  });
  it('should invoke the onChange handler when the year changes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_YearMonth.YearMonth, mockProps));

    var input = _react.screen.getByDisplayValue('2017');

    _react.fireEvent.change(input, {
      target: {
        value: '2018'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith('1', {
      year: '2018'
    });
  });
  it('should invoke the onChange handler when the month changes', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var input, march;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_YearMonth.YearMonth, mockProps));
            input = _react.screen.getByDisplayValue('January');

            _react.fireEvent.focus(input);

            _react.fireEvent.mouseDown(input);

            march = _react.screen.getByText('March');

            _react.fireEvent.click(march);

            expect(onChangeMock).toHaveBeenCalledWith('1', {
              month: '03'
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=YearMonth.spec.js.map