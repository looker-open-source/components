"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _testUtils = require("../testUtils");
var _useDataState = require("./useDataState");
var _useCreateQuery = require("./useCreateQuery");

var dataContainerListener = jest.fn();
var dataStateListener = jest.fn();
var TestComponent = function TestComponent(_ref) {
  var newQuery = _ref.newQuery;
  var response = (0, _useCreateQuery.useCreateQuery)(newQuery);
  var _DataState$useContain = _useDataState.DataState.useContainer(),
    getById = _DataState$useContain.getById;
  var mockMetadata = getById((response === null || response === void 0 ? void 0 : response.queryId) || 0, 'metadata');
  dataContainerListener(response);
  dataStateListener(mockMetadata);
  return null;
};
afterEach(function () {
  jest.resetAllMocks();
});
describe('useCreateQuery', function () {
  it('does not dispatch request if no arguments are passed', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, {
            initialState: {
              byId: {},
              dashboardIdMap: {},
              modelExplore: {},
              slugIdMap: {}
            }
          }, _react["default"].createElement(TestComponent, null)));
          _context.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenLastCalledWith({
              isOK: true,
              isPending: false,
              queryId: undefined
            });
          });
        case 3:
          expect(_testUtils.sdkMethodCreateQueryListener).not.toHaveBeenCalled();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('creates new query object when `newQuery` argument is passed in', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, {
            initialState: {
              byId: {},
              dashboardIdMap: {},
              modelExplore: {},
              slugIdMap: {}
            }
          }, _react["default"].createElement(TestComponent, {
            newQuery: {
              model: 'thelook'
            }
          })));
          _context2.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenLastCalledWith({
              isOK: true,
              isPending: false,
              queryId: 126
            });
          });
        case 3:
          expect(_testUtils.sdkMethodCreateQueryListener).toHaveBeenCalledTimes(1);

          expect(dataStateListener).toHaveBeenLastCalledWith(expect.objectContaining({
            model: 'thelook',
            view: 'orders',
            vis_config: expect.anything()
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=useCreateQuery.spec.js.map