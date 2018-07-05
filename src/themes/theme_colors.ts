import {gray200, primary500, primary600, primary700, red500, white} from '../styles/colors'

export interface ThemeColors {
  // Indicates a piece of UI that may be interactive
  action: string
  // Indicates a piece of interactive UI that is currently active, for example a pressed button.
  actionActive: string
  // Indicates interaction with a piece of UI, for example a hovered button.
  actionInteractive: string
  border: string
  danger: string
  disabled: string
  interact: string
  text: string
}

export const themeColors: ThemeColors = {
  action: primary500,
  actionInteractive: primary600,
  actionActive: primary700,
  danger: red500,
  disabled: gray200,
  border: primary500,
  interact: primary600,
  text: white
}
