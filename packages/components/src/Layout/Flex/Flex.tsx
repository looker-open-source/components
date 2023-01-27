/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens'
import { flexbox, shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ComplexLayoutProps } from '../utils/complex'
import { complexLayoutCSS } from '../utils/complex'

/**
 * styled-system has its own FlexBoxProps, so we call this one FlexProps to disambiguate.
 */
export interface FlexProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    Omit<ComplexLayoutProps, 'display'>,
    FlexboxProps {}

/**
 * @deprecated - Use a more specific layout helper such as `Space` or `SpaceVertical`,
 * Alternatively `<Box2 display="flex" />` fully replicates previous `Flex` behavior
 */
export const Flex = styled.div.withConfig({ shouldForwardProp })<FlexProps>`
  ${complexLayoutCSS}
  ${flexbox}
  display: flex;
`
