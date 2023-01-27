/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { CommonLayoutProps } from '../../utils/common'
import { commonLayoutCSS } from '../../utils/common'
import { OverflowShadow, useOverflow } from '../../../utils'

export type SectionProps = CommonLayoutProps &
  CompatibleHTMLProps<HTMLElement> & {
    /**
     * When true the DOM element transition from section to main.
     * @default false
     */
    main?: boolean
    /**
     * To be used within the context of <Page fixed> container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean
  }

const SectionLayout = forwardRef(
  (
    { main, children, ...props }: SectionProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)
    return (
      <OverflowShadow
        as={main ? 'main' : 'section'}
        hasOverflow={hasOverflow}
        ref={ref}
        {...props}
      >
        {children}
      </OverflowShadow>
    )
  }
)

SectionLayout.displayName = 'SectionLayout'

export const Section = styled(SectionLayout)`
  ${commonLayoutCSS}
  flex: 1 0 auto;
  overflow: auto;
  ${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}
`
