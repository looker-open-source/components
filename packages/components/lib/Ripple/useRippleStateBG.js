import { useCallback, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return state === 'ON' ? 'DOUBLE_ON' : 'ON';

    case 'END':
      return state === 'DOUBLE_ON' ? 'ON' : 'OFF';
  }
};

export const useRippleStateBG = () => {
  const [state, dispatch] = useReducer(reducer, 'OFF');
  return {
    className: state === 'OFF' ? '' : 'bg-on',
    end: useCallback(() => {
      dispatch({
        type: 'END'
      });
    }, []),
    start: useCallback(() => {
      dispatch({
        type: 'START'
      });
    }, [])
  };
};
//# sourceMappingURL=useRippleStateBG.js.map