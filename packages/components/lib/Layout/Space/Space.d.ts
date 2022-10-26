import type { FlexboxProps, SpacingSizes } from '@looker/design-tokens';
import type { CommonLayoutProps } from '../utils/common';
export interface SpaceHelperProps extends CommonLayoutProps, Omit<FlexboxProps, 'alignItems' | 'display' | 'flexDirection' | 'justifyContent'> {
    /**
     * Amount of space between grid cells
     * @default medium
     */
    gap?: SpacingSizes;
    /**
     * The spacing between each pair of adjacent items is the same. The empty space before the
     * first and after the last item equals half of the space between each pair of adjacent items.
     * (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     * @default false
     */
    around?: boolean;
    /**
     * The spacing between each pair of adjacent items is the same. The first item is flush with
     * the main-start edge, and the last item is flush with the main-end edge.
     * (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     * @default false
     */
    between?: boolean;
    /**
     * The spacing between each pair of adjacent items, the main-start edge and the first item,
     * and the main-end edge and the last item, are all exactly the same.
     * (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     * @default false
     */
    evenly?: boolean;
    /**
     * reverse direction of content
     * @default false
     */
    reverse?: boolean;
    /**
     * Align items vertically within `Space`
     * @default center
     */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /**
     * Justify items horizontally within `Space`
     * NOTE: This will by overridden by any of align="stretch", evenly, reverse or between.
     * NOTE: Justification is based on flex-direction so if `reverse=true` this will be "backwards".
     * @default start
     */
    justify?: 'start' | 'center' | 'end';
}
export declare const defaultGap = "u4";
export declare const spaceCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SpaceHelperProps, import("styled-components").DefaultTheme>>;
export declare const Space: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SpaceHelperProps, never>;
