import {
  gray200,
  purple200, purple300,
  primary500, primary600, primary700,
  red200, red300, red500, red600, red700,
  white} from '../styles/colors'

export interface ThemeColors {
  // Primary color in application, mainly used for primary actions
  primary: string
  // Color for the  primary action's interactive state, a button hover for example
  primaryOver: string
  // Color for the primary action's pressed state, a mouse click on a button for example
  primaryPress: string
  // Tint for alternate lighter styling of primary action interactive state
  primaryLightOver: string
  // Tint for alternate lighter styling of primary action pressed state
  primaryLightPress: string
  // Color of text for a default primary action
  primaryText: string

  // Destructive color in application, used for signaling a destructive or dangerous action
  destructive: string
  // Color for the destructive action's interactive state, a button hover for example
  destructiveOver: string
  // Color for the destructive action's pressed state a mouse click on a button for example
  destructivePress: string
  // Tint for alternate lighter styling of destructive action interactive state
  destructiveLightOver: string
  // Tint for alternate lighter styling of destructive action pressed state
  destructiveLightPress: string
  // Color of text for a default destructive action
  destructiveText: string

}

export const themeColors: ThemeColors = {
  primaryLightOver: purple200,
  primaryLightPress: purple300,
  primary: primary500,
  primaryOver: primary600,
  primaryPress: primary700,
  primaryText: white,

  destructiveLightOver: red200,
  destructiveLightPress: red300,
  destructive: red500,
  destructiveOver: red600,
  destructivePress: red700,
  destructiveText: white
}
