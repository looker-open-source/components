"use strict";

var _toolkit = require("@reduxjs/toolkit");
var _reactHooks = require("@testing-library/react-hooks");
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _ = require(".");

jest.mock('react-redux', function () {
  return {
    useDispatch: jest.fn()
  };
});
jest.mock('redux', function () {
  return {
    bindActionCreators: jest.fn()
  };
});
var boundActionCreators = {};
var dispatch = function dispatch() {};
var sliceOptions = {
  initialState: {},
  name: 'test',
  reducers: {
    test: function test() {}
  }
};
beforeEach(function () {
  _reactRedux.useDispatch.mockReset().mockReturnValue(dispatch);

  _redux.bindActionCreators.mockReset().mockReturnValue(boundActionCreators);
});
test('calls dispatch', function () {
  var slice = (0, _toolkit.createSlice)(sliceOptions);
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useActions)(slice);
  });
  expect(_reactRedux.useDispatch).toHaveBeenCalledTimes(1);
  expect(_reactRedux.useDispatch).toHaveBeenCalledWith();
});
test('calls bindActionCreators only once for each slice', function () {
  var slice1 = (0, _toolkit.createSlice)(sliceOptions);
  var slice2 = (0, _toolkit.createSlice)(sliceOptions);

  (0, _reactHooks.renderHook)(function () {
    return (0, _.useActions)(slice1);
  });
  expect(_redux.bindActionCreators).toHaveBeenCalledTimes(1);

  (0, _reactHooks.renderHook)(function () {
    return (0, _.useActions)(slice1);
  });
  expect(_redux.bindActionCreators).toHaveBeenCalledTimes(1);

  expect(_redux.bindActionCreators).toHaveBeenCalledWith(slice1.actions, dispatch);

  (0, _reactHooks.renderHook)(function () {
    return (0, _.useActions)(slice2);
  });
  expect(_redux.bindActionCreators).toHaveBeenCalledTimes(2);

  expect(_redux.bindActionCreators).toHaveBeenCalledWith(slice2.actions, dispatch);
});
test('returns result of bindActionCreators', function () {
  var slice = (0, _toolkit.createSlice)(sliceOptions);
  var actions = (0, _reactHooks.renderHook)(function () {
    return (0, _.useActions)(slice);
  });
  expect(actions.result.current).toBe(boundActionCreators);
});
//# sourceMappingURL=index.spec.js.map