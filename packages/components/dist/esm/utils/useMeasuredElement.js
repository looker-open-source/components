import { useCallback, useState } from 'react';
import { useResize } from './useResize';
const mockDomRect = {
  bottom: 0,
  height: 0,
  left: 0,
  rect: {},
  right: 0,
  toJSON() {
    return null;
  },
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
export const measureElement = element => {
  if (element) return element.getBoundingClientRect();
  if (typeof DOMRect === 'function') return new DOMRect();
  return mockDomRect;
};
export const useMeasuredElement = element => {
  const [rect, setRect] = useState(measureElement());
  const refreshDomRect = useCallback(() => {
    if (!element) return;
    setRect(measureElement(element));
  }, [element]);
  useResize(element, refreshDomRect);
  return [rect, refreshDomRect];
};
//# sourceMappingURL=useMeasuredElement.js.map