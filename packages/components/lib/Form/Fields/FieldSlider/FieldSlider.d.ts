import React from 'react';
import type { SliderProps } from '../../Inputs/Slider';
import type { FieldProps } from '../Field';
export interface FieldSliderProps extends SliderProps, Omit<FieldProps, 'validationMessage'> {
}
export declare const FieldSlider: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<FieldSliderProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
