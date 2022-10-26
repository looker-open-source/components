import React from 'react';
import { ArrowDropDown } from '@styled-icons/material';
import { ButtonOutline } from '../../Button';
import { Box2 } from '../../Layout';
import { Paragraph } from '../../Text';
import { Popover } from '../Popover';
import { PopoverContent } from '../Layout/PopoverContent';
export const ContentOverflow = ({
  children
}) => React.createElement(Box2, {
  position: "absolute",
  top: "40%",
  left: "40%"
}, React.createElement(Popover, {
  pin: true,
  placement: "bottom",
  content: React.createElement(PopoverContent, {
    width: "18rem"
  }, React.createElement(Paragraph, null, "Stuff above spacer"), React.createElement(Box2, {
    height: "60vh",
    bg: "ui1"
  }, "Spacer"), React.createElement(Paragraph, null, "Content below spacer"))
}, React.createElement(ButtonOutline, {
  iconAfter: React.createElement(ArrowDropDown, null),
  m: "xxlarge"
}, children)));
//# sourceMappingURL=ContentOverflow.js.map