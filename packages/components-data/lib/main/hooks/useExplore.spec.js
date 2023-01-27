"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _testUtils = require("../testUtils");
var _useExplore = require("./useExplore");

var dataContainerListener = jest.fn();
var TestComponent = function TestComponent(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? 1 : _ref$id;
  var response = (0, _useExplore.useExplore)(id);
  dataContainerListener(response);
  return null;
};
afterEach(function () {
  jest.resetAllMocks();
});
describe('useExplore', function () {
  it('fetches query id on mount', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, null, _react["default"].createElement(TestComponent, null)));
          _context.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(_testUtils.sdkMethodLookmlModelExploreListener).toHaveBeenCalledTimes(1);
          });
        case 3:
          expect(dataContainerListener).toHaveBeenCalledWith(expect.objectContaining({
            explore: undefined
          }));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('does not dispatch request if data already exists for given id', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var dimensionMetadata;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          dimensionMetadata = {
            label: 'Orders Created Date',
            view: 'orders'
          };
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, {
            initialState: {
              byId: {},
              dashboardIdMap: {},
              modelExplore: {
                thelook: {
                  orders: {
                    fields: {
                      dimensions: [dimensionMetadata]
                    }
                  }
                }
              },
              slugIdMap: {}
            }
          }, _react["default"].createElement(TestComponent, {
            id: 456
          })));
          _context2.next = 4;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenCalledWith({
              explore: {
                fields: {
                  dimensions: [{
                    label: 'Orders Created Date',
                    view: 'orders'
                  }]
                }
              },
              isOK: true,
              isPending: false
            });
          });
        case 4:
          expect(_testUtils.sdkMethodLookmlModelExploreListener).not.toHaveBeenCalled();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=useExplore.spec.js.map