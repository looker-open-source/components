import React from 'react';
import { ArrowDropDown } from '@styled-icons/material';
import { ButtonOutline } from '../../Button';
import { Box2 } from '../../Layout';
import { Popover } from '../Popover';
import { PopoverContent } from '../Layout/PopoverContent';
export const EdgeOverflow = ({
  children,
  top,
  left,
  bottom,
  right
}) => React.createElement(Box2, {
  position: "absolute",
  top: top,
  left: left,
  bottom: bottom,
  right: right
}, React.createElement(Popover, {
  content: React.createElement(PopoverContent, {
    width: "18rem",
    height: "5rem"
  }, "There's stuff here... it hits the edge", ' ')
}, React.createElement(ButtonOutline, {
  iconAfter: React.createElement(ArrowDropDown, null),
  m: "xxlarge"
}, children)));
//# sourceMappingURL=EdgeOverflow.js.map