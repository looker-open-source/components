import React from 'react';
import type { SpaceProps } from '@looker/design-tokens';
import type { InputProps } from '../InputProps';
import type { ValidationType } from '../../ValidationMessage';
export declare type MixedBoolean = true | false | 'mixed';
export interface CheckboxProps extends SpaceProps, Omit<InputProps, 'type' | 'checked' | 'onClick'> {
    checked?: MixedBoolean;
    validationType?: ValidationType;
}
export declare const Checkbox: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
