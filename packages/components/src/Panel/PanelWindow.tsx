/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

export const PanelWindow = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  margin-top: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: ${({ theme: { zIndexFloor } }) => zIndexFloor};
`
