import React from 'react';
import type { SpaceProps } from '@looker/design-tokens';
import type { InputProps } from '../InputProps';
import type { ValidationType } from '../../ValidationMessage';
export interface RadioProps extends SpaceProps, Omit<InputProps, 'readOnly' | 'type' | 'checked' | 'onClick'> {
    checked?: boolean;
    validationType?: ValidationType;
}
export declare const Radio: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
