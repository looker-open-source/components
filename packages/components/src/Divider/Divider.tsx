/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  PositionProps,
  SpaceProps,
} from '@looker/design-tokens'
import {
  color,
  position,
  reset,
  space,
  shouldForwardProp,
  variant,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface DividerProps
  extends CompatibleHTMLProps<HTMLHRElement>,
    PositionProps,
    SpaceProps {
  appearance?: 'default' | 'light' | 'dark' | 'onDark'
  customColor?: string
  size?: string | number
}

const appearanceVariant = variant({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'ui4',
    },
    default: {
      bg: 'ui3',
    },
    light: {
      bg: 'ui2',
    },
    onDark: {
      bg: 'text2',
    },
  },
})

export const DividerBase = styled.hr
  .withConfig({ shouldForwardProp })
  .attrs<DividerProps>(
    ({ appearance = 'default', customColor, size = '1px' }) => ({
      appearance,
      'aria-orientation': 'horizontal',
      bg: customColor,
      role: 'separator',
      size,
    })
  )<DividerProps>`
  ${reset}
  ${position}

  border: none;
  margin: 0; /* reset <hr /> built-in margin */
  ${space}

  ${({ customColor }) => (customColor ? color : appearanceVariant)}
`

export const Divider = styled(DividerBase)`
  height: ${({ size }) => size};
  width: 100%;
`
