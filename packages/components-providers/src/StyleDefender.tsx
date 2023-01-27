/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'

/* Enable this in near-future */
/* color: ${({ theme }) => theme.colors.background}; */

export const styleDefenderCSS = css`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: normal;
  width: 100%;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    box-sizing: border-box;
  }
`

export const StyleDefender = styled.div.attrs(
  ({ className = 'looker-components-reset' }) => ({ className })
)`
  background: ${({ theme }) => theme.colors.background};

  ${styleDefenderCSS}
`
