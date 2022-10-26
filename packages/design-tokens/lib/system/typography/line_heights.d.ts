import type { ResponsiveValue } from 'styled-system';
import type { FontSizes } from './font_sizes';
export declare type LineHeights = FontSizes;
export declare type LineHeightRamp = Record<LineHeights, string>;
export interface LineHeightProps {
    /**
     * Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height
     */
    lineHeight?: ResponsiveValue<LineHeights>;
}
