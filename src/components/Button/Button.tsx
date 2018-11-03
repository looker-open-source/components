import { rem, rgba } from 'polished'
import * as React from 'react'
import { merge, mixed } from 'styled-system'
import { SemanticColor, SemanticColors, styled } from '../../style'
import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  ThemedProps,
} from '../../types'
import { Box, BoxPropsWithout } from '../Box'

export type ButtonSizes = SizeXSmall | SizeSmall | SizeMedium | SizeLarge
export type ButtonSpacingSizes =
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge

export interface ButtonProps extends BoxPropsWithout<'color'> {
  /**
   * Allow className to be passed through to base component.
   */
  className?: string
  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  color?: keyof SemanticColors | SemanticColor
  /**
   * Determines if the button is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Defines the size of the button.
   * @default "medium"
   */
  size?: ButtonSizes
  /**
   * Defines the variant or mapping of colors to style properties, like border of the button.
   * @default "default"
   */
  variant?: 'default' | 'outline' | 'transparent'
  /**
   * Optional function to be triggered when a user clicks a button.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * The type of button to define
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button' | 'menu'
}

const variantCommonProps = (color: SemanticColor) => {
  return {
    borderStyle: 'solid',
    borderWidth: rem(1),
    // tslint:disable-next-line:object-literal-sort-keys
    '&:focus': {
      boxShadow: `0 0 0 0.15rem ${rgba(color.main, 0.25)}`,
    },
    '&[disabled]': {
      cursor: 'default',
      filter: 'grayscale(0.3)',
      opacity: '0.25',
    },
  }
}

const defaultVariant = (color: SemanticColor) => {
  return merge(variantCommonProps(color), {
    background: color.main,
    borderColor: color.main,
    color: color.text,
    // tslint:disable-next-line:object-literal-sort-keys
    '&:hover, &:focus, &.hover': {
      background: color.dark,
      borderColor: color.dark,
    },
    '&:active, &.active': {
      background: color.darker,
      borderColor: color.darker,
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: color.main,
        borderColor: color.borderColor,
      },
    },
  })
}

const outlineVariant = (
  color: SemanticColor,
  props: ThemedProps<ButtonProps>
) => {
  return merge(variantCommonProps(color), {
    background: props.theme.colors.palette.white,
    borderColor: color.borderColor,
    color: color.main,
    // tslint:disable-next-line:object-literal-sort-keys
    '&:hover, &:focus, &.hover': {
      background: props.theme.colors.palette.white,
      borderColor: color.main,
      color: color.darker,
    },
    '&:active, &.active': {
      background: color.main,
      borderColor: color.main,
      color: color.text,
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: props.theme.colors.palette.white,
        borderColor: color.borderColor,
        color: color.main,
      },
    },
  })
}

const transparentVariant = (
  color: SemanticColor,
  props: ThemedProps<ButtonProps>
) => {
  return merge(variantCommonProps(color), {
    background: props.theme.colors.palette.transparent,
    borderColor: props.theme.colors.palette.transparent,
    color: color.main,
    // tslint:disable-next-line:object-literal-sort-keys
    '&:hover, &:focus, &.hover': {
      background: color.lighter,
      borderColor: color.lighter,
      color: color.altText,
    },
    '&:active, &.active': {
      background: color.light,
      borderColor: color.light,
      color: color.altText,
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: props.theme.colors.palette.transparent,
        borderColor: props.theme.colors.palette.transparent,
        color: color.main,
      },
    },
  })
}

const variantHelper = (props: ThemedProps<ButtonProps>) => {
  let color
  if (typeof props.color === 'string' || props.color === undefined) {
    color = props.theme.colors.semanticColors[props.color || 'primary']
  } else {
    color = props.color
  }
  switch (props.variant || 'default') {
    case 'transparent':
      return transparentVariant(color, props)
    case 'outline':
      return outlineVariant(color, props)
    case 'default':
    default:
      return defaultVariant(color)
  }
}

// Accepts a number and subtracts two from it to accout for border in button height
function calcLineHeight(size: number) {
  return `${size - 2}px`
}

function sizeHelper(props: ThemedProps<ButtonProps>) {
  const sizes: Record<ButtonSizes, [number, string, ButtonSpacingSizes]> = {
    large: [2, calcLineHeight(44), 'xlarge'],
    medium: [4, calcLineHeight(36), 'large'],
    small: [5, calcLineHeight(28), 'medium'],
    xsmall: [6, calcLineHeight(24), 'small'],
  }
  const [fontSize, lineHeight, px] = sizes[props.size || 'medium']
  return mixed({
    fontSize,
    lineHeight,
    px,
    theme: props.theme,
  })
}

// color is extracted here to ensure it is not passed to Box, creating a type
// error with the DOM's own color attribute.
const InternalButton: React.SFC<ButtonProps> = ({ color, ...props }) => (
  <Box
    is="button"
    borderRadius="medium"
    fontFamily="brand"
    py="none"
    {...props}
  >
    {props.children}
  </Box>
)

export const Button = styled<ButtonProps>(InternalButton)`
  cursor: pointer;
  font-weight: 600;
  outline: none;
  transition: border 80ms;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
  white-space: nowrap;
  ${sizeHelper};
  ${variantHelper};
`
