import React from 'react';
import type { ButtonGroupOrToggleBaseProps } from './ButtonSet';
export interface ButtonToggleProps extends ButtonGroupOrToggleBaseProps<string> {
    nullable?: boolean;
}
export declare const ButtonToggle: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonToggleProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
