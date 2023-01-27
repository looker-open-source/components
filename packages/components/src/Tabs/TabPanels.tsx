/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { Children, cloneElement } from 'react'
import styled from 'styled-components'
import type {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from '@looker/design-tokens'
import { flexbox, layout, space, reset } from '@looker/design-tokens'

export interface TabPanelsProps extends FlexboxProps, LayoutProps, SpaceProps {
  children: JSX.Element | JSX.Element[]
  className?: string
  selectedIndex?: number
  onSelectTab?: (index: number) => void
}

const Layout = ({
  children,
  className,
  selectedIndex,
  ...props
}: TabPanelsProps) => {
  const { onSelectTab: _onSelectTab, ...tabPanelsLayoutProps } = props

  const clonedChildren = Children.map(
    children,
    (child: JSX.Element, index: number) => {
      return cloneElement(child, {
        selected: index === selectedIndex,
      })
    }
  )

  return (
    <div
      aria-labelledby={`tab-${selectedIndex}`}
      className={className}
      id={`panel-${selectedIndex}`}
      role="tabpanel"
      {...tabPanelsLayoutProps}
    >
      {clonedChildren}
    </div>
  )
}

/**
 * @deprecated Use `Tabs2` and `Tab2` instead
 */
export const TabPanels = styled(Layout).attrs(({ pt = 'large' }) => ({
  pt,
}))`
  ${reset}
  ${flexbox}
  ${layout}
  ${space}
`
