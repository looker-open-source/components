import type { ReactNode } from 'react';
import React from 'react';
export declare const getPortalRoot: () => HTMLElement;
interface PortalPlacementProps {
    /**
     * How should content be positioned on screen horizontally
     * @default center
     */
    horizontal?: 'center' | 'left' | 'right';
    /**
     * How should content be positioned on screen horizontally
     * center
     */
    vertical?: 'center' | 'top' | 'bottom';
    /**
     * Enables fixed positioning on the portal.
     * Setting to false will allow content to scroll with the rest of the page.
     * @default true
     */
    fixed?: boolean;
}
export interface PortalProps extends PortalPlacementProps {
    children: ReactNode;
}
export declare const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>;
export {};
