

import { createSlice } from '@reduxjs/toolkit';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createStore } from '../createStore';
import { createSliceHooks } from '.';
test('reducers and sagas', async () => {
  const slice = createSlice({
    name: 'test',
    initialState: {
      text: 'click'
    },
    reducers: {
      getText(state) {
        state.text = 'loading';
      },
      setText(state) {
        state.text = 'done';
      }
    }
  });
  function* sagas() {
    yield takeEvery(slice.actions.getText, function* () {
      yield call(() => Promise.resolve());
      yield put(slice.actions.setText());
    });
  }
  const hooks = createSliceHooks(slice, sagas);
  const store = createStore();
  const Component = () => {
    const actions = hooks.useActions();
    const state = hooks.useStoreState();
    return React.createElement("button", {
      onClick: actions.getText
    }, state.text);
  };
  const r = render(React.createElement(Provider, {
    store: store
  }, React.createElement(Component, null)));
  fireEvent.click(await r.findByText('click'));
  expect(r.getByText('loading')).toBeInTheDocument();
  expect(await r.findByText('done')).toBeInTheDocument();
});
//# sourceMappingURL=index-integration.spec.js.map