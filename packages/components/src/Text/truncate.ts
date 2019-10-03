import { css } from 'styled-components'

export interface TruncateProps {
  /** Truncate text */
  truncate?: boolean
  /** Truncate at a specified number of lines (whole number) */
  truncateLines?: number
}

const textTruncate = (lines?: number) => {
  if (lines && lines > 1) {
    // Despite the vendor prefixes below, this works in all mondern browsers (not IE11)
    return css`
      overflow: hidden;
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${lines};
      /* stylelint-enable */
    `
  }
  return css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

const shouldTruncate = (truncate?: boolean, truncateLines?: number) => {
  return truncate || truncateLines ? textTruncate(truncateLines) : ''
}

export const truncate = () =>
  css`
    ${(props: TruncateProps) =>
      shouldTruncate(props.truncate, props.truncateLines)}
  `
