"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = _interopRequireDefault(require("react"));

var _RelativeTimeframes = require("./RelativeTimeframes");

var originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
beforeEach(function () {
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    value: 800
  });
});
afterEach(function () {
  if (originalClientWidth) {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  }
});
describe('RelativeTimeframes', function () {
  it('should render RelativeTimeframes with custom timeframe', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var trigger;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_RelativeTimeframes.RelativeTimeframes, {
              value: {
                from: new Date(2016, 2, 1),
                to: new Date(2016, 3, 1)
              },
              onChange: jest.fn()
            }));
            trigger = _react.screen.getByRole('button');

            _react.fireEvent.click(trigger);

            expect(_react.screen.getByDisplayValue('2016/04/01')).toBeInTheDocument();

            _react.fireEvent.click(document);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should render RelativeTimeframes in a dialog on mobile', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
              configurable: true,
              value: 400
            });
            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_RelativeTimeframes.RelativeTimeframes, {
              value: {
                from: new Date(2016, 2, 1),
                to: new Date(2016, 3, 1)
              },
              onChange: jest.fn()
            }));

            _react.fireEvent.click(_react.screen.getByRole('button'));

            expect(_react.screen.getByText('Choose a Timeframe')).toBeInTheDocument();

            _react.fireEvent.click(_react.screen.getByText('Close'));

            _context2.next = 7;
            return (0, _react.waitForElementToBeRemoved)(function () {
              return _react.screen.queryByText('Choose a Timeframe');
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=RelativeTimeframes.spec.js.map