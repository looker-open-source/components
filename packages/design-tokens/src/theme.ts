import { InterpolationValue } from 'styled-components'
import {
  defaultReset,
  Easings,
  FontFamilyChoices,
  FontSizeRamp,
  FontWeightRamp,
  LineHeightRamp,
  Palette,
  Radii,
  SemanticColors,
  Shadows,
  SpaceRamp,
  Transitions,
} from './system'

/**
 * Theme attributes shouldn't be exported as they should be consumed via `theme` rather than via
 * direct import.
 */
import {
  breakpoints,
  easings,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  palette,
  radii,
  semanticColors,
  shadows,
  space,
  transitions,
} from './tokens'

export interface Theme {
  breakpoints: string[]
  colors: { palette: Palette; semanticColors: SemanticColors }
  easings: Easings
  fontSizes: FontSizeRamp
  fontWeights: FontWeightRamp
  fonts: FontFamilyChoices
  lineHeights: LineHeightRamp
  radii: Radii
  /**
   * A function that can be overridden to return different reset css properties
   * or null to remove all resets. Most base elements in Lens implement the reset.
   */
  reset: () => InterpolationValue
  shadows: Shadows
  space: SpaceRamp
  transitions: Transitions
}

export const theme: Theme = {
  breakpoints,
  colors: { palette, semanticColors },
  easings,
  fontSizes,
  fontWeights,
  fonts: fontFamilies,
  lineHeights,
  radii,
  reset: defaultReset,
  shadows,
  space,
  transitions,
}
