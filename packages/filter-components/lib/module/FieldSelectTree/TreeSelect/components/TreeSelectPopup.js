
import { PopoverContent, usePopover } from '@looker/components';
import debounce from 'lodash/debounce';
import React from 'react';
export const TreeSelectPopup = ({
  anchorElement,
  isOpen,
  setOpen,
  children
}) => {
  const [popupStyle, setPopupStyle] = React.useState();
  React.useEffect(() => {
    const onResize = debounce(() => {
      setPopupStyle(getPopupStyle(anchorElement));
    }, 200);
    window.addEventListener('resize', onResize);
    setPopupStyle(getPopupStyle(anchorElement));
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [anchorElement]);
  const {
    popover
  } = usePopover({
    content: React.createElement(PopoverContent, {
      style: popupStyle
    }, children),
    focusTrap: false,
    isOpen,
    setOpen,
    triggerElement: anchorElement,
    triggerToggle: false
  });
  return popover || null;
};
const getPopupStyle = anchor => {
  if (!anchor) return {};
  const rect = anchor.getBoundingClientRect();
  return {
    minWidth: rect.width + 'px',
    left: rect.left + 'px',
    top: rect.top + rect.height + 'px'
  };
};
//# sourceMappingURL=TreeSelectPopup.js.map