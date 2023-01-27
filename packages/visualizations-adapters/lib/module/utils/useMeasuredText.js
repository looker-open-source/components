

import { useState, useLayoutEffect } from 'react';
import noop from 'lodash/noop';
export const useMeasuredText = (text, theme) => {
  const {
    fontSize,
    fontFamily
  } = theme;
  const [elementRect, setElementRect] = useState({
    bottom: 0,
    height: 10,
    left: 0,
    right: 0,
    toJSON: noop,
    top: 0,
    width: 10,
    x: 0,
    y: 0
  });
  useLayoutEffect(() => {
    const textWrapper = document.createElement('SPAN');
    const textNode = document.createTextNode(text);
    textWrapper.style.fontSize = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
    textWrapper.style.fontFamily = fontFamily;
    textWrapper.appendChild(textNode);
    document.body.appendChild(textWrapper);

    let componentIsMounted = true;
    const req = requestAnimationFrame(() => {
      if (componentIsMounted) {
        const elementRect = textWrapper.getBoundingClientRect();
        setElementRect(elementRect);
        document.body.removeChild(textWrapper);
      }
    });
    return () => {
      componentIsMounted = false;
      cancelAnimationFrame(req);
      if (document.body.contains(textWrapper)) {
        document.body.removeChild(textWrapper);
      }
    };
  }, [text, fontFamily, fontSize]);
  return elementRect;
};
//# sourceMappingURL=useMeasuredText.js.map