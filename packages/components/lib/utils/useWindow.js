import React, { useMemo } from 'react';
import { getWindowedListBoundaries } from './getWindowedListBoundaries';
import { useCallbackRef } from './useCallbackRef';
import { useMeasuredElement } from './useMeasuredElement';
import { useScrollPosition } from './useScrollPosition';
export const useWindow = ({
  itemCount,
  enabled,
  itemHeight,
  ref,
  spacerTag: _spacerTag = 'div'
}) => {
  const [containerElement, callbackRef] = useCallbackRef(ref);
  const [{
    height
  }] = useMeasuredElement(enabled ? containerElement : null);
  const scrollPosition = useScrollPosition(enabled ? containerElement : null);
  const {
    start,
    end,
    beforeHeight,
    afterHeight
  } = useMemo(() => {
    return getWindowedListBoundaries({
      enabled,
      height,
      itemCount,
      itemHeight,
      scrollPosition
    });
  }, [enabled, itemCount, height, itemHeight, scrollPosition]);
  const Spacer = _spacerTag;
  const before = beforeHeight > 0 ? React.createElement(Spacer, {
    style: {
      height: `${beforeHeight}px`
    },
    "data-testid": "before"
  }) : null;
  const after = afterHeight > 0 ? React.createElement(Spacer, {
    style: {
      height: `${afterHeight}px`
    },
    "data-testid": "after"
  }) : null;
  return {
    after,
    before,
    containerElement,
    end,
    ref: callbackRef,
    start
  };
};
//# sourceMappingURL=useWindow.js.map