import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { createSlice } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-hooks';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useSlice } from '.';
jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return _objectSpread(_objectSpread({}, actualReact), {}, {
    useEffect: jest.fn(actualReact.useEffect)
  });
});
jest.mock('react-redux', () => _objectSpread(_objectSpread({}, jest.requireActual('react-redux')), {}, {
  useStore: jest.fn(() => ({
    addReducer: mockAddReducer
  }))
}));
const mockAddReducer = jest.fn();
const mockUseEffect = useEffect;
const mockUseStore = useStore;
const slice = createSlice({
  initialState: {},
  name: 'test',
  reducers: {
    test() {}
  }
});
beforeEach(() => {
  jest.clearAllMocks();
});
test('calls useStore', () => {
  renderHook(() => useSlice(slice));
  expect(mockUseStore).toHaveBeenCalledTimes(1);
  expect(mockUseStore).toHaveBeenCalledWith();
});
test('calls addReducer', () => {
  renderHook(() => useSlice(slice));
  expect(mockAddReducer).toHaveBeenCalledTimes(1);
  expect(mockAddReducer).toHaveBeenCalledWith(slice.name, slice.reducer);
});
test('calls addReducer in useEffect', async () => {
  mockUseEffect.mockImplementation(() => {});
  renderHook(() => useSlice(slice));
  expect(mockUseEffect).toHaveBeenCalledTimes(1);
  expect(mockAddReducer).toHaveBeenCalledTimes(0);
});
//# sourceMappingURL=index.spec.js.map