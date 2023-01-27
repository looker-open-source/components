/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import type { SpaceProps } from '@looker/design-tokens'
import { space } from '@looker/design-tokens'
import { Divider } from '../Divider'

const ListDividerLayout = (props: React.ComponentProps<'li'>) => (
  <li {...props} aria-hidden="true">
    <Divider appearance="light" />
  </li>
)

/**
 * Divider component used to create borders between items
 * Note: If 2 ListDividers are adjacent, the second one will automatically hide itself
 */
export const ListDivider = styled(ListDividerLayout)<SpaceProps>`
  ${space}

  margin: ${({ theme }) => theme.space.u2} 0;

  /* CSS for hiding second divider when 2 ListDividers are adjacent */
  & + & {
    display: none;
  }
`
