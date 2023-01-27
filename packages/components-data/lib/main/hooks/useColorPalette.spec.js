"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactHooks = require("@testing-library/react-hooks");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _testUtils = require("../testUtils");
var _useColorPalette = require("./useColorPalette");

afterEach(function () {
  jest.resetAllMocks();
});
describe('useColorPalette', function () {
  var wrapper = function wrapper(_ref) {
    var children = _ref.children;
    return _react["default"].createElement(_testUtils.ContextWrapper, null, children);
  };
  it('returns DEFAULT_SERIES_COLORS when argument is undefined', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _useColorPalette.useColorPalette)();
      }, {
        wrapper: wrapper
      }),
      result = _renderHook.result;
    expect(result.current.colorPalette).toEqual(_visualizationsAdapters.DEFAULT_SERIES_COLORS);
    expect(_testUtils.sdkMethodColorCollectionListener).not.toHaveBeenCalled();
  });
  it('returns color palette based on collection_id and paletted_id', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var _renderHook2, result, waitForNextUpdate;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _renderHook2 = (0, _reactHooks.renderHook)(function () {
            return (0, _useColorPalette.useColorPalette)({
              collection_id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
              palette_id: '18d0c733-1d87-42a9-934f-4ba8ef81d736'
            });
          }, {
            wrapper: wrapper
          }), result = _renderHook2.result, waitForNextUpdate = _renderHook2.waitForNextUpdate;
          _context.next = 3;
          return waitForNextUpdate();
        case 3:
          expect(result.current.colorPalette).toEqual(['#3D52B9', '#08B248', '#A918B4', '#FC2E31', '#FC9200', '#2B99F7', '#C9DC10', '#fa2f90', '#FCBF00', '#24BED5', '#149888', '#6F38BB']);
          expect(_testUtils.sdkMethodColorCollectionListener).toHaveBeenCalledTimes(1);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('returns custom color palette when that is present', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var customColors, _renderHook3, result, waitForNextUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          customColors = ['#FFFFFF', '#FF0000', '#00FF00'];
          _renderHook3 = (0, _reactHooks.renderHook)(function () {
            return (0, _useColorPalette.useColorPalette)({
              collection_id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
              custom: {
                colors: customColors,
                id: 'bb90f382-806e-f66a-cce0-35ee8f837186',
                label: 'Custom',
                type: 'discrete'
              }
            });
          }, {
            wrapper: wrapper
          }), result = _renderHook3.result, waitForNextUpdate = _renderHook3.waitForNextUpdate;
          _context2.next = 4;
          return waitForNextUpdate();
        case 4:
          expect(result.current.colorPalette).toEqual(customColors);
          expect(_testUtils.sdkMethodColorCollectionListener).toHaveBeenCalledTimes(1);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=useColorPalette.spec.js.map