/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'
import type { OverlaySurfaceProps } from '../Overlay/OverlaySurface'
import {
  OverlaySurface,
  OverlaySurfaceContentArea,
} from '../Overlay/OverlaySurface'
import { Link } from '../Link'

interface TooltipSurfaceProps extends OverlaySurfaceProps {
  /**
   * Invert the Tooltip surface colors
   * @default true
   */
  invert?: boolean
}

export const invertSurface = (props: TooltipSurfaceProps) =>
  props.invert !== false &&
  css`
    ${OverlaySurfaceContentArea} {
      background: ${({ theme }) => theme.colors.inverse};
      border-color: ${({ theme }) => theme.colors.inverse};
      color: ${({ theme }) => theme.colors.inverseOn};
    }

    ${Link} {
      color: ${({ theme }) => theme.colors.keyAccent};

      &:focus,
      &:hover,
      &:active,
      &.active,
      &:visited {
        color: ${({ theme }) => theme.colors.keySubtle};
      }
    }
  `

export const TooltipSurface = styled(OverlaySurface)<TooltipSurfaceProps>`
  ${invertSurface}

  &.exited,
  &.exiting,
  &.entering {
    animation: none;
    opacity: 0;
    /* Prevents showing the tooltip if the the mouse happens to move over it
    when still opacity: 0 (during the delay) */
    pointer-events: none;
  }
`
