/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

export const TabIndicator = styled.span<{
  selected?: boolean
}>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.key : 'transparent'};
  border-radius: 3px 3px 0 0;
  bottom: 0;
  height: 3px;
  left: ${({ theme }) => theme.space.u4};
  position: absolute;
  right: ${({ theme }) => theme.space.u4};
`
