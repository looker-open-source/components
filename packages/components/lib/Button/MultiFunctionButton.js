let _ = t => t,
    _t;

import React, { useRef, cloneElement, useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components';
import { useForkedRef } from '../utils';
export const MultiFunctionButton = forwardRef(({
  alternate,
  children,
  alternateRef,
  swap: _swap = false
}, forwardedRef) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const aRef = useRef(null);
  const bRef = useRef(null);
  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;

    if (a && b) {
      setContainerHeight(Math.max(a.offsetHeight, b.offsetHeight, 0));
      setContainerWidth(Math.max(a.offsetWidth, b.offsetWidth, 0));
    }
  }, [containerHeight, containerWidth]);
  useEffect(() => {
    if (_swap === true && aRef.current === document.activeElement) {
      var _bRef$current;

      (_bRef$current = bRef.current) === null || _bRef$current === void 0 ? void 0 : _bRef$current.focus();
    }

    if (_swap === false && bRef.current === document.activeElement) {
      var _aRef$current;

      (_aRef$current = aRef.current) === null || _aRef$current === void 0 ? void 0 : _aRef$current.focus();
    }
  }, [_swap]);
  const style = containerWidth > 0 ? {
    width: containerWidth
  } : undefined;
  return React.createElement(MultiFunctionButtonStyle, {
    swap: _swap,
    height: containerHeight,
    width: containerWidth
  }, cloneElement(children, {
    'aria-hidden': !!_swap,
    disabled: _swap === true ? true : undefined,
    ref: useForkedRef(aRef, forwardedRef),
    style
  }), cloneElement(alternate, {
    'aria-hidden': !_swap,
    disabled: _swap === false ? true : undefined,
    ref: useForkedRef(bRef, alternateRef),
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