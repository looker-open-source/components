import {
  LetterSpacingProps,
  FontStyleProps,
  TextAlignProps,
} from 'styled-system'

import { FontFamilyProps } from '../Typography/font_families'
import { FontSizeProps } from '../Typography/font_sizes'
import { FontWeightProps } from '../Typography/font_weights'
import { LineHeightProps } from '../Typography/line_heights'

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
