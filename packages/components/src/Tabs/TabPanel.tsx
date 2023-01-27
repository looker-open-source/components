/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

export interface TabPanelProps {
  className?: string
  selected?: boolean
  /**
   * Set to `true` if you would like TabPanel to be reached via tab-key.
   * Generally this is _only_ the case when the TabPanel contains no tab-stopping items (a, button, etc.)
   * @default false
   */
  isTabStop?: boolean
  children?: ReactNode
}

const TabPanelLayout = ({
  children,
  className,
  selected,
  isTabStop = false,
}: TabPanelProps) =>
  selected ? (
    <div className={className} tabIndex={isTabStop ? 0 : -1}>
      {children}
    </div>
  ) : null

/**
 * @deprecated Use `Tabs2` & `Tab2` instead
 */
export const TabPanel = styled(TabPanelLayout)`
  height: 100%;
  outline: none;
`
