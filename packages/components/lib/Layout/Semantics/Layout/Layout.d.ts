import React from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { CommonLayoutProps } from '../../utils/common';
export interface LayoutProps extends CommonLayoutProps, CompatibleHTMLProps<HTMLElement> {
    /**
     * fixed position for header and footer
     * @default false
     */
    fixed?: boolean;
    /**
     * Supports scroll
     * @default true
     */
    hasAside?: boolean;
}
export declare const Layout: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
