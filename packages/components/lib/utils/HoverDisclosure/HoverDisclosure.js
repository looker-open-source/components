import React, { useContext } from 'react';
import { HoverDisclosureContext } from './HoverDisclosureContext';
export const HoverDisclosure = ({
  children,
  width,
  visible
}) => {
  const context = useContext(HoverDisclosureContext);
  const isVisible = visible || context.visible;
  const style = width ? {
    flexBasis: width,
    flexShrink: 0,
    width
  } : {};
  return React.createElement("div", {
    style: style
  }, isVisible ? children : null);
};
//# sourceMappingURL=HoverDisclosure.js.map