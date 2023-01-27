/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'

export interface TruncateCSSProps {
  /** Truncate text */
  truncate?: boolean
  /** Truncate at a specified number of lines (whole number) */
  truncateLines?: number
}

const textTruncate = (props: TruncateCSSProps) => {
  const { truncateLines } = props

  if (truncateLines && truncateLines > 1) {
    // Despite the vendor prefixes below, this works in all modern browsers
    return css`
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: ${truncateLines};
      overflow: hidden;
      /* stylelint-enable */
    `
  }
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

/**
 * Helper function that allows external developers
 * to leverage `textTruncate` behavior as a CSS interpolated
 * string
 */
export const truncateCSS = (props: TruncateCSSProps) =>
  css`
    ${props.truncate || props.truncateLines ? textTruncate : null}
  `
