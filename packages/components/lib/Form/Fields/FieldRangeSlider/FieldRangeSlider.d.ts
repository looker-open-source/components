import React from 'react';
import type { RangeSliderProps } from '../../Inputs/RangeSlider';
import type { FieldProps } from '../Field';
export interface FieldRangeSliderProps extends RangeSliderProps, Omit<FieldProps, 'validationMessage'> {
}
export declare const FieldRangeSlider: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<FieldRangeSliderProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
