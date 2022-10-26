import type { LetterSpacingProps, FontStyleProps, TextAlignProps } from 'styled-system';
import type { FontFamilyProps } from './font_families';
import type { FontSizeProps } from './font_sizes';
import type { FontWeightProps } from './font_weights';
import type { LineHeightProps } from './line_heights';
export declare const densityTarget = "2.25rem";
export type { FontFamilies, FontFamilyChoices, FontFamilyFallbacks, FontFamilyProps, } from './font_families';
export type { FontSource, FontSources } from './font_sources';
export { fontFamilies } from './font_families';
export type { FontSizes, FontSizeProps, FontSizeRamp } from './font_sizes';
export type { FontWeights, FontWeightProps, FontWeightRamp, } from './font_weights';
export type { LineHeights, LineHeightProps, LineHeightRamp, } from './line_heights';
export { textDecoration } from './text_decoration';
export type { TextDecorationProps } from './text_decoration';
export { textTransform } from './text_transform';
export type { TextTransformProps } from './text_transform';
export interface TypographyProps extends FontFamilyProps, FontSizeProps, FontWeightProps, LineHeightProps, LetterSpacingProps, FontStyleProps, TextAlignProps {
}
