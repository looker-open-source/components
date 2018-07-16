import { rem, rgba } from 'polished'
import styled, { css } from '../../styled_components'
import { brandFont } from '../../styles/typography'
import { ThemeInterface } from '../../themes'

export enum ButtonSizes {
  ExtraSmall = 'xsmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum ButtonVariants {
  Default = 'default',
  Outline = 'outline',
  Transparent = 'transparent'
}

export enum ButtonColors {
  Default = 'default',
  Destructive = 'destructive'
}

export interface ButtonProps {
  color?: ButtonColors
  size?: ButtonSizes
  theme: ThemeInterface
  variant?: ButtonVariants
}

function buttonSize(size: ButtonSizes | undefined) {
  switch (size) {
    case ButtonSizes.ExtraSmall:
      return sizingMixin(12, 20, [2, 8])
    case ButtonSizes.Small:
      return sizingMixin(14, 24, [3, 14])
    case ButtonSizes.Large:
      return sizingMixin(22, 30, [8, 24])
    case ButtonSizes.Medium:
    default:
      return sizingMixin(16, 24, [6, 16])
  }
}

function sizingMixin(
  fontSize: number,
  lineHeight: number,
  [tbPadding, lrPadding]: number[]
) {
  return css`
    font-size: ${rem(fontSize)};
    line-height: ${rem(lineHeight)};
    padding: ${rem(tbPadding)} ${rem(lrPadding)};
  `
}

function buttonVariant(
  color: ButtonColors | undefined,
  variant: ButtonVariants | undefined,
  theme: ThemeInterface
) {
  const colors = {
    active: '',
    activeLight: '',
    hover: '',
    primary: '',
    secondary: '',
    text: ''
  }

  switch (color) {
    case ButtonColors.Destructive:
      colors.active = theme.colors.destructiveDarker
      colors.activeLight = theme.colors.destructiveLighter
      colors.hover = theme.colors.destructiveDark
      colors.primary = theme.colors.destructive
      colors.secondary = theme.colors.destructive
      colors.text = theme.colors.primaryText
      break
    case ButtonColors.Default:
    default:
      colors.active = theme.colors.primaryDarker
      colors.activeLight = theme.colors.primaryLighter
      colors.hover = theme.colors.primaryDark
      colors.primary = theme.colors.primary
      colors.secondary = theme.colors.borderColor
      colors.text = theme.colors.primaryText
      break
  }

  switch (variant) {
    case ButtonVariants.Outline:
      return css`
        background: #fff;
        border: ${rem(1)} solid ${colors.secondary};
        color: ${colors.primary};

        &:focus {
          box-shadow: 0 0 0 0.15rem ${rgba(colors.primary, 0.25)};
        }

        &:hover,
        &:focus,
        &.hover {
          background: #fff;
          border-color: ${colors.primary};
        }

        &:active,
        &.active {
          background: ${colors.primary};
          border-color: ${colors.primary};
          color: ${colors.text};
        }
      `
    case ButtonVariants.Transparent:
      return css`
        background: transparent;
        border: ${rem(1)} solid transparent;
        color: ${colors.primary};

        &:focus {
          box-shadow: 0 0 0 0.15rem ${rgba(colors.primary, 0.25)};
        }

        &:hover,
        &:focus,
        &.hover {
          background: transparent;
          color: ${colors.hover};
        }

        &:active,
        &.active {
          background: ${colors.activeLight};
        }
      `
    case ButtonVariants.Default:
    default:
      return css`
        background: ${colors.primary};
        border: ${rem(1)} solid ${colors.primary};
        color: ${colors.text};

        &:focus {
          box-shadow: 0 0 0 0.15rem ${rgba(colors.primary, 0.25)};
        }

        &:hover,
        &.hover,
        &:focus {
          background-color: ${colors.hover};
          border-color: ${colors.hover};
        }

        &:active,
        &.active {
          background-color: ${colors.active};
          border-color: ${colors.active};
          box-shadow: none;
        }
      `
  }
}

export const Button = styled<ButtonProps, 'button'>('button')`
  border-radius: ${rem(4)};
  cursor: pointer;
  display: inline-flex;
  font-family: ${brandFont};
  outline: none;
  transition: border 80ms;
  vertical-align: middle;
  white-space: nowrap;

  &[disabled] {
    cursor: default;
    filter: grayscale(0.3);
    opacity: 0.25;

    &:hover,
    &:active,
    &:focus {
      background-color: ${props => props.theme.colors.primary};
    }
  }

  ${props => buttonSize(props.size)};
  ${props => buttonVariant(props.color, props.variant, props.theme)};
`
