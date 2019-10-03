import {
  LetterSpacingProps,
  FontStyleProps,
  TextAlignProps,
} from 'styled-system'
import { FontFamilyProps } from './font_families'
import { FontSizeProps } from './font_sizes'
import { FontWeightProps } from './font_weights'
import { LineHeightProps } from './line_heights'

export {
  FontFamilies,
  FontFamilyChoices,
  FontFamilyProps,
} from './font_families'
export { FontSizes, FontSizeProps, FontSizeRamp } from './font_sizes'
export { FontWeights, FontWeightProps, FontWeightRamp } from './font_weights'
export { LineHeights, LineHeightProps, LineHeightRamp } from './line_heights'

// @TODO - Should we limit TextAlign to subset? (e.g. previous config for `align`)
// export type TextAlignments = 'left' | 'center' | 'right'
// @TODO - Should we add TextDecoration prop?

export interface TypographyProps
  extends FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    LetterSpacingProps,
    FontStyleProps,
    TextAlignProps {}
