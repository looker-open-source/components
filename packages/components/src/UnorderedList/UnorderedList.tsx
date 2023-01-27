/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextColorProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  layout,
  position,
  reset,
  space,
  shouldForwardProp,
  textColor,
  typography,
  variant,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface UnorderedListProps
  extends CompatibleHTMLProps<HTMLUListElement>,
    PositionProps,
    LayoutProps,
    SpaceProps,
    TextColorProps,
    TypographyProps {
  /**
   * Specify the type of marker to place next to list items.
   *
   * @default none
   */
  type?: 'none' | 'bullet'
}

const typeVariant = variant({
  prop: 'type',
  variants: {
    bullet: {
      listStyleType: 'disc',
      pl: 'u4',
    },
    none: {
      listStyleType: 'none',
    },
  },
})

export const UnorderedList = styled.ul
  .withConfig({
    shouldForwardProp,
  })
  .attrs<UnorderedListProps>(({ color = 'body', type = 'none' }) => ({
    color,
    type,
  }))<UnorderedListProps>`
  ${reset}
  ${textColor}
  ${typography}
  ${typeVariant}
  ${space}

  ${position}
  ${layout}

  li {
    margin-bottom: ${({ theme }) => theme.space.u1};
  }
`
