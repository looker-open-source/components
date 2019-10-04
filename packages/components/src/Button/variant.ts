import { rgba } from 'polished'
import {
  semanticColors,
  SemanticColor,
  SemanticColors,
} from '@looker/design-tokens'
import { css } from 'styled-components'

type ButtonVariants = 'default' | 'outline' | 'transparent'
type ButtonColors = keyof SemanticColors

export interface ButtonVariantProps {
  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  color?: ButtonColors

  /**
   * Defines the variant or mapping of colors to style properties, like border of the button.
   * @default "default"
   */
  variant?: ButtonVariants
}

const defaultVariant = (color: SemanticColor) => css`
  background: ${color.main};
  border: 1px solid ${color.main};
  color: ${color.text};

  &:active,
  &.active {
    background: ${color.darker};
    border-color: ${color.darker};
  }
  &:hover,
  &:focus,
  &.hover {
    background: ${color.dark};
    border-color: ${color.dark};
  }
  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${color.main};
      border-color: ${color.borderColor};
    }
  }
`

const outlineVariant = (color: SemanticColor) => css`
  background: ${props => props.theme.colors.palette.white};
  border: 1px solid ${color.borderColor};
  color: ${color.main};

  &:active,
  &.active {
    background: ${color.main};
    border-color: ${color.main};
    color: ${color.text};
  }

  &:hover,
  &:focus,
  &.hover {
    background: ${props => props.theme.colors.palette.white};
    border-color: ${color.main};
    color: ${color.darker};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${props => props.theme.colors.palette.white};
      border-color: ${color.borderColor};
      color: ${color.main};
    }
  }
`

const transparentVariant = (color: SemanticColor) => css`
  background: ${props => props.theme.colors.palette.transparent};
  border: 1px solid ${props => props.theme.colors.palette.transparent};
  color: ${color.main};

  &:active,
  &.active {
    background: ${color.light};
    border-color: ${color.light};
    color: ${color.altText};
  }

  &:hover,
  &:focus,
  &.hover {
    background: ${color.lighter};
    border-color: ${color.lighter};
    color: ${color.altText};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${props => props.theme.colors.palette.transparent};
      border-color: ${props => props.theme.colors.palette.transparent};
      color: ${color.main};
    }
  }
`

const variantFn = (color: SemanticColor, variant: ButtonVariants) => {
  switch (variant || 'default') {
    case 'transparent':
      return transparentVariant(color)
    case 'outline':
      return outlineVariant(color)
    case 'default':
    default:
      return defaultVariant(color)
  }
}

export const buttonVariant = (props: ButtonVariantProps) => {
  const color = semanticColors[props.color || 'primary']
  const variant = props.variant || 'default'

  return css`
    &:focus {
      box-shadow: 0 0 0 0.15rem ${rgba(color.main, 0.25)};
    }

    ${variantFn(color, variant)}
  `
}

export interface IconButtonVariantProps {
  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "neutral"
   */
  color?: ButtonColors

  /**
   * Defines the variant or mapping of colors to style properties, like border of the button.
   * @default false
   */
  outline?: boolean
}

export const iconButtonVariant = (props: IconButtonVariantProps) => {
  const color = semanticColors[props.color || 'primary']
  const variant = props.outline ? 'outline' : 'transparent'

  return css`
    &:focus {
      box-shadow: 0 0 0 0.15rem ${rgba(color.main, 0.25)};
    }

    ${variantFn(color, variant)}
  `
}
