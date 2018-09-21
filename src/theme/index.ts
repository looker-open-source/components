import { rem } from 'polished'
import { InterpolationValue } from '../styled_components'
import { Easings, easings } from './easings'
import { shadows, Shadows } from './elevation'
import { fontRamp, FontRamp, lineHeightRamp } from './font_sizes'
import { palette, Palette } from './palette'
import { SemanticColors, semanticColors } from './semantic_colors'
import { spacing, Spacing } from './spacing'
import { transitions, Transitions } from './transitions'

export * from './easings'
export * from './elevation'
export * from './font_sizes'
export * from './palette'
export * from './semantic_colors'
export * from './spacing'
export * from './transitions'

export interface Theme {
  breakpoints: string[]
  easings: Easings
  fontRamp: FontRamp
  fontSizes: string[]
  lineHeightRamp: FontRamp
  lineHeights: string[]
  palette: Palette
  /**
   * A function that can be overridden to return different reset css properties
   * or null to remove all resets. Most base elements in Lens implement the reset.
   */
  reset: () => InterpolationValue
  semanticColors: SemanticColors
  shadows: Shadows
  space: object
  spacing: Spacing
  transitions: Transitions
}

export const theme: Theme = {
  breakpoints: ['30rem', '48rem', '64rem', '75rem', '90rem'],
  easings,
  fontRamp,
  fontSizes: [0, 12, 14, 16, 18, 22, 25, 36, 46, 58].map(p => rem(p)),
  lineHeightRamp,
  lineHeights: [0, 16, 20, 24, 28, 32, 40, 52, 64, 84].map(p => rem(p)),
  palette,
  reset: () => {
    return {
      border: 0,
      font: 'inherit',
      fontSize: '100%',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline',
    }
  },
  semanticColors,
  shadows,
  /* tslint:disable:object-literal-sort-keys */
  space: {
    none: 0,
    xsmall: rem(4),
    small: rem(8),
    medium: rem(16),
    large: rem(20),
    xlarge: rem(32),
    xxlarge: rem(40),
    xxxlarge: rem(60),
  },
  /* tslint:enable:object-literal-sort-keys */
  spacing,
  transitions,
}

export default theme
