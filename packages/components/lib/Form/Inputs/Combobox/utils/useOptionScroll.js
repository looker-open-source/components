import { useContext, useEffect } from 'react';
import { useCallbackRef } from '../../../../utils';
import { ComboboxActionType } from './state';

const relativeElementVisibility = (listElement, containerScrollPosition, containerHeight = 0) => {
  const {
    offsetTop
  } = listElement;
  const isAbove = offsetTop < containerScrollPosition;
  const isBelow = offsetTop >= containerScrollPosition + containerHeight;
  return isAbove && 'above' || isBelow && 'below' || 'visible';
};

export const isScrollable = el => {
  if (el) {
    if (el.scrollHeight > el.clientHeight) {
      return true;
    } else {
      return isScrollable(el.parentElement);
    }
  }

  return false;
};
export function useOptionScroll(context, value, label, scrollIntoView, isActive) {
  const {
    transition,
    listScrollPosition = 0,
    listClientRect = {
      height: 0
    }
  } = useContext(context);
  const [newTriggerElement, callbackRef] = useCallbackRef();
  useEffect(() => {
    if (scrollIntoView) {
      if (newTriggerElement) {
        if (isScrollable(newTriggerElement)) {
          newTriggerElement.scrollIntoView();
        }
      }

      if (!isActive) {
        transition && transition(ComboboxActionType.NAVIGATE, {
          option: {
            label,
            value
          }
        });
      }
    }
  }, [newTriggerElement, scrollIntoView]);
  useEffect(() => {
    if (isActive && newTriggerElement) {
      const visibility = relativeElementVisibility(newTriggerElement, listScrollPosition, listClientRect.height);

      if (visibility !== 'visible') {
        const attachToTop = visibility === 'above';

        if (isScrollable(newTriggerElement)) {
          newTriggerElement.scrollIntoView(attachToTop);
        }
      }
    }
  }, [newTriggerElement, isActive]);
  return callbackRef;
}
//# sourceMappingURL=useOptionScroll.js.map