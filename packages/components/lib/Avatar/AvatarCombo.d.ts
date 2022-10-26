import type { FC } from 'react';
import type { IconType } from '../Icon';
import type { AvatarUserProps } from './AvatarUser';
import type { AvatarIconProps } from './AvatarIcon';
export interface AvatarComboProps extends Omit<AvatarIconProps & AvatarUserProps, 'size'> {
    secondaryIcon: IconType;
    /**
     * Icon & border color for secondary AvatarIcon
     * @default keyFocus
     **/
    secondaryColor?: string;
    /**
     * Background for secondary AvatarIcon
     * @default background
     **/
    secondaryBg?: string;
}
export declare const AvatarCombo: import("styled-components").StyledComponent<FC<AvatarComboProps>, import("styled-components").DefaultTheme, {}, never>;
