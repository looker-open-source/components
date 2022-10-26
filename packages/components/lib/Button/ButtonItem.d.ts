import React from 'react';
import type { CompatibleHTMLProps, SpaceProps } from '@looker/design-tokens';
export interface ButtonItemProps extends SpaceProps, Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type' | 'aria-pressed'> {
    value?: string;
}
export declare const ButtonItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonItemProps & React.RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
