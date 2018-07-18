import { themeColors, ThemeColors } from './theme_colors'
import { themeShadows, ThemeShadows } from './theme_elevation'
import { ThemeTransitions, themeTransitions } from './theme_transitions'

export interface ThemeInterface {
  colors: ThemeColors
  shadows: ThemeShadows
  transitions: ThemeTransitions
}

const theme = {
  colors: themeColors,
  shadows: themeShadows,
  transitions: themeTransitions
}

export default theme
