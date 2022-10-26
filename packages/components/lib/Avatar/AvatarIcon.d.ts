import type { FC } from 'react';
import type { IconType } from '../Icon';
import type { AvatarProps } from './Avatar';
export interface AvatarIconProps extends AvatarProps {
    /**
     * Icon to display. If not sent will default to `<PersonOutline />` from Material Icons
     */
    icon?: IconType;
    /**
     * Icon fill & border color
     * @default keyFocus
     */
    color?: string;
    /**
     * Background color
     * @default background
     */
    bg?: string;
}
/**
 * Display an Avatar with the specified Icon
 */
export declare const AvatarIcon: import("styled-components").StyledComponent<FC<AvatarIconProps>, import("styled-components").DefaultTheme, {
    bg: string;
    color: string;
    size: string;
}, "color" | "size" | "bg">;
