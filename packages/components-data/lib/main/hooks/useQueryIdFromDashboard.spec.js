"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _testUtils = require("../testUtils");
var _useQueryIdFromDashboard = require("./useQueryIdFromDashboard");

var dataContainerListener = jest.fn();
var TestComponent = function TestComponent(_ref) {
  var _ref$dashboardId = _ref.dashboardId,
    dashboardId = _ref$dashboardId === void 0 ? 1 : _ref$dashboardId;
  var response = (0, _useQueryIdFromDashboard.useQueryIdFromDashboard)(dashboardId);
  dataContainerListener(response);
  return null;
};
afterEach(function () {
  jest.clearAllMocks();
});
describe('useQueryIdFromDashboard', function () {
  it('fetches query ID on mount', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, null, _react["default"].createElement(TestComponent, null)));
          _context.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
              queryId: 126
            }));
          });
        case 3:
          expect(_testUtils.sdkMethodDashboardListener).toHaveBeenCalledTimes(1);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('does not dispatch request if data already exists for given id', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, {
            initialState: {
              byId: {},
              dashboardIdMap: {
                456: 789
              },
              modelExplore: {},
              slugIdMap: {}
            }
          }, _react["default"].createElement(TestComponent, {
            dashboardId: 456
          })));
          _context2.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenCalledWith({
              isOK: true,
              isPending: false,
              queryId: 789
            });
          });
        case 3:
          expect(_testUtils.sdkMethodDashboardListener).not.toHaveBeenCalled();
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=useQueryIdFromDashboard.spec.js.map