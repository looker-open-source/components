import { useCallback, useEffect, useRef, useState } from 'react';
import { checkElementRemoved } from './checkElementRemoved';
import { getNextFocus as getNextFocusDefault } from './getNextFocus';
import { useForkedRef } from './useForkedRef';
import { useWrapEvent } from './useWrapEvent';
export const useArrowKeyNav = ({
  axis: _axis = 'vertical',
  disabled,
  getNextFocus: _getNextFocus = getNextFocusDefault,
  ref,
  onBlur,
  onFocus,
  onKeyDown
}) => {
  const internalRef = useRef(null);
  const focusedItemRef = useRef();
  const [focusInside, setFocusInside] = useState(false);

  const handleArrowKey = (e, direction, vertical) => {
    if (internalRef.current) {
      const newFocusedItem = _getNextFocus(direction, internalRef.current, vertical);

      if (newFocusedItem) {
        e.preventDefault();
        newFocusedItem.focus();
      }
    }
  };

  const handleKeyDown = e => {
    switch (e.key) {
      case 'ArrowUp':
        _axis !== 'horizontal' && handleArrowKey(e, -1, true);
        break;

      case 'ArrowDown':
        _axis !== 'horizontal' && handleArrowKey(e, 1, true);
        break;

      case 'ArrowLeft':
        _axis !== 'vertical' && handleArrowKey(e, -1, false);
        break;

      case 'ArrowRight':
        _axis !== 'vertical' && handleArrowKey(e, 1, false);
        break;
    }
  };

  const placeInitialFocus = useCallback(() => {
    if (internalRef.current) {
      const toFocus = _getNextFocus(1, internalRef.current);

      if (toFocus) {
        toFocus.focus({
          preventScroll: true
        });
      }
    }
  }, [_getNextFocus]);

  const handleFocus = e => {
    if (e.target === internalRef.current) {
      if (focusedItemRef.current && internalRef.current.contains(focusedItemRef.current)) {
        focusedItemRef.current.focus();
      } else {
        try {
          if (internalRef.current.matches(':focus-visible')) {
            placeInitialFocus();
          }
        } catch (e) {
          placeInitialFocus();
        }
      }
    } else {
      focusedItemRef.current = e.target;
      setFocusInside(true);
    }
  };

  const handleBlur = () => {
    setFocusInside(false);
  };

  useEffect(() => {
    const element = internalRef.current;
    const observer = new MutationObserver(mutationsList => {
      if (checkElementRemoved(mutationsList, focusedItemRef.current)) {
        placeInitialFocus();
      }
    });

    if (focusInside && element) {
      observer.observe(element, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [focusInside, placeInitialFocus]);
  const navProps = {
    onBlur: useWrapEvent(handleBlur, onBlur),
    onFocus: useWrapEvent(handleFocus, onFocus),
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    ref: useForkedRef(internalRef, ref),
    tabIndex: focusInside ? undefined : 0
  };
  return disabled ? {} : navProps;
};
//# sourceMappingURL=useArrowKeyNav.js.map