/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { Children, cloneElement, forwardRef } from 'react'
import type { FontSizeProps, PaddingProps } from '@looker/design-tokens'
import styled from 'styled-components'
import { useArrowKeyNav, useTranslation } from '../utils'
import { tabListCSS } from '../Tabs2/TabList2'

export interface TabListProps extends PaddingProps, FontSizeProps {
  children: JSX.Element[]
  selectedIndex?: number
  onSelectTab?: (index: number) => void
  className?: string
  distribute?: boolean
}

/**
 * @deprecated Use `Tabs2` & `Tab2` instead
 */
export const TabList = styled(
  forwardRef(
    (
      { children, selectedIndex, onSelectTab, className }: TabListProps,
      ref: Ref<HTMLDivElement>
    ) => {
      const { t } = useTranslation('TabList')

      const clonedChildren = Children.map(
        children,
        (child: JSX.Element, index: number) => {
          return cloneElement(child, {
            index,
            onSelect: () => onSelectTab && onSelectTab(index),
            selected: index === selectedIndex,
          })
        }
      )

      const navProps = useArrowKeyNav({ axis: 'horizontal', ref })

      return (
        <div
          aria-label={t('Tabs')}
          className={className}
          role="tablist"
          {...navProps}
        >
          {clonedChildren}
        </div>
      )
    }
  )
).attrs(({ fontSize = 'small' }) => ({
  fontSize,
}))`
  ${tabListCSS}
`
