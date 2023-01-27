

import React, { useEffect } from 'react';
import { PopoverContent } from '../Layout/PopoverContent';
import { usePopover } from '../usePopover';
import { Paragraph, Box, Heading, useToggle } from '../..';

const MovingTargetInner = () => {
  const {
    value,
    toggle
  } = useToggle();
  const {
    popover,
    popperInstanceRef,
    open,
    ref,
    isOpen
  } = usePopover({
    content: React.createElement(PopoverContent, {
      p: "u5",
      width: "360px"
    }, React.createElement(Paragraph, null, "The anchor is moving around so the Popover position must be updated via popperInstanceRef.current.update.")),
    placement: 'right-end'
  });
  useEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, [popperInstanceRef, value]);
  useEffect(() => {
    const int = setInterval(() => {
      toggle();
    }, 6000);
    return () => {
      clearInterval(int);
    };
  }, [toggle]);
  return React.createElement(Box, {
    mt: "large"
  }, React.createElement(Heading, null, "Moving Target"), popover, React.createElement(Box, {
    mt: value ? 'xxxlarge' : 'medium',
    border: true,
    width: 150,
    p: "u3",
    cursor: "pointer",
    height: value ? 80 : undefined,
    onClick: open,
    ref: ref,
    className: isOpen ? 'active' : ''
  }, "Open Popover"));
};
export default function MovingTarget() {
  return React.createElement(MovingTargetInner, null);
}
//# sourceMappingURL=MovingTarget.js.map