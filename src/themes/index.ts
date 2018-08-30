import { rem } from 'polished'
import { Easings, easings } from './theme_easings'
import { shadows, Shadows } from './theme_elevation'
import { fontRamp, FontRamp, lineHeightRamp } from './theme_font_sizes'
import { palette, Palette } from './theme_palette'
import { SemanticColors, semanticColors } from './theme_semantic_colors'
import { spacing, Spacing } from './theme_spacing'
import { themeTransitions, ThemeTransitions } from './theme_transitions'

export * from './theme_easings'
export * from './theme_elevation'
export * from './theme_font_sizes'
export * from './theme_palette'
export * from './theme_semantic_colors'
export * from './theme_spacing'
export * from './theme_transitions'

export interface ThemeInterface {
  easings: Easings
  fontRamp: FontRamp
  fontSizes: string[]
  lineHeightRamp: FontRamp
  lineHeights: string[]
  palette: Palette
  semanticColors: SemanticColors
  shadows: Shadows
  space: string[]
  spacing: Spacing
  transitions: ThemeTransitions
}

export const theme = {
  easings,
  fontRamp,
  fontSizes: [0, 12, 14, 16, 18, 22, 25, 36, 46, 58].map(p => rem(p)),
  lineHeightRamp,
  lineHeights: [0, 16, 20, 24, 28, 32, 40, 52, 64, 84].map(p => rem(p)),
  palette,
  semanticColors,
  shadows,
  space: [0, 4, 6, 8, 16, 20, 24, 30, 36, 46].map(p => rem(p)),
  spacing,
  transitions: themeTransitions,
}

export default theme
