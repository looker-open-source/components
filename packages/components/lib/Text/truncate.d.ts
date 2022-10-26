export interface TruncateCSSProps {
    /** Truncate text */
    truncate?: boolean;
    /** Truncate at a specified number of lines (whole number) */
    truncateLines?: number;
}
/**
 * Helper function that allows external developers
 * to leverage `textTruncate` behavior as a CSS interpolated
 * string
 */
export declare const truncateCSS: (props: TruncateCSSProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<TruncateCSSProps, import("styled-components").DefaultTheme>>;
