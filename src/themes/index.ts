import { rem } from 'polished'
import { Easings, easings } from './theme_easings'
import { themeShadows, ThemeShadows } from './theme_elevation'
import {
  themeFontRamp,
  ThemeFontRamp,
  themeLineHeightRamp,
} from './theme_font_sizes'
import { palette, Palette } from './theme_palette'
import { SemanticColors, semanticColors } from './theme_semantic_colors'
import { themeSpacing, ThemeSpacing } from './theme_spacing'
import { themeTransitions, ThemeTransitions } from './theme_transitions'

export * from './theme_easings'

export interface ThemeInterface {
  easings: Easings
  fontRamp: ThemeFontRamp
  fontSizes: string[]
  lineHeightRamp: ThemeFontRamp
  lineHeights: string[]
  palette: Palette
  semanticColors: SemanticColors
  shadows: ThemeShadows
  space: string[]
  spacing: ThemeSpacing
  transitions: ThemeTransitions
}

export const theme = {
  easings,
  fontRamp: themeFontRamp,
  fontSizes: [0, 12, 14, 16, 18, 22, 25, 36, 46, 58].map(p => rem(p)),
  lineHeightRamp: themeLineHeightRamp,
  lineHeights: [0, 16, 20, 24, 28, 32, 40, 52, 64, 84].map(p => rem(p)),
  palette,
  semanticColors,
  shadows: themeShadows,
  space: [0, 4, 6, 8, 16, 20, 24, 30, 36, 46].map(p => rem(p)),
  spacing: themeSpacing,
  transitions: themeTransitions,
}
