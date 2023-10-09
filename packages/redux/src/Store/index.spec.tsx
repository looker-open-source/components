/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '.';
import { useStore } from '../useStore';
import { createStore } from '../createStore';

const Inner = () => {
  const store = useStore();
  return <>{store.getState().test}</>;
};

test('default store', () => {
  const r = render(
    <Store preloadedState={{ test: 'true' }}>
      <Inner />
    </Store>
  );
  expect(r.getByText('true')).toBeInTheDocument();
});

test('existing store', () => {
  const r = render(
    <Provider store={createStore({ preloadedState: { test: 'true' } })}>
      <Store preloadedState={{ test: 'false' }}>
        <Inner />
      </Store>
    </Provider>
  );
  expect(r.getByText('true')).toBeInTheDocument();
});
