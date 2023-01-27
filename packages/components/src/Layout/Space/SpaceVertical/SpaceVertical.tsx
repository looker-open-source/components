/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { SpaceHelperProps } from '../Space'
import { defaultGap, spaceCSS } from '../Space'

export interface SpaceVerticalProps extends Omit<SpaceHelperProps, 'align'> {
  /**
   * Align items vertically.
   * `stretch` will cause items to stretch the full width of the `SpaceVertical`.
   * `start` & `end` will apply a `flex-start` and `flex-end` behavior respectively.
   * @default start
   */
  align?: SpaceHelperProps['align']
}

export const SpaceVertical = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<SpaceVerticalProps>(({ align = 'start', width = '100%' }) => ({
    align,
    width,
  }))<SpaceVerticalProps>`
  ${spaceCSS}
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  /* gap throws off spacing for around & evenly */
  ${({ around, evenly, gap = defaultGap, theme: { space } }) =>
    !around && !evenly && `gap: ${space[gap]} 0;`}
`
