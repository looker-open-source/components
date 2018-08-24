import { themeColors, ThemeColors } from './theme_colors'
import { ThemeEasings, themeEasings } from './theme_easings'
import { themeShadows, ThemeShadows } from './theme_elevation'
import {
  themeFontRamp,
  ThemeFontRamp,
  themeLineHeightRamp,
} from './theme_font_sizes'
import { themeSpacing, ThemeSpacing } from './theme_spacing'
import { themeTransitions, ThemeTransitions } from './theme_transitions'

export interface ThemeInterface {
  colors: ThemeColors
  easings: ThemeEasings
  fontRamp: ThemeFontRamp
  lineHeightRamp: ThemeFontRamp
  shadows: ThemeShadows
  spacing: ThemeSpacing
  transitions: ThemeTransitions
}

const theme = {
  colors: themeColors,
  easings: themeEasings,
  fontRamp: themeFontRamp,
  lineHeightRamp: themeLineHeightRamp,
  shadows: themeShadows,
  spacing: themeSpacing,
  transitions: themeTransitions,
}

export default theme
