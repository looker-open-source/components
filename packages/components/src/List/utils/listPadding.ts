/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import { Divider } from '../../Divider'

/**
 * Produces a CSS interpolation for a styled collection component (e.g. Menu, Select)
 * that applies spacing to the top of the first item, the bottom of the last,
 * and the top and bottom of each divider.
 * @param ItemComponent the styled item component in the collection, (e.g. MenuItem, ComboboxOption)
 */
export const listPadding = css`
  > :first-child {
    margin-top: ${({ theme }) => theme.space.u2};

    ${Divider} {
      display: none;
    }
  }

  > :last-child {
    margin-bottom: ${({ theme }) => theme.space.u2};

    ${Divider} {
      display: none;
    }
  }
`
