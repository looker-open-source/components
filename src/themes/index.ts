import { themeColors, ThemeColors } from './theme_colors'
import { themeShadows, ThemeShadows } from './theme_elevation'
import { themeFontRamp, ThemeFontRamp } from './theme_font_sizes'
import { themeSpacing, ThemeSpacing } from './theme_spacing'
import { themeTransitions, ThemeTransitions } from './theme_transitions'

export interface ThemeInterface {
  colors: ThemeColors
  fontRamp: ThemeFontRamp
  shadows: ThemeShadows
  spacing: ThemeSpacing
  transitions: ThemeTransitions
}

const theme = {
  colors: themeColors,
  fontRamp: themeFontRamp,
  shadows: themeShadows,
  spacing: themeSpacing,
  transitions: themeTransitions
}

export default theme
