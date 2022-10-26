"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("@testing-library/react");

var _utils = require("./utils");

test('activateFocusTrap calls document.activeElement.matches(":focus-visible") to focus the first element', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
  var mockMatches;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mockMatches = jest.fn();
          Object.defineProperty(document, 'activeElement', {
            value: document.createElement('button')
          });

          if (document.activeElement) {
            document.activeElement.matches = mockMatches;
          }

          (0, _utils.activateFocusTrap)({
            element: document.body
          });
          _context.next = 6;
          return (0, _react.waitFor)(function () {
            expect(mockMatches).toHaveBeenCalledWith(':focus-visible');
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=utils.spec.js.map