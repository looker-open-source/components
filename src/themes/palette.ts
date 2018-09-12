import { white } from '../styles/colors'

/**
 * Defines color values for specific named colors. This is analogous to HTML's
 * predefined set of named colors.
 *
 * ThemePalette is one part of a two part color system, which also includes
 * SemanticColors. The values defined here can be thought of as "color slots"
 * that may be used directly by components, or as part of a SemanticColor group.
 * (The reverse should never be true, that is we should never be defining
 * Palette values by referencing SemanticColor groups.)
 *
 * This idea is borrowed directly from the Office UI Fabric component
 * implementation:
 * https://github.com/officedev/office-ui-fabric-react/wiki/Theming#what-are-theme-slots
 */
export interface Palette {
  /** White color for theme. */
  white: string
  /** Transparent color for theme. */
  transparent: string
}

export const palette: Palette = {
  transparent: 'transparent',
  white,
}
