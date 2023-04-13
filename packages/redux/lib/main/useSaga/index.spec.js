"use strict";

var _reactHooks = require("@testing-library/react-hooks");
var _reactRedux = require("react-redux");
var _ = require(".");
var _marked = regeneratorRuntime.mark(saga);
jest.mock('react-redux', function () {
  return {
    useStore: jest.fn()
  };
});
function saga() {
  return regeneratorRuntime.wrap(function saga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
var mockUseStore = {
  addSaga: jest.fn()
};
beforeEach(function () {
  mockUseStore.addSaga.mockReset();

  _reactRedux.useStore.mockReset().mockReturnValue(mockUseStore);
});
test('calls useStore', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useSaga)(saga);
  });
  expect(_reactRedux.useStore).toHaveBeenCalledTimes(1);
  expect(_reactRedux.useStore).toHaveBeenCalledWith();
});
test('calls addSaga', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useSaga)(saga);
  });
  expect(mockUseStore.addSaga).toHaveBeenCalledTimes(1);
  expect(mockUseStore.addSaga).toHaveBeenCalledWith(saga);
});
test('does not call addSaga if no saga is provided', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useSaga)();
  });
  expect(mockUseStore.addSaga).toHaveBeenCalledTimes(0);
});
//# sourceMappingURL=index.spec.js.map