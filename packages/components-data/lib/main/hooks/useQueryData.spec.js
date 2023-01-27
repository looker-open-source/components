"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _testUtils = require("../testUtils");
var _useQueryData = require("./useQueryData");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var dataContainerListener = jest.fn();
var TestComponent = function TestComponent(_ref) {
  var _ref$queryId = _ref.queryId,
    queryId = _ref$queryId === void 0 ? 1 : _ref$queryId;
  var response = (0, _useQueryData.useQueryData)(queryId);
  dataContainerListener(response);
  return null;
};
afterEach(function () {
  jest.resetAllMocks();
});
describe('useQueryData', function () {
  it('fetches query data on mount', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, null, _react["default"].createElement(TestComponent, null)));
          _context.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
              data: expect.anything(),
              fields: expect.anything()
            }));
          });
        case 3:
          expect(_testUtils.sdkMethodRunQueryListener).toHaveBeenCalledTimes(1);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('does not dispatch request if data query id is out of range', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, null, _react["default"].createElement(TestComponent, {
            queryId: -1
          })));
          _context2.next = 3;
          return (0, _react2.waitFor)(function () {
            expect(dataContainerListener).toHaveBeenLastCalledWith(expect.objectContaining({
              data: [],
              isPending: false
            }));
          });
        case 3:
          expect(_testUtils.sdkMethodRunQueryListener).not.toHaveBeenCalled();
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('does not dispatch request if data already exists for given id', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    var queryResult;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          queryResult = {
            data: [{
              count: 100
            }],
            fields: {
              dimensions: [],
              measures: [],
              pivots: []
            }
          };
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, {
            initialState: {
              byId: {
                '123': queryResult
              },
              dashboardIdMap: {},
              modelExplore: {},
              slugIdMap: {
                '123': 123
              }
            }
          }, _react["default"].createElement(TestComponent, {
            queryId: 123
          })));
          _context3.next = 4;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenLastCalledWith(_objectSpread(_objectSpread({}, queryResult), {}, {
              isOK: true,
              isPending: false
            }));
          });
        case 4:
          expect(_testUtils.sdkMethodRunQueryListener).not.toHaveBeenCalled();
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
});
//# sourceMappingURL=useQueryData.spec.js.map