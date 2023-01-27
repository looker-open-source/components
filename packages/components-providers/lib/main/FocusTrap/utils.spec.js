"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _utils = require("./utils");

test('activateFocusTrap calls document.activeElement.matches(":focus-visible") to focus the first element', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
  var mockMatches, _render, container;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        mockMatches = jest.fn();
        Object.defineProperty(document, 'activeElement', {
          value: document.createElement('button')
        });

        if (document.activeElement) {
          document.activeElement.matches = mockMatches;
        }
        _render = (0, _react2.render)(_react["default"].createElement("button", null, "Button")), container = _render.container;
        (0, _utils.activateFocusTrap)({
          element: container
        });
        _context.next = 7;
        return (0, _react2.waitFor)(function () {
          expect(mockMatches).toHaveBeenCalledWith(':focus-visible');
        });
      case 7:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
//# sourceMappingURL=utils.spec.js.map