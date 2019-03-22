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
import { Text } from '../Text'

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
}

function iconSizeHelper(size: IconButtonSizes) {
  switch (size) {
    case 'xxsmall':
      return 12
    case 'xsmall':
      return 16
    case 'small':
      return 20
    case 'medium':
      return 28
    default:
      return 35
  }
}

export const IconButton: React.SFC<IconButtonProps> = ({
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
    <Text visuallyHidden>{label} </Text>
    <Icon name={icon} size={iconSizeHelper(size || 'xsmall')} />
  </Button>
)
