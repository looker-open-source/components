import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef, useRef } from 'react';
import { styleDefenderCSS } from '@looker/components-providers';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useSafeLayoutEffect } from '../utils';
const rootId = 'modal-root';
export const getPortalRoot = () => {
  const existing = document.getElementById(rootId);

  if (existing) {
    return existing;
  } else {
    const newElement = document.createElement('div');
    newElement.id = 'modal-root';
    document.body.appendChild(newElement);
    return newElement;
  }
};
export const Portal = forwardRef((props, ref) => {
  const el = useRef(document.createElement('div'));
  el.current.className = 'portal-child';
  useSafeLayoutEffect(() => {
    const root = getPortalRoot();
    if (!root) return;
    const elCurrent = el.current;
    root.appendChild(elCurrent);
    return () => {
      root.removeChild(elCurrent);
    };
  }, [el]);
  const content = React.createElement(InvisiBox, _extends({
    ref: ref
  }, props));
  return createPortal(content, el.current);
});
Portal.displayName = 'Portal';

const alignItems = ({
  vertical
}) => {
  if (vertical === 'top') {
    return 'flex-start';
  } else if (vertical === 'bottom') {
    return 'flex-end';
  } else {
    return 'center';
  }
};

const justifyContent = ({
  horizontal
}) => {
  if (horizontal === 'left') {
    return 'flex-start';
  } else if (horizontal === 'right') {
    return 'flex-end';
  } else {
    return 'center';
  }
};

const InvisiBox = styled.div.attrs(({
  className: _className = 'looker-components-reset'
}) => ({
  className: _className
})).withConfig({
  displayName: "Portal__InvisiBox",
  componentId: "sc-8jnv99-0"
})(_t || (_t = _`
  ${0}

  align-items: ${0};
  bottom: 0;
  display: flex;
  justify-content: ${0};
  left: 0;
  pointer-events: none;
  position: ${0};
  right: 0;
  top: 0;
  z-index: ${0};

  > * {
    pointer-events: auto;
  }
`), styleDefenderCSS, alignItems, justifyContent, ({
  fixed
}) => fixed === false ? 'absolute' : 'fixed', ({
  theme: {
    zIndexFloor
  }
}) => zIndexFloor);
//# sourceMappingURL=Portal.js.map