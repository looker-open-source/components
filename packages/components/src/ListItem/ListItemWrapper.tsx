/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ListColor } from '../List'

export interface ListItemWrapperProps extends CompatibleHTMLProps<HTMLElement> {
  color: ListColor
}

export const ListItemWrapper = styled.li.attrs(
  ({ role = 'none', color = 'text5' }) => ({ color, role })
)`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  list-style-type: none;
  outline: none;
  text-decoration: none;

  &[disabled] {
    & > * {
      cursor: not-allowed;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }
`
