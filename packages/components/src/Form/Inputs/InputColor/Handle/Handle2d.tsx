/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { HandleProps } from './Handle'
import { HANDLE_SIZE, handleCSS } from './Handle'

interface Handle2dProps extends HandleProps {
  y: number
}

export const Handle2d = styled.div.attrs<Handle2dProps>(({ color, x, y }) => ({
  style: {
    backgroundColor: color,
    // The ${HANDLE_SIZE} / 2 offset centers the handle on the click position
    transform: `translate(calc(${x}px - ${HANDLE_SIZE} / 2), calc(${y}px - ${HANDLE_SIZE} / 2))`,
  },
}))<Handle2dProps>`
  ${handleCSS}
`
