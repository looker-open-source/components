import { SemanticColor, SemanticColors } from '../../style'
import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
} from '../../types'
import { BoxPropsWithout } from '../Box'
import { Button } from '../Button'
import { Icon, IconNames } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

import * as React from 'react'

export type IconButtonSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface IconButtonProps
  extends BoxPropsWithout<HTMLButtonElement, 'type' | 'color'> {
  /**
   *  Determines if the icon button has a border
   *  @default false
   */
  outline?: boolean
  /**
   * The Icon to display inside of the button
   */
  icon: IconNames
  /**
   *  A hidden text label for the IconButton that is accessible to assistive technology
   */
  label: string
  /**
   *  Sets the size of the button
   * @default 'xsmall'
   */
  size?: IconButtonSizes
  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   */
  color?: keyof SemanticColors | SemanticColor

  innerRef?: React.RefObject<HTMLElement>
}

function iconSizeHelper(size: IconButtonSizes) {
  switch (size) {
    case 'xxsmall':
      return 10
    case 'xsmall':
      return 14
    case 'small':
      return 18
    case 'medium':
      return 26
    default:
      return 33
  }
}

export const IconButton: React.FC<IconButtonProps> = ({
  outline,
  icon,
  size,
  label,
  color,
  ...props
}) => (
  <Button
    color={color || 'neutral'}
    type="button"
    variant={outline ? 'outline' : 'transparent'}
    p="xxsmall"
    {...props}
  >
    <VisuallyHidden is="span">{label}</VisuallyHidden>
    <Icon name={icon} size={iconSizeHelper(size || 'xsmall')} />
  </Button>
)
