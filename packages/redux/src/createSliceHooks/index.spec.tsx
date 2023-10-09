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

import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  createSlice,
  createSliceHooks,
  createStore,
  setupSlice,
  Store,
} from '..';

describe('createSliceHooks', () => {
  it('reducers and sagas', async () => {
    const slice = createSlice({
      name: 'test',
      initialState: {
        text: 'click',
      },
      reducers: {
        getText(state) {
          state.text = 'loading';
        },
        setText(state) {
          state.text = 'done';
        },
      },
    });

    function* saga() {
      yield takeEvery(slice.actions.getText, function* () {
        yield call(() => Promise.resolve());
        yield put(slice.actions.setText());
      });
    }

    const hooks = createSliceHooks({ slice, saga });

    const Component = () => {
      const [state, actions] = hooks.useSlice();
      return <button onClick={actions.getText}>{state.text}</button>;
    };

    const r = render(
      <Store>
        <Component />
      </Store>
    );

    fireEvent.click(await r.findByText('click'));
    expect(r.getByText('loading')).toBeInTheDocument();
    expect(await r.findByText('done')).toBeInTheDocument();
  });

  it('cleans up state after the last component is unmounted', async () => {
    const slice = createSlice({
      initialState: 'waiting',
      name: 'test',
      reducers: {
        test: (_, action) => {
          return action.payload;
        },
      },
    });
    function* saga() {
      yield put(slice.actions.test('running'));
    }
    const store = createStore();
    const hooks = createSliceHooks({ autoExpire: true, slice, saga });
    const Inner = () => {
      const [state] = hooks.useSlice();
      return <>{state}</>;
    };
    const Outer: React.FC = props => {
      return <Provider {...props} store={store} />;
    };
    const r = render(<Outer />);
    expect(store.getState()).toEqual({
      _: null,
    });
    r.rerender(
      <Outer>
        <Inner />
      </Outer>
    );
    expect(store.getState()).toEqual({
      _: null,
      test: 'running',
    });
    await waitFor(() => {
      expect(store.getState()).toEqual({
        _: null,
        test: 'running',
      });
    });
    r.rerender(
      <Outer>
        <Inner />
        <Inner />
      </Outer>
    );
    expect(store.getState()).toEqual({
      _: null,
      test: 'running',
    });
    r.rerender(
      <Outer>
        <Inner />
      </Outer>
    );
    expect(store.getState()).toEqual({
      _: null,
      test: 'running',
    });
    r.rerender(<Outer />);
    expect(store.getState()).toEqual({
      _: null,
    });
  });

  it('setupSlice', () => {
    const store = createStore();
    const slice = createSlice({ name: 'test', initialState: {}, reducers: {} });
    const saga = function* () {};
    store.addReducer = jest.fn();
    store.addSaga = jest.fn();
    setupSlice({ store, slice, saga });
    expect(store.addReducer).toHaveBeenCalledWith(slice.name, slice.reducer);
    expect(store.addSaga).toHaveBeenCalledWith(saga);
  });
});
