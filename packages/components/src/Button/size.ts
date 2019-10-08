import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
} from '@looker/design-tokens'
import { variant } from 'styled-system'

export type ButtonSizes = SizeXSmall | SizeSmall | SizeMedium | SizeLarge

export interface ButtonSizeProps {
  /**
   * Defines the size of the button.
   * @default "medium"
   */
  size?: ButtonSizes
}

/* eslint-disable sort-keys */
export const buttonSize = variant({
  prop: 'size',
  variants: {
    xsmall: {
      fontSize: 'xsmall',
      height: '22px',
      px: 'xsmall',
    },
    small: {
      fontSize: 'small',
      height: '26px',
      px: 'small',
    },
    medium: {
      fontSize: 'medium',
      height: '34px',
      px: 'medium',
    },
    large: {
      fontSize: 'xlarge',
      height: '42px',
      px: 'large',
    },
  },
})
