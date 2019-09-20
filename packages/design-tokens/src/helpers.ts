import { css } from 'styled-components'
import { Theme } from './theme'

export type TextTransforms = 'caps' | 'lower' | 'none' | 'upper'
export type TextVariants =
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'subdued'
  | 'inverted'

export const textTruncate = (lines?: number) => {
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

export const shouldTruncate = (truncate?: boolean, truncateLines?: number) => {
  return truncate || truncateLines ? textTruncate(truncateLines) : ''
}

export const getTextTransform = (transform: TextTransforms | undefined) => {
  switch (transform) {
    case 'upper':
      return css`
        text-transform: uppercase;
      `
    case 'lower':
      return css`
        text-transform: lowercase;
      `
    case 'caps':
      return css`
        text-transform: capitalize;
      `
    case 'none':
    default:
      return css`
        text-transform: none;
      `
  }
}

export const textVariant = (theme: Theme, variant?: TextVariants) => {
  switch (variant) {
    case 'critical':
      return css`
        color: ${theme.colors.palette.red500};
      `
    case 'positive':
      return css`
        color: ${theme.colors.palette.green500};
      `
    case 'secondary':
      return css`
        color: ${theme.colors.palette.charcoal500};
      `
    case 'subdued':
      return css`
        color: ${theme.colors.palette.charcoal400};
      `
    case 'inverted':
      return css`
        color: ${theme.colors.palette.textInverted};
      `
    default:
      return false
  }
}
