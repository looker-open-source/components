import { useCallback, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ON':
      return true;

    case 'OFF':
      return false;

    case 'TOGGLE':
      return !state;

    case 'CHANGE':
      return action.payload || false;
  }
};

export function useToggle(initialValue = false) {
  const [value, dispatch] = useReducer(reducer, initialValue);
  const setOn = useCallback(() => dispatch({
    type: 'ON'
  }), []);
  const setOff = useCallback(() => dispatch({
    type: 'OFF'
  }), []);
  const toggle = useCallback(() => dispatch({
    type: 'TOGGLE'
  }), []);
  const change = useCallback(payload => dispatch({
    payload,
    type: 'CHANGE'
  }), []);
  useEffect(() => {
    dispatch({
      payload: initialValue,
      type: 'CHANGE'
    });
  }, [initialValue]);
  return {
    change,
    setOff,
    setOn,
    toggle,
    value
  };
}
//# sourceMappingURL=useToggle.js.map