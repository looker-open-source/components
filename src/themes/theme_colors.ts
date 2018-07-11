import {
  fog300,
  purple200, purple300,
  primary500, primary600, primary700,
  red200, red300, red400, red500, red600, red700,

  white} from '../styles/colors'

export interface ThemeColors {
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

  // Default border and divider color
  borderColor: string

}

export const themeColors: ThemeColors = {
  primaryLighter: purple200,
  primaryLight: purple300,
  primary: primary500,
  primaryDark: primary600,
  primaryDarker: primary700,
  primaryText: white,

  destructiveLighter: red200,
  destructiveLight: red300,
  destructive: red500,
  destructiveDark: red600,
  destructiveDarker: red700,
  destructiveText: white,

  borderColor: fog300,

}
