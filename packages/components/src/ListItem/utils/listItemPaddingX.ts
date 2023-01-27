/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityRamp } from '@looker/design-tokens'
import { css } from 'styled-components'
import { listItemDimensions } from './listItemDimensions'

export const listItemPaddingX = (density: DensityRamp = 0) => css`
  ${({ theme: { space } }) =>
    `
      padding-left: ${space[listItemDimensions(density).px]};
      padding-right: ${space[listItemDimensions(density).px]};
    `}
`
