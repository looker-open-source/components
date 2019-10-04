import { css } from 'styled-components'

export interface TruncateProps {
  /** Truncate text */
  truncate?: boolean
  /** Truncate at a specified number of lines (whole number) */
  truncateLines?: number
}

const textTruncate = (props: TruncateProps) => {
  const { truncateLines } = props

  if (truncateLines && truncateLines > 1) {
    // Despite the vendor prefixes below, this works in all mondern browsers (not IE11)
    return css`
      overflow: hidden;
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${truncateLines};
      /* stylelint-enable */
    `
  }
  return css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

export const truncate = (props: TruncateProps) =>
  css`
    ${props.truncate || props.truncateLines ? textTruncate : null}
  `
