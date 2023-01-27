/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'

export const InputArea = styled.div<{
  autoResize?: boolean
}>`
  align-items: center;
  ${({ autoResize }) =>
    autoResize &&
    css`
      align-items: stretch;
      display: flex;
      flex-direction: column;
    `}
  /* Workaround for Chip's truncate styling breaking flexbox layout in FieldChips */
  min-width: 0;
`
