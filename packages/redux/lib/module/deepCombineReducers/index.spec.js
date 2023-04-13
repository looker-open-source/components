import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { deepCombineReducers } from '.';
test('should handle plain function reducers', () => {
  const reducer = state => state;
  expect(deepCombineReducers(reducer)).toBe(reducer);
});
test('should handle reducer object maps', () => {
  const reducer = {
    a: () => 'a',
    b: () => 'b'
  };
  const combined = deepCombineReducers(reducer);
  expect(combined({}, {
    type: 'init'
  })).toEqual({
    a: 'a',
    b: 'b'
  });
});
test('should handle recursive reducer object maps', () => {
  const reducer = {
    a: () => 'a',
    b: () => 'b',
    c: {
      nested: () => 'nested'
    }
  };
  const combined = deepCombineReducers(reducer);
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
test('should handle reducers that are both functions and nested objects', () => {
  const reducerAndNested = state => {
    return _objectSpread(_objectSpread({}, state), {}, {
      notNested: 'notNested'
    });
  };
  reducerAndNested.nested = () => 'nested';
  const reducer = {
    a: () => 'a',
    b: () => 'b',
    c: reducerAndNested
  };
  const initialState = {
    a: 'initiala',
    b: 'initialb',
    c: {}
  };
  const combined = deepCombineReducers(reducer);
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