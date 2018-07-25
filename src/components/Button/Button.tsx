// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
// End Typescript component boilerplate
import { rem, rgba } from 'polished'
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

function colorVariantMixin(
  backgroundColor: string,
  borderColor: string,
  textColor: string,
  boxShadowColor: string,
  hoverBackgroundColor: string,
  hoverBorderColor: string,
  activeBackgroundColor: string,
  activeBorderColor: string,
  activeTextColor: string
) {
  return css`
    background: ${backgroundColor};
    border: ${rem(1)} solid ${borderColor};
    color: ${textColor};

    &:focus {
      box-shadow: 0 0 0 0.15rem ${rgba(boxShadowColor, 0.25)};
    }

    &:hover,
    &:focus,
    &.hover {
      background: ${hoverBackgroundColor};
      border-color: ${hoverBorderColor};
    }

    &:active,
    &.active {
      background: ${activeBackgroundColor};
      border-color: ${activeBorderColor};
      color: ${activeTextColor};
    }
  `
}

function buttonVariant(
  color: ButtonColors | undefined,
  variant: ButtonVariants | undefined,
  theme: ThemeInterface,
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
  }

  switch (variant) {
    case ButtonVariants.Outline:
      return colorVariantMixin(
        '#fff',
        colors.secondary,
        colors.primary,
        colors.primary,
        '#fff',
        colors.primary,
        colors.primary,
        colors.primary,
        colors.text
      )
    case ButtonVariants.Transparent:
      return colorVariantMixin(
        'transparent',
        'transparent',
        colors.primary,
        colors.primary,
        'transparent',
        'transparent',
        colors.activeLight,
        'transparent',
        'inherit'
      )
    case ButtonVariants.Default:
    default:
      return colorVariantMixin(
        colors.primary,
        colors.primary,
        colors.text,
        colors.primary,
        colors.hover,
        colors.hover,
        colors.active,
        colors.active,
        colors.text
      )
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
  ${props =>
    buttonVariant(
      props.color,
      props.variant,
      props.theme,
      props.styleableProps
    )};
`
