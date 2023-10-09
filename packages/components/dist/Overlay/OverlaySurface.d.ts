import type { CompatibleHTMLProps, MaxWidthProps, MinWidthProps } from '@looker/design-tokens';
import type { Placement } from '@popperjs/core';
import type { CSSProperties, DOMAttributes } from 'react';
import React from 'react';
import type { OverlayArrowProps } from './OverlayArrow';
export interface OverlaySurfaceProps extends CompatibleHTMLProps<HTMLElement>, MaxWidthProps, MinWidthProps {
    eventHandlers?: DOMAttributes<HTMLElement>;
    placement: Placement;
    zIndex?: number;
    /**
     * Displays an arrow pointing toward the trigger
     */
    arrow?: boolean | Partial<OverlayArrowProps>;
    /**
     * PopperJS styles for arrow positioning
     */
    styleArrow?: CSSProperties;
}
export declare const OverlaySurface: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<OverlaySurfaceProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const OverlaySurfaceContentArea: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
