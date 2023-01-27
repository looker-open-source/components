/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'

export const innerInputStyle = css`
  background: transparent;
  border: none;
  caret-color: ${({ theme }) => theme.colors.key};
  color: inherit;
  font-family: inherit;
  height: 100%;
  outline: none;
  width: 100%;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text2};
  }
`
