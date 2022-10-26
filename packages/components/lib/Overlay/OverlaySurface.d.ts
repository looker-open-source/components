import type { CompatibleHTMLProps, MaxWidthProps } from '@looker/design-tokens';
import type { Placement } from '@popperjs/core';
import type { DOMAttributes } from 'react';
import React from 'react';
export interface OverlaySurfaceProps extends CompatibleHTMLProps<HTMLElement>, MaxWidthProps {
    eventHandlers?: DOMAttributes<HTMLElement>;
    placement: Placement;
    zIndex?: number;
}
export declare const OverlaySurface: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<OverlaySurfaceProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const OverlaySurfaceContentArea: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
