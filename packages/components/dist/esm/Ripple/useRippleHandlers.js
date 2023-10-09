import { useCallback } from 'react';
import { useWrapEvent } from '../utils';
export const rippleHandlerKeys = ['onBlur', 'onFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseUp'];
export const useRippleHandlers = ({
  startBG,
  endBG,
  startFG,
  endFG
}, currentHandlers, disabled) => {
  const handleKeyDown = useCallback(e => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        startFG();
        break;
    }
  }, [startFG]);
  const handleMouseLeave = useCallback(() => {
    endBG();
    endFG();
  }, [endFG, endBG]);
  const wrappedCallbacks = {
    onBlur: useWrapEvent(endBG, currentHandlers.onBlur),
    onFocus: useWrapEvent(startBG, currentHandlers.onFocus),
    onKeyDown: useWrapEvent(handleKeyDown, currentHandlers.onKeyDown),
    onKeyUp: useWrapEvent(endFG, currentHandlers.onKeyUp),
    onMouseDown: useWrapEvent(startFG, currentHandlers.onMouseDown),
    onMouseEnter: useWrapEvent(startBG, currentHandlers.onMouseEnter),
    onMouseLeave: useWrapEvent(handleMouseLeave, currentHandlers.onMouseLeave),
    onMouseUp: useWrapEvent(endFG, currentHandlers.onMouseUp)
  };
  return disabled ? {} : wrappedCallbacks;
};
//# sourceMappingURL=useRippleHandlers.js.map