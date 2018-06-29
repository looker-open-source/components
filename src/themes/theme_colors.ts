import {gray200, primary500, primary600, primary700, red500, white} from '../styles/colors'

export interface ThemeColors {
  action: string
  activate: string
  border: string
  danger: string
  disabled: string
  interact: string
  text: string
}

export const themeColors: ThemeColors = {
  action: primary500,
  activate: primary700,
  danger: red500,
  disabled: gray200,
  border: primary500,
  interact: primary600,
  text: white
}
