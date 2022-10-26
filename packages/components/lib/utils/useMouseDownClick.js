import { useEffect, useRef, useCallback } from 'react';
export function useMouseDownClick(onMouseDownClick, onMouseUp) {
  const mouseDownTriggered = useRef(false);
  const handleMouseUp = useCallback(e => {
    window.requestAnimationFrame(() => {
      mouseDownTriggered.current = false;
      onMouseUp && onMouseUp(e);
    });
  }, [onMouseUp]);
  useEffect(() => {
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);
  return {
    onClick: useCallback(e => {
      if (!mouseDownTriggered.current) {
        onMouseDownClick(e);
      }
    }, [onMouseDownClick]),
    onMouseDown: useCallback(e => {
      mouseDownTriggered.current = true;
      onMouseDownClick(e);
      document.addEventListener('mouseup', handleMouseUp);
    }, [handleMouseUp, onMouseDownClick])
  };
}
//# sourceMappingURL=useMouseDownClick.js.map