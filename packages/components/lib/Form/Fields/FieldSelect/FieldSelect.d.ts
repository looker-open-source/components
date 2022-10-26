import React from 'react';
import type { SelectProps } from '../../Inputs/Select/Select';
import type { FloatingLabelFieldProps } from '../Field';
export interface FieldSelectProps extends FloatingLabelFieldProps, SelectProps {
}
export declare const FieldSelect: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<FieldSelectProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
