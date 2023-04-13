"use strict";

var _reactHooks = require("@testing-library/react-hooks");
var _reactRedux = require("react-redux");
var _ = require(".");

jest.mock('react-redux', function () {
  return {
    useStore: jest.fn()
  };
});
var mockStore = {
  addReducer: function addReducer() {},
  addSaga: function addSaga() {},
  replaceReducer: function replaceReducer() {}
};
beforeEach(function () {
  ;
  _reactRedux.useStore.mockReset().mockReturnValue(mockStore);
});
test('calls useStore and returns a store with correct typescript type', function () {
  var res = (0, _reactHooks.renderHook)(function () {
    return (0, _.useStore)();
  });
  expect(_reactRedux.useStore).toHaveBeenCalledTimes(1);
  expect(res.result.current.replaceReducer).toBeDefined();
  expect(res.result.current.addReducer).toBeDefined();
  expect(res.result.current.addSaga).toBeDefined();
});
//# sourceMappingURL=index.spec.js.map