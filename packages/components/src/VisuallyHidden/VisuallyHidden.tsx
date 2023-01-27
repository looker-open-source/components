/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'

export const visuallyHiddenStyle = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 1px;
  color: #000;
`

export const VisuallyHidden = styled.div`
  ${visuallyHiddenStyle}
`
