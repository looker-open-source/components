/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  ExtendedStatefulColor,
} from '@looker/design-tokens';
import styled, { css } from 'styled-components';

export interface OverlayArrowProps extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   *  @default background
   **/
  color?: string;
  ['data-placement']: string;
}

// If color is a value on theme.colors, use that, e.g. 'key' or 'background'
// otherwise use the color string directly, e.g. a hex color
const arrowColor = css<OverlayArrowProps>`
  ${({ theme, color = 'background' }) =>
    theme.colors[color as ExtendedStatefulColor] || color};
`;

export const OverlayArrow = styled.div.attrs(() => ({
  'data-popper-arrow': true,
  'data-testid': 'overlay-arrow',
}))<OverlayArrowProps>`
  position: absolute;

  &::after,
  &::before {
    content: '';
    display: block;
    height: 0.54rem;
    width: 0.54rem;
    border: 0.38rem solid transparent;
    border-right: 0;
  }
  &::after {
    border-left-color: ${arrowColor};
  }
  &::before {
    position: absolute;
    border-left-color: rgba(0, 0, 0, 0.15);
    filter: blur(1px);
  }

  &[data-placement*='top'] {
    bottom: -0.125rem;
    &::after,
    &::before {
      transform: rotate(90deg);
    }
    &::before {
      border-left-color: rgba(0, 0, 0, 0.3);
      bottom: -3px;
      filter: blur(2px);
    }
  }

  &[data-placement*='right'] {
    left: 0;
    &::after,
    &::before {
      transform: rotate(180deg);
    }
    &::before {
      left: -2px;
    }
  }

  &[data-placement*='bottom'] {
    top: -0.125rem;
    &::after,
    &::before {
      transform: rotate(270deg);
    }
    &::before {
      border-left-color: rgba(0, 0, 0, 0.1);
      top: -1px;
      filter: none;
    }
  }

  &[data-placement*='left'] {
    right: 0;
    &::after,
    &::before {
      transform: rotate(0deg);
    }
    &::before {
      right: -2px;
    }
  }
`;
