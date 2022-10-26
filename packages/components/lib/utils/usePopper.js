import cloneDeep from 'lodash/cloneDeep';
import concat from 'lodash/concat';
import merge from 'lodash/merge';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import { getCurrentNode } from './getCurrentNode';
import { useCallbackRef } from './useCallbackRef';
export function usePopper({
  anchor,
  target,
  options
}) {
  const [styles, setStyles] = useState({
    popper: {
      left: '0',
      margin: '0',
      position: 'fixed',
      top: '-9999px'
    }
  });
  const [truePlacement, setTruePlacement] = useState(options.placement);
  const popperInstanceRef = useRef();
  const [targetElement, targetRef] = useCallbackRef();
  const mergedOptions = useMemo(() => merge(options, {
    modifiers: concat(options && options.modifiers, [{
      enabled: false,
      name: 'applyStyles'
    }, {
      enabled: true,
      fn: ({
        state: {
          placement
        }
      }) => setTruePlacement(placement),
      name: 'update-placement',
      phase: 'afterWrite'
    }, {
      enabled: true,
      fn: ({
        state: {
          styles
        }
      }) => setStyles(cloneDeep(styles)),
      name: 'update-styles',
      phase: 'afterWrite'
    }, {
      enabled: true,
      name: 'preventOverflow',
      options: {
        boundary: 'viewport',
        padding: 8
      }
    }]),
    strategy: 'fixed'
  }), [options]);
  useEffect(() => {
    const anchorNode = getCurrentNode(anchor);
    const targetNode = target ? getCurrentNode(target) : targetElement;

    if (anchorNode && targetNode) {
      popperInstanceRef.current = createPopper(anchorNode, targetNode, mergedOptions);
    }

    return () => {
      popperInstanceRef.current && popperInstanceRef.current.destroy();
    };
  }, [anchor, target, targetElement, mergedOptions]);
  return {
    placement: truePlacement,
    popperInstanceRef,
    style: styles.popper,
    targetRef
  };
}
//# sourceMappingURL=usePopper.js.map