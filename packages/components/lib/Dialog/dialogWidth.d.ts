import type { SizeXSmall, SizeXXSmall, SizeSmall, SizeMedium, SizeLarge, ResponsiveValue } from '@looker/design-tokens';
export declare type DialogSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export declare type DialogSizeRamp = Record<DialogSizes, string>;
export declare type DialogWidth = ResponsiveValue<DialogSizeRamp | string>;
export declare const dialogSizes: DialogSizeRamp;
export declare const dialogWidth: import("styled-system").styleFn;
