/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import {
  OverlaySurface,
  OverlaySurfaceContentArea,
} from '../Overlay/OverlaySurface'

export const NestedMenuSurface = styled(OverlaySurface)`
  &[data-placement] {
    padding: 0;
  }
  ${OverlaySurfaceContentArea} {
    box-shadow: ${({ theme }) => theme.elevations.plus2};
  }
`
