/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type {
  CompatibleHTMLProps,
  MaxWidthProps,
  MinWidthProps,
} from '@looker/design-tokens';
import { fadeIn, maxWidth, minWidth, reset } from '@looker/design-tokens';
import type { Placement } from '@popperjs/core';
import type { CSSProperties, DOMAttributes, Ref } from 'react';
import React, { forwardRef, useContext, useRef } from 'react';
import styled from 'styled-components';
import merge from 'lodash/merge';
import { useGlobalHotkeys, useForkedRef, partitionAriaProps } from '../utils';
import { DialogContext } from '../Dialog';
import { OverlayArrow } from './OverlayArrow';
import type { OverlayArrowProps } from './OverlayArrow';

export interface OverlaySurfaceProps
  extends CompatibleHTMLProps<HTMLElement>,
    MaxWidthProps,
    MinWidthProps {
  eventHandlers?: DOMAttributes<HTMLElement>;
  placement: Placement;
  zIndex?: number;
  /**
   * Displays an arrow pointing toward the trigger
   */
  arrow?: boolean | Partial<OverlayArrowProps>;
  /**
   * PopperJS styles for arrow positioning
   */
  styleArrow?: CSSProperties;
}

const OverlaySurfaceLayout = forwardRef(
  (props: OverlaySurfaceProps, forwardedRef: Ref<HTMLDivElement>) => {
    const {
      children,
      className,
      eventHandlers,
      placement,
      style,
      role,
      arrow,
      styleArrow,
      ...otherProps
    } = props;
    const { closeModal } = useContext(DialogContext);

    const [ariaProps] = partitionAriaProps(otherProps);
    const innerRef = useRef<null | HTMLElement>(null);
    const ref = useForkedRef(forwardedRef, innerRef);

    useGlobalHotkeys('Escape', closeModal, innerRef);
    const arrowBaseProps = { 'data-placement': placement, style: styleArrow };
    // merge in case there are also styles in arrow
    const arrowProps =
      typeof arrow === 'boolean'
        ? arrowBaseProps
        : merge(arrowBaseProps, arrow);

    return (
      <div
        role={role}
        {...ariaProps}
        ref={ref}
        style={style}
        className={className}
        {...eventHandlers}
        tabIndex={-1}
        data-placement={placement}
      >
        {arrow && <OverlayArrow {...arrowProps} />}
        <OverlaySurfaceContentArea tabIndex={-1} data-overlay-surface={true}>
          {children}
        </OverlaySurfaceContentArea>
      </div>
    );
  }
);

OverlaySurfaceLayout.displayName = 'OverlaySurfaceLayout';

export const OverlaySurface = styled(OverlaySurfaceLayout)`
  ${reset}

  animation: ${fadeIn} ease-in;
  animation-duration: ${({ theme }) => `${theme.transitions.quick}ms`};
  ${maxWidth}
  ${minWidth}
  overflow: visible;
  z-index: ${({ theme: { zIndexFloor } }) => zIndexFloor || undefined};

  &[data-placement*='top'] {
    padding-bottom: ${({ theme: { space } }) => space.u2};
  }

  &[data-placement*='right'] {
    padding-left: ${({ theme: { space } }) => space.u2};
  }

  &[data-placement*='bottom'] {
    padding-top: ${({ theme: { space } }) => space.u2};
  }

  &[data-placement*='left'] {
    padding-right: ${({ theme: { space } }) => space.u2};
  }

  &:focus {
    outline: none;
  }
`;

export const OverlaySurfaceContentArea = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.elevations.plus2};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
  }
`;
