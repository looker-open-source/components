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
  white,
} from '../styles/colors'

export interface NamedColor {
  /** The base color for a named color set. */
  main: string
  /** Usually a tint of the main color, used in cases like visited links or pressed buttons. */
  light: string
  /** Usually an even lighter tint of the main color. */
  lighter: string
  /** Usually a dark tint of the main color, used to indicate interactivity such as button hover. */
  dark: string
  /** Usually an even darker tint of the main color, used to indicate an action like button press. */
  darker: string
  borderColor: string
  text: string
}

export interface NamedColors {
  /** Colors used for primary actions */
  primary: NamedColor
  /** Colors used for dangerous actions */
  destructive: NamedColor
}

export interface ThemeColors {
  // Color for links
  linkColor: string
  white: string
  transparent: string
  namedColors: NamedColors
}

export const themeColors: ThemeColors = {
  linkColor: blue500,
  transparent: 'transparent',
  white,

  namedColors: {
    destructive: {
      borderColor: red500,
      dark: red600,
      darker: red700,
      light: red100,
      lighter: red000,
      main: red500,
      text: white,
    },
    primary: {
      borderColor: charcoal300,
      dark: primary600,
      darker: primary700,
      light: purple100,
      lighter: purple000,
      main: primary500,
      text: white,
    },
  },
}
