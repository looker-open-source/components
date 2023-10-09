import type { SpaceProps } from '@looker/design-tokens';
import React from 'react';
import type { InputProps } from '../InputProps';
import type { SwitchProps } from './types';
export interface ToggleSwitchProps extends SpaceProps, Omit<InputProps, 'type'>, SwitchProps {
    size?: number;
}
export declare const ToggleSwitch: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ToggleSwitchProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
