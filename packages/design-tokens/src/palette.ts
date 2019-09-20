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
  /** Inverted text color. */
  textInverted: string
  /** Transparent color for theme. */
  transparent: string
  /** White color for theme. */
  white: string

  primary500: string
  primary600: string
  primary700: string

  charcoal000: string
  charcoal100: string
  charcoal200: string
  charcoal300: string
  charcoal400: string
  charcoal500: string
  charcoal600: string
  charcoal700: string
  charcoal800: string
  charcoal900: string

  purple000: string
  purple100: string
  purple200: string
  purple300: string
  purple400: string
  purple500: string
  purple600: string
  purple700: string
  purple800: string
  purple900: string

  blue000: string
  blue100: string
  blue200: string
  blue300: string
  blue400: string
  blue500: string
  blue600: string
  blue700: string
  blue800: string
  blue900: string

  green000: string
  green100: string
  green200: string
  green300: string
  green400: string
  green500: string
  green600: string
  green700: string
  green800: string
  green900: string

  yellow000: string
  yellow100: string
  yellow200: string
  yellow300: string
  yellow400: string
  yellow500: string
  yellow600: string
  yellow700: string
  yellow800: string
  yellow900: string

  red000: string
  red100: string
  red200: string
  red300: string
  red400: string
  red500: string
  red600: string
  red700: string
  red800: string
  red900: string
}

/* eslint-disable sort-keys */
export const palette: Palette = {
  textInverted: '#FFFFFF',
  transparent: 'transparent',
  white: '#FFFFFF',

  primary500: '#64518A',
  primary600: '#473764',
  primary700: '#2A1B60',

  charcoal000: '#FBFBFC',
  charcoal100: '#F5F6F7',
  charcoal200: '#DEE1E5',
  charcoal300: '#C1C6CC',
  charcoal400: '#939BA5',
  charcoal500: '#707781',
  charcoal600: '#4C535B',
  charcoal700: '#343C42',
  charcoal800: '#262D33',
  charcoal900: '#262D33',

  purple000: '#F3F2FF',
  purple100: '#E8E5FF',
  purple200: '#BFB2FF',
  purple300: '#9785F2',
  purple400: '#6C43E0',
  purple500: '#4F2ABA',
  purple600: '#412399',
  purple700: '#341C7A',
  purple800: '#291661',
  purple900: '#1E1047',

  blue000: '#f7fcff',
  blue100: '#e0f2ff',
  blue200: '#bfe3ff',
  blue300: '#6fbcf7',
  blue400: '#49a9f2',
  blue500: '#0087e1',
  blue600: '#0059b2',
  blue700: '#00418c',
  blue800: '#0f2f66',
  blue900: '#08284d',

  green000: '#f2fff5',
  green100: '#e0ffe7',
  green200: '#b4fac2',
  green300: '#67e591',
  green400: '#33cc73',
  green500: '#24b25f',
  green600: '#0e8c42',
  green700: '#0b6b38',
  green800: '#08522d',
  green900: '#06381f',

  yellow000: '#FFF7E8',
  yellow100: '#FFEBC4',
  yellow200: '#FFDB96',
  yellow300: '#FFCA62',
  yellow400: '#FFB72B',
  yellow500: '#FFA800',
  yellow600: '#EF9E00',
  yellow700: '#CC8600',
  yellow800: '#A56D00',
  yellow900: '#724B00',

  red000: '#FFF2F4',
  red100: '#FFE5E9',
  red200: '#FFB8C1',
  red300: '#FF667A',
  red400: '#ED3B53',
  red500: '#CC1F36',
  red600: '#B2121F',
  red700: '#990F14',
  red800: '#730B0F',
  red900: '#52080B',
}
