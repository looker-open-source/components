import type { CompatibleHTMLProps, SpaceProps, SizeLarge, SizeMedium, SizeSmall, SizeXSmall, SizeXXSmall } from '@looker/design-tokens';
export declare type AvatarSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export interface AvatarProps extends SpaceProps, CompatibleHTMLProps<HTMLElement> {
    className?: string;
    /**
     *  @default key
     **/
    color?: string;
    /**
     * Defines the size of the Avatar
     * @default small
     */
    size?: AvatarSizes | string;
    /**
     * Render as a button instead of a div
     * @default div
     */
    role?: 'button' | 'div';
}
export declare const avatarButtonOverrides: import("styled-components").FlattenSimpleInterpolation;
export declare const avatarCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
