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

export interface SemanticColor {
  /** The base color for a named color set. */
  main: string
  /** Usually a tint of the main color, used in cases like visited links or pressed buttons. */
  light: string
  /** Usually an even lighter tint of the main color. */
  lighter: string
  /** Base color for links in a color group. */
  linkColor: string
  /** Usually a dark tint of the main color, used to indicate interactivity such as button hover. */
  dark: string
  /** Usually an even darker tint of the main color, used to indicate an action like button press. */
  darker: string
  /** Primary border color for a semantic color group. */
  borderColor: string
  /** Base text color for a semantic color group. */
  text: string
}

export interface SemanticColors {
  /** Colors used for primary actions. */
  primary: SemanticColor
  /** Colors used for dangerous actions. */
  destructive: SemanticColor
}

export const semanticColors: SemanticColors = {
  destructive: {
    borderColor: red500,
    dark: red600,
    darker: red700,
    light: red100,
    lighter: red000,
    linkColor: blue500,
    main: red500,
    text: white,
  },
  primary: {
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
}
