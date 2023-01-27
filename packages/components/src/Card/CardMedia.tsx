/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  BackgroundPositionProps,
  CompatibleHTMLProps,
  BackgroundColorProps,
} from '@looker/design-tokens'
import {
  backgroundPosition,
  shouldForwardProp,
  backgroundColor,
} from '@looker/design-tokens'

export interface CardMediaProps
  extends BackgroundPositionProps,
    BackgroundColorProps,
    CompatibleHTMLProps<HTMLDivElement> {
  image?: string
}

export const CardMedia = styled.div.withConfig({
  shouldForwardProp,
})<CardMediaProps>`
  ${backgroundColor}
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  ${backgroundPosition}
  background-size: cover;
  height: 0;
  overflow: hidden;
  padding-top: 56%;
`
