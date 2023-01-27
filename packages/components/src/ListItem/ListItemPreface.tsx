/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

export const ListItemPreface = styled.p`
  color: ${({ theme: { colors } }) => colors.text2};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxsmall};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.xxsmall};
  margin: 0;
`
