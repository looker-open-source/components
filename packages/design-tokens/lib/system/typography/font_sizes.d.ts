import type { ResponsiveValue } from 'styled-system';
import type { SizeLarge, SizeMedium, SizeSmall, SizeXLarge, SizeXSmall, SizeXXLarge, SizeXXSmall, SizeXXXLarge, SizeXXXXLarge, SizeXXXXXLarge } from '../size';
export declare type FontSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge | SizeXLarge | SizeXXLarge | SizeXXXLarge | SizeXXXXLarge | SizeXXXXXLarge;
export declare type FontSizeRamp = Record<FontSizes, string>;
export interface FontSizeProps {
    /**
     * Use a @looker/components FontSizes to set font size
     */
    fontSize?: ResponsiveValue<FontSizes>;
}
