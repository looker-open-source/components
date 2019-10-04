import { IconNames } from '@looker/icons'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { Icon } from '../Icon'
import { ButtonProps } from './Button'

export interface ButtonIconProps {
  iconBefore?: IconNames | undefined
  iconAfter?: IconNames | undefined
}

export const iconMargins = (props: ButtonProps) => {
  const spacing = { large: 0, small: 0 }
  switch (props.size) {
    case 'xsmall':
      spacing.small = 2
      spacing.large = 4
      break
    case 'small':
    case 'large':
    default:
      spacing.small = 4
      spacing.large = 8
  }

  if (props.iconBefore) {
    return css`
      margin-left: -${rem(spacing.small)};
      margin-right: ${rem(spacing.large)};
    `
  } else if (props.iconAfter) {
    return css`
      margin-left: ${rem(spacing.large)};
      margin-right: -${rem(spacing.small)};
    `
  } else {
    return false
  }
}

export const ButtonIcon = styled(Icon)``

export const buttonIcon = (props: ButtonProps) => css`
  ${ButtonIcon} {
    ${iconMargins(props)};
  }
`
