/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { Layout } from './Layout'

export const Page = styled(Layout)`
  background: ${({ theme }) => theme.colors.pageBackground};
  font-family: ${({ theme }) => theme.fonts.body};

  ${({ fixed }) => fixed && `height: 100vh;`}
  width: 100%;
`
