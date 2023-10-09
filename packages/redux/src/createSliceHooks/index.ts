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

import type {
  ActionCreatorsMapObject,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import type { Saga } from 'redux-saga';
import type {
  CreateSliceHooksOptions,
  CreateSliceHooksReturn,
  CreateStoreReturn,
} from '../types';
import get from 'lodash/get';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStore } from '../useStore';

const dispatchMap = new WeakMap();
const sliceMap = new Map<Slice, number>();

/**
 * Returns hooks for working with state and actions within React components.
 */
export const createSliceHooks = <
  State,
  Actions extends SliceCaseReducers<State>
>(
  options: CreateSliceHooksOptions<State, Actions>
): CreateSliceHooksReturn<State, typeof options.slice.actions> => {
  const { saga, slice } = options;

  /**
   * Intended for use only:
   *
   * - Internally in these exported hooks.
   * - Outside of React, such as when integrating Angular and Redux.
   */
  const setupStore = (store: CreateStoreReturn<State>) => {
    store.addReducer(slice.name, slice.reducer);
    if (saga) store.addSaga(saga);
  };

  /**
   * Registers the slice and saga on the store.
   */
  const useSetupStore = () => {
    const store = useStore();
    useEffect(() => {
      setupStore(store);
    }, []);
    return store;
  };

  /**
   * Returns [state, actions] as a tuple similar to React's useState hook.
   */
  const useSlice = (): [State, typeof slice.actions] => {
    useSetupStore();
    return [useStoreState(), useActions()];
  };

  /**
   * Returns the actions bound to dispatch().
   *
   * @deprecated Use useSlice() instead.
   */
  const useActions = () => {
    const dispatch = useDispatch();
    useSetupStore();

    // We must keep record of which bound action creators belong to which
    // dispatch instance so that if a new store instance is created (i.e. tests)
    // they get rebound and stored.
    if (!dispatchMap.has(dispatch)) {
      dispatchMap.set(dispatch, new WeakMap());
    }

    const boundActionCreatorsMap = dispatchMap.get(dispatch);

    if (!boundActionCreatorsMap.has(slice)) {
      boundActionCreatorsMap.set(
        slice,
        bindActionCreators(
          // The Slice type requires actions be specified as SliceCaseReducers.
          // However, slice.actions is CaseReducerActions. This seems like a
          // type mismatch at the RTK level and we must do this to work around
          // the problem and get correct type inference when calling actions in
          // components.
          slice.actions as unknown as ActionCreatorsMapObject<
            typeof slice.actions
          >,
          dispatch
        )
      );
    }

    return boundActionCreatorsMap.get(slice);
  };

  /**
   * Returns the state from the store for this slice.
   *
   * @deprecated Use useSlice() instead.
   */
  const useStoreState = () => {
    const store = useSetupStore();

    if (options.autoExpire) {
      if (!sliceMap.has(slice)) {
        sliceMap.set(slice, 0);
      }

      useEffect(() => {
        sliceMap.set(slice, (sliceMap.get(slice) || 0) + 1);
        return () => {
          sliceMap.set(slice, (sliceMap.get(slice) || 0) - 1);
          if (sliceMap.get(slice) === 0) {
            store.removeReducer(slice.reducer);
            if (saga) {
              store.removeSaga(saga);
            }
          }
        };
      }, []);
    }

    return useSelector(
      (state: any): State => get(state, slice.name, slice.getInitialState())
    );
  };

  return {
    setupStore,
    useActions,
    useSlice,
    useStoreState,
  };
};

/**
 * @deprecated Use setupStore from the return value of createSliceHooks instead.
 */
export const setupSlice = ({
  store,
  slice,
  saga,
}: {
  store: CreateStoreReturn<any>;
  slice: Slice;
  saga?: Saga;
}) => {
  store.addReducer(slice.name, slice.reducer);
  if (saga) store.addSaga(saga);
};
