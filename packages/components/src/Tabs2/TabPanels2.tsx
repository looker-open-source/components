/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import type {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from '@looker/design-tokens'
import { flexbox, layout, space, reset } from '@looker/design-tokens'

export type TabPanels2Props = FlexboxProps &
  LayoutProps &
  SpaceProps & {
    children: JSX.Element
    className?: string
    id: string
  }

const TabPanels2Layout = ({ children, className, id }: TabPanels2Props) => (
  <div
    aria-labelledby={`tab-${id}`}
    className={className}
    id={`panel-${id}`}
    role="tabpanel"
  >
    {children}
  </div>
)

export const TabPanels2 = styled(TabPanels2Layout).attrs(
  ({ height = '100%', pt = 'large' }) => ({
    height,
    pt,
  })
)`
  ${reset}
  ${flexbox}
  ${layout}
  ${space}
`
