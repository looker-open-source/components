

import { configureStore } from '@reduxjs/toolkit';
import reduxSaga from 'redux-saga';
import { createStore } from '.';
import { deepCombineReducers } from '../deepCombineReducers';
jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn()
}));
jest.mock('../deepCombineReducers', () => ({
  deepCombineReducers: jest.fn()
}));
jest.mock('redux-saga', () => jest.fn());
const mockConfigureStore = {
  replaceReducer: jest.fn(),
  dispatch: jest.fn()
};
const mockReduxSaga = {
  run: jest.fn()
};
beforeEach(() => {
  deepCombineReducers.mockReset().mockReturnValue('deepCombineReducers');

  configureStore.mockReset().mockReturnValue(mockConfigureStore);

  reduxSaga.mockReset().mockReturnValue(mockReduxSaga);
});
test('extended APIs exist', () => {
  const store = createStore();
  expect(typeof store.addReducer).toBe('function');
  expect(typeof store.addSaga).toBe('function');
});
test('configureStore', () => {
  const preloadedState = {};
  createStore({
    preloadedState
  });
  expect(configureStore).toHaveBeenCalledTimes(1);
  expect(configureStore).toHaveBeenCalledWith(
  expect.objectContaining({
    devTools: true,
    preloadedState
  }));
});
test('addReducer', () => {
  const reducers = {
    test1: () => {},
    test2: () => {}
  };
  const store = createStore({
    reducer: {
      test1: reducers.test1
    }
  });
  store.addReducer('test2', reducers.test2);
  expect(deepCombineReducers).toHaveBeenCalledTimes(1);
  expect(deepCombineReducers).toHaveBeenCalledWith(reducers);
  expect(mockConfigureStore.replaceReducer).toHaveBeenCalledTimes(1);
  expect(mockConfigureStore.replaceReducer).toHaveBeenCalledWith('deepCombineReducers');
});
test('addSaga', () => {
  const store = createStore();
  function* saga() {}
  store.addSaga(saga);
  expect(mockReduxSaga.run).toHaveBeenCalledTimes(1);
  expect(mockReduxSaga.run).toHaveBeenCalledWith(saga);
});
//# sourceMappingURL=index.spec.js.map