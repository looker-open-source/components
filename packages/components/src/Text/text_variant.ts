import { variant } from 'styled-system'

export type TextVariants =
  | 'critical'
  | 'default'
  | 'positive'
  | 'secondary'
  | 'subdued'
  | 'inverted'

export interface TextVariantProps {
  /** Adjust style of text with more meaning by using an intent */
  variant?: TextVariants
}

export const textVariant = variant({
  prop: 'variant',
  variants: {
    critical: {
      color: 'palette.red500',
    },
    default: {
      color: 'palette.charcoal800',
    },
    inverted: {
      color: 'palette.textInverted',
    },
    positive: {
      color: 'palette.green500',
    },
    secondary: {
      color: 'palette.charcoal500',
    },
    subdued: {
      color: 'palette.charcoal400',
    },
  },
})
