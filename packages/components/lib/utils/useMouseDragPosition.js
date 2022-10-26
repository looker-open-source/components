import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import get from 'lodash/get';
export function useMouseDragPosition(targetRef) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });

  const updateMousePos = e => {
    const event = get(e, 'touches[0]', e);
    const {
      pageX,
      clientX,
      pageY,
      clientY
    } = event;
    setMousePos({
      x: pageX || clientX,
      y: pageY || clientY
    });
  };

  const handleStart = e => {
    requestAnimationFrame(() => {
      setIsMouseDown(true);
    });
    updateMousePos(e);
  };

  const handleMove = throttle(updateMousePos, 100);

  const handleEnd = () => {
    requestAnimationFrame(() => {
      setIsMouseDown(false);
    });
  };

  useEffect(() => {
    targetRef && targetRef.addEventListener('mousedown', handleStart);
    targetRef && targetRef.addEventListener('touchstart', handleStart);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    if (isMouseDown) {
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseleave', handleEnd);
    }

    return () => {
      targetRef && targetRef.removeEventListener('mousedown', handleStart);
      targetRef && targetRef.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);

      if (isMouseDown) {
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseleave', handleEnd);
      }
    };
  }, [isMouseDown, targetRef]);
  return {
    isMouseDown,
    mousePos
  };
}
//# sourceMappingURL=useMouseDragPosition.js.map