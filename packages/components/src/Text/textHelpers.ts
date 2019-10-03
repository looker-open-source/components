import { css } from 'styled-components'
import { Theme } from '@looker/design-tokens'

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

export type TextVariants =
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'subdued'
  | 'inverted'
