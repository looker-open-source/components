/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  SizeProps,
  SpaceProps,
} from '@looker/design-tokens'
import { size, space } from '@looker/design-tokens'
import styled from 'styled-components'

export interface IconPlaceholderProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    SizeProps,
    SpaceProps {}

export const IconPlaceholder = styled.div.attrs<IconPlaceholderProps>(() => ({
  'aria-hidden': true,
}))<IconPlaceholderProps>`
  ${size}
  ${space}
`
