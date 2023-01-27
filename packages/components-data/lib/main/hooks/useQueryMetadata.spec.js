"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _testUtils = require("../testUtils");
var _useQueryMetadata = require("./useQueryMetadata");

var dataContainerListener = jest.fn();
var TestComponent = function TestComponent(_ref) {
  var _ref$queryId = _ref.queryId,
    queryId = _ref$queryId === void 0 ? 1 : _ref$queryId;
  var response = (0, _useQueryMetadata.useQueryMetadata)(queryId);
  dataContainerListener(response);
  return null;
};
afterEach(function () {
  jest.resetAllMocks();
});
describe('useQueryMetadata', function () {
  it('fetches metadata on mount', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, null, _react["default"].createElement(TestComponent, null)));
          _context.next = 3;
          return (0, _react2.waitFor)(function () {
            return expect(_testUtils.sdkMethodQueryListener).toHaveBeenCalledTimes(1);
          });
        case 3:
          expect(dataContainerListener).toHaveBeenLastCalledWith(expect.objectContaining({
            metadata: {
              model: 'thelook',
              view: 'orders',
              vis_config: expect.objectContaining(_visualizationsAdapters.mockSdkConfigResponse)
            }
          }));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('does not dispatch request if data already exists for given id', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var defaultConfig;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          defaultConfig = {
            type: 'sparkline'
          };
          (0, _react2.render)(_react["default"].createElement(_testUtils.ContextWrapper, {
            initialState: {
              byId: {
                456: {
                  metadata: {
                    model: 'thelook',
                    view: 'orders',
                    vis_config: defaultConfig
                  }
                }
              },
              dashboardIdMap: {},
              modelExplore: {},
              slugIdMap: {}
            }
          }, _react["default"].createElement(TestComponent, {
            queryId: 456
          })));
          _context2.next = 4;
          return (0, _react2.waitFor)(function () {
            return expect(dataContainerListener).toHaveBeenCalledWith({
              isOK: true,
              isPending: false,
              metadata: {
                model: 'thelook',
                view: 'orders',
                vis_config: defaultConfig
              }
            });
          });
        case 4:
          expect(_testUtils.sdkMethodQueryListener).not.toHaveBeenCalled();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=useQueryMetadata.spec.js.map