import type { CompatibleHTMLProps, DensityRamp } from '@looker/design-tokens';
import React from 'react';
import type { FlattenSimpleInterpolation, Interpolation } from 'styled-components';
import type { ListItemColorProp, ListItemRole, ListItemStatefulProps } from './types';
export declare const listItemContentCSS: (style: FlattenSimpleInterpolation | Interpolation<unknown>) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
/**
 * @deprecated Use `listItemContentCSS` instead
 */
export declare const listItemLabelCSS: (style: FlattenSimpleInterpolation | Interpolation<unknown>) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare type ListItemContentProps = CompatibleHTMLProps<HTMLElement> & ListItemStatefulProps & ListItemColorProp & {
    cursorPointer?: boolean;
    density?: DensityRamp;
    disabled?: boolean;
    itemRole?: ListItemRole;
    /**
     * Determines if ripple effect is enabled or disabled.
     * Used primarily when parent component should handle
     * ripple effect like with NavTree.
     * @default true
     */
    ripple?: boolean;
};
export declare const ListItemContent: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<CompatibleHTMLProps<HTMLElement> & ListItemStatefulProps & ListItemColorProp & {
    cursorPointer?: boolean | undefined;
    density?: DensityRamp | undefined;
    disabled?: boolean | undefined;
    itemRole?: ListItemRole | undefined;
    /**
     * Determines if ripple effect is enabled or disabled.
     * Used primarily when parent component should handle
     * ripple effect like with NavTree.
     * @default true
     */
    ripple?: boolean | undefined;
} & React.RefAttributes<HTMLElement>>, import("styled-components").DefaultTheme, {}, never>;
