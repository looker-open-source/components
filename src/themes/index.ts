import { themeColors, ThemeColors } from './theme_colors'
import { themeShadows, ThemeShadows } from './theme_elevation'

export interface ThemeInterface {
  colors: ThemeColors
  shadows: ThemeShadows
}

const theme = {
  colors: themeColors,
  shadows: themeShadows
}

export default theme
