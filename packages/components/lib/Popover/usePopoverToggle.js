import { useState, useEffect } from 'react';
import { useControlWarn } from '../utils/useControlWarn';

const isNodeInOrAfter = (nodeA, nodeB) => {
  const relationship = nodeA.compareDocumentPosition(nodeB);
  return relationship === Node.DOCUMENT_POSITION_FOLLOWING || relationship === Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY;
};

export const usePopoverToggle = ({
  isOpen: controlledIsOpen = false,
  setOpen: controlledSetOpen,
  canClose,
  triggerToggle,
  cancelClickOutside: _cancelClickOutside = false
}, portalElement, triggerElement) => {
  const [uncontrolledIsOpen, uncontrolledSetOpen] = useState(controlledIsOpen);
  const [mouseDownTarget, setMouseDownTarget] = useState(null);
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'usePopover'
  });
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;
  const setOpen = isControlled && controlledSetOpen ? controlledSetOpen : uncontrolledSetOpen;
  useEffect(() => {
    const checkCloseAndStopEvent = event => {
      if (canClose && !canClose()) return;

      if (portalElement && mouseDownTarget) {
        if (isNodeInOrAfter(portalElement, mouseDownTarget)) {
          return;
        }
      }

      if (portalElement && isNodeInOrAfter(portalElement, event.target)) {
        return;
      }

      const clickedOnToggle = triggerElement && triggerElement.contains(event.target);

      if (!triggerToggle && clickedOnToggle) {
        return;
      }

      setOpen(false);

      if (clickedOnToggle) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (!_cancelClickOutside) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
    };

    const handleMouseDown = event => {
      setMouseDownTarget(event.target);
      checkCloseAndStopEvent(event);
    };

    const handleClickOutside = event => {
      checkCloseAndStopEvent(event);
      setMouseDownTarget(null);
    };

    const handleMouseUp = () => {
      setMouseDownTarget(null);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown, true);
      document.addEventListener('click', handleClickOutside, true);
    } else if (mouseDownTarget) {
      document.addEventListener('click', handleClickOutside, true);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown, true);
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [_cancelClickOutside, canClose, isOpen, setOpen, triggerElement, portalElement, triggerToggle, mouseDownTarget]);
  return [isOpen, setOpen];
};
//# sourceMappingURL=usePopoverToggle.js.map