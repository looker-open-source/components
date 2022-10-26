/// <reference types="react" />
import type { ResponsiveValue } from '@looker/design-tokens';
import type { DialogDrawerWidth } from '../Drawer/DrawerSurface';
export declare type DialogPlacementCenter = 'center';
export declare type DialogPlacementCover = 'cover';
export declare type DialogPlacementTop = 'top';
export declare type DialogPlacements = DialogPlacementCenter | DialogPlacementCover | DialogPlacementTop;
export declare const dialogPlacements: string[];
export interface DialogSurfaceProps {
    /**
     * Determines how Surface is positioned in the the viewport.
     * `center` - surface is centered horizontally and vertically above mobile breakpoint.
     *    mobile: positioned at top of window and covers entire width.
     *    width: defaults to 100% in mobile breakpoint and 37.5rem above that unless otherwise specified
     *    height: fits content unless it's explicitly specified with `height` prop
     * `cover` - positioned to cover nearly the entire window.
     *    mobile & tablet: cover the entire window.
     * `top` - vertically positioned near the top of edge of the window, horizontally centered.
     *    mobile: identical to `default` placement
     *    height: grows to fit content. Total height will keep surface a small amount from top and bottom
     *      of viewport
     *    width: default `medium` above mobile breakpoint
     * @default center
     */
    placement?: DialogPlacements;
    /**
     * Explicitly specifying a width will set the Surface to be the lesser of
     * the specified width or the viewport width.
     */
    width?: DialogDrawerWidth;
    /**
     * Explicitly specifying a height will set the Surface to be the
     * the specified height but no greater than the viewport height.
     * Default will cause the Surface to auto-size to its content, again
     * no larger than the viewport height.
     */
    height?: ResponsiveValue<string>;
}
export declare const DialogSurface: import("styled-components").StyledComponent<import("react").FC<{
    className?: string | undefined;
    id?: string | undefined;
}>, import("styled-components").DefaultTheme, {
    'aria-modal': boolean;
    role: string;
} & DialogSurfaceProps, "role" | "aria-modal">;
