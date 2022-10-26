import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "density", "indicatorPosition"];

let _ = t => t,
    _t,
    _t2;

import pick from 'lodash/pick';
import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { rippleHandlerKeys, rippleStyle, useRipple, useRippleHandlers } from '../Ripple';
import { accordionDimensions } from './accordionDimensions';

const size = (density = 0) => accordionDimensions(density).indicatorSize;

const gap = (density = 0) => accordionDimensions(density).indicatorGap;

export const AccordionIndicator = styled(_ref => {
  let {
    children,
    density,
    indicatorPosition
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    callbacks,
    className: rippleClassName,
    style: rippleStyle
  } = useRipple({
    color: 'neutral'
  });
  const rippleHandlers = useRippleHandlers(callbacks, pick(props, rippleHandlerKeys));
  const rippleContainerProps = {
    className: rippleClassName,
    style: rippleStyle
  };
  const isIndicatorToggleOnly = props.tabIndex === -1;
  return React.createElement("div", _extends({}, props, isIndicatorToggleOnly && rippleHandlers), React.createElement(RippleContainer, _extends({
    density: density || 0
  }, rippleContainerProps), children));
}).withConfig({
  displayName: "AccordionIndicator",
  componentId: "sc-1w66fqe-0"
})(_t || (_t = _`
  align-items: center;
  display: flex;
  justify-content: center;
  outline: none;

  ${0}

  ${0} {
    height: ${0};
    /*
      Default vertical-align is set to middle which shifts indicator icon
      below mid-point
    */
    vertical-align: baseline;
    width: ${0};
  }
`), ({
  density,
  indicatorPosition,
  theme: {
    space
  }
}) => indicatorPosition === 'left' ? `margin-right: ${space[gap(density)]};` : `margin-left: ${space[gap(density)]};`, StyledIconBase, ({
  density,
  theme
}) => theme.sizes[size(density)], ({
  density,
  theme
}) => theme.sizes[size(density)]);
const RippleContainer = styled.div.withConfig({
  displayName: "AccordionIndicator__RippleContainer",
  componentId: "sc-1w66fqe-1"
})(_t2 || (_t2 = _`
  ${0}
  border-radius: 50%;
  height: ${0};
  width: ${0};
`), rippleStyle, ({
  density,
  theme
}) => theme.sizes[size(density)], ({
  density,
  theme
}) => theme.sizes[size(density)]);
//# sourceMappingURL=AccordionIndicator.js.map