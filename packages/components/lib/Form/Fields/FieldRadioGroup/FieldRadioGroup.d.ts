import type { FC } from 'react';
import type { FieldProps } from '../Field';
import type { RadioGroupProps } from '../../Inputs/OptionsGroup';
export interface FieldRadioGroupProps extends RadioGroupProps, Omit<FieldProps, 'detail'> {
    inputsInline?: boolean;
}
export declare const FieldRadioGroup: import("styled-components").StyledComponent<FC<FieldRadioGroupProps>, import("styled-components").DefaultTheme, {}, never>;
