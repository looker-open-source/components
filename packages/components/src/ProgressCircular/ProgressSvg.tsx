/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

export const CircleContainer = styled.svg`
  fill: transparent;
  height: 100%;
  position: absolute;
  stroke: ${({ theme }) => theme.colors.key};
  width: 100%;
`
