import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  pseudoClasses,
  PseudoProps,
  reset,
  SpaceProps,
  space,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
} from 'looker-design-tokens'
import { IconNames } from 'looker-icons'
import React, { forwardRef, Ref } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'
import { buttonCSS } from './ButtonBase'
import { IconButtonVariantProps, iconButtonVariant } from './variant'

export type IconButtonSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface IconButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'children' | 'type'>,
    IconButtonVariantProps,
    PseudoProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'

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
   *  Optional round icon button variant
   * @default 'square'
   */
  shape?: 'round' | 'square'
}

const iconSizeHelper = (size: IconButtonSizes) => {
  switch (size) {
    case 'xxsmall':
      return 12
    case 'xsmall':
      return 16
    case 'small':
      return 20
    case 'medium':
      return 28
    case 'large':
    default:
      return 36
  }
}

export const IconButtonStyle = styled.button<IconButtonProps>`
  ${buttonCSS}
  height: auto;
`

const IconButtonComponent = forwardRef(
  (props: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { icon, size, label } = props
    return (
      <IconButtonStyle ref={ref} color="neutral" p="none" {...props}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon
          name={icon}
          size={iconSizeHelper(size || 'xsmall')}
          aria-hidden={true}
        />
      </IconButtonStyle>
    )
  }
)

IconButtonComponent.displayName = 'IconButtonComponent'

export const IconButton = styled(IconButtonComponent)<IconButtonProps>`
  ${reset}
  ${space}

  padding: 3px;

  ${iconButtonVariant}
  ${pseudoClasses}
  ${({ shape }) => shape === 'round' && 'border-radius: 100%;'}
`
