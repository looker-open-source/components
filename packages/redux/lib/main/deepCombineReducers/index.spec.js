"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _ = require(".");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
test('should handle plain function reducers', function () {
  var reducer = function reducer(state) {
    return state;
  };
  expect((0, _.deepCombineReducers)(reducer)).toBe(reducer);
});
test('should handle reducer object maps', function () {
  var reducer = {
    a: function a() {
      return 'a';
    },
    b: function b() {
      return 'b';
    }
  };
  var combined = (0, _.deepCombineReducers)(reducer);
  expect(combined({}, {
    type: 'init'
  })).toEqual({
    a: 'a',
    b: 'b'
  });
});
test('should handle recursive reducer object maps', function () {
  var reducer = {
    a: function a() {
      return 'a';
    },
    b: function b() {
      return 'b';
    },
    c: {
      nested: function nested() {
        return 'nested';
      }
    }
  };
  var combined = (0, _.deepCombineReducers)(reducer);
  expect(combined({}, {
    type: 'init'
  })).toEqual({
    a: 'a',
    b: 'b',
    c: {
      nested: 'nested'
    }
  });
});
test('should handle reducers that are both functions and nested objects', function () {
  var reducerAndNested = function reducerAndNested(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      notNested: 'notNested'
    });
  };
  reducerAndNested.nested = function () {
    return 'nested';
  };
  var reducer = {
    a: function a() {
      return 'a';
    },
    b: function b() {
      return 'b';
    },
    c: reducerAndNested
  };
  var initialState = {
    a: 'initiala',
    b: 'initialb',
    c: {}
  };
  var combined = (0, _.deepCombineReducers)(reducer);
  expect(combined(initialState, {
    type: 'init'
  })).toEqual({
    a: 'a',
    b: 'b',
    c: {
      notNested: 'notNested',
      nested: 'nested'
    }
  });
});
//# sourceMappingURL=index.spec.js.map