"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactHooks = require("@testing-library/react-hooks");
var _componentsProviders = require("@looker/components-providers");
var _useLabelWidth = require("./useLabelWidth");

var wrapper = function wrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_componentsProviders.ComponentsProvider, null, children);
};
describe('useLabelWidth', function () {
  test('calculates the width of the longest label in a set', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var data, legend, _renderHook, result, unmount;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = {
            albany: 20,
            albuquerque: 20
          };
          legend = {
            type: 'legend',
            value: 'label_percent'
          };
          _renderHook = (0, _reactHooks.renderHook)(function () {
            return (0, _useLabelWidth.useLabelWidth)(40, data, legend);
          }, {
            wrapper: wrapper
          }), result = _renderHook.result, unmount = _renderHook.unmount;
          expect(result.current).toEqual(_useLabelWidth.MIN_LABEL_SPACE);

          unmount();
          _context.next = 7;
          return (0, _reactHooks.cleanup)();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
//# sourceMappingURL=useLabelWidth.spec.js.map