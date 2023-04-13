"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toolkit = require("@reduxjs/toolkit");
var _reactHooks = require("@testing-library/react-hooks");
var _ = require(".");
var _useActions = require("../useActions");
var _useStoreState = require("../useStoreState");
var _marked = regeneratorRuntime.mark(saga);
jest.mock('../useActions', function () {
  return {
    useActions: jest.fn()
  };
});
jest.mock('../useStoreState', function () {
  return {
    useStoreState: jest.fn()
  };
});
function saga() {
  return regeneratorRuntime.wrap(function saga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
var slice = (0, _toolkit.createSlice)({
  initialState: {
    test: true
  },
  name: 'test',
  reducers: {
    test: function test() {}
  }
});
test('creates slice hooks', function () {
  var hooks = (0, _.createSliceHooks)(slice, saga);
  expect((0, _typeof2["default"])(hooks.useActions)).toBe('function');
  expect((0, _typeof2["default"])(hooks.useStoreState)).toBe('function');
});
test('hooks.useActions calls the useActions core hook', function () {
  var hooks = (0, _.createSliceHooks)(slice, saga);
  (0, _reactHooks.renderHook)(function () {
    return hooks.useActions();
  });
  expect(_useActions.useActions).toHaveBeenCalledTimes(1);
  expect(_useActions.useActions).toHaveBeenCalledWith(slice);
});
test('hooks.useStateState calls the useStoreState core hook', function () {
  var hooks = (0, _.createSliceHooks)(slice, saga);
  (0, _reactHooks.renderHook)(function () {
    return hooks.useStoreState();
  });
  expect(_useStoreState.useStoreState).toHaveBeenCalledTimes(1);
  expect(_useStoreState.useStoreState).toHaveBeenCalledWith(slice, saga);
});
//# sourceMappingURL=index.spec.js.map