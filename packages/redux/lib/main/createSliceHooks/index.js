"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupSlice = exports.createSliceHooks = void 0;
var _useActions2 = require("../useActions");
var _useStoreState2 = require("../useStoreState");

var createSliceHooks = function createSliceHooks(slice, saga) {
  return {
    useActions: function useActions() {
      return (0, _useActions2.useActions)(slice);
    },
    useStoreState: function useStoreState() {
      return (0, _useStoreState2.useStoreState)(slice, saga);
    }
  };
};
exports.createSliceHooks = createSliceHooks;
var setupSlice = function setupSlice(_ref) {
  var store = _ref.store,
    slice = _ref.slice,
    saga = _ref.saga;
  if (saga) {
    store.addSaga(saga);
  }
  store.addReducer(slice.name, slice.reducer);
};
exports.setupSlice = setupSlice;
//# sourceMappingURL=index.js.map