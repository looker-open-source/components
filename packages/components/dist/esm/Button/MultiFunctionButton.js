let _ = t => t,
  _t;
import React, { cloneElement, useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components';
import { useForkedRef, useMeasuredElement } from '../utils';
export const MultiFunctionButton = forwardRef(({
  alternate,
  children,
  alternateRef,
  swap: _swap = false,
  disabled: _disabled = undefined
}, forwardedRef) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [aElement, setAElement] = useState(null);
  const [bElement, setBElement] = useState(null);
  const [aRect] = useMeasuredElement(aElement);
  const [bRect] = useMeasuredElement(bElement);
  const maxHeight = Math.max(aRect.height, bRect.height);
  const maxWidth = Math.max(aRect.width, bRect.width);
  useEffect(() => {
    if (maxHeight > 0 && maxWidth > 0) {
      setContainerHeight(maxHeight);
      setContainerWidth(maxWidth);
    }
  }, [maxHeight, maxWidth]);
  useEffect(() => {
    if (_swap === true && aElement === document.activeElement) {
      bElement === null || bElement === void 0 ? void 0 : bElement.focus();
    }
    if (_swap === false && bElement === document.activeElement) {
      aElement === null || aElement === void 0 ? void 0 : aElement.focus();
    }
  }, [_swap, aElement, bElement]);
  const style = containerWidth > 0 ? {
    width: containerWidth
  } : undefined;
  return React.createElement(MultiFunctionButtonStyle, {
    swap: _swap,
    height: containerHeight,
    width: containerWidth
  }, cloneElement(children, {
    'aria-hidden': !!_swap,
    disabled: _swap === true ? true : _disabled,
    ref: useForkedRef(setAElement, forwardedRef),
    style
  }), cloneElement(alternate, {
    'aria-hidden': !_swap,
    disabled: _swap === false ? true : _disabled,
    ref: useForkedRef(setBElement, alternateRef),
    style
  }));
});
MultiFunctionButton.displayName = 'MultiFunctionButton';
const MultiFunctionButtonStyle = styled.div.withConfig({
  displayName: "MultiFunctionButton__MultiFunctionButtonStyle",
  componentId: "sc-uf1rdu-0"
})(_t || (_t = _`
  align-items: center;
  display: flex;
  height: ${0}px;
  justify-content: center;
  width: ${0}px;
  > * {
    flex-shrink: 0;
  }
  ${0}
`), ({
  height
}) => height, ({
  width
}) => width, ({
  swap
}) => swap ? `> *:first-child {
         position: absolute;
         top: -100000px;
       }` : `> *:last-child {
         position: absolute;
         top: -100000px;
       }`);
//# sourceMappingURL=MultiFunctionButton.js.map