import { ResponsiveValue, SpaceProps } from 'styled-system'
import { ThemedStyledProps } from 'styled-components'
import { Theme } from './theme'

export type SizeNone = 'none'
export type SizeXXSmall = 'xxsmall'
export type SizeXSmall = 'xsmall'
export type SizeSmall = 'small'
export type SizeMedium = 'medium'
export type SizeLarge = 'large'
export type SizeXLarge = 'xlarge'
export type SizeXXLarge = 'xxlarge'
export type SizeXXXLarge = 'xxxlarge'
export type SizeXXXXLarge = 'xxxxlarge'

export type ThemedProps<P> = ThemedStyledProps<P, Theme>

export type SpacingSizes =
  | SizeNone
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type LensSpaceProps = { [P in keyof SpaceProps]: ResponsiveSpacingSize }

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes> | 'auto'

export {
  LensFontSizeProps,
  FontRamp,
  RampSizes,
  ResponsiveFontSize,
} from './font_sizes'
export { LensFontWeightProps, FontWeights } from './font_weights'
export { LensLineHeightProps } from './line_heights'
export { SemanticColor, SemanticColors } from './semantic_colors'
