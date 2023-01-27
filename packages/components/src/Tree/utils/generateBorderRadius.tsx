/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { RadiusSizes, Theme } from '@looker/design-tokens'
import { css } from 'styled-components'
import { LkFieldItemLabel } from '../../LkFieldTree/LkFieldItemLabel'
import { TreeItemContent } from '../TreeItemContent'

// Creates CSS for generating border radius on Tree and sub-Tree components
export const generateBorderRadius = (
  borderRadius: RadiusSizes,
  theme: Theme
) => {
  const { radii } = theme

  return css`
    ${TreeItemContent}, ${LkFieldItemLabel} {
      border-radius: ${radii[borderRadius]};
    }
  `
}
