/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import { fontSize, padding, reset } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { useArrowKeyNav, useTranslation } from '../utils'
import { TabIndicator } from './TabIndicator'
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
      ${TabIndicator} {
        border-radius: 0;
        height: 2px;
        left: 0;
        right: 0;
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
