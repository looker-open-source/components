import { rem } from 'polished'
import { themeColors, ThemeColors } from './theme_colors'
import { ThemeEasings, themeEasings } from './theme_easings'
import { themeShadows, ThemeShadows } from './theme_elevation'
import {
  themeFontRamp,
  ThemeFontRamp,
  themeLineHeightRamp
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

  fontSizes: string[]
  lineHeights: string[]
  space: string[]
}

const theme = {
  colors: themeColors,
  easings: themeEasings,
  fontRamp: themeFontRamp,
  lineHeightRamp: themeLineHeightRamp,
  shadows: themeShadows,
  spacing: themeSpacing,
  transitions: themeTransitions,

  // styled-system theme properties
  // tslint:disable-next-line:object-literal-sort-keys
  fontSizes: [0, 12, 14, 16, 18, 22, 25, 36, 46, 58].map(p => rem(p)),
  lineHeights: [0, 16, 20, 24, 28, 32, 40, 52, 64, 84].map(p => rem(p)),
  space: [0, 4, 6, 8, 16, 20, 24, 30, 36, 46].map(p => rem(p))
}

export default theme
