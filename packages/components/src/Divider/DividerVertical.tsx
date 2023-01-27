/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { space } from '@looker/design-tokens'
import type { DividerProps } from './Divider'
import { DividerBase } from './Divider'

export interface DividerVerticalProps extends DividerProps {
  height?: number | string
  stretch?: boolean
}

export const DividerVertical = styled(DividerBase).attrs<DividerVerticalProps>(
  props => {
    if (props.height && props.stretch) {
      // eslint-disable-next-line no-console
      console.warn(
        'When using DividerVertical, the props height and stretch are incompatible. The stretch value will be discarded'
      )
    }

    const { height = '1rem', mx = 'xsmall', my = 'xsmall' } = props

    return {
      ...props,
      'aria-orientation': 'vertical',
      height,
      mx,
      my,
    }
  }
)<DividerVerticalProps>`
  ${space}
  display: inline-block;
  width: ${({ size }) => size};
  ${({ height, stretch }) =>
    stretch ? `align-self: stretch; height: inherit;` : `height: ${height};`}
`
