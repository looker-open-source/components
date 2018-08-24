import {
  blue500,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  primary500,
  primary600,
  primary700,
  purple000,
  purple100,
  red000,
  red100,
  red500,
  red600,
  red700,
  white
} from '../styles/colors'

export interface NamedColor {
  main: string
  light: string
  lighter: string
  dark: string
  darker: string
  borderColor: string
  text: string
}

export interface NamedColors {
  primary: NamedColor
  destructive: NamedColor
}

export interface ThemeColors {
  // Default border and divider color
  borderColor: string
  // Dark border & divider color
  borderColorDark: string
  // Light border & divider color
  borderColorLight: string
  // Border color for dividers on dark background
  borderColorOnDark: string
  // Destructive color in application, used for signaling a destructive or dangerous action
  destructive: string
  // Color for the destructive action's interactive state, a button hover for example
  destructiveDark: string
  // Color for the destructive action's pressed state a mouse click on a button for example
  destructiveDarker: string
  // Tint for alternate lighter styling of destructive action pressed state
  destructiveLight: string
  // Tint for alternate lighter styling of destructive action interactive state
  destructiveLighter: string
  // Color of text for a default destructive action
  destructiveText: string
  // Color for links
  linkColor: string
  // Primary color in application, mainly used for primary actions
  primary: string
  // Color for the  primary action's interactive state, a button hover for example
  primaryDark: string
  // Color for the primary action's pressed state, a mouse click on a button for example
  primaryDarker: string
  // Tint for alternate lighter styling of primary action pressed state
  primaryLight: string
  // Tint for alternate lighter styling of primary action interactive state
  primaryLighter: string
  // Color of text for a default primary action
  primaryText: string

  white: string
  transparent: string
  namedColors: NamedColors
}

export const themeColors: ThemeColors = {
  borderColor: charcoal300,
  borderColorDark: charcoal400,
  borderColorLight: charcoal200,
  borderColorOnDark: charcoal500,
  destructive: red500,
  destructiveDark: red600,
  destructiveDarker: red700,
  destructiveLight: red100,
  destructiveLighter: red000,
  destructiveText: white,
  linkColor: blue500,
  namedColors: {
    destructive: {
      borderColor: red500,
      dark: red600,
      darker: red700,
      light: red100,
      lighter: red000,
      main: red500,
      text: white
    },
    primary: {
      borderColor: charcoal300,
      dark: primary600,
      darker: primary700,
      light: purple100,
      lighter: purple000,
      main: primary500,
      text: white
    }
  },
  primary: primary500,
  primaryDark: primary600,
  primaryDarker: primary700,
  primaryLight: purple100,
  primaryLighter: purple000,
  primaryText: white,
  transparent: 'transparent',
  white
}
