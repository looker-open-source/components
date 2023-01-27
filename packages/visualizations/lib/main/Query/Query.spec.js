"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _componentsData = require("@looker/components-data");
var _ = require("./");
var _react2 = require("@testing-library/react");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _componentsTestUtils = require("@looker/components-test-utils");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mockConsoleWarn = jest.fn();
var defaultConsoleWarn = globalThis.console.warn;
beforeEach(function () {
  globalThis.console.warn = mockConsoleWarn;
});
afterEach(function () {
  jest.clearAllMocks();
  globalThis.console.warn = defaultConsoleWarn;
});
describe('Query', function () {
  var mockDataListener = jest.fn();
  var isResponseOk = jest.fn();
  var TestChild = function TestChild(_ref) {
    var data = _ref.data,
      ok = _ref.ok,
      loading = _ref.loading;
    mockDataListener(data);
    isResponseOk(ok === true && loading === false);
    return null;
  };
  var QueryTemplate = function QueryTemplate(_ref2) {
    var config = _ref2.config,
      children = _ref2.children;
    var mockData = [{
      'orders.created_date': {
        value: '2019-11'
      },
      'orders.count': {
        value: 1
      }
    }, {
      'orders.created_date': {
        value: '2014-07'
      },
      'orders.count': {
        value: 300
      }
    }];
    return _react["default"].createElement(_componentsData.DataProvider, {
      sdk: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSDK), {}, {
        run_query: function run_query() {
          return Promise.resolve({
            ok: true,
            error: null,
            value: {
              data: mockData,
              fields: _visualizationsAdapters.mockSdkFieldsResponse
            }
          });
        }
      })
    }, _react["default"].createElement(_.Query, {
      query: '1',
      config: config
    }, children));
  };
  it('sorts data chronologically when dimension is_timeframe is true', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(QueryTemplate, null, _react["default"].createElement(TestChild, null)));
          _context.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(mockDataListener).toHaveBeenLastCalledWith([{
              'orders.created_date': '2014-07',
              'orders.count': 300
            }, {
              'orders.created_date': '2019-11',
              'orders.count': 1
            }]);
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('reverses data when config.x_axis[0].reversed is true', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(QueryTemplate, {
            config: {
              x_axis: [{
                reversed: true
              }]
            }
          }, _react["default"].createElement(TestChild, null)));
          _context2.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(mockDataListener).toHaveBeenLastCalledWith([{
              'orders.created_date': '2019-11',
              'orders.count': 1
            }, {
              'orders.created_date': '2014-07',
              'orders.count': 300
            }]);
          });
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('Restricted Props: Expect type failure if both query and dashboard props are used', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: _visualizationsAdapters.mockSDK
          }, _react["default"].createElement(_.Query, {
            query: 'abc',
            dashboard: 2
          }, _react["default"].createElement(TestChild, null))));
          _context3.next = 3;
          return (0, _react2.waitFor)(function () {
            expect(isResponseOk).toHaveBeenLastCalledWith(true);
          });
        case 3:
          expect(mockConsoleWarn).toHaveBeenCalled();
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it('Renders sdk error message in the dom', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
    var errorMessage, mockSDKNotFound;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          errorMessage = 'Query not found';
          mockSDKNotFound = _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSDK), {}, {
            query_for_slug: function query_for_slug() {
              return Promise.resolve({
                ok: false,
                error: {
                  message: errorMessage
                }
              });
            }
          });
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: mockSDKNotFound
          }, _react["default"].createElement(_.Query, {
            query: 'abc123'
          }, function () {
            return null;
          })));
          _context4.next = 5;
          return (0, _react2.waitFor)(function () {
            expect(_react2.screen.getByText(errorMessage)).toBeInTheDocument();
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=Query.spec.js.map