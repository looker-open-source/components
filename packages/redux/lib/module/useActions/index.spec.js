

import { createSlice } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-hooks';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useActions } from '.';
jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));
jest.mock('redux', () => ({
  bindActionCreators: jest.fn()
}));
const boundActionCreators = {};
const dispatch = () => {};
const sliceOptions = {
  initialState: {},
  name: 'test',
  reducers: {
    test() {}
  }
};
beforeEach(() => {
  useDispatch.mockReset().mockReturnValue(dispatch);

  bindActionCreators.mockReset().mockReturnValue(boundActionCreators);
});
test('calls dispatch', () => {
  const slice = createSlice(sliceOptions);
  renderHook(() => useActions(slice));
  expect(useDispatch).toHaveBeenCalledTimes(1);
  expect(useDispatch).toHaveBeenCalledWith();
});
test('calls bindActionCreators only once for each slice', () => {
  const slice1 = createSlice(sliceOptions);
  const slice2 = createSlice(sliceOptions);

  renderHook(() => useActions(slice1));
  expect(bindActionCreators).toHaveBeenCalledTimes(1);

  renderHook(() => useActions(slice1));
  expect(bindActionCreators).toHaveBeenCalledTimes(1);

  expect(bindActionCreators).toHaveBeenCalledWith(slice1.actions, dispatch);

  renderHook(() => useActions(slice2));
  expect(bindActionCreators).toHaveBeenCalledTimes(2);

  expect(bindActionCreators).toHaveBeenCalledWith(slice2.actions, dispatch);
});
test('returns result of bindActionCreators', () => {
  const slice = createSlice(sliceOptions);
  const actions = renderHook(() => useActions(slice));
  expect(actions.result.current).toBe(boundActionCreators);
});
//# sourceMappingURL=index.spec.js.map