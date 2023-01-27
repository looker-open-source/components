/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import type { CommonLayoutProps } from '../../utils/common'
import { commonLayoutCSS } from '../../utils/common'
import { OverflowShadow, useOverflow } from '../../../utils'
import { Section } from '../Section'

export interface LayoutProps
  extends CommonLayoutProps,
    CompatibleHTMLProps<HTMLElement> {
  /**
   * fixed position for header and footer
   * @default false
   */
  fixed?: boolean
  /**
   * Supports scroll
   * @default true
   */
  hasAside?: boolean
}

const hasAsideCSS = css`
  flex-direction: row;
  & > ${Section} {
    width: 0;
  }
`

const LayoutLayout = forwardRef(
  ({ children, ...props }: LayoutProps, forwardedRef: Ref<HTMLDivElement>) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)

    return (
      <OverflowShadow hasOverflow={hasOverflow} ref={ref} {...props}>
        {children}
      </OverflowShadow>
    )
  }
)

LayoutLayout.displayName = 'LayoutLayout'

export const Layout = styled(LayoutLayout)`
  ${commonLayoutCSS}
  display: flex;
  flex: 1 1 auto;
  overflow: ${({ fixed }) => (fixed ? 'hidden' : 'auto')};
  ${({ hasAside }) => (hasAside ? hasAsideCSS : 'flex-direction: column;')}
`
