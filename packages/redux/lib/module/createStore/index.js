import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import set from 'lodash/set';
import { deepCombineReducers } from '../deepCombineReducers';
export const createStore = ({
  devTools: _devTools = false,
  middleware: _middleware = [],
  preloadedState: _preloadedState = {},
  reducer: _reducer = {
    _: state => state !== null && state !== void 0 ? state : null
  }
} = {}) => {
  const currentReducers = _objectSpread({}, _reducer);
  const reducerSet = new WeakSet();
  const sagasSet = new WeakSet();
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production' || _devTools,
    middleware: [sagaMiddleware, ..._middleware],
    reducer: currentReducers,
    preloadedState: _preloadedState
  });

  store.addReducer = (path, reducer) => {
    if (!reducerSet.has(reducer)) {
      reducerSet.add(reducer);
      set(currentReducers, path, reducer);
      store.replaceReducer(deepCombineReducers(currentReducers));
    }
  };

  store.addSaga = saga => {
    if (!sagasSet.has(saga)) {
      sagasSet.add(saga);
      sagaMiddleware.run(saga);
    }
  };
  return store;
};
//# sourceMappingURL=index.js.map