"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _ = require(".");

test('api', function () {
  expect((0, _typeof2["default"])(_.createSliceHooks)).toBe('function');
  expect((0, _typeof2["default"])(_.createStore)).toBe('function');
  expect((0, _typeof2["default"])(_.useActions)).toBe('function');
  expect((0, _typeof2["default"])(_.useSaga)).toBe('function');
  expect((0, _typeof2["default"])(_.useSagas)).toBe('function');
  expect((0, _typeof2["default"])(_.useSlice)).toBe('function');
  expect((0, _typeof2["default"])(_.useStoreState)).toBe('function');
});
//# sourceMappingURL=index.spec.js.map