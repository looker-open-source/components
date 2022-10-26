import type { CompatibleHTMLProps, SizeLarge, SizeMedium, SizeSmall, SpaceProps } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import React from 'react';
export declare type BadgeSizes = SizeSmall | SizeMedium | SizeLarge;
declare type BadgeIntent = 'warn' | 'positive' | 'critical' | 'inform' | 'neutral' | 'key';
export interface BadgeProps extends SpaceProps, CompatibleHTMLProps<HTMLSpanElement> {
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    children: ReactNode;
    /**
     * @default key
     **/
    intent?: BadgeIntent;
    /**
     * Defines the size of Badge diameter.
     * @default medium
     */
    size?: BadgeSizes;
}
export declare const Badge: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLElement>>, import("styled-components").DefaultTheme, {
    intent: BadgeIntent;
    size: BadgeSizes;
}, "size" | "intent">;
export {};
