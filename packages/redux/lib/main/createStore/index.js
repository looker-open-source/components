"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toolkit = require("@reduxjs/toolkit");
var _reduxSaga = _interopRequireDefault(require("redux-saga"));
var _set = _interopRequireDefault(require("lodash/set"));
var _deepCombineReducers = require("../deepCombineReducers");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var createStore = function createStore() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$devTools = _ref.devTools,
    devTools = _ref$devTools === void 0 ? false : _ref$devTools,
    _ref$middleware = _ref.middleware,
    middleware = _ref$middleware === void 0 ? [] : _ref$middleware,
    _ref$preloadedState = _ref.preloadedState,
    preloadedState = _ref$preloadedState === void 0 ? {} : _ref$preloadedState,
    _ref$reducer = _ref.reducer,
    reducer = _ref$reducer === void 0 ? {
      _: function _(state) {
        return state !== null && state !== void 0 ? state : null;
      }
    } : _ref$reducer;
  var currentReducers = _objectSpread({}, reducer);
  var reducerSet = new WeakSet();
  var sagasSet = new WeakSet();
  var sagaMiddleware = (0, _reduxSaga["default"])();
  var store = (0, _toolkit.configureStore)({
    devTools: process.env.NODE_ENV !== 'production' || devTools,
    middleware: [sagaMiddleware].concat((0, _toConsumableArray2["default"])(middleware)),
    reducer: currentReducers,
    preloadedState: preloadedState
  });

  store.addReducer = function (path, reducer) {
    if (!reducerSet.has(reducer)) {
      reducerSet.add(reducer);
      (0, _set["default"])(currentReducers, path, reducer);
      store.replaceReducer((0, _deepCombineReducers.deepCombineReducers)(currentReducers));
    }
  };

  store.addSaga = function (saga) {
    if (!sagasSet.has(saga)) {
      sagasSet.add(saga);
      sagaMiddleware.run(saga);
    }
  };
  return store;
};
exports.createStore = createStore;
//# sourceMappingURL=index.js.map