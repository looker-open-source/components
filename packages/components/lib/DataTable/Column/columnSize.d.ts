import type { SizeSmall, SizeMedium, SizeLarge } from '@looker/design-tokens';
export declare type DataTableColumnSize = SizeSmall | SizeMedium | SizeLarge | 'auto' | 'nowrap' | number;
export declare const sizeInfersTruncate: (size: DataTableColumnSize) => boolean | 0;
export declare const columnSize: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    size?: DataTableColumnSize | undefined;
}, import("styled-components").DefaultTheme>>;
