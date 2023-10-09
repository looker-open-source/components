import type { CompatibleHTMLProps, SizeXXSmall, SizeXSmall, SizeSmall, SizeMedium, SizeLarge } from '@looker/design-tokens';
import type { StyledIconProps } from '@styled-icons/styled-icon';
import type { ReactElement } from 'react';
import React from 'react';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
export declare type IconSize = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge;
export declare type IconType = ReactElement<StyledIconProps>;
export interface IconProps extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>, SimpleLayoutProps {
    color?: string;
    /**
     * Specify the JSX.Element (often SVG) to place.
     */
    icon: IconType;
    /**
     * Explicitly specify a title for the SVG rendered by the icon.
     * NOTE: If title is not specified `aria-hidden="true"` will be applied to hide the SVG from
     * screen-readers
     * I18n recommended: content that is user visible should be treated for i18n
     */
    title?: string;
}
export declare const Icon: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, IconProps, never>;
