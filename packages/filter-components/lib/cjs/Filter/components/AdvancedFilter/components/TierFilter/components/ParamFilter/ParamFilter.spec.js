"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ParamFilter = require("./ParamFilter");

describe('ParamFilter tests', function () {
  var enumerations = [{
    label: 'First',
    value: 'first'
  }, {
    label: 'Second',
    value: 'second'
  }, {
    label: 'Third',
    value: 'third'
  }];
  it('should select new option when clicked', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var select;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ParamFilter.ParamFilter, {
              item: {
                id: 1,
                value: ['first']
              },
              enumerations: enumerations
            }));
            _context.next = 3;
            return _react.screen.findByText('First');

          case 3:
            select = _context.sent;
            expect(select).toBeVisible();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=ParamFilter.spec.js.map