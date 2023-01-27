/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FlexboxProps } from '@looker/design-tokens'
import { flexbox, shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ComplexLayoutProps } from '../utils/complex'
import { complexLayoutCSS } from '../utils/complex'

export interface FlexItemProps extends ComplexLayoutProps, FlexboxProps {}

/**
 * @deprecated - Use `Box2` or `div` instead.
 * NOTE: It's quite possible you don't need `FlexItem` at all
 */
export const FlexItem = styled.div.withConfig({
  shouldForwardProp,
})<FlexItemProps>`
  ${complexLayoutCSS}
  ${flexbox}
  /*
   * A min-width must be set here to resolve a firefox bug where any children
   * with style of text-overflow: ellipsis; will otherwise not truncate the
   * text appropriately. */
  min-width: 0; /* IMPORTANT!! Do not delete! */
`
