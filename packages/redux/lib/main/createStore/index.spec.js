"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toolkit = require("@reduxjs/toolkit");
var _reduxSaga = _interopRequireDefault(require("redux-saga"));
var _ = require(".");
var _deepCombineReducers = require("../deepCombineReducers");

jest.mock('@reduxjs/toolkit', function () {
  return {
    configureStore: jest.fn()
  };
});
jest.mock('../deepCombineReducers', function () {
  return {
    deepCombineReducers: jest.fn()
  };
});
jest.mock('redux-saga', function () {
  return jest.fn();
});
var mockConfigureStore = {
  replaceReducer: jest.fn(),
  dispatch: jest.fn()
};
var mockReduxSaga = {
  run: jest.fn()
};
beforeEach(function () {
  _deepCombineReducers.deepCombineReducers.mockReset().mockReturnValue('deepCombineReducers');

  _toolkit.configureStore.mockReset().mockReturnValue(mockConfigureStore);

  _reduxSaga["default"].mockReset().mockReturnValue(mockReduxSaga);
});
test('extended APIs exist', function () {
  var store = (0, _.createStore)();
  expect((0, _typeof2["default"])(store.addReducer)).toBe('function');
  expect((0, _typeof2["default"])(store.addSaga)).toBe('function');
});
test('configureStore', function () {
  var preloadedState = {};
  (0, _.createStore)({
    preloadedState: preloadedState
  });
  expect(_toolkit.configureStore).toHaveBeenCalledTimes(1);
  expect(_toolkit.configureStore).toHaveBeenCalledWith(
  expect.objectContaining({
    devTools: true,
    preloadedState: preloadedState
  }));
});
test('addReducer', function () {
  var reducers = {
    test1: function test1() {},
    test2: function test2() {}
  };
  var store = (0, _.createStore)({
    reducer: {
      test1: reducers.test1
    }
  });
  store.addReducer('test2', reducers.test2);
  expect(_deepCombineReducers.deepCombineReducers).toHaveBeenCalledTimes(1);
  expect(_deepCombineReducers.deepCombineReducers).toHaveBeenCalledWith(reducers);
  expect(mockConfigureStore.replaceReducer).toHaveBeenCalledTimes(1);
  expect(mockConfigureStore.replaceReducer).toHaveBeenCalledWith('deepCombineReducers');
});
test('addSaga', function () {
  var _marked = regeneratorRuntime.mark(saga);
  var store = (0, _.createStore)();
  function saga() {
    return regeneratorRuntime.wrap(function saga$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _marked);
  }
  store.addSaga(saga);
  expect(mockReduxSaga.run).toHaveBeenCalledTimes(1);
  expect(mockReduxSaga.run).toHaveBeenCalledWith(saga);
});
//# sourceMappingURL=index.spec.js.map