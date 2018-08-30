import { rem } from 'polished'
import { ThemeEasings, themeEasings } from './theme_easings'
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

export interface ThemeInterface {
  easings: ThemeEasings
  fontRamp: ThemeFontRamp
  fontSizes: string[]
  lineHeightRamp: ThemeFontRamp
  lineHeights: string[]
  palette: Palette
  semanticColors: SemanticColors
  shadows: ThemeShadows
  space: string[]
  spacing: ThemeSpacing
  spaced: object
  transitions: ThemeTransitions
}

const theme = {
  easings: themeEasings,
  fontRamp: themeFontRamp,
  fontSizes: [0, 12, 14, 16, 18, 22, 25, 36, 46, 58].map(p => rem(p)),
  lineHeightRamp: themeLineHeightRamp,
  lineHeights: [0, 16, 20, 24, 28, 32, 40, 52, 64, 84].map(p => rem(p)),
  palette,
  semanticColors,
  shadows: themeShadows,
  // tslint:disable:object-literal-sort-keys
  space: {
    none: 0,
    xsmall: rem(4),
    small: rem(8),
    medium: rem(16),
    large: rem(20),
    xlarge: rem(30),
    xxlarge: rem(40),
    xxxlarge: rem(60),
  },
  spacing: themeSpacing,
  transitions: themeTransitions,
}

export default theme
