/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import React, { forwardRef } from 'react'
import { fontSize, padding, reset } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { useArrowKeyNav } from '../utils'
import type { TabList2Props } from './types'

// add tabListCSS to the style of the component once TabList is deprecated
export const tabListCSS = css<TabList2Props>`
  ${reset}
  ${padding}
  ${fontSize}
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  ${({ distribute }) =>
    distribute &&
    css`
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      button {
        padding: 0;
        span {
          border-radius: 0;
        }
        span:first-child {
          padding: 0 ${({ theme }) => theme.space.u4};
        }
      }
    `}
`

export const TabList2 = styled(
  forwardRef(
    ({ children, className }: TabList2Props, ref: Ref<HTMLDivElement>) => {
      const { t } = useTranslation('TabList')
      const navProps = useArrowKeyNav({ axis: 'horizontal', ref })

      return (
        <div
          aria-label={t('Tabs')}
          className={className}
          role="tablist"
          {...navProps}
        >
          {children}
        </div>
      )
    }
  )
).attrs(({ fontSize = 'small' }) => ({
  fontSize,
}))`
  ${tabListCSS}
`
