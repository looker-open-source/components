import {
  CustomizableAttributes,
  FontSizes,
  SemanticColor,
  SemanticColors,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  ThemedProps,
} from '@looker/design-tokens'

import { IconNames } from '@looker/icons'
import omit from 'lodash/omit'
import { rem } from 'polished'
import React, { FunctionComponent, Ref } from 'react'
import styled, { css, StyledComponent, withTheme } from 'styled-components'
// import { merge } from 'styled-system'
import { Box, BoxProps } from '../Box'
import { Icon } from '../Icon/Icon'

export type ButtonSizes = SizeXSmall | SizeSmall | SizeMedium | SizeLarge
export type ButtonSpacingSizes =
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge

export interface ButtonProps
  extends Omit<BoxProps<HTMLButtonElement>, 'size' | 'color'> {
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
   * The type of button to define
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button' | 'menu'
  /**
   * Defines the variant or mapping of colors to style properties, like border of the button.
   * @default "default"
   */
  variant?: 'default' | 'outline' | 'transparent'
  iconBefore?: IconNames | undefined
  iconAfter?: IconNames | undefined
}

type ComponentType = FunctionComponent<ThemedProps<ButtonProps>>
type StyledComponentType = StyledComponent<
  ComponentType,
  ThemedProps<ButtonProps>
>

// const variantCommonProps = (color: SemanticColor) => {
//   return {
//     '&:focus': {
//       boxShadow: `0 0 0 0.15rem ${rgba(color.main, 0.25)}`,
//     },
//     '&[disabled]': {
//       cursor: 'default',
//       filter: 'grayscale(0.3)',
//       opacity: '0.25',
//     },
//     borderStyle: 'solid',
//     borderWidth: rem(1),
//   }
// }

const defaultVariant = (color: SemanticColor) => {
  // return merge(variantCommonProps(color),
  return {
    '&:active, &.active': {
      background: color.darker,
      borderColor: color.darker,
    },
    '&:hover, &:focus, &.hover': {
      background: color.dark,
      borderColor: color.dark,
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: color.main,
        borderColor: color.borderColor,
      },
    },
    background: color.main,
    borderColor: color.main,
    color: color.text,
  }
}

const outlineVariant = (
  color: SemanticColor,
  props: ThemedProps<ButtonProps>
) => {
  // return merge(variantCommonProps(color),
  return {
    '&:active, &.active': {
      background: color.main,
      borderColor: color.main,
      color: color.text,
    },
    '&:hover, &:focus, &.hover': {
      background: props.theme.colors.palette.white,
      borderColor: color.main,
      color: color.darker,
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: props.theme.colors.palette.white,
        borderColor: color.borderColor,
        color: color.main,
      },
    },
    background: props.theme.colors.palette.white,
    borderColor: color.borderColor,
    color: color.main,
  }
}

const transparentVariant = (
  color: SemanticColor,
  props: ThemedProps<ButtonProps>
) => {
  // return merge(variantCommonProps(color), {
  return {
    background: props.theme.colors.palette.transparent,
    borderColor: props.theme.colors.palette.transparent,
    color: color.main,
    /* eslint-disable-next-line sort-keys */
    '&:active, &.active': {
      background: color.light,
      borderColor: color.light,
      color: color.altText,
    },
    '&:hover, &:focus, &.hover': {
      background: color.lighter,
      borderColor: color.lighter,
      color: color.altText,
    },
    '&[disabled]': {
      '&:hover, &:active, &:focus': {
        backgroundColor: props.theme.colors.palette.transparent,
        borderColor: props.theme.colors.palette.transparent,
        color: color.main,
      },
    },
  }
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
  const sizes: Record<ButtonSizes, [FontSizes, string, ButtonSpacingSizes]> = {
    large: ['xlarge', calcLineHeight(44), 'large'],
    medium: ['medium', calcLineHeight(36), 'medium'],
    small: ['small', calcLineHeight(28), 'small'],
    xsmall: ['xsmall', calcLineHeight(24), 'xsmall'],
  }
  const [fontSize, lineHeight, px] = sizes[props.size || 'medium']
  return {
    fontSize,
    lineHeight,
    px: !props.p ? px : undefined,
  }
}

function iconMargins(props: ThemedProps<ButtonProps>) {
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

function getIcon(iconName: IconNames | undefined) {
  return iconName ? <ButtonIcon name={iconName} /> : null
}

export const CustomizableButtonAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
}

// color is extracted here to ensure it is not passed to Box, creating a type
// error with the DOM's own color attribute.
const InternalButton: ComponentType = ({
  iconBefore,
  iconAfter,
  size,
  style,
  ...props
}) => {
  const { lineHeight, ...sizeHelperProps } = sizeHelper({
    size,
    ...props,
  })

  return (
    <Box
      borderRadius={CustomizableButtonAttributes.borderRadius}
      py={props.p ? undefined : 'none'}
      display="inline-flex"
      alignItems="center"
      {...sizeHelperProps}
      {...omit(props, 'color')}
      style={{ lineHeight, ...style }}
      // ts-ignore
      as="button"
    >
      {getIcon(iconBefore)}
      {props.children}
      {getIcon(iconAfter)}
    </Box>
  )
}

const ButtonFactory = React.forwardRef<
  StyledComponentType,
  ThemedProps<ButtonProps>
>((props: ThemedProps<ButtonProps>, ref: Ref<StyledComponentType>) => (
  <InternalButton ref={ref} {...props} />
))

const ButtonIcon = styled(Icon)``

export const Button = styled<ComponentType>(withTheme(ButtonFactory))`
  font-weight: 600;
  outline: none;
  transition: border 80ms;
  vertical-align: middle;
  white-space: nowrap;
  ${variantHelper};

  ${ButtonIcon} {
    ${iconMargins};
  }
`
