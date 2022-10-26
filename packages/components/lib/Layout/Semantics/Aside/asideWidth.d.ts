import type { ResponsiveValue } from '@looker/design-tokens';
export declare type AsideSizes = 'rail' | 'navigation' | 'sidebar';
export declare type AsideSizeRamp = Record<AsideSizes, string>;
export declare type AsideWidth = ResponsiveValue<AsideSizeRamp | string>;
export declare const asideSizes: AsideSizeRamp;
export declare const asideWidth: import("styled-system").styleFn;
