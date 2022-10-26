import type { SpaceHelperProps } from '../Space';
export interface GridProps extends SpaceHelperProps {
    /**
     * Number of columns to display
     * @default 2
     */
    columns?: number;
}
/**
 * Grid provides a simple implementation of the CSS Grid.
 *
 * By default `Grid` has two columns with a "medium" `gap` between grid cells and "100%" `width`
 */
export declare const Grid: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, GridProps, never>;
