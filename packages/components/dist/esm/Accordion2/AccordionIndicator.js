const _excluded = ["children", "density", "indicatorPosition"];
let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    vertical-align: top;
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