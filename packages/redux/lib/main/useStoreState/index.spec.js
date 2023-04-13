"use strict";

var _reactHooks = require("@testing-library/react-hooks");
var _toolkit = require("@reduxjs/toolkit");
var _reactRedux = require("react-redux");
var _ = require(".");
var _useSaga = require("../useSaga");
var _useSlice = require("../useSlice");
var _marked = regeneratorRuntime.mark(saga);
jest.mock('react-redux', function () {
  return {
    useSelector: jest.fn(function (fn) {
      return fn({
        test: {
          test: true
        }
      });
    })
  };
});
jest.mock('../useSaga', function () {
  return {
    useSaga: jest.fn()
  };
});
jest.mock('../useSlice', function () {
  return {
    useSlice: jest.fn()
  };
});
var mockUseSaga = _useSaga.useSaga;
var mockUseSelector = _reactRedux.useSelector;
var mockUseSlice = _useSlice.useSlice;
function saga() {
  return regeneratorRuntime.wrap(function saga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
var slice = (0, _toolkit.createSlice)({
  initialState: {
    test: false
  },
  name: 'test',
  reducers: {}
});
beforeEach(function () {
  jest.clearAllMocks();
});
test('calls useSlice', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useStoreState)(slice);
  });
  expect(mockUseSlice).toHaveBeenCalledTimes(1);
  expect(mockUseSlice).toHaveBeenCalledWith(slice);
});
test('calls useSaga', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useStoreState)(slice, saga);
  });
  expect(mockUseSaga).toHaveBeenCalledTimes(1);
  expect(mockUseSaga).toHaveBeenCalledWith(saga);
});
test('calls useSelector', function () {
  (0, _reactHooks.renderHook)(function () {
    return (0, _.useStoreState)(slice);
  });
  expect(mockUseSelector).toHaveBeenCalledTimes(1);
});
test('returns the store state', function () {
  var state = (0, _reactHooks.renderHook)(function () {
    return (0, _.useStoreState)(slice);
  });
  expect(state.result.current).toEqual({
    test: true
  });
});
test('returns initial state if selector returns nothing', function () {
  mockUseSelector.mockImplementation(function (fn) {
    return fn({});
  });
  var state = (0, _reactHooks.renderHook)(function () {
    return (0, _.useStoreState)(slice);
  });
  expect(state.result.current).toBe(slice.getInitialState());
});
//# sourceMappingURL=index.spec.js.map