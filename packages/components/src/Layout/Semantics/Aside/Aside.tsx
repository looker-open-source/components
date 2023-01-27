/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type {
  CompatibleHTMLProps,
  ResponsiveValue,
} from '@looker/design-tokens'
import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import { OverflowShadow, useOverflow } from '../../../utils'
import type { CommonLayoutProps } from '../../utils/common'
import { commonLayoutCSS } from '../../utils/common'
import type { AsideSizeRamp } from './asideWidth'
import { asideWidth } from './asideWidth'

export type AsideProps = CommonLayoutProps &
  CompatibleHTMLProps<HTMLElement> & {
    /**
     * Prevent `Aside` from being rendered.
     * @default false
     */
    collapse?: boolean
    /**
     * To be used within the context of `<Page fixed>` container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean
    /**
     * Specify width of aside
     * @default sidebar
     */
    width?: ResponsiveValue<AsideSizeRamp | string>
  }

const AsideLayout = forwardRef(
  (
    { collapse, children, ...props }: AsideProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)

    return collapse ? null : (
      <OverflowShadow as="aside" hasOverflow={hasOverflow} ref={ref} {...props}>
        {children}
      </OverflowShadow>
    )
  }
)

AsideLayout.displayName = 'AsideLayout'

export const Aside = styled(AsideLayout)
  .withConfig<AsideProps>({
    shouldForwardProp: prop => prop === 'collapse' || shouldForwardProp(prop),
  })
  .attrs<AsideProps>(({ width = 'sidebar' }) => ({
    width,
  }))<AsideProps>`
${commonLayoutCSS}

flex: 0 0 ${({ width }) => width};
max-width: ${({ width }) => width};
min-width: ${({ width }) => width};
overflow: auto;
width: 0;
${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}

${asideWidth}`
