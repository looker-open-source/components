/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { configureStore } from '@reduxjs/toolkit';
import { cancelled, delay, put } from 'redux-saga/effects';
import { createStore } from '.';

describe('createStore', () => {
  it('extended APIs exist', () => {
    const store = createStore();
    expect(typeof store.addReducer).toBe('function');
    expect(typeof store.addSaga).toBe('function');
    expect(typeof store.removeReducer).toBe('function');
    expect(typeof store.removeSaga).toBe('function');
  });

  it('addReducer', () => {
    const reducers = {
      test1: () => ({ test1: true }),
      test2: () => ({ test2: true }),
    };
    const store = createStore({ reducer: { test1: reducers.test1 } });
    expect(store.getState()).toEqual({ _: null, test1: { test1: true } });
    store.addReducer('test2', reducers.test2);
    expect(store.getState()).toEqual({
      _: null,
      test1: { test1: true },
      test2: { test2: true },
    });
  });

  it('addSaga', async () => {
    const test = jest.fn(() => null);
    const store = createStore({
      reducer: { test },
    });
    function* saga() {
      yield put({ type: 'test' });
    }
    store.addSaga(saga);
    expect(test).toHaveBeenCalled();
  });

  it('removeReducer', () => {
    const reducer = () => ({
      test: true,
    });
    const store = createStore();
    store.addReducer('test', reducer);
    expect(store.getState()).toEqual({
      _: null,
      test: { test: true },
    });
    store.removeReducer(reducer);
    expect(store.getState()).toEqual({
      _: null,
    });
  });

  it('removeSaga', () => {
    const store = createStore();
    let state = '';
    function* saga() {
      try {
        state = 'running';
        yield delay(0);
      } finally {
        // @ts-ignore 'yield' expression implicitly results in an 'any' type because its containing generator lacks a return-type annotation. TS even gives this error if you use "typed-redux-saga".
        if (yield cancelled()) {
          state = 'cancelled';
        }
      }
    }
    store.addSaga(saga);
    expect(state).toBe('running');
    store.removeSaga(saga);
    expect(state).toBe('cancelled');
  });

  it('isLookerRedux', () => {
    const rtStore = configureStore({ reducer: () => {} });
    expect('isLookerRedux' in rtStore).toBe(false);
    const lrStore = createStore();
    expect(lrStore.isLookerRedux).toBe(true);
  });

  it('default state', () => {
    expect(createStore().getState()).toEqual({ _: null });
  });

  it('specifying reducers does not remove the default', () => {
    expect(createStore({ reducer: { test: () => null } }).getState()).toEqual({
      _: null,
      test: null,
    });
  });

  it('preloadedState creates reducers for each key', () => {
    const store = createStore({
      preloadedState: { test: { test: true } },
    });
    expect(store.getState()).toEqual({
      _: null,
      test: { test: true },
    });
  });
});
