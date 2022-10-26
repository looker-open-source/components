import { useEffect, useState } from 'react';
import { getCurrentNode } from './getCurrentNode';
import { useCallbackRef } from './useCallbackRef';
export function useHovered(hoverElement) {
  const [newElement, callbackRef] = useCallbackRef();
  const element = typeof hoverElement === 'undefined' ? newElement : hoverElement;
  const [isHovered, setIsHovered] = useState(hoverElement === undefined);
  useEffect(() => {
    function handleMouseEnter() {
      setIsHovered(true);
    }

    function handleMouseLeave() {
      window.requestAnimationFrame(() => {
        const node = getCurrentNode(element);
        const relationship = document.activeElement && node ? node.compareDocumentPosition(document.activeElement) : Node.DOCUMENT_POSITION_DISCONNECTED;
        const activeElementIsChildOfNode = relationship === Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY;
        if (!activeElementIsChildOfNode) setIsHovered(false);
      });
    }

    const node = getCurrentNode(element);

    if (node) {
      node.addEventListener('mouseleave', handleMouseLeave);
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('focusout', handleMouseLeave);
      node.addEventListener('focusin', handleMouseEnter);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseleave', handleMouseLeave);
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('focusout', handleMouseLeave);
        node.removeEventListener('focusin', handleMouseEnter);
      }
    };
  }, [element]);
  return [isHovered, callbackRef];
}
//# sourceMappingURL=useHovered.js.map