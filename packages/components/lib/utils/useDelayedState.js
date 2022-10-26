import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useCallback, useEffect, useReducer } from 'react';
import { undefinedCoalesce } from './undefinedCoalesce';

const reducer = (state, {
  type,
  payload: _payload = {}
}) => {
  switch (type) {
    case 'CHANGE':
      return {
        delay: false,
        futureValue: undefined,
        value: undefinedCoalesce([_payload.value, state.futureValue])
      };

    case 'WAIT_CHANGE':
      return {
        delay: state.delay,
        futureValue: state.delay ? _payload.value : undefined,
        value: state.delay ? state.value : _payload.value || state.value
      };

    case 'DELAY_CHANGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        delay: state.value === _payload.value ? false : _payload.delay || 0,
        futureValue: _payload.value,
        value: state.value
      });
  }
};

export function useDelayedState(initialValue) {
  const [{
    delay,
    value
  }, dispatch] = useReducer(reducer, {
    delay: false,
    value: initialValue
  });
  const change = useCallback(newValue => dispatch({
    payload: {
      value: newValue
    },
    type: 'CHANGE'
  }), []);
  const delayChange = useCallback((newValue, delay) => dispatch({
    payload: {
      delay,
      value: newValue
    },
    type: 'DELAY_CHANGE'
  }), []);
  const waitChange = useCallback(newValue => dispatch({
    payload: {
      value: newValue
    },
    type: 'WAIT_CHANGE'
  }), []);
  useEffect(() => {
    let t;

    if (delay !== false) {
      t = setTimeout(() => {
        dispatch({
          type: 'CHANGE'
        });
      }, delay);
    }

    return () => {
      clearTimeout(t);
    };
  }, [delay]);
  return {
    change,
    delayChange,
    value,
    waitChange
  };
}
//# sourceMappingURL=useDelayedState.js.map