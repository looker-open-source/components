import { useCallback, useEffect, useReducer, useRef } from 'react';
import { useTheme } from 'styled-components';

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return 'IN';

    case 'END':
      return state === 'IN' ? 'OUT' : state;

    case 'DONE':
      return 'OFF';
  }
};

const getRippleClassName = rippling => {
  if (rippling === 'IN') {
    return 'fg-in';
  } else if (rippling === 'OUT') {
    return 'fg-out';
  }

  return '';
};

export const useRippleState = () => {
  const [rippling, dispatch] = useReducer(reducer, 'OFF');
  const isInRef = useRef(false);
  const isLockedRef = useRef(false);
  const {
    transitions: {
      quick,
      simple
    }
  } = useTheme();
  const start = useCallback(() => {
    dispatch({
      type: 'START'
    });
    isInRef.current = true;
  }, []);
  const end = useCallback(() => {
    isInRef.current = false;

    if (!isLockedRef.current) {
      dispatch({
        type: 'END'
      });
    }
  }, []);
  useEffect(() => {
    let t;

    if (rippling === 'IN') {
      isLockedRef.current = true;
      t = setTimeout(() => {
        isLockedRef.current = false;

        if (!isInRef.current) {
          dispatch({
            type: 'END'
          });
        }
      }, simple);
    }

    if (rippling === 'OUT') {
      t = setTimeout(() => {
        dispatch({
          type: 'DONE'
        });
      }, quick);
    }

    return () => {
      clearTimeout(t);
    };
  }, [rippling, quick, simple]);
  return {
    className: getRippleClassName(rippling),
    end,
    start
  };
};
//# sourceMappingURL=useRippleState.js.map