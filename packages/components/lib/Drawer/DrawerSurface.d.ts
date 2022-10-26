/// <reference types="react" />
import type { ResponsiveValue } from '@looker/design-tokens';
import type { DialogSizeRamp } from '../Dialog/dialogWidth';
import type { AsideSizeRamp } from '../Layout/Semantics/Aside/asideWidth';
export declare type DrawerPlacements = 'left' | 'right';
export declare type DialogDrawerWidth = ResponsiveValue<DialogSizeRamp | AsideSizeRamp | string>;
export interface DrawerSurfaceProps {
    /**
     * Specify the edge to attach the Drawer surface to - `left` or `right`
     * @default right
     */
    placement?: DrawerPlacements;
    /**
     * Explicitly specifying a width will set the Surface to be the lesser of
     * the specified width or the viewport width.
     * @default medium
     */
    width?: DialogDrawerWidth;
}
export declare const DrawerSurface: import("styled-components").StyledComponent<import("react").FC<{
    className?: string | undefined;
    id?: string | undefined;
}>, import("styled-components").DefaultTheme, {
    'aria-modal': boolean;
    role: string;
} & DrawerSurfaceProps, "role" | "aria-modal">;
