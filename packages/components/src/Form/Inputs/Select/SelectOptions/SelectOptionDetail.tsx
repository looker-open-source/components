/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

/**
 * @TODO: Delete SelectOptionDetail after Select is refactored with createListItemPartitions
 */
export const SelectOptionDetail = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.text2};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  margin-left: auto;
`
