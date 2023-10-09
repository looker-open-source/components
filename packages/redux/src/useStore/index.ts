/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CreateStoreReturn } from '../types';
import { useStore as useStoreReactRedux } from 'react-redux';

export function useStore<State = any>() {
  const store = useStoreReactRedux() as CreateStoreReturn<State>;
  if (!store.isLookerRedux) {
    throw new Error(
      'The store provided is not compatible with @looker/redux. Please use createStore from @looker/redux when creating your store.'
    );
  }
  return store;
}
