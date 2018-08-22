import { rem, rgba } from 'polished'
import { mixed } from 'styled-system'
import styled, { css } from '../../styled_components'
import { brandFont } from '../../styles/typography'
import { ThemeInterface } from '../../themes'

export type ButtonSizes = 'xs' | 's' | 'm' | 'l'

export enum ButtonVariants {
  Default = 'default',
  Outline = 'outline',
  Transparent = 'transparent'
}

export enum ButtonColors {
  Default = 'default',
  Destructive = 'destructive'
}

export interface ButtonStyleableProps {
  active: string
  activeLight: string
  hover: string
  primary: string
  secondary: string
  text: string
}

export interface ButtonProps {
  color?: ButtonColors
  size?: ButtonSizes
  styleableProps?: ButtonStyleableProps
  variant?: ButtonVariants
}

interface ThemedButtonProps extends ButtonProps {
  theme: ThemeInterface
}

function colorVariantMixin(
  backgroundColor: string,
  borderColor: string,
  textColor: string,
  foucsIndicatorColor: string,
  hoverBackgroundColor: string,
  hoverBorderColor: string,
  hoverTextColor: string,
  activeBackgroundColor: string,
  activeBorderColor: string,
  activeTextColor: string
) {
  return css`
    background: ${backgroundColor};
    border: ${rem(1)} solid ${borderColor};
    color: ${textColor};

    &:focus {
      box-shadow: 0 0 0 0.15rem ${rgba(foucsIndicatorColor, 0.25)};
    }

    &:hover,
    &:focus,
    &.hover {
      background: ${hoverBackgroundColor};
      border-color: ${hoverBorderColor};
      color: ${hoverTextColor};
    }

    &:active,
    &.active {
      background: ${activeBackgroundColor};
      border-color: ${activeBorderColor};
      color: ${activeTextColor};
    }

    &[disabled] {
      cursor: default;
      filter: grayscale(0.3);
      opacity: 0.25;

      &:hover,
      &:active,
      &:focus {
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        color: ${textColor};
      }
    }
  `
}

function buttonVariant(
  color: ButtonColors | undefined,
  variant: ButtonVariants | undefined,
  themeForVariants: ThemeInterface,
  styleableProps: ButtonStyleableProps | undefined
) {
  const colors: ButtonStyleableProps = {
    active: '',
    activeLight: '',
    hover: '',
    primary: '',
    secondary: '',
    text: ''
  }

  if (styleableProps) {
    Object.assign(colors, styleableProps)
  } else {
    switch (color) {
      case ButtonColors.Destructive:
        colors.active = themeForVariants.colors.destructiveDarker
        colors.activeLight = themeForVariants.colors.destructiveLighter
        colors.hover = themeForVariants.colors.destructiveDark
        colors.primary = themeForVariants.colors.destructive
        colors.secondary = themeForVariants.colors.destructive
        colors.text = themeForVariants.colors.primaryText
        break
      case ButtonColors.Default:
      default:
        colors.active = themeForVariants.colors.primaryDarker
        colors.activeLight = themeForVariants.colors.primaryLighter
        colors.hover = themeForVariants.colors.primaryDark
        colors.primary = themeForVariants.colors.primary
        colors.secondary = themeForVariants.colors.borderColor
        colors.text = themeForVariants.colors.primaryText
        break
    }
  }

  switch (variant) {
    case ButtonVariants.Outline:
      return colorVariantMixin(
        // backgroundColor
        '#fff',
        // borderColor
        colors.secondary,
        // textColor
        colors.primary,
        // foucsIndicatorColor
        colors.primary,
        // hoverBackgroundColor
        '#fff',
        // hoverBorderColor
        colors.primary,
        // hoverTextColor
        colors.active,
        // activeBackgroundColor
        colors.primary,
        // activeBorderColor
        colors.primary,
        // activeTextColor
        colors.text
      )
    case ButtonVariants.Transparent:
      return colorVariantMixin(
        // backgroundColor
        'transparent',
        // borderColor
        'transparent',
        // textColor
        colors.primary,
        // foucsIndicatorColor
        colors.primary,
        // hoverBackgroundColor
        'transparent',
        // hoverBorderColor
        'transparent',
        // hoverTextColor
        colors.active,
        // activeBackgroundColor
        colors.activeLight,
        // activeBorderColor
        'transparent',
        // activeTextColor
        colors.active
      )
    case ButtonVariants.Default:
    default:
      return colorVariantMixin(
        // backgroundColor
        colors.primary,
        // borderColor
        colors.primary,
        // textColor
        colors.text,
        // foucsIndicatorColor
        colors.primary,
        // hoverBackgroundColor
        colors.hover,
        // hoverBorderColor
        colors.hover,
        // hoverTextColor
        colors.text,
        // activeBackgroundColor
        colors.active,
        // activeBorderColor
        colors.active,
        // activeTextColor
        colors.text
      )
  }
}

function sizeHelper(props: ThemedButtonProps) {
  const sizes: Record<ButtonSizes, number[]> = {
    l: [5, 5, 3, 6],
    m: [3, 3, 3, 4],
    s: [2, 2, 1, 4],
    xs: [1, 1, 1, 3]
  }
  const [fontSize, lineHeight, py, px] = sizes[props.size || 'm']
  return mixed({
    fontSize,
    lineHeight,
    px,
    py,
    theme: props.theme
  })
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
  ${sizeHelper};
  ${props =>
    buttonVariant(
      props.color,
      props.variant,
      props.theme,
      props.styleableProps
    )};
  & + button {
    margin-left: ${props => props.theme.spacing.s};
  }
`
