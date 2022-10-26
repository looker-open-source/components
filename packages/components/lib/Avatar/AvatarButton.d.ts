import React from 'react';
import type { IconButtonProps } from '../Button';
export declare type AvatarButtonProps = Omit<IconButtonProps, 'icon'> & {
    /**
     * `imageUrl != null`  indicates that `gravatar` feature is enabled on instance but NOT whether or not the user has
     * gravatar actually specified. Gravatar responds with transparent image if the user doesn't have a gravatar specified
     * in which case the underlying `Account` icon is visible.
     */
    imageUrl?: string | null;
};
export declare const AvatarButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Omit<IconButtonProps, "icon"> & {
    /**
     * `imageUrl != null`  indicates that `gravatar` feature is enabled on instance but NOT whether or not the user has
     * gravatar actually specified. Gravatar responds with transparent image if the user doesn't have a gravatar specified
     * in which case the underlying `Account` icon is visible.
     */
    imageUrl?: string | null | undefined;
} & React.RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
