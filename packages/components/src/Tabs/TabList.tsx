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

import { useTranslation } from 'react-i18next'
import type { Ref } from 'react'
import React, { Children, cloneElement, forwardRef } from 'react'
import type { FontSizeProps, PaddingProps } from '@looker/design-tokens'
import styled from 'styled-components'
import { useArrowKeyNav } from '../utils'
import { tabListCSS } from '../Tabs2/TabList2'

export interface TabListProps extends PaddingProps, FontSizeProps {
  children: JSX.Element[]
  selectedIndex?: number
  onSelectTab?: (index: any) => void
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
