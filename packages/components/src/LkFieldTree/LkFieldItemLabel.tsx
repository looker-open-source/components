/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { ListItemBackgroundColorProps } from '../ListItem/utils'
import { listItemBackgroundColor } from '../ListItem/utils'

export const LkFieldItemLabel = styled.div<ListItemBackgroundColorProps>`
  ${listItemBackgroundColor}
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`
