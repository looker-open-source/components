import { rem, rgba } from 'polished'
import { merge, mixed } from 'styled-system'
import styled from '../../styled_components'
import { brandFont } from '../../styles/typography'
import { ThemeInterface } from '../../themes'
import { Color } from '../../themes/theme_colors'

export type ButtonSizes = 'xs' | 's' | 'm' | 'l'

export enum ButtonVariants {
  Default = 'default',
  Outline = 'outline',
  Transparent = 'transparent'
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
  color?: 'primary' | 'destructive' | string
  size?: ButtonSizes
  styleableProps?: ButtonStyleableProps
  variant?: ButtonVariants
}

interface ThemedButtonProps extends ButtonProps {
  theme: ThemeInterface
}

const variantCommonProps = (color: Color) => {
  return {
    borderStyle: 'solid',
    borderWidth: rem(1),
    // tslint:disable-next-line:object-literal-sort-keys
    '&:focus': {
      boxShadow: `0 0 0 0.15rem ${rgba(color.main, 0.25)}`
    },
    '&[disabled]': {
      cursor: 'default',
      filter: 'grayscale(0.3)',
      opacity: '0.25'
    }
  }
}

const defaultVariant = (color: Color) => {
  return merge(variantCommonProps(color), {
    background: color.main,
    borderColor: color.borderColor,
    color: color.text,
    // tslint:disable-next-line:object-literal-sort-keys
    '&:hover, &:focus, &.hover': {
      background: color.dark,
      borderColor: color.dark
    },
    '&:active, &.active': {
      background: color.darker,
      borderColor: color.darker
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: color.main,
        borderColor: color.borderColor
      }
    }
  })
}

const outlineVariant = (color: Color, props: ThemedButtonProps) => {
  return merge(variantCommonProps(color), {
    background: props.theme.colors.white,
    borderColor: color.borderColor,
    color: color.main,
    // tslint:disable-next-line:object-literal-sort-keys
    '&:hover, &:focus, &.hover': {
      background: props.theme.colors.white,
      borderColor: color.main,
      color: color.darker
    },
    '&:active, &.active': {
      background: color.main,
      borderColor: color.main,
      color: color.text
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: props.theme.colors.white,
        borderColor: color.borderColor,
        color: color.main
      }
    }
  })
}

const transparentVariant = (color: Color, props: ThemedButtonProps) => {
  return merge(variantCommonProps(color), {
    background: props.theme.colors.transparent,
    borderColor: props.theme.colors.transparent,
    color: color.main,
    // tslint:disable-next-line:object-literal-sort-keys
    '&:hover, &:focus, &.hover': {
      background: props.theme.colors.transparent,
      borderColor: props.theme.colors.transparent,
      color: color.darker
    },
    '&:active, &.active': {
      background: color.lighter,
      borderColor: props.theme.colors.transparent,
      color: color.darker
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: props.theme.colors.transparent,
        borderColor: props.theme.colors.transparent,
        color: color.main
      }
    }
  })
}

const variantHelper = (props: ThemedButtonProps) => {
  const color = props.theme.colors.namedColors[props.color || 'primary']
  switch (props.variant || 'default') {
    case ButtonVariants.Transparent:
      return transparentVariant(color, props)
    case ButtonVariants.Outline:
      return outlineVariant(color, props)
    case ButtonVariants.Default:
    default:
      return defaultVariant(color)
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
  ${variantHelper};
  & + button {
    margin-left: ${props => props.theme.spacing.s};
  }
`
