"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toolkit = require("@reduxjs/toolkit");
var _reactHooks = require("@testing-library/react-hooks");
var _react = require("react");
var _reactRedux = require("react-redux");
var _ = require(".");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
jest.mock('react', function () {
  var actualReact = jest.requireActual('react');
  return _objectSpread(_objectSpread({}, actualReact), {}, {
    useEffect: jest.fn(actualReact.useEffect)
  });
});
jest.mock('react-redux', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('react-redux')), {}, {
    useStore: jest.fn(function () {
      return {
        addReducer: mockAddReducer
      };
    })
  });
});
var mockAddReducer = jest.fn();
var mockUseEffect = _react.useEffect;
var mockUseStore = _reactRedux.useStore;
var slice = (0, _toolkit.createSlice)({
  initialState: {},
  name: 'test',
  reducers: {
    test: function test() {}
  }
});
beforeEach(function () {
  jest.clearAllMocks();
});
test('calls useStore', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useSlice)(slice);
  });
  expect(mockUseStore).toHaveBeenCalledTimes(1);
  expect(mockUseStore).toHaveBeenCalledWith();
});
test('calls addReducer', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useSlice)(slice);
  });
  expect(mockAddReducer).toHaveBeenCalledTimes(1);
  expect(mockAddReducer).toHaveBeenCalledWith(slice.name, slice.reducer);
});
test('calls addReducer in useEffect', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        mockUseEffect.mockImplementation(function () {});
        (0, _reactHooks.renderHook)(function () {
          return (0, _.useSlice)(slice);
        });
        expect(mockUseEffect).toHaveBeenCalledTimes(1);
        expect(mockAddReducer).toHaveBeenCalledTimes(0);
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
//# sourceMappingURL=index.spec.js.map