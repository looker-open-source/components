// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../styled_components'
export { React, StyledComponentClass }
// End Typescript component boilerplate
import { rem, rgba } from 'polished'
import { brandFont } from '../../styles/typography'
import theme, { ThemeInterface } from '../../themes'
import { themeSpacing } from '../../themes/theme_spacing'

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
        colors.primary
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

  ${props => buttonSize(props.size)};
  ${props =>
    buttonVariant(
      props.color,
      props.variant,
      props.theme,
      props.styleableProps
    )};
  & + button {
    margin-left: ${themeSpacing.s};
  }
`
