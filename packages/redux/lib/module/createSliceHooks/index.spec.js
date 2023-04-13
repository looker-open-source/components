

import { createSlice } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-hooks';
import { createSliceHooks } from '.';
import { useActions } from '../useActions';
import { useStoreState } from '../useStoreState';
jest.mock('../useActions', () => ({
  useActions: jest.fn()
}));
jest.mock('../useStoreState', () => ({
  useStoreState: jest.fn()
}));
function* saga() {}
const slice = createSlice({
  initialState: {
    test: true
  },
  name: 'test',
  reducers: {
    test() {}
  }
});
test('creates slice hooks', () => {
  const hooks = createSliceHooks(slice, saga);
  expect(typeof hooks.useActions).toBe('function');
  expect(typeof hooks.useStoreState).toBe('function');
});
test('hooks.useActions calls the useActions core hook', () => {
  const hooks = createSliceHooks(slice, saga);
  renderHook(() => hooks.useActions());
  expect(useActions).toHaveBeenCalledTimes(1);
  expect(useActions).toHaveBeenCalledWith(slice);
});
test('hooks.useStateState calls the useStoreState core hook', () => {
  const hooks = createSliceHooks(slice, saga);
  renderHook(() => hooks.useStoreState());
  expect(useStoreState).toHaveBeenCalledTimes(1);
  expect(useStoreState).toHaveBeenCalledWith(slice, saga);
});
//# sourceMappingURL=index.spec.js.map