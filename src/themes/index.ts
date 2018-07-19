import { themeColors, ThemeColors } from './theme_colors'
import { themeShadows, ThemeShadows } from './theme_elevation'
import { ThemeTransitions, themeTransitions } from './theme_transitions'
import { ThemeSpacing, themeSpacing } from './theme_spacing'

export interface ThemeInterface {
  colors: ThemeColors
  shadows: ThemeShadows
  spacing: ThemeSpacing
  transitions: ThemeTransitions
}

const theme = {
  colors: themeColors,
  shadows: themeShadows,
  spacing: themeSpacing,
  transitions: themeTransitions
}

export default theme
