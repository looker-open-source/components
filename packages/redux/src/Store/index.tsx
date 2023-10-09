/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComponentProps, FC } from 'react';
import type { CreateStoreOptions } from '../types';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../createStore';
import { useStore } from '../useStore';

function StoreDefault<State>({
  children,
  ...options
}: ComponentProps<FC> & CreateStoreOptions<State>) {
  const defaultStore = useMemo(() => {
    return createStore(options);
  }, []);
  return <Provider store={defaultStore}>{children}</Provider>;
}

function useStoreSafe() {
  let store;
  try {
    store = useStore();
  } catch (e) {}
  return store;
}

export function Store<State>({
  children,
  ...options
}: ComponentProps<FC> & CreateStoreOptions<State>) {
  const store = useStoreSafe();
  return store ? (
    <>{children}</>
  ) : (
    <StoreDefault {...options}>{children}</StoreDefault>
  );
}
